/*
Construção de Snippets para REACT NATIVE
*/
export const snippets = [
	// 	import React NAtive
	{
		prefix: 'imr-import-React',
		snippet: "import React from 'react';",
		type: 'snippet RN',
		description: 'Import React in React Native',
	},
	{
		prefix: 'im-import',
		snippet: "import { ${1:component} } from 'react-native';",
		type: 'snippet RN',
		description: 'Import from React Native',
	},
	{
		prefix: 'im-useState',
		snippet: "import { useState } from 'react';",
		type: 'snippet RN',
		description: 'Import useState from React',
	},
	{
		prefix: 'im-useEffect',
		snippet: "import { useEffect } from 'react';",
		type: 'snippet RN',
		description: 'Import useEffect from React',
	},
	{
		prefix: 'im-navigation',
		snippet: "import { NavigationContainer } from '@react-navigation/native';",
		type: 'snippet RN',
		description: 'Import NavigationContainer from React Navigation',
	},
	{
		prefix: 'im-stack',
		snippet: "import { createStackNavigator } from '@react-navigation/stack';",
		type: 'snippet RN',
		description: 'Import createStackNavigator from React Navigation Stack',
	},
	{
		prefix: 'im-styleSheet',
		snippet: "import { StyleSheet } from 'react-native';",
		type: 'snippet RN',
		description: 'Import StyleSheet from React Native',
	},
	{
		prefix: 'im-text',
		snippet: "import { Text } from 'react-native';",
		type: 'snippet RN',
		description: 'Import Text from React Native',
	},
	{
		prefix: 'im-view',
		snippet: "import { View } from 'react-native';",
		type: 'snippet RN',
		description: 'Import View from React Native',
	},
	{
		prefix: 'im-button',
		snippet: "import { Button } from 'react-native';",
		type: 'snippet RN',
		description: 'Import Button from React Native',
	},
	{
		prefix: 'im-r',
		snippet: "import React from 'react';",
		type: 'snippet RN',
		description: 'Import React in React Native',
	},
	{
		prefix: 'im-all',
		snippet: "import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';",
		type: 'snippet RN',
		description: 'Import common components and StyleSheet from React Native',
		score: 600,
	},

	// Default component

	{
		prefix: 'rn-component-AsyncStorage',
		snippet: ` import AsyncStorage from '@react-native-async-storage/async-storage';
// npm package

const storeData = async (value) => {
try {
await AsyncStorage.setItem('@storage_Key', value);
} catch (e) {
// saving error
}
};

const getData = async () => {
try {
const value = await AsyncStorage.getItem('@storage_Key');
if(value !== null) {
// value previously stored
}
} catch(e) {
// error reading value
}
};

`,
		type: 'snippet Dev.',
		description: 'AsyncStorage component',
	},

	{
		prefix: 'rn-export-default-function',
		snippet: `import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function  \${1:FILE_NAME}()  {
return (
<View style={styles.container}>
<Text>Welcome to React Native!</Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
});
`,
		type: 'snippet RN',
		description: 'Export functional component with styles.',
		score: 600,
	},

	// Component Export Default
	{
		prefix: 'rn-default-component',
		snippet: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const \${1:FILE_NAME} = () => {
return (
<View style={styles.container}>
<Text>Hello, World!</Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
//
});

export default $1;
`,
		type: 'snippet RN',
		description: 'Basic functional component with styles.',
		score: 600,
	},

	// Use useState
	{
		prefix: 'rn-usestate',
		snippet: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter$1 = () => {
const [count, setCount] = useState(0);

return (
<View>
<Text>{count}</Text>
<Button title="Increment" onPress={() => setCount(count + 1)} />
</View>
);
};

export default Counter$1;
`,
		type: 'snippet RN',
		description: 'Component with useState for state management.',
		score: 600,
	},
	// Use useEffect
	{
		prefix: 'rn-useeffect',
		snippet: `import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const FetchData$1 = () => {
const [data, setData] = useState(null);

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(json => setData(json));
}, []);

return (
<View>
{data ? <Text>{data.title}</Text> : <Text>Loading...</Text>}
</View>
);
};

export default FetchData$1;
`,
		type: 'snippet RN',
		description: 'Component with useEffect to perform a fetch request.',
		score: 600,
	},
	// Navigation with React Navigation
	{
		prefix: 'rn-navigation',
		snippet: `import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';

const HomeScreen$1 = ({ navigation }) => {
return (
<View>
<Text>Home Screen</Text>
<Button
title="Go to Details"
onPress={() => navigation.navigate('Details')}
/>
</View>
);
};

const DetailsScreen$2 = () => {
return (
<View>
<Text>Details Screen</Text>
</View>
);
};

const Stack = createStackNavigator();

const App$3 = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};

export default App$3;
`,
		type: 'snippet RN',
		description: 'Example of navigation with React Navigation.',
		score: 600,
	},
	// Styling in React Native
	{
		prefix: 'rn-styles',
		snippet: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyledComponent$1 = () => {
return (
<View style={styles.container}>
<Text style={styles.text}>Hello, World with Styles!$2</Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f0f0f0',
},
text: {
color: '#333',
fontSize: 20,
},
});

export default StyledComponent$1;
`,
		type: 'snippet RN',
		description: 'Component with styles in React Native.',
		score: 600,
	},
	// Handling Text with TextInput
	{
		prefix: 'rn-textinput',
		snippet: `import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputComponent$1 = () => {
const [text$2, setText$3] = useState('');

return (
<View style={styles.container}>
<TextInput
style={styles.input}
placeholder="Type something..."
onChangeText={setText}
value={text}
/>
<Text>{text}</Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
padding: 20,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
paddingHorizontal: 10,
},
});

