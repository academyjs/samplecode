/**
 * @description Business logic for creating, retrieving, updating and deleting Instruction sets
 *              
 * @author JD
 *     
 */

var store = require('./instructionServiceStore');
var idHelper = require('./idHelper');
var instructionSetValidator = require('./instructionSetValidator');

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




exports.readInstructionSet = readInstructionSet;
exports.saveInstructionSet = saveInstructionSet;
exports.readAllInstructionSets = readAllInstructionSets;
