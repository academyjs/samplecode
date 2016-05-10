/**
 * @description Code to interact with a Sphero
 *              
 * @author JD
 *     
 */

var sphero = require("sphero");
var async = require("async");

var instructionTypes = [
  require("./instructions/spheroMove"),
  require("./instructions/spheroChangeColor")
];

//orb = sphero('\\\\.\\COM22');
//orb = sphero(process.argv[2]);
//orb.connect(function () {});

/**
 * Executes an Instruction Set
 * @param {object} instructionSet The Instruction Set to execute
 */
function executeInstructionSet(instructionSet) {
    async.forEachSeries(instructionSet.instructions, executeInstruction);
}

/**
 * Executes a specific Instruction
 * @param {object}   instruction The Instruction to execute
 * @param {function} callback    Function to call once the Instruction has executed
 */
function executeInstruction(instruction, callback) {

    async.forEach(instructionTypes, function (instructionType) {

        if (instruction.type == instructionType.key) {
            instructionType.execute(instruction, callback);
        }

    });

}



exports.executeInstructionSet = executeInstructionSet;