//snippets.js

export const reactNativeSnippets = {
  'imrn': "import { $1 } from 'react-native'",
  
  'rnstyle': 'const styles = StyleSheet.create({\n  $1\n});',
  
  
  'rnc': `import React, { Component } from 'react'\nimport { Text, View } from 'react-native'\n\nexport default class FileName extends Component {\n  render() {\n    return (\n      <View>\n        <Text> $2 </Text>\n      </View>\n    )\n  }\n}`,
  // ... outros snippets
};