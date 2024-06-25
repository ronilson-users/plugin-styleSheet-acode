
import plugin from '../plugin.json';


class AcodePluginSnippets {
  constructor() {
   
  }

  async init() {
   
  }

  async destroy() {
    
  }
}

// Instância do plugin e inicialização
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