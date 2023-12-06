import plugin from '../plugin.json';

var extraSyntaxHighlightsInstalled = null;

const { editor } = editorManager;

const { snippetManager } = ace.require('ace/snippets'); // Inicializa o snippetManager do Ace Editor

class AcodePluginSnippets {
	constructor() {}

	async init() {}

	async destroy() {}
}

if (window.acode) {
	const acodePlugin = new AcodePluginSnippets();
	acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
		acodePlugin.baseUrl = baseUrl;
		await acodePlugin.init($page, cacheFile, cacheFileUrl);
	});
	acode.setPluginUnmount(plugin.id, () => {
		acodePlugin.destroy();
	});
}