export default InputComponent$1;
`,
		type: 'snippet RN',
		description: 'Component with TextInput for text input.',
		score: 600,
	},
	// FlatList Component
	{
		prefix: 'rn-flatlist',
		snippet: `import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = [
{ id: '1', title: 'Item 1' },
{ id: '2', title: 'Item 2' },
{ id: '3', title: 'Item 3' },
];

const Item$1 = ({ title }) => (
<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
</View>
);

const MyList$2 = () => {
return (
<FlatList
data={DATA}
renderItem={({ item }) => <Item title={item.title} />}
keyExtractor={item => item.id}
/>
);
};

const styles = StyleSheet.create({
item: {
backgroundColor: '#f9c2ff',
padding: 20,
marginVertical: 8,
marginHorizontal: 16,
},
title: {
fontSize: 32,
},
});

export default MyList$2;
`,
		type: 'snippet RN',
		description: 'Component with FlatList for rendering a list.',
		score: 600,
	},
	// Button Component
	{
		prefix: 'rn-button-compoment',
		snippet: `import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const MyButton$1 = () => {
return (
<View style={styles.container}>
<Button
title="Press me"
onPress={() => alert('Button pressed!')}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
});

export default MyButton$1;
`,
		type: 'snippet RN',
		description: 'Simple component with a Button.',
		score: 600,
	},
	// ScrollView Component
	{
		prefix: 'rn-scrollview',
		snippet: `import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const MyScrollView$1 = () => {
return (
<ScrollView style={styles.container}>
<Text style={styles.text}>Scroll me!</Text>
<Text style={styles.text}>More content...</Text>
<Text style={styles.text}>Even more content...</Text>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
text: {
fontSize: 18,
marginVertical: 10,
},
});

export default MyScrollView$1;
`,
		type: 'snippet RN',
		description: 'Component with ScrollView for scrollable content.',
		score: 600,
	},
	// Image Component
	{
		prefix: 'rn-image-component',
		snippet: `import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const MyImage$1 = () => {
return (
<View style={styles.container}>
<Image
source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
style={styles.image}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
image: {
width: 50,
height: 50,
},
});

export default MyImage$1;
`,
		type: 'snippet RN',
		description: 'Component with an Image.',
		score: 600,
	},
	// Text

	{
		prefix: 'rn-image',
		snippet: ` <View style={styles.container}>
