import plugin from '../plugin.json';

const snippets = {
	reactFunctionalComponent: {
		key: 'reactFunctionalComponent',
		prefix: 'rfc',
		body: [
			"import React from 'react'",
			'',
			"import { View } from 'react-native'",
			'export default function ${1:${TM_FILENAME_BASE}}() {',
			'  return (',
			'    <View>${1:first}</View>',
			'  )',
			'}',
			'',
		],
		description: 'Creates a React Functional Component with ES7 module system',
		scope: 'typescript, typescriptreact, javascript, javascriptreact',
	},
};

class ReactPlugin {
	async init() {
		const extensions = ['js', 'jsx', 'ts', 'tsx'];
		this.insertSnippets(snippets);
	}

	async destroy() {
		// Adicione aqui a lógica de limpeza, se necessário
	}

	insertSnippets(snippets) {
		// Lógica para inserir os snippets no editor ou onde forem necessários
		// Por exemplo, pode ser adicionado ao editorManager ou a outro local relevante
		// Isso pode variar dependendo da estrutura e funcionalidade do Acode
		// Aqui, um console.log() apenas para fins de demonstração
		console.log('Snippets inseridos:', snippets);
	}
}

if (window.acode) {
	const reactPlugin = new ReactPlugin();
	acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
		reactPlugin.baseUrl = baseUrl;
		await reactPlugin.init($page, cacheFile, cacheFileUrl);
	});
	acode.setPluginUnmount(plugin.id, () => {
		reactPlugin.destroy();
	});
}
