/*
Snippets 
1

*/
export const snippets = [
	{
		prefix: 'rn-import-react',
		snippet: "import React from 'react'",
		type: 'ReactImport',
		description: 'Import React in React Native',
	},
	{
		prefix: 'rn-import-view',
		snippet: "import { View } from 'react-native'",
		type: 'ReactNativeViewImport',
		description: 'Import View component in React Native',
	},
	{
		prefix: 'rn-import-text',
		snippet: "import { Text } from 'react-native'",
		type: 'ReactNativeTextImport',
		description: 'Import Text component in React Native',
	},
	{
		prefix: 'rn-import-components',
		snippet: `import { View, Text, StyleSheet } from 'react-native'`,
		type: 'ReactNativeComponentsImport',
		description: 'Import View, Text, StyleSheet components in React Native',
	},
	{
		prefix: 'rn-functional-component',
		snippet: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ${1} = () => {
    return (
        <View style={styles.container}>
            <Text>$2</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Estilos para o container
    },
});

export default ${1};`,
		type: 'ReactNativeFunctionalComponent',
		description: 'Snippet para um componente funcional em React Native',
	},
	{
		prefix: 'rn-constant',
		snippet: 'const "${1}" = "${2}"',
		type: 'ReactNativeConstant',
		description: 'Criação de constante em React Native',
	},
	{
		prefix: 'rn-button',
		snippet: `<Button title="${1}" onPress=${2} />`,
		type: 'ReactNativeButton',
		description: 'Snippet para um componente de botão em React Native',
	},

	// Adicione mais imports conforme necessário
];
