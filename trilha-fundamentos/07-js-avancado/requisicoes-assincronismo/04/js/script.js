// Callbacks -> função passada como argumento para outra função, executada após um evento ou operação

function alertar() {
    alert('Opa')
}

function executarCallback(callback) {
    callback();
}

executarCallback(alertar);
