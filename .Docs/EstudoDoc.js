import plugin from '../plugin.json'; // Importação do arquivo JSON que contém a configuração do plugin
import LRUCache from './cache.js'; // Importação de uma classe LRUCache definida em cache.js

const fsOperation = acode.require('fsOperation'); // Importação da operação de sistema de arquivos do Acode

const { editor } = editorManager; // Desestruturação para obter acesso ao objeto editor do editorManager

class PathIntellisense {
	constructor() {
		this.directoryCache = new LRUCache(); // Instância de uma cache usando a classe LRUCache
	}

	async init() {
		const self = this;

		// Adiciona um comando para resetar o cache quando o atalho "Ctrl-Shift-I" for pressionado
		editor.commands.addCommand({
			name: 'pathintellisense:reset_cache',
			description: 'Reset PathIntellisense Cache',
			bindKey: { win: 'Ctrl-Shift-I' },
			exec: this.clearCache.bind(this), // Chama o método clearCache() para limpar o cache
		});

		// Define o objeto pathAutoCompletions com método getCompletions para autocompletar caminhos de arquivos
		this.pathAutoCompletions = {
			getCompletions: async function (editor, session, pos, prefix, callback) {
				// Lógica para obter sugestões de autocompletar com base no caminho atual digitado pelo usuário
				// ... (código omitido para brevidade)
			},
		};

		// Adiciona o autocompletar de caminhos como um dos primeiros completers
		editor.completers.unshift(this.pathAutoCompletions);

		// Ativa o autocompletar após a inserção de uma barra ("/")
		editor.commands.on('afterExec', function (e) {
			if (e.command.name === 'insertstring' && (e.args === '/' || e.args.endsWith('/'))) {
				editor.execCommand('startAutocomplete');
			}
		});
	}

	// Método para limpar o cache
	clearCache() {
		this.directoryCache.resetCache();
		window.toast('Cache Cleared 🔥', 2000); // Exibe uma mensagem indicando que o cache foi limpo
	}

	// Outros métodos da classe para buscar diretórios, manipular caminhos, entre outros (explicados no código)
}

// Criação de um plugin PathIntellisense e suas funções de inicialização e remoção
if (window.acode) {
	const acodePlugin = new PathIntellisense();
	acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
		acodePlugin.baseUrl = baseUrl;
		await acodePlugin.init($page, cacheFile, cacheFileUrl);
	});
	acode.setPluginUnmount(plugin.id, () => {
		acodePlugin.destroy(); // Chama o método destroy() para desativar o plugin e remover funcionalidades
	});
}
