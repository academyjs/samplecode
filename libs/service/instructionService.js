/**
 * @description Business logic for creating, retrieving, updating and deleting Instruction sets
 *              
 * @author JD
 *     
 */

var store = require('./instructionServiceStore');
var idHelper = require('./idHelper');
var instructionSetValidator = require('./instructionSetValidator');
var spheroController = require('../sphero/spheroController');

/**
 * Reads the instruction set with the given id
 * @param {String} the id of the Instruction Set
 * @return {Object} object indicating if the read was successful
 */
function readInstructionSet(id) {

    var response = {};
    var instructionSet = store.readInstructionSet(id);

    if (!instructionSet) {
        response.success = false;
        response.errors = ['Instruction Set with id ' + id + ' does not exist'];
    } else {
        response.instructionSet = instructionSet;
        response.success = true;
    }

    return response;
}

/**
 * Reads all the instruction sets
 * @return {Object} object indicating if the read was successful
 */
function readAllInstructionSets() {

    var response = {};
    var instructionSets = store.readAllInstructionSets();

    response.instructionSets = instructionSets;
    response.success = true;

    return response;
}

/**
 * Saves an InstructionSet
 * @param  {Object} object containing the InstructionSet
 * @return {[type]}
 */
function saveInstructionSet(instructionSet) {
    var response = {};
    response.errors = [];
    response.success = true;

    instructionSet.id = idHelper.guid();

    var validationResponse = instructionSetValidator.validate(instructionSet);

    if (!validationResponse.success) {
        response.errors = response.errors.concat(validationResponse.errors);
        response.success = false;
    } else {
        store.saveInstructionSet(instructionSet);
    }

    return response;
}

/**
 * Deletes an Instruction Set
 * @param   {string} id The id of the Instruction Set to delete
 * @returns {object} Response object indicating if the deletion was successful
 */
function deleteInstructionSet(id) {
    var response = {};
    response.success = true;

    store.deleteInstructionSet(id);

    return response;
}

/**
 * Updates an existing Instruction Set
 * @param   {object} instructionSet The Instruction Set to update
 * @returns {object} Response object indicating id the update was successful
 */
function updateInstructionSet(instructionSet) {

    var response = {};
    response.errors = [];
    response.success = true;

    var validationResponse = instructionSetValidator.validate(instructionSet);

    if (!validationResponse.success) {
        response.errors = response.errors.concat(validationResponse.errors);
        response.success = false;
    } else {
        store.updateInstructionSet(instructionSet);
    }

    return response;
}

/**
 * Executes an Instruciton Set
 * @param {string} id Executes the Instruction Set
 */
function executeInstructionSet(id) {
    var instructionSet = store.readInstructionSet(id);
    console.log(id);
    spheroController.executeInstructionSet(instructionSet);
    return {
        "success": "true"
    };
}


exports.readInstructionSet = readInstructionSet;
exports.saveInstructionSet = saveInstructionSet;
exports.deleteInstructionSet = deleteInstructionSet;
exports.updateInstructionSet = updateInstructionSet;
exports.executeInstructionSet = executeInstructionSet;
exports.readAllInstructionSets = readAllInstructionSets;
