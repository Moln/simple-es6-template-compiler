function simpleEs6Compiler(str, variables) {
    const reEsTemplate = /(\n)|(\')|\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    const importsKeys = ['__quote', '__ln'];
    const importsValues = ['\'', '\n'];

    Object.keys(variables).forEach((key) => {
        importsKeys.push(key);
        importsValues.push(variables[key]);
    })

    let source = str
        .replace(reEsTemplate, function (matched, ln, quote, exp) {
            if (ln) {
                return '\' + (__ln) + \'';
            }
            if (quote) {
                return '\' + (__quote) + \'';
            }
            if (exp) {
                return '\' + (' + exp + ') + \'';
            }
        })
    ;
    source = 'return \'' + source + '\';';

    return Function(importsKeys, source)
        .apply(undefined, importsValues);
};

module.exports = simpleEs6Compiler;