// main.json


import plugin from '../plugin.json';
import {snippets} from '../src/snippets/snippets'
const helpers = acode.require('helpers');
const { editor } = editorManager;
const { snippetManager } = ace.require('ace/snippets'); // Inicializa o snippetManager do Ace Edito

class AcodePluginSnippets {
constructor() {
this.editor = editor; // Referência ao editor
this.snippetManager = snippetManager; // Referência ao gerenciador de snippets
this.initializeSnippetInsertion();
}

initializeSnippetInsertion() {
this.editor.getSession().on('change', (e) => {
if (e.action === 'insert') {
const cursor = this.editor.getCursorPosition();
const line = this.editor.getSession().getLine(cursor.row);
const textInserted = e.lines.join('\n'); // Texto inserido

// Verificar se o texto inserido corresponde ao trigger do snippet desejado
if (textInserted === 'triggerDoSnippet') {
// Inserir um snippet simples no editor
this.editor.getSession().insert(cursor, 'Snippet inserido!');
}

console.log(textInserted);
}
});
}

async init() {
// Lógica de inicialização, se necessário
}

async destroy() {
// Lógica de destruição, se necessário
}
}

// Inicialização do plugin
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