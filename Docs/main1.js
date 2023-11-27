import plugin from '../plugin.json';

class ReactPlugin {
	async init() {}

	async destroy() {}
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
