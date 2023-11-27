// src/main.js
import plugin from '../plugin.json';

class ReactPlugin {
	async init() {
		this.detectStylesDeclaration();
	}

	async destroy() {
		// Adicione aqui a lógica de limpeza, se necessário
	}

	detectStylesDeclaration() {
		let stylesDeclaration = '';
		let stylesExist = false;
		let fileExtension = '';

		// Obtendo a extensão do arquivo
		if (window.location.href.endsWith('.js')) {
			fileExtension = 'js';
			console.log('arquivo js');
		} else if (window.location.href.endsWith('.jsx')) {
			fileExtension = 'jsx';
		} else if (window.location.href.endsWith('.ts')) {
			fileExtension = 'ts';
		}

		// Realizando a lógica apenas para os arquivos JavaScript, JavaScript React e TypeScript
		if (fileExtension === 'js' || fileExtension === 'jsx' || fileExtension === 'ts') {
			// Percorre todos os scripts do documento

			const scripts = document.getElementsByTagName('script');
			Array.from(scripts).forEach(script => {
				// Verifica se o script é do tipo adequado

				if (
					(fileExtension === 'js' && !script.src && !script.type) ||
					(fileExtension === 'jsx' && script.type === 'text/babel') ||
					(fileExtension === 'ts' && script.type === 'application/typescript')
				) {
					// Encontra a linha que importa o StyleSheet do react-native
					if (script.innerText.includes("import { StyleSheet } from 'react-native';")) {
						stylesExist = true;
						// Obtém o conteúdo do script
						const scriptContent = script.innerText;

						// Encontra a declaração da constante styles dentro do script
						const matches = scriptContent.match(/const\s+styles\s*=\s*StyleSheet\.create\s*\({[^}]+}\);/);
						if (matches) {
							stylesDeclaration = matches[0];
						}
					}
				}
			});

			if (stylesExist) {
				if (stylesDeclaration) {
					console.log('A constante styles foi encontrada no início.');
					// Faça o que for necessário quando a declaração de styles for encontrada
				} else {
					console.log('A importação do StyleSheet foi encontrada, mas a constante styles não foi declarada.');
					// Adicione aqui a lógica para criar a constante styles
				}
			} else {
				console.log('A importação do StyleSheet não foi encontrada.');
			}
		} else {
			console.log('Ox arquivo não é JavaScript, JavaScript React ou TypeScript.');
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