<Image
source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
style={styles.image}
/>`,
		type: 'snippet Dev.',
		description: 'Adicionar estilo nomeSn para um componente',
	},

	//Text
	{
		prefix: 'Text',
		snippet: `<Text>Welcome to React Native!$1</Text>`,
		type: 'snippet Dev.',
		description: 'Create Text',
	},

	// Hooks
	{
		prefix: 'rn-usestate-hook',
		snippet: `const [$1, set$2] = useState($3);`,
		type: 'snippet RN',
		description: 'Criar um snippet para o hook useState',
	},

	{
		prefix: 'rn-useeffect-hook',
		snippet: 'useEffect(() => { $1 \n \n }, [$2]);',
		type: 'snippet RN',
		description: 'Criar um snippet para o hook useEffect',
	},
	// Componentes Personalizados
	{
		prefix: 'rn-custom-component',
		snippet: `const $1 = () => {
     return (
        <View>
        {/* Seu componente personalizado aqui */}
        </View>
        );
     };`,
		type: 'snippet RN',
		description: 'Creat snippetfrom  component personalized',
	},
	// ReactNativeStyleSnippet
	{
		prefix: 'style',
		snippet: 'style={styles.$1}',
		type: 'snippet RN',
		description: 'Add style in React Native  StyleSheet',
	},

	/*
   logs
 */

	// Simple log
	{
		prefix: 'clg',
		snippet: `console.log($1);`,
		type: 'snippet log',
		description: 'Simple console log',
	},
	// Formatted string log
	{
		prefix: 'clg-f',
		snippet: 'console.log(`$1:`, $1);',
		type: 'snippet log',
		description: 'Formatted string console log',
	},

	// Object log
	{
		prefix: 'clg-o',
		snippet: "console.log('$1', $1);",
		type: 'snippet log',
		description: 'Object console log',
	},
	// Error log
	{
		prefix: 'clg-e',
		snippet: 'console.error($1);',
		type: 'snippet log',
		description: 'Error console log',
	},
	// Warning log
	{
		prefix: 'clg-w',
		snippet: 'console.warn($1);',
		type: 'snippet log',
		description: 'Warning console log',
	},
	// Info log
	{
		prefix: 'clg-i',
		snippet: 'console.info($1);',
		type: 'snippet log',
		description: 'Info console log',
	},
	// Time log
	{
		prefix: 'clg-t',
		snippet: "console.time('$1');\n$2\nconsole.timeEnd('$1');",
		type: 'snippet log',
		description: 'Time console log',
	},
	// Table log for array of objects
	{
		prefix: 'clg-tb',
		snippet: 'console.table($1);',
		type: 'snippet log',
		description: 'Table console log for array of objects',
	},
	// Snippets Express
	{
		prefix: 'exp-create-app',
		snippet: 'const app = express();',
		type: 'snippet Express',
		description: 'Criar uma instância do Express',
	},

	{
		prefix: 'exp-basic-route',
		snippet: 'app.get("/", (req, res) => {\n  res.send("Hello, World!");\n});',
		type: 'snippet Express',
		description: 'Definir uma rota básica',
	},

	{
		prefix: 'exp-param-route',
		snippet: 'app.get(":id", (req, res) => {\n  const { id } = req.params;\n  res.send(`ID: ${id}`);\n});',
		type: 'snippet Express',
		decription: 'Definir uma rota com parâmetros',
	},

	{
		prefix: 'exp-delete-route',
		snippet: "${1:router}.delete('/${2:path}', (req, res) => {\n  $3\n});",
		type: 'snippet Express',
		decription: 'Definir rota DELETE no Express',
	},

	{
		prefix: 'exp-post-route',
		snippet: "app.post('/${1:path}', (req, res) => {\n  ${2:const data = req.body;}\n  res.send(${3:response});\n});",
		type: 'snippet Express',
		decription: 'Definir rota POST no Express',
	},

	{
		prefix: 'exp-put-route',
		snippet: "app.put('/${1:path}', (req, res) => {\n  ${2:const data = req.body;}\n  res.send(${3:response});\n});",
		type: 'snippet Express',
		decription: 'Definir rota PUT no Express',
	},

	{
		prefix: 'exp-middleware',
		snippet: "app.use((req, res, next) => {\n  console.log('Time:', Date.now());\n  next();\n});",
		type: 'snippet Express',
		decription: 'Exemplo de middleware',
	},

	{
		prefix: 'exp-404',
		snippet: "app.use((req, res, next) => {\n  res.status(404).send('Sorry, we could not find that!');\n});",
		type: 'snippet Express',
		decription: 'Lidar com erros 404',
	},

	{
		prefix: 'exp-error-handler',
		snippet:
			"app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});",
		type: 'snippet Express',
		decription: 'Manipulador global de erros',
	},

	{
		prefix: 'exp-start-server',
		snippet: "app.listen(${1:3000}, () => {\n  console.log('Server is running on port ${1:3000}');\n});",
		type: 'snippet Express',
		decription: 'Iniciar o servidor',
	},

	// TouchableOpacity
	{
		prefix: 'TouchableOpacity',
		snippet: '<TouchableOpacity onPress={$1}>\n  $2\n</TouchableOpacity>',
		type: 'snippet RN',
		description: 'Create TouchableOpacity in React Native',
	},
	// SafeAreaView
	{
		prefix: 'SafeAreaView',
		snippet: '<SafeAreaView style={$1}>\n  $2\n</SafeAreaView>',
		type: 'snippet RN',
		description: 'Create SafeAreaView in React Native',
	},

	// FlatList
	{
		prefix: 'FlatList',
		snippet: `<FlatList
data={$1}
renderItem={({ item }) => ($2)}
keyExtractor={(item) => item.id.toString()}
/>`,
		type: 'snippet RN',
		description: 'Create FlatList in React Native',
	},

	// ScrollView
	{
		prefix: 'ScrollView',
		snippet: '<ScrollView style={$1}>\n  $2\n</ScrollView>',
		type: 'snippet RN',
		description: 'Create ScrollView in React Native',
	},

	// TextInput
	{
		prefix: 'TextInput',
		snippet: `<TextInput style={styles.$1}\n
    onChangeText={(text) => $2}
    value={$3}
