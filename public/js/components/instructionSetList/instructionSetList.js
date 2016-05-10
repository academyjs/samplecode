/**
 * @description Component to render a list of Instruction sets
 *              
 * @author JD
 *     
 */

//Component to render a list of instruction sets
app.component('instructionSetList', {

        //component takes a couple of inputs
        bindings: {
            //A set of instruction sets to display
            instructionSets: '=instructionSets'
        },
        //Logic for the component
        controller: function ($uibModal, instructionSetResource, instructionSetExecutionResource, $scope) {

            var self = this;


            /**
             * Deletes an existing Instruction Set
             * @param {object} instructionSet The Instruction Set to delete
             */
            this.delete = function (instructionSet) {
                instructionSetResource.delete({
                    id: instructionSet.id
                }, function () {
                    $scope.$emit(Events.INSTRUCTION_SET_DELETED, {});
                }, function () {});
            };

            /**
             * Plays an Instruction Set
             * @param {object} instructionSet The Instruction Set to play
             */
            this.play = function (instructionSet) {
                instructionSetExecutionResource.save({
                    id: instructionSet.id
                }, function (response) {

                }, function (response) {
                    console.log(response.data);
                });

                $scope.$emit(Events.INSTRUCTION_SET_PLAYED, instructionSet);
            };

            /**
             * Launches a popup to edit an existing Instruction Set
             * @param   {object} instructionSet The Instruction Set to edit
             */
            this.edit = function (instructionSet) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: Templates.INSTRUCTION_SET_FORM,
                    controller: 'AddEditCtrl',
                    bindToController: true,
                    controllerAs: 'ctrl',
                    resolve: {
                        instructionSet: function () {
                            //We want the edit form to work with a copy of the instruction set not the instance
                            //that is bound to the instruction set list in the main view. Otherwise updates will
                            //be reflected in the list view before the changes have been saved
                            var clonedInstructionSet = JSON.parse(JSON.stringify(instructionSet));
                            return clonedInstructionSet;
                        },
                        mode: function () {
                            return FormModes.EDIT;
                        }
                    }
                });

                modalInstance.result.then(function () {
                    $scope.$emit(Events.INSTRUCTION_SET_UPDATED, {});
                });
            };

        },
        //View to render the instruction set list
        templateUrl: Templates.INSTRUCTION_SET_LIST
    }


);