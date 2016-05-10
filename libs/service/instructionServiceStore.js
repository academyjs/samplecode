/**
 * @description In memory store for holding instruction sets. Used as an alternative to mongo or other
 *              database for simplicity of implementation for this task.
 *              
 * @author JD
 *     
 */

var store = {};

//Instructions to change the Sphero colour from dark green to light green
store["77a7512c-09d3-00ff-2a46-4e5a524d80a4"] = {
    "instructions": [{
        "type": "changeColor",
        "color": "#002211"
    }, {
        "type": "changeColor",
        "color": "#008040"
    }, {
        "type": "changeColor",
        "color": "#00c462"
    }, {
        "type": "changeColor",
        "color": "#15ff8a"
    }, {
        "type": "changeColor",
        "color": "#6fffb7"
    }, {
        "type": "changeColor",
        "color": "#b9ffdc"
    }],
    "name": "Shades",
    "description": "Goes from dark green to light green",
    "id": "77a7512c-09d3-00ff-2a46-4e5a524d80a4"
};

//Instructions to make the sphero flash blue and white like a police car
store["6eaa2f1a-779e-a6d9-2826-d23b8265df3c"] = {
    "instructions": [{
        "type": "changeColor",
        "color": "#0080ff"
    }, {
        "type": "changeColor",
        "color": "#000000"
    }, {
        "type": "changeColor",
        "color": "#0080ff"
    }, {
        "type": "changeColor",
        "color": "#000000"
    }, {
        "type": "changeColor",
        "color": "#0080ff"
    }, {
        "type": "move",
        "speed": "500",
        "direction": "180"
    }],
    "name": "Police",
    "description": "Flash like a police car",
    "id": "6eaa2f1a-779e-a6d9-2826-d23b8265df3c"
};

//Instructions to make the Sphero cycle through the colours of the rainbow
store["1"] = {
    "id": "1",
    "name": "Rainbow",
    "description": "A test instruction set",
    "instructions": [{
        "type": "changeColor",
        "color": "#ffaaaa"
    }, {
        "type": "changeColor",
        "color": "#ffbe9f"
    }, {
        "type": "changeColor",
        "color": "#ffff77"
    }, {
        "type": "changeColor",
        "color": "#93ffae"
    }, {
        "type": "changeColor",
        "color": "#64b1ff"
    }, {
        "type": "changeColor",
        "color": "#c68cff"
    }, {
        "type": "changeColor",
        "color": "#b0b0ff"
    }]
};


/**
 * Saves a new Instruction Set
 * @param {object} instructionSet The Instruction Set to save
 */
function saveInstructionSet(instructionSet) {
    store[instructionSet.id] = instructionSet;
}


/** 
 * Retrieve an existing InstructionSet
 * @param  {String} the id of the InstructionSet
 * @return {Object} the InstructionSet or undefined if not found
 */
function readInstructionSet(id) {
    return store[id];
}

/**
 * Reads all the Instruction Sets
 * @returns {Array} An array of existing Instruction Sets
 */
function readAllInstructionSets() {
    var instructionSets = [];

    for (var id in store) {
        instructionSets.push(store[id]);
    }

    return instructionSets;
}

/** 
 * Deletes an exiting InstructionSet
 * @param  {[type]} id The id of the Instruction Set to delete
 */
function deleteInstructionSet(id) {
    delete store[id];
}

/** 
 * Update an existing InstructionSet
 * @param  {[type]} instructionSet [description]
 */
function updateInstructionSet(instructionSet) {
    store[instructionSet.id] = instructionSet;
}

exports.saveInstructionSet = saveInstructionSet;
exports.readInstructionSet = readInstructionSet;
exports.readAllInstructionSets = readAllInstructionSets;
exports.deleteInstructionSet = deleteInstructionSet;
exports.updateInstructionSet = updateInstructionSet;