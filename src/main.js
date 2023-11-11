import plugin from '../plugin.json';

class ReactNativeAutocomplete {
  async fetch(code) {
    const regexStylesImport = /import\s+\{\s*StyleSheet\s*\}\s+from\s+['"]react-native['"]/;
    const regexStylesCreate = /const\s+styles\s*=\s*StyleSheet\.create\s*\(\s*{([\s\S]*?)\s*}\s*\)\s*;/;

    const hasStylesImport = regexStylesImport.test(code);
    const hasStylesCreate = regexStylesCreate.test(code);

    if (hasStylesImport && hasStylesCreate) {
      const matchStyles = regexStylesCreate.exec(code);
      const stylesBlock = matchStyles[1];
      const regexClassNames = /\s*([\w-]+)\s*:\s*{/g;
      const classNames = new Set();
      let matchClassName;

      while ((matchClassName = regexClassNames.exec(stylesBlock))) {
        classNames.add(matchClassName[1]);
      }

      const properties = {};
      classNames.forEach(className => {
        const regexPropertyNames = new RegExp(`${className}\\s*:\\s*\\{([\\s\\S]*?)\\}`, 'g');
        const matchProperties = regexPropertyNames.exec(stylesBlock);

        if (matchProperties) {
          const propertiesBlock = matchProperties[1];
          const regexPropertyNamesInner = /\s*([\w-]+)\s*:/g;
          const propertyNames = new Set();
          let matchPropertyName;

          while ((matchPropertyName = regexPropertyNamesInner.exec(propertiesBlock))) {
            propertyNames.add(matchPropertyName[1]);
          }

          properties[className] = Array.from(propertyNames);
        }
      });

      return properties;
    }

    return {};
  }

  async completion(properties) {
    const completion = {
      getCompletions: (editor, session, pos, prefix, callback) => {
        const line = session.getLine(pos.row).substr(0, pos.column);
        const classNameRegex = /\s*className\s*=\s*["'](\w*)$/;
        const matchClassName = line.match(classNameRegex);

        if (matchClassName && matchClassName[1] in properties) {
          const className = matchClassName[1];
          callback(null, properties[className].map(property => {
            return {
              caption: property,
              value: property,
              meta: className,
            };
          }));
        } else {
          callback(null, []);
        }
      },
    };

    editorManager.editor.completers.unshift(completion);
  }

  async init(cache) {
    const code = await cache.cacheFile.readFile('utf8');
    const properties = await this.fetch(code);
    this.completion(properties);
  }

  async destroy() {
    // Lógica de limpeza quando o plugin é desativado
  }
}

if (window.acode) {
  acode.setPluginInit(plugin.id, (url, page, cache) => new ReactNativeAutocomplete().init(cache));
  acode.setPluginUnmount(plugin.id, () => new ReactNativeAutocomplete().destroy());
}