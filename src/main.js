import plugin from "../plugin.json";
import LRUCache from './cache.js';


const fsOperation = acode.require("fsOperation");
const { editor } = editorManager;

const fileList = acode.require('fileList');

const list = await fileList();

list.forEach((item) => {
  console.log(item.root);
});


class AcodeAutoImport {
  constructor() {
    this.diretorioCache = new LRUCache(50);
    this.baseUrl = ''; // Defina a baseURL se necessário
  }




  async init($page, { cacheFileUrl, cacheFile }) {
    if (!this.baseUrl.endsWith('/')) {
      this.baseUrl += '/';
    }
    this.diretorioCache.set('cacheFileUrl', cacheFileUrl);

    // Exemplo de console.log para depuração
    console.log('AcodeAutoImport iniciado.');
    console.log('this.baseUrl:', this.baseUrl);
    console.log('cacheFileUrl armazenado na cache:', this.diretorioCache.get('cacheFileUrl'));

    // Outras operações de inicialização do componente
  }

  async destroy() {
    // Operações de destruição do componente
    this.diretorioCache.resetCache();

    // Exemplo de console.log para depuração
    console.log('AcodeAutoImport destruído. Cache limpa.');
  }
}

// Verifica se o objeto 'acode' existe no contexto atual (provavelmente o ambiente do Acode)
if (window.acode) {
  const acodePlugin = new AcodeAutoImport();

  acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    acodePlugin.baseUrl = baseUrl;
    await acodePlugin.init($page, { cacheFileUrl, cacheFile });
  });

  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}