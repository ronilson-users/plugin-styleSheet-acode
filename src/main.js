// Importação do plugin e módulos necessários
import plugin from '../plugin.json';
import { reactNativeStyles } from '../src/properties/Properties';
import { snippets } from '../src/snippets/Snippets';

// Inicialização das variáveis editor e snippetManager
const { editor } = editorManager;
const { snippetManager } = ace.require('ace/snippets');

// Classe AcodePluginSnippets para gerenciar os snippets no editor
class AcodePluginSnippets {
constructor() {
this.editor = editor;
this.snippetManager = snippetManager;
this.initializeSnippetInsertion();
}

// Inicializa a inserção de snippets no editor
initializeSnippetInsertion() {
this.editor.completers = [this];
}

// Obtém sugestões de completar (snippets ou estilos)
getCompletions(editor, session, pos, prefix, callback) {
const cursor = editor.getCursorPosition();
const line = session.getLine(cursor.row);
const lastWord = line.substr(0, cursor.column).split(/\s+/).pop();

// Procura por snippets que começam com a última palavra digitada
const matchedSnippets = snippets.filter(snippet => snippet.prefix.startsWith(lastWord));

if (matchedSnippets.length > 0 && matchedSnippets[0].prefix !== lastWord) {
// Se há snippets correspondentes, retorna sugestões de snippets
const suggestions = matchedSnippets.map(snippet => {
return {
caption: snippet.prefix,
value: snippet.snippet,
meta: "snippet"
};
});
callback(null, suggestions);
} else {
// Se não houver snippets correspondentes, busca por estilos de React Native
const matchedStyles = Object.keys(reactNativeStyles).filter(style => style.startsWith(lastWord));
if (matchedStyles.length > 0 && matchedStyles[0] !== lastWord) {
// Se há estilos correspondentes, retorna sugestões de estilos de React Native
const styleSuggestions = matchedStyles.map(style => {
return {
caption: style,
value: style,
meta: "Prop. Css RN"
};
});
callback(null, styleSuggestions);
} else {
// Se não houver correspondências, retorna um array vazio
callback(null, []);
}
}
}

// Lógica de inicialização, se necessário
async init() {
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