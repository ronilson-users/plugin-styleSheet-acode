// src/main.js
import plugin from '../plugin.json';

class ReactPlugin {
  async init() {
    // Adicione lógica para detectar o início da constante styles
    this.detecImport();
  }

  async destroy() {
    // Adicione lógica de limpeza, se necessário.
  }

  detectImport() {
   // Expressão regular para encontrar a importação do StyleSheet
const importRegex = /import\s+\{ StyleSheet \}\s+from\s+'react-native';/;


    // Verifique se a expressão regular corresponde ao código da página
    const isImportPresent = stylesDeclarationRegex.test(document.body.innerText);

    if (isImportPresent) {
      console.log('Encontrado o import contendo StyleSheet.');
      // Adicione aqui a lógica para oferecer sugestões ou realizar ações relacionadas ao início de styles
    } else {
      console.log('A constante styles não foi encontrada no início.');
    }
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
