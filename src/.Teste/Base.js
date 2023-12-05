import plugin from '../plugin.json'; // Importa o arquivo plugin.json
import { getCurrentFileType } from '../src/helpers/helper'; // Importa a função getFileType do arquivo helper.

import { snippets, Snippets } from '../src/snippets/snippets'; // Importa os snippets
var extraSyntaxHighlightsInstalled = null;

const { editor } = editorManager;

const { snippetManager } = ace.require('ace/snippets'); // Inicializa o snippetManager do Ace Editor
inser;
// Classe para manipular os snippets do plugin
class AcodePluginSnippets {
	constructor() {
		this.setVariables(); // Configura as variáveis
		this.initializeAutocompletion(snippets || []); // Inicializa a função de autocompletar com os snippets fornecidos ou um array vazio
		// Adicionando ouvinte para detectar mudanças no editor des
		editor.getSession().on('change', e => {
			if (e.action === 'insert') {
				const cursor = editor.getCursorPosition();

				// depois deste console eu conseguir ver o evwnto do digitar
				console.log(e);
				const line = editor.getSession().getLine(cursor.row);
				const textInserted = e.lines.join('\n'); // Texto inserido

				// Verifique o texto inserido e sugira snippets, se aplicável
				// Compare o texto inserido com os prefixos dos snippets e ofereça sugestões, se houver correspondência
				// Exiba sugestões ao usuário conforme necessário
			}
		});
	}

	// Obtém o nome do arquivo sem extensão
	setFileNameWithoutExtension() {
		const fileNameWithExtension = editorManager.activeFile.filename; // Obtém o nome do arquivo com a extensão

		const lastDotIndex = fileNameWithExtension.lastIndexOf('.'); // Encontra o índice do último ponto (.)
		return fileNameWithExtension.slice(0, lastDotIndex); // Retorna o nome do arquivo sem a extensão
		console.log(fileNameWithExtension);
	}

	// Define as variáveis para o Ace Editor
	setVariables() {
		const { variables } = snippetManager; // Obtém as variáveis do snippetManager do Ace Editor
		variables.FILE_NAME = () => {
			return this.setFileNameWithoutExtension(); // Define a variável FILE_NAME como o nome do arquivo sem a extensão

			console.log(variables);
		};
	}

	// Inicializa a funcionalidade de autocompletar
	initializeAutocompletion(snippets = []) {
		console.log('Inicializando autocompletar...'); // Console log para indicar o início da inicialização
		console.log(snippets);
		// Configura o objeto de completers para o Ace Editor
		const react_Completers = {
			getCompletions(editor, session, pos, prefix, callback) {
				const typeCurrentFile = getFileType(session); // Obtém o tipo do arquivo atual
				console.log('Tipo do arquivo atual:', typeCurrentFile); // Console log para exibir o tipo do arquivo atual
				//console.log(typeCurrentFile);

				const projectSnippets = snippets.filter(s => s.fileTypes.includes(typeCurrentFile)); // Filtra os snippets relevantes para o tipo do arquivo atual
				console.log('Snippets do projeto:', projectSnippets); // Console log para exibir os snippets relevantes

				if (projectSnippets.length > 0) {
					const completions = projectSnippets.map(snippet => {
						// Lógica para formatar os trechos de código
						const escopoSnippets = {
							// ...detalhes do snippet
						};
						return escopoSnippets; // Retorna o snippet formatado
					});
					callback(null, completions); // Chama o callback com os resultados
				} else {
					callback(null, []); // Sem snippets relevantes, retorna um array vazio
				}
			},
		};

		return react_Completers; // Retorna o objeto react_Completers configurado para a funcionalidade de autocompletar
	}

	async init($page, cacheFile, cacheFileUrl) {
		this.initializeAutocompletion(); // Inicia a funcionalidade de autocompletar
		console.log('Autocompletar iniciado!'); // Console log para indicar que a inicialização foi concluída
	}

	async destroy() {} // Método destruidor (ainda não implementado)
}

// Verifica se a variável window.acode está definida e inicializa o plugin
if (window.acode) {
	const acodePlugin = new AcodePluginSnippets(); // Cria uma instância do plugin
	acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
		acodePlugin.baseUrl = baseUrl; // Define a baseUrl do plugin
		await acodePlugin.init($page, cacheFile, cacheFileUrl); // Inicializa o plugin
		console.log('Plugin inicializado!'); // Console log para indicar que o plugin foi inicializado com sucesso
	});
	acode.setPluginUnmount(plugin.id, () => {
		acodePlugin.destroy(); // Destroi o plugin (ainda não implementado)
		console.log('Plugin destruído!'); // Console log para indicar que o plugin foi destruído
	});
}
c;
