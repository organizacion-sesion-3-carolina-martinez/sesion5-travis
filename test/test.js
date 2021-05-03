// Ejemplo de test utilizando el módulo assert disponible en NodeJS
// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función checkPar', function() {
	assert.equal(operaciones.checkPar(2), true);
	assert.equal(operaciones.suma(3), false);
	assert.equal(operaciones.suma(4), true);
});
