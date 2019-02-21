function simpleEs6Compiler(str, variables) {
    var reEsTemplate = /(\n)|(\')|\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var importsKeys = ['__quote', '__ln', '__r'];
    var importsValues = ['\'', '\n', '\r'];

    for (var key in variables) {
        importsKeys.push(key);
        importsValues.push(variables[key]);
    }

    var source = str
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