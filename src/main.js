import plugin from '../plugin.json';
import style from './Styles/styles.css'
class ReactAutocompletePlugin {
	async fetch() {
		// Lógica para obter as classes do React utilizando StyleSheet
		// Substitua esta lógica pela sua implementação para buscar as classes

		console.log('ronilson');
	}

	async completion(classes) {
		const completion = {
			getCompletions: (editor, session, pos, prefix, callback) => {
				if (session.getMode().$id === 'ace/mode/javascript') {
					let line = session.getLine(pos.row).substr(0, pos.column);

					if (line.includes('className=')) {
						callback(
							null,
							classes.map(word => ({
								caption: word,
								value: word,
								meta: 'React',
							})),
						);
						return;
					}
				}

				callback(null, []);
			},
		};

		editorManager.editor.completers.unshift(completion);
	}

	async init(cache) {
		this.file = cache.cacheFile;
		this.style = document.createElement('style');
		this.style.textContent = style;
		document.head.appendChild(this.style);

		const reactClasses = await this.file.readFile('utf8');

		if (!reactClasses) {
			const classes = await this.fetch();
			await this.file.writeFile(JSON.stringify(classes));
			this.completion(classes);
			return;
		}

		this.completion(JSON.parse(reactClasses));
	}

	async destroy() {
		this.completion([]);
	}
}

if (window.acode) {
	acode.setPluginInit(plugin.id, (url, page, cache) => new ReactAutocompletePlugin().init(cache));
	acode.setPluginUnmount(plugin.id, () => new ReactAutocompletePlugin().destroy());
}
