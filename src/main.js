

import plugin from '../plugin.json';
import { snippets } from '../src/snippets/snippets';
// $1 const helpers = acode.require('helpers');
// $1 const fsOperation = acode.require('fsOperation');
const { editor } = editorManager;
const { snippetManager } = ace.require('ace/snippets');
// Inicializa o snippetManager do Ace Editor
let extraSyntaxHighlightsInstalled = true;

class AcodePluginSnippets {
  constructor() {
    this.editor = editor;
    this.snippetManager = snippetManager;
    this.initializeSnippetInsertion();
  }

  initializeSnippetInsertion() {
    this.editor.completers = [this];
  }

  getCompletions(editor, session, pos, prefix, callback) {
    const cursor = editor.getCursorPosition();
    const line = session.getLine(cursor.row);
    const lastWord = line.substr(0, cursor.column).split(/\s+/).pop();

    const matchedSnippets = snippets.filter(snippet => snippet.prefix.startsWith(lastWord));

    if (matchedSnippets.length > 0 && matchedSnippets[0].prefix !== lastWord) {
      const suggestions = matchedSnippets.map(snippet => {
        return {
          caption: snippet.prefix,
          value: snippet.snippet,
          meta: "snippet"
        };
      });
      callback(null, suggestions);
    } else {
      callback(null, []);
    }
  }

async init() {
		// Lógica de inicialização, se necessário
	}

	async destroy() {
		// Lógica de destruição, se necessário
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