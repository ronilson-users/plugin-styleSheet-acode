import plugin from '../plugin.json';
import { snippets } from './snippets.js';

const editor = editorManager.editor;
const { snippetManager } = ace.require('ace/snippets');

/**
 *  Plugin React Native
 *  Snippets para React Native
 *  ImportIntellisense de Componentes
 */

class AcodePlugin {
	constructor() {
		this.editor = editor;
		this.snippetManager = snippetManager;
		this.directoryPaths = {};
	}

	async getRootFilesPaths() {
		try {
			const fileList = acode.require('fileList');
			const list = await fileList();
			for (const item of list) {
				this.directoryPaths[item.name] = {
					url: item.url,
					path: item.path,
				};
			}
		} catch (error) {
			console.error('Error fetching root file paths:', error);
		}
	}

	async init() {
		const style = document.createElement('style');
		style.id = 'helpDescription';
		style.innerHTML = `
.ace_tooltip.ace_doc-tooltip {
  display: flex !important;
   background-color: var(--secondary-color);
  color: #acacb7;
  max-width: 80%; 
  white-space: pre;
  font-size: 10px; 
  padding: 5px; 
  border-radius: 2px; 
}`;

		document.head.append(style);

		this.editor.on('change', this.handleCodeChange.bind(this));

		await this.getRootFilesPaths();

		this.insertSnippets();
		this.setupSnippets();
	}

	// Insere o completador de snippets personalizados no editor
	insertSnippets() {
		// Registrar snippets para JavaScript
		this.snippetManager.register(snippets, 'javascript');

		// Registrar snippets para JSX (React)
		this.snippetManager.register(snippets, 'jsx');

		// Registrar snippets para TypeScript
		this.snippetManager.register(snippets, 'typescript');

		// Registrar snippets para TSX (React + TypeScript)
		this.snippetManager.register(snippets, 'typescriptjsx');
	}

	setupSnippets() {
		// Adiciona o completador de snippets personalizados ao editor
		this.editor.completers.push(this);
	}

	// Obtém sugestões de autocompletar para o editor com base no prefixo
	getCompletions(editor, session, pos, prefix, callback) {
		const { activeFile } = editorManager;

		const fileExtension = activeFile.filename.split('.').pop();

		// Somente fornece sugestões se a extensão do arquivo for adequada para React Native
		const validExtensions = ['tsx', 'ts', 'js', 'jsx'];

		if (!validExtensions.includes(fileExtension)) {
			console.log('Invalid file extension. No suggestions provided.');

			return callback(null, []);
		}

		const cursor = editor.getCursorPosition();

		const line = session.getLine(cursor.row);

		const lastWord = this.getLastWord(editor);

		const matchedSnippets = snippets.filter(snippet => snippet.prefix.startsWith(lastWord));

		if (matchedSnippets.length > 0 && matchedSnippets[0].prefix !== lastWord) {
			const fileName = activeFile.filename.split('/').pop().split('.').slice(0, -1).join('.'); // Obtém o nome do arquivo sem extensão

			const suggestions = matchedSnippets.map(snippet => ({
				caption: snippet.prefix,
				snippet: snippet.snippet.replace(/FILE_NAME/g, fileName),
				meta: snippet.type,
				value: snippet.snippet.replace(/FILE_NAME/g, fileName),
				type: 'snippet',
				score: 600 || '',
				docHTML: snippet.description || '',
			}));

			if (typeof extraSyntaxHighlightsInstalled !== 'undefined' && extraSyntaxHighlightsInstalled) {
				suggestions.forEach(suggestion => (suggestion.icon = 'icon ace_completion-icon ace_snippet'));
			}

			return callback(null, suggestions);
		} else {
			console.log('No matching snippets found.');
			return callback(null, []);
		}
	}

	// Obtém a última palavra na posição do cursor no editor
	getLastWord(editor) {
		const cursor = editor.getCursorPosition();

		const line = editor.session.getLine(cursor.row);

		const words = line.substr(0, cursor.column).trim().split(/\s+/);

		return words.length ? words[words.length - 1] : '';
	}

	/// Setup ImportIntellisense

	async handleCodeChange(e) {
		const session = this.editor.session;
		const cp = this.editor.getCursorPosition();

		const mainRow = session.getValue().split('\n')[cp.row];

		const openCol = this.findTagOpening(mainRow, cp.column);

		if (openCol !== -1) {
			const tagName = this.extractTag(mainRow, openCol);

			await this.getRootFilesPaths();

			const componentSearch = await this.componentLocation(tagName);

			if (componentSearch && componentSearch.directoryForTagName) {
				await this.setupImportReactComponent(tagName, componentSearch);
			}
		}
	}

	// configure import component React Native
	async setupImportReactComponent(tagName, directory) {
		try {
			const relativePath = this.calculateRelativePath(directory.directoryForCurrentFile, directory.directoryForTagName);

			const fileExists = await this.checkIfFileExists(directory.directoryForTagName);

			if (!fileExists) {
				window.toast('Component file not found', 4000);
				return;
			}

			const componentNameWithExtension = directory.directoryForTagName.split('/').pop();

			const componentName = componentNameWithExtension.split('.').slice(0, -1).join('.');

			const relativePathWithoutExtension = relativePath.split('.').slice(0, -1).join('.');

			const importStatement = `import ${componentName} from '${relativePathWithoutExtension}';`;

			const code = this.editor.session.getValue();

			const importRegex = new RegExp(`import\\s+${componentName}\\s+from\\s+'${relativePathWithoutExtension}'`);

			if (!importRegex.test(code)) {
				const insertionPosition = this.InsertionLocation();

				this.editor.session.insert(insertionPosition, `${importStatement}\n`);

				this.closeTag();
				window.toast('The import was created at the top ☝️ successfully', 3000);
			}
		} catch (error) {
			console.error('Error in setupImportReactComponent:', error);
			window.toast('Component not found', 4000);
		}
	}

	// component location in root directory
	async componentLocation(tagName) {
		try {
			const { activeFile } = editorManager;

			// Current File Name
			const currentFileName = activeFile.filename || '';

			const extensions = ['.tsx', '.ts', '.js'];
			let targetPath;

			for (const ext of extensions) {
				targetPath = this.directoryPaths[tagName + ext];
				if (targetPath) break;
			}

			const currentFilePath = this.directoryPaths[currentFileName];

			return {
				directoryForTagName: targetPath ? targetPath.path : null,
				directoryForCurrentFile: currentFilePath ? currentFilePath.path : null,
			};
		} catch (error) {
			console.error('Error finding cache path for tagName:', error);
			return {
				directoryForTagName: null,
				directoryForCurrentFile: null,
			};
		}
	}

	// check if the file exists
	async checkIfFileExists(path) {
		try {
			const fileList = acode.require('fileList');
			const list = await fileList();
			return list.some(item => item.path === path);
		} catch (error) {
			console.error('Error checking if file exists:', error);
			return false;
		}
	}

	// handle tag opening ,find tag opening
	findTagOpening(row, column) {
		for (let n = column; n >= 0; n--) {
			if (row[n] === '<') {
				return n;
			}
		}
		return -1;
	}

	extractTag(row, openCol) {
		let tagName = '';
		let closeTag = false;
		for (let i = openCol + 1; i < row.length; i++) {
			if (row[i] === ' ' || row[i] === '>') {
				if (closeTag) {
					tagName += '>';
				}
				break;
			}
			if (row[i] === '<') {
				closeTag = true;
			}
			tagName += row[i];
		}
		return tagName;
	}

	closeTag() {
		const cp = this.editor.getCursorPosition();
		this.editor.session.insert(cp, ' />\n');
	}

	// find the insertion position
	InsertionLocation() {
		return { row: 0, column: 0 };
	}

	calculateRelativePath(currentDirectory, targetDirectory) {
		const currentPathParts = currentDirectory.split('/');

		const targetPathParts = targetDirectory.split('/');

		let commonPathLength = 0;

		while (
			commonPathLength < currentPathParts.length &&
			commonPathLength < targetPathParts.length &&
			currentPathParts[commonPathLength] === targetPathParts[commonPathLength]
		) {
			commonPathLength++;
		}

		let relativePath = '';

		if (commonPathLength === currentPathParts.length - 1 && commonPathLength === targetPathParts.length - 1) {
			relativePath = './' + targetPathParts[targetPathParts.length - 1];
		} else {
			for (let i = commonPathLength; i < currentPathParts.length - 1; i++) {
				relativePath += '../';
			}

			if (!relativePath.startsWith('./') && !relativePath.startsWith('../')) {
				relativePath = './' + relativePath;
			}

			for (let i = commonPathLength; i < targetPathParts.length; i++) {
				relativePath += targetPathParts[i] + '/';
			}

			if (relativePath.endsWith('/')) {
				relativePath = relativePath.slice(0, -1);
			}
		}
		return relativePath;
	}

	async destroy() {
		this.editor.off('change', this.handleCodeChange);
		// Clean up if necessary
	}
}

if (window.acode) {
	const acodePlugin = new AcodePlugin();
	acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
		await acodePlugin.init(baseUrl, $page, cacheFileUrl, cacheFile);
	});
	acode.setPluginUnmount(plugin.id, () => {
		acodePlugin.destroy();
	});
}
