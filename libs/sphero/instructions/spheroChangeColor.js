/**
 * @description Logic for a 'change color' instruction
 *              
 * @author JD
 *     
 */

/**
 * Change the colour of the Sphero
 * @param {object}   instruction The change colour instruction
 * @param {function} callback    Function to call when the instruction is complete
 */
function changeColor(instruction, callback) {
    orb.color(instruction.color);
    setTimeout(callback, 1000);
}


/**
 * Validate that the instruction is correctly structured
 * @param {object} instruction      The instruction to validate
 * @param {number} instructionIndex The index of the instruction
 * @param {Array} errors           Array of errors to add to if there are validation errors
 */
function validate(instruction, instructionIndex, errors) {

}

exports.validate = validate;
exports.execute = changeColor;
exports.key = "changeColor";