/>
// tab `,
		type: 'snippet RN',
		description: 'Create TextInput in React Native',
	},

	// Pressable
	{
		prefix: 'rn-pressable',
		snippet: '<Pressable onPress={$1}>\n  $2\n</Pressable>',
		type: 'snippet RN',
		description: 'Create Pressable in React Native',
	},

	// View
	{
		prefix: 'rn-view',
		snippet: '<View $1>\n  $2\n</View>',
		type: 'snippet RN',
		description: 'Create View in React Native',
	},

	// Button
	{
		prefix: 'rn-button',
		snippet: `      <Button
title="Press me"
onPress={() => alert('Button pressed!')}
/>`,
		type: 'snippet Dev.',
		description: 'Create Button Simple',
	},

	// Style Import
	{
		prefix: 'rn-export-styles',
		snippet: `import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    componentNme$1: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    text: {
     color: '#FFFFFF',
     fontSize: 16,
    },
    });

export default styles;`,
		type: 'snippet Dev.',
		description: 'Adicionar estilo nomeSn para um componente',
	},

	//Create StyleSheet
	{
		prefix: 'create-style',
		snippet: `const styles = StyleSheet.create({
conatiner$1: {
backgroundColor: '#007BFF',
padding: 10,
borderRadius: 5,
alignItems: 'center',
},
text: {
color: '#FFFFFF',
fontSize: 16,
},
});`,
		type: 'snippet Dev.',
		description: 'Adicionar StyleSheet',
	},

	/*
   Criar Style para StyleSheet RN
 */

	// alignContent
	{
		prefix: 'alignContent',
		snippet: "alignContent: '$1',",
		type: 'snippet Prop.',
		description: 'Add alignContent style to a component',
	},
	// alignItems
	{
		prefix: 'alignItems',
		snippet: "alignItems: '$1',",
		type: 'snippet Prop.',
		description: 'Add alignItems style to a component',
	},
	// alignSelf
	{
		prefix: 'alignSelf',
		snippet: "alignSelf: '$1',",
		type: 'snippet Prop.',
		description: 'Add alignSelf style to a component',
	},
	// aspectRatio - number
	{
		prefix: 'aspectRatio',
		snippet: 'aspectRatio: $1,',
		type: 'snippet Prop.',
		description: 'Add aspectRatio style (number) to a component',
	},
	// borderBottomWidth - number
	{
		prefix: 'borderBottomWidth',
		snippet: 'borderBottomWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add borderBottomWidth style (number) to a component',
	},
	// borderLeftWidth - number
	{
		prefix: 'borderLeftWidth',
		snippet: 'borderLeftWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add borderLeftWidth style (number) to a component',
	},
	// borderRightWidth - number
	{
		prefix: 'borderRightWidth',
		snippet: 'borderRightWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add borderRightWidth style (number) to a component',
	},
	// borderStartWidth - number
	{
		prefix: 'borderStartWidth',
		snippet: 'borderStartWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add borderStartWidth style (number) to a component',
	},
	// borderTopWidth - number
	{
		prefix: 'borderTopWidth',
		snippet: 'borderTopWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add borderTopWidth style (number) to a component',
	},
	// borderWidth - number
	{
		prefix: 'borderWidth',
		snippet: 'borderWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add borderWidth style (number) to a component',
	},
	// borderEndWidth - number
	{
		prefix: 'borderEndWidth',
		snippet: 'borderEndWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add borderEndWidth style (number) to a component',
	},
	// Bottom - number
	{
		prefix: 'bottom',
		snippet: 'bottom: $1,',
		type: 'snippet Prop.',
		description: 'Add bottom style (number) to a component',
	},
	// Column Gap - number
	{
		prefix: 'columnGap',
		snippet: 'columnGap: $1,',
		type: 'snippet Prop.',
		description: 'Add columnGap style (number) to a component',
	},
	// Direction
	{
		prefix: 'direction',
		snippet: "direction: '$1',",
		type: 'snippet Prop.',
		description: 'Add direction style to a component',
	},
	// Display
	{
		prefix: 'display',
		snippet: "display: '$1',",
		type: 'snippet Prop.',
		description: 'Add display style to a component',
	},
	// End - number
	{
		prefix: 'end',
		snippet: 'end: $1,',
		type: 'snippet Prop.',
		description: 'Add end style (number) to a component',
	},
	// Flex - number
	{
		prefix: 'flex',
		snippet: 'flex: $1,',
		type: 'snippet Prop.',
		description: 'Add flex style (number) to a component',
	},
	// Flex Basis - number
	{
		prefix: 'flexBasis',
		snippet: 'flexBasis: $1,',
		type: 'snippet Prop.',
		description: 'Add flexBasis style (number) to a component',
	},
	// Flex Direction Teste
	{
		prefix: 'flexDirection',
		snippet: "flexDirection: '$1',",
		type: 'snippet Prop.',
		description: 'Add flexDirection style to a component',
		body: [
			"flexDirection: '${1:row}',",
			"flexDirection: '${2:row-reverse}',",
			"flexDirection: '${3:column}',",
			"flexDirection: '${4:column-reverse}',",
		],
		score: 750,
	},
	// Flex Grow - number
	{
		prefix: 'flexGrow',
		snippet: 'flexGrow: $1,',
		type: 'snippet Prop.',
		description: 'Add flexGrow style (number) to a component',
	},
	// Flex Shrink - number
	{
		prefix: 'flexShrink',
		snippet: 'flexShrink: $1,',
		type: 'snippet Prop.',
		description: 'Add flexShrink style (number) to a component',
	},
	// Flex Wrap
	{
		prefix: 'flexWrap',
		snippet: "flexWrap: '$1',",
		type: 'snippet Prop.',
		description: 'Add flexWrap style to a component',
	},
	// Gap - number
	{
		prefix: 'gap',
		snippet: 'gap: $1,',
		type: 'snippet Prop.',
		description: 'Add gap style (number) to a component',
	},
	// Height - number
	{
		prefix: 'height',
		snippet: 'height: $1,',
		type: 'snippet Prop.',
		description: 'Add height style (number) to a component',
	},
	// Inset - number
	{
		prefix: 'inset',
		snippet: 'inset: $1,',
		type: 'snippet Prop.',
		description: 'Add inset style (number) to a component',
	},
	// Inset Block End - number
	{
		prefix: 'insetBlockEnd',
		snippet: 'insetBlockEnd: $1,',
		type: 'snippet Prop.',
		description: 'Add insetBlockEnd style (number) to a component',
	},
	// Inset Block Start - number
	{
		prefix: 'insetBlockStart',
		snippet: 'insetBlockStart: $1,',
		type: 'snippet Prop.',
		description: 'Add insetBlockStart style (number) to a component',
	},
	// Inset Inline - number
	{
		prefix: 'insetInline',
		snippet: 'insetInline: $1,',
		type: 'snippet Prop.',
		description: 'Add insetInline style (number) to a component',
	},
	// Inset Inline End - number
	{
		prefix: 'insetInlineEnd',
		snippet: 'insetInlineEnd: $1,',
		type: 'snippet Prop.',
		description: 'Add insetInlineEnd style (number) to a component',
	},
	// Inset Inline Start - number
	{
		prefix: 'insetInlineStart',
		snippet: 'insetInlineStart: $1,',
		type: 'snippet Prop.',
		description: 'Add insetInlineStart style (number) to a component',
	},
	// justifyContent
	{
		prefix: 'justifyContent',
		snippet: "justifyContent: '$1',",
		type: 'snippet Prop.',
		description: 'Add justifyContent style to a component',
	},
	// left
	{
		prefix: 'left',
		snippet: 'left: $1,',
		type: 'snippet Prop.',
		description: 'Add left style to a component',
	},
	// margin
	{
		prefix: 'margin',
		snippet: 'margin: $1,',
		type: 'snippet Prop.',
		description: 'Add margin style to a component',
	},
	// marginBlock
	{
		prefix: 'marginBlock',
		snippet: 'marginBlock: $1,',
		type: 'snippet Prop.',
		description: 'Add marginBlock style to a component',
	},
	// marginBlockEnd
	{
		prefix: 'marginBlockEnd',
		snippet: 'marginBlockEnd: $1,',
		type: 'snippet Prop.',
		description: 'Add marginBlockEnd style to a component',
	},
	// marginBlockStart
	{
		prefix: 'marginBlockStart',
		snippet: 'marginBlockStart: $1,',
		type: 'snippet Prop.',
		description: 'Add marginBlockStart style to a component',
	},
	// marginBottom
	{
		prefix: 'marginBottom',
		snippet: 'marginBottom: $1,',
		type: 'snippet Prop.',
		description: 'Add marginBottom style to a component',
	},
	// marginEnd
	{
		prefix: 'marginEnd',
		snippet: 'marginEnd: $1,',
		type: 'snippet Prop.',
		description: 'Add marginEnd style to a component',
	},
	// marginHorizontal
	{
		prefix: 'marginHorizontal',
		snippet: 'marginHorizontal: $1,',
		type: 'snippet Prop.',
		description: 'Add marginHorizontal style to a component',
	},
	// marginInline
	{
		prefix: 'marginInline',
		snippet: 'marginInline: $1,',
		type: 'snippet Prop.',
		description: 'Add marginInline style to a component',
	},
	// marginInlineEnd
	{
		prefix: 'marginInlineEnd',
		snippet: 'marginInlineEnd: $1,',
		type: 'snippet Prop.',
		description: 'Add marginInlineEnd style to a component',
	},
	// marginInlineStart
	{
		prefix: 'marginInlineStart',
		snippet: 'marginInlineStart: $1,',
		type: 'snippet Prop.',
		description: 'Add marginInlineStart style to a component',
	},
	// marginLeft
	{
		prefix: 'marginLeft',
		snippet: 'marginLeft: $1,',
		type: 'snippet Prop.',
		description: 'Add marginLeft style to a component',
	},
	// marginRight
	{
		prefix: 'marginRight',
		snippet: 'marginRight: $1,',
		type: 'snippet Prop.',
		description: 'Add marginRight style to a component',
	},
	// marginStart
	{
		prefix: 'marginStart',
		snippet: 'marginStart: $1,',
		type: 'snippet Prop.',
		description: 'Add marginStart style to a component',
	},
	// marginTop
	{
		prefix: 'marginTop',
		snippet: 'marginTop: $1,',
		type: 'snippet Prop.',
		description: 'Add marginTop style to a component',
	},
	// marginVertical
	{
		prefix: 'marginVertical',
		snippet: 'marginVertical: $1,',
		type: 'snippet Prop.',
		description: 'Add marginVertical style to a component',
	},
	// maxHeight
	{
		prefix: 'maxHeight',
		snippet: 'maxHeight: $1,',
		type: 'snippet Prop.',
		description: 'Add maxHeight style to a component',
	},
	// maxWidth
	{
		prefix: 'maxWidth',
		snippet: 'maxWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add maxWidth style to a component',
	},
	// minHeight
	{
		prefix: 'minHeight',
		snippet: 'minHeight: $1,',
		type: 'snippet Prop.',
		description: 'Add minHeight style to a component',
	},
	// minWidth
	{
		prefix: 'minWidth',
		snippet: 'minWidth: $1,',
		type: 'snippet Prop.',
		description: 'Add minWidth style to a component',
	},
	// Overflow
	{
		prefix: 'overflow',
		snippet: "overflow: '$1',",
		type: 'snippet Prop.',
		description: 'Add overflow style to a component',
	},
	// paddingBlock
	{
		prefix: 'paddingBlock',
		snippet: 'paddingBlock: $1,',
		type: 'snippet Prop.',
		description: 'Add paddingBlock style to a component',
	},
	// paddingBlockEnd
	{
		prefix: 'paddingBlockEnd',
		snippet: 'paddingBlockEnd: $1,',
		type: 'snippet Prop.',
		description: 'Add paddingBlockEnd style to a component',
	},
	// paddingBlockStart
	{
		prefix: 'paddingBlockStart',
		snippet: 'paddingBlockStart: $1,',
		type: 'snippet Prop.',
		description: 'Add paddingBlockStart style to a component',
	},
	// paddingBottom
	{
		prefix: 'paddingBottom',
		snippet: 'paddingBottom: $1,',
		type: 'snippet Prop.',
		description: 'Add paddingBottom style to a component',
	},
	// paddingTop
	{
		prefix: 'paddingTop',
		snippet: 'paddingTop: $1,',
		type: 'snippet Prop.',
		description: 'Add paddingTop style to a component',
	},
	// paddingHorizontal
	{
		prefix: 'paddingHorizontal',
		snippet: 'paddingHorizontal: $1,',
		type: 'snippet Prop.',
		description: 'Add paddingHorizontal style to a component',
	},
	// paddingVertical
	{
		prefix: 'paddingVertical',
		snippet: 'paddingVertical: $1,',
		type: 'snippet Prop.',
		description: 'Add paddingVertical style to a component',
	},
	// right
	{
		prefix: 'right',
		snippet: 'right: $1,',
		type: 'snippet Prop.',
		description: 'Add right style to a component',
	},
	// start
	{
		prefix: 'start',
		snippet: 'start: $1,',
		type: 'snippet Prop.',
		description: 'Add start style to a component',
	},
	// top
	{
		prefix: 'top',
		snippet: 'top: $1,',
		type: 'snippet Prop.',
		description: 'Add top style to a component',
	},
	// width
	{
		prefix: 'width',
		snippet: 'width: $1,',
		type: 'snippet Prop.',
		description: 'Add width style to a component',
	},
	// zIndex
	{
		prefix: 'zIndex',
		snippet: 'zIndex: $1,',
		type: 'snippet Prop.',
		description: 'Add zIndex style to a component',
	},
	// flex
	{
		prefix: 'flex',
		snippet: 'flex: $1,',
		type: 'ReactNativeFlexStyle',
		description: 'Create flexible style for a component',
	},
	// shadowColor
	{
		prefix: 'shadowColor',
		snippet: "shadowColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add shadowColor style to a component',
	},
	// shadowOffset
	{
		prefix: 'shadowOffset',
		snippet: 'shadowOffset: { width: $1, height: $2 },',
		type: 'snippet Prop.',
		description: 'Add shadowOffset style to a component',
	},
	// shadowOpacity
	{
		prefix: 'shadowOpacity',
		snippet: 'shadowOpacity: $1,',
		type: 'snippet Prop.',
		description: 'Add shadowOpacity style to a component',
	},
	// shadowRadius
	{
		prefix: 'shadowRadius',
		snippet: 'shadowRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add shadowRadius style to a component',
	},
	// transform
	{
		prefix: 'transform',
		snippet: 'transform: [{ $1 }],',
		type: 'snippet Prop.',
		description: 'Add transform style to a component',
	},
	// backfaceVisibility
	{
		prefix: 'backfaceVisibility',
		snippet: "backfaceVisibility: '$1',",
		type: 'snippet Prop.',
		description: 'Add backfaceVisibility style to a component',
	},
	// backgroundColor
	{
		prefix: 'backgroundColor',
		snippet: "backgroundColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add backgroundColor style to a component',
	},
	// borderBottomColor
	{
		prefix: 'borderBottomColor',
		snippet: "borderBottomColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderBottomColor style to a component',
	},
	// borderBottomEndRadius
	{
		prefix: 'borderBottomEndRadius',
		snippet: 'borderBottomEndRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderBottomEndRadius style to a component',
	},
	// borderBottomLeftRadius
	{
		prefix: 'borderBottomLeftRadius',
		snippet: 'borderBottomLeftRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderBottomLeftRadius style to a component',
	},
	// borderBottomRightRadius
	{
		prefix: 'borderBottomRightRadius',
		snippet: 'borderBottomRightRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderBottomRightRadius style to a component',
	},
	// borderBottomStartRadius
	{
		prefix: 'borderBottomStartRadius',
		snippet: 'borderBottomStartRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderBottomStartRadius style to a component',
	},
	// borderColor
	{
		prefix: 'borderColor',
		snippet: "borderColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderColor style to a component',
	},
	// borderCurve
	{
		prefix: 'borderCurve',
		snippet: "borderCurve: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderCurve style to a component',
	},
	// borderEndColor
	{
		prefix: 'borderEndColor',
		snippet: "borderEndColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderEndColor style to a component',
	},
	// borderEndEndRadius
	{
		prefix: 'borderEndEndRadius',
		snippet: 'borderEndEndRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderEndEndRadius style to a component',
	},
	// borderEndStartRadius
	{
		prefix: 'borderEndStartRadius',
		snippet: 'borderEndStartRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderEndStartRadius style to a component',
	},
	// borderLeftColor
	{
		prefix: 'borderLeftColor',
		snippet: "borderLeftColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderLeftColor style to a component',
	},
	// borderRadius
	{
		prefix: 'borderRadius',
		snippet: 'borderRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderRadius style to a component',
	},
	// borderRightColor
	{
		prefix: 'borderRightColor',
		snippet: "borderRightColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderRightColor style to a component',
	},
	// borderStartColor
	{
		prefix: 'borderStartColor',
		snippet: "borderStartColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderStartColor style to a component',
	},
	// borderStartEndRadius
	{
		prefix: 'borderStartEndRadius',
		snippet: 'borderStartEndRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderStartEndRadius style to a component',
	},
	// borderStartStartRadius
	{
		prefix: 'borderStartStartRadius',
		snippet: 'borderStartStartRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderStartStartRadius style to a component',
	},
	// borderStyle
	{
		prefix: 'borderStyle',
		snippet: "borderStyle: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderStyle style to a component',
	},
	// borderTopColor
	{
		prefix: 'borderTopColor',
		snippet: "borderTopColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add borderTopColor style to a component',
	},
	// borderTopEndRadius
	{
		prefix: 'borderTopEndRadius',
		snippet: 'borderTopEndRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderTopEndRadius style to a component',
	},
	// borderTopLeftRadius
	{
		prefix: 'borderTopLeftRadius',
		snippet: 'borderTopLeftRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderTopLeftRadius style to a component',
	},
	// borderTopRightRadius
	{
		prefix: 'borderTopRightRadius',
		snippet: 'borderTopRightRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderTopRightRadius style to a component',
	},
	// borderTopStartRadius
	{
		prefix: 'borderTopStartRadius',
		snippet: 'borderTopStartRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add borderTopStartRadius style to a component',
	},
	// elevation
	{
		prefix: 'elevation',
		snippet: 'elevation: $1,',
		type: 'snippet Prop.',
		description: 'Add elevation style to a component',
	},
	// opacity
	{
		prefix: 'opacity',
		snippet: 'opacity: $1,',
		type: 'snippet Prop.',
		description: 'Add opacity style to a component',
	},
	// pointerEvents
	{
		prefix: 'pointerEvents',
		snippet: "pointerEvents: '$1',",
		type: 'snippet Prop.',
		description: 'Add pointerEvents style to a component',
	},
	// color
	{
		prefix: 'color',
		snippet: "color: '$1',",
		type: 'snippet Prop.',
		description: 'Add color style to a component',
	},
	// fontFamily
	{
		prefix: 'fontFamily',
		snippet: "fontFamily: '$1',",
		type: 'snippet Prop.',
		description: 'Add fontFamily style to a component',
	},
	// fontSize
	{
		prefix: 'fontSize',
		snippet: 'fontSize: $1,',
		type: 'snippet Prop.',
		description: 'Add fontSize style to a component',
	},
	// fontStyle
	{
		prefix: 'fontStyle',
		snippet: "fontStyle: '$1',",
		type: 'snippet Prop.',
		description: 'Add fontStyle style to a component',
	},
	// fontVariant
	{
		prefix: 'fontVariant',
		snippet: "fontVariant: '$1',",
		type: 'snippet Prop.',
		description: 'Add fontVariant style to a component',
	},
	// fontWeight
	{
		prefix: 'fontWeight',
		snippet: "fontWeight: '$1',",
		type: 'snippet Prop.',
		description: 'Add fontWeight style to a component',
	},
	// includeFontPadding
	{
		prefix: 'includeFontPadding',
		snippet: 'includeFontPadding: $1,',
		type: 'snippet Prop.',
		description: 'Add includeFontPadding style to a component',
	},
	// letterSpacing
	{
		prefix: 'letterSpacing',
		snippet: 'letterSpacing: $1,',
		type: 'snippet Prop.',
		description: 'Add letterSpacing style to a component',
	},
	// lineHeight
	{
		prefix: 'lineHeight',
		snippet: 'lineHeight: $1,',
		type: 'snippet Prop.',
		description: 'Add lineHeight style to a component',
	},
	// textAlign
	{
		prefix: 'textAlign',
		snippet: "textAlign: '$1',",
		type: 'snippet Prop.',
		description: 'Add textAlign style to a component',
	},
	// textAlignVertical
	{
		prefix: 'textAlignVertical',
		snippet: "textAlignVertical: '$1',",
		type: 'snippet Prop.',
		description: 'Add textAlignVertical style to a component',
	},
	// textDecorationColor
	{
		prefix: 'textDecorationColor',
		snippet: "textDecorationColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add textDecorationColor style to a component',
	},
	// textDecorationLine
	{
		prefix: 'textDecorationLine',
		snippet: "textDecorationLine: '$1',",
		type: 'snippet Prop.',
		description: 'Add textDecorationLine style to a component',
	},
	// textDecorationStyle
	{
		prefix: 'textDecorationStyle',
		snippet: "textDecorationStyle: '$1',",
		type: 'snippet Prop.',
		description: 'Add textDecorationStyle style to a component',
	},
	// textShadowColor
	{
		prefix: 'textShadowColor',
		snippet: "textShadowColor: '$1',",
		type: 'snippet Prop.',
		description: 'Add textShadowColor style to a component',
	},
	// textShadowOffset
	{
		prefix: 'textShadowOffset',
		snippet: 'textShadowOffset: $1,',
		type: 'snippet Prop.',
		description: 'Add textShadowOffset style to a component',
	},
	// textShadowRadius
	{
		prefix: 'textShadowRadius',
		snippet: 'textShadowRadius: $1,',
		type: 'snippet Prop.',
		description: 'Add textShadowRadius style to a component',
	},
	// textTransform
	{
		prefix: 'textTransform',
		snippet: "textTransform: '$1',",
		type: 'snippet Prop.',
		description: 'Add textTransform style to a component',
	},
	// userSelect
	{
		prefix: 'userSelect',
		snippet: "userSelect: '$1',",
		type: 'snippet Prop.',
		description: 'Add userSelect style to a component',
	},
	// verticalAlign
	{
		prefix: 'verticalAlign',
		snippet: "verticalAlign: '$1',",
		type: 'snippet Prop.',
		description: 'Add verticalAlign style to a component',
	},
	// writingDirection
	{
		prefix: 'writingDirection',
		snippet: "writingDirection: '$1',",
		type: 'snippet Prop.',
		description: 'Add writingDirection style to a component',
	},

	/**
 Express Snippets
 */

	// Snippets Express
	{
		prefix: 'exp-create-app',
		snippet: 'const app = express();',
		type: 'snippet Express',
		description: 'Criar uma instância do Express',
	},

	{
		prefix: 'exp-basic-route',
		snippet: 'app.get("/", (req, res) => {\n  res.send("Hello, World!");\n});',
		type: 'snippet Express',
		description: 'Definir uma rota básica',
	},

	{
		prefix: 'exp-param-route',
		snippet: 'app.get("/:id", (req, res) => {\n  const { id } = req.params;\n  res.send(`ID: ${id}`);\n});',
		type: 'snippet Express',
		description: 'Definir uma rota com parâmetros',
	},

	{
		prefix: 'exp-delete-route',
		snippet: "${1:router}.delete('/${2:path}', (req, res) => {\n  $3\n});",
		type: 'snippet Express',
		description: 'Definir rota DELETE no Express',
	},

	// JavaScript
	{
		prefix: 'const-obj-properties',
		snippet: `const $1 = {
name: 'String',
age: 0,
};`,
		type: 'snippet',
		description: 'Create a JavaScript object with default properties',
	},

	{
		prefix: 'const-arrow-function',
		snippet: 'const $1 = ($2) => {\n  $3\n};',
		type: 'snippet RN',
		description: 'Create an arrow function with parameters',
	},

	{
		prefix: 'const-persona',
		snippet: "const ${1:Persona} = {\n  name: 'String',\n  age: 0,\n};",
		type: 'snippet RN',
		description: 'Snippet to create an object in JavaScript',
	},

	{
		prefix: 'const-ternary-operator',
		snippet: 'const $1 = $2 ? $3 : $4;',
		type: 'snippet RN',
		description: 'Create a ternary operator in JavaScript',
	},

	{
		prefix: 'try-catch-block',
		snippet: 'try {\n  $1\n} catch (error) {\n  $2\n}',
		type: 'snippet RN',
		description: 'Create a try-catch block in JavaScript',
	},

	// properties Dev
	{
		prefix: 'pro-style',
		snippet: '$1: { \n $2\n\n},',
		type: 'snippet Dev.',
		description: 'Adicionar estilo nomeSn para um componente',
	},

	{
		prefix: 'inp-input',
		snippet: '',
		type: 'snippet Dev.',
		description: 'Create input',
	},

	// nomeSn
	{
		prefix: 'nomeSn',
		snippet: "nome: '$1',",
		type: 'snippet Dev.',
		description: 'Adicionar estilo nomeSn para um componente',
	},

	// Add snippet DEV Prefix
	{
		prefix: 'add-snippet-dev',
		snippet: `prefix: '$1',
    snippet:'' ,
    type: 'snippet Dev.$3',
    description: 'Adicionar estilo nomeSn para um componente$4',
`,
		type: 'snippet Dev$5.',
		description: 'Adicionar estilo nomeSn para um componente$6',
	},
];
