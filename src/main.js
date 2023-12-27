// main.js
import plugin from '../plugin.json';
import LRUCache from './cache.js';
import { reactNativeStyles } from './properties/Properties.js';
import { snippets } from './snippets/Snippets.js'

const { activeFile, editor } = editorManager;
const { snippetManager } = ace.require('ace/snippets');
const fileList = acode.require('fileList');
const list = await fileList();

// Extração de informações do arquivo atual
const FILENAME = activeFile.filename; // Obtém o nome do arquivo atual
const FILENAME_BASE = FILENAME.substring(0, FILENAME.lastIndexOf('.')); // Obtém o nome do arquivo sem extensão
const FILEPATH = activeFile.uri; // Obtém o caminho completo do arquivo
const DIRECTORY = FILEPATH ? FILEPATH.substring(FILEPATH.indexOf('::/') + 3, FILEPATH.lastIndexOf('/')) : '';
// Extrai o diretório do arquivo atual do caminho completo


// Classe AcodePluginSnippets para gerenciar os snippets no editor

class AcodePluginSnippets {
  constructor() {
    this.directoryCache = new LRUCache();
    this.editor = editor;
    this.snippetManager = snippetManager;
    this.initializeSnippetInsertion();
    this.importIntellisense();
  }

  // Inicializa a inserção de snippets no editor
  initializeSnippetInsertion() {
    this.editor.completers = [this];
  }


  // ImportIntellisense inicial
  importIntellisense() {
    list.forEach(item => {
      // Adicionando os caminhos ao LRUCache
      this.directoryCache.set(item.name, {
        url: item.url,
        path: item.path,
      });
    });



    console.log('LRUCache', path)
    // Adicionar event listener para capturar a entrada do usuário
    this.editor.on('input', () => this.searchComponent(this.editor.session));
  } // fim intellisense

  // Obtém sugestões de completar ( snippets ou styles )
  getCompletions(editor, session, pos, prefix, callback) {
    const cursor = editor.getCursorPosition();
    const line = session.getLine(cursor.row);
    const lastWord = line.substr(0, cursor.column).split(/\s+/).pop();

    // Procura por snippets que começam com a última palavra digitada
    const matchedSnippets = snippets.filter(snippet => snippet.prefix.startsWith(lastWord));

    if (matchedSnippets.length > 0 && matchedSnippets[0].prefix !== lastWord) {
      // Se há snippets correspondentes, retorna sugestões de snippets

      const suggestions = matchedSnippets.map(snippet => ({
        caption: snippet.prefix,
        value: snippet.snippet,
        meta: 'snippet',
        score: 600,
      }));

      callback(null, suggestions);
    } else {
      // Se não houver snippets correspondentes, busca por estilos de React Native

      const matchedStyles = Object.keys(reactNativeStyles).filter(style => style.startsWith(lastWord));

      if (matchedStyles.length > 0 && matchedStyles[0] !== lastWord) {
        // Se há estilos correspondentes, retorna sugestões de estilos de React Native

        const styleSuggestions = matchedStyles.map(style => ({
          caption: style,
          value: style,
          meta: 'Prop.Css RN',
          score: 600,
        }));

        callback(null, styleSuggestions);
      } else {
        // Se não houver correspondências, retorna um array vazio
        callback(null, []);
      }
    }
  } // fim getCompletions

  async init($page, cacheFile, cacheFileUrl) {
    console.log(cacheFile, cacheFileUrl);
    // Implementação da lógica de inicialização, se aplicável
  }

  // Lógica de destruição, se necessário
  async destroy() {
    // Implementação da lógica de destruição, se aplicável
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