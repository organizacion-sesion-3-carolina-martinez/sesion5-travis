// Ejemplo de test utilizando el módulo assert disponible en NodeJS
// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función checkPar', function() {
	assert.equal(operaciones.checkPar(2), 0);
	assert.notEqual(operaciones.checkPar(3), 0);
	assert.equal(operaciones.checkPar(4), 0);
});
