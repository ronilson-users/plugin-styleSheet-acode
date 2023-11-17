/* src/main.js    */
import plugin from '../plugin.json';

const template = require('babel-template');


class ReactPlugin {


  
  async init() {
    // Add logic to detect the import statement containing StyleSheet
    this.detectImport();
    
 

       const createStylesDeclaration = template(`
              const styles = StyleSheet.create({});
            `);

function createStylesDeclarationInsertion(path) {
  path.insertBefore(createStylesDeclaration());
}

    
  }

  async destroy() {
    // Add cleanup logic if needed.
  }

  detectImport() {
    // Regular expression to find the import statement for StyleSheet
    const importRegex = /import\s+\{ StyleSheet \}\s+from\s+'react-native';/;
    
    // Check if the regular expression matches the page's code
    const isImportPresent = importRegex.test(document.body.innerText);

    if (isImportPresent) {
      console.log('Found the import statement containing StyleSheet.');
      
      // Create the styles constant if it doesn't already exist
      if (typeof styles === 'undefined') {
        const styles = StyleSheet.create({});
      }
      
      // Add your logic here to offer suggestions or perform actions related to the StyleSheet import

    } else {
      console.log('The import statement containing StyleSheet was not found.');
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
