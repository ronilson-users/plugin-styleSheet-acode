//scr/snippets.js
export const Snippets = [];

export const snippets = [
	{
		prefix: 'imr',
		snippet: "import React from 'react'",
		type: 'ImportReact',
		fileTypes: ['jsx', 'js'],
	},

	{
		prefix: 'imp',
		snippet: "import ${2:Name} from '${1:first}'",
		type: 'Import',
		fileTypes: ['jsx', 'js'],
	},

	{
		prefix: 'exp',
		snippet: 'export default ${1:first}',
		type: 'ExportDefault',
		fileTypes: ['jsx', 'js'],
	},
	{
		prefix: 'exd',
		snippet: "export { ${2:second} } from '${1:first}'",
		type: 'ExportDestructing',
		fileTypes: ['jsx', 'js'],
	},
	{
		prefix: 'exa',
		snippet: "export { ${2:second} as ${3:third} } from '${1:first}'",
		type: 'ExportAs',
		fileTypes: ['jsx', 'js'],
	},
	{
		prefix: 'enf',
		snippet: 'export const ${1:first} = (${2:second}) => {${3:third}}',
		type: 'ExportNamedFunction',
		description: 'Export named function',
		fileTypes: ['jsx', 'js'],
	},
	{
		prefix: 'edf',
		snippet: 'export default (${1:first}) => {${2:second}}',
		type: 'ExportDefaultFunction',
		description: 'Export default function',
		fileTypes: ['jsx', 'js'],
	},
	// Novos snippets adicionados
	{
		prefix: 'log',
		snippet: 'console.log(${1:message});',
		type: 'Log',
		description: 'Console log',
		fileTypes: ['js', 'jsx', 'ts', 'js'],
	},
	{
		prefix: 'cmt',
		snippet: '// ${1:Comment}',
		type: 'Comment',
		description: 'Single-line comment',
		fileTypes: ['js', 'jsx', 'ts', 'js'],
	},
	{
		prefix: 'for',
		snippet: 'for (let ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {\n\t$0\n}',
		type: 'ForLoop',
		description: 'For loop',
		fileTypes: ['js', 'jsx', 'ts'],
	},
	{
		prefix: 'if',
		snippet: 'if (${1:condition}) {\n\t$0\n}',
		type: 'IfStatement',
		description: 'If statement',
		fileTypes: ['js', 'jsx', 'ts'],
	},
	{
		prefix: 'else',
		snippet: 'else {\n\t$0\n}',
		type: 'ElseStatement',
		description: 'Else statement',
		fileTypes: ['js', 'jsx', 'ts'],
	},
	{
		prefix: 'rnfunc',
		snippet: `import React from 'react';
import { View, Text } from 'react-native';

const $1 = () => {
return (
<View>
<Text>$2</Text>
</View>
);
};

export default $1;`,
		type: 'ReactNativeFunctionalComponent',
		description: 'Snippet para um componente funcional em React Native',
		fileTypes: ['jsx', 'js'],
	},
	{
		prefix: 'rncomp',
		snippet: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const $1 = () => {
return (
<View style={styles.container}>
<Text style={styles.text}>Seu texto aqui</Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
// Estilos para o container
},
text: {
// Estilos para o texto
},
});

export default $1;`,
		type: 'ReactNativeComponent',
		description: 'Snippet para um componente React Native com StyleSheet',
		fileTypes: ['jsx', 'js'],
	},

	// Adicionar mais snippets aqui, conforme necessário
];
