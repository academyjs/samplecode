/**
 * @description Logic for a move instruction
 *              
 * @author JD
 *     
 */

/**
 * Move the Sphero
 * @param {object}   instruction The Move instruction
 * @param {function} callback    function to call once the instruction has been executed
 */
function move(instruction, callback) {
    orb.roll(instruction.speed, instruction.direction);
    setTimeout(callback, 1000);
}


/**
 * Validate that the instruction is correctly structured
 * @param {object} instruction      The instruction to validate
 * @param {number} instructionIndex The index of the instruction
 * @param {Array} errors           Array of errors to add to if there are validation errors
 */
function validate(instruction, instructionIndex, errors) {

    if (!instruction.direction || instruction.direction.length === 0) {
        errors.push("You must provide a direction for instruction " + instructionIndex);
    } else if (isNaN(instruction.direction)) {
        errors.push("Direction must be a number for instruction " + instructionIndex);
    }

    if (!instruction.speed || instruction.speed.length === 0) {
        errors.push("You must provide a speed for instruction " + instructionIndex);
    } else if (isNaN(instruction.speed)) {
        errors.push("Speed must be a number for instruction " + instructionIndex);
    }

}

exports.validate = validate;
exports.execute = move;
exports.key = "move";