// src/main.js
import plugin from '../plugin.json';

class ReactPlugin {
  async init() {
    // Adicione lógica para detectar o início da constante styles
    this.detectStylesDeclaration();
  }

  async destroy() {
    // Adicione lógica de limpeza, se necessário.
  }

  detectStylesDeclaration() {
    // Expressão regular para encontrar o início da constante styles
    const stylesDeclarationRegex = /\bconst\s+styles\s*=\s*StyleSheet\.create\s*\({/;

    // Verifique se a expressão regular corresponde ao código da página
    const isStylesDeclarationPresent = stylesDeclarationRegex.test(document.body.innerText);

    if (isStylesDeclarationPresent) {
      console.log('Encontrado o início da constante styles.');
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