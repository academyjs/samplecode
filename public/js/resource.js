/**
 * @description defines factories for creating REST resources
 *              
 * @author JD
 *     
 */

var restResources = angular.module("RestResources", ['ngResource']);


//Define an AngularJS REST Resource for working with Instruction Sets
restResources.factory('instructionSetResource',

    function ($resource) {

        return $resource('/instructionset/:id', {}, {

            //Add PUT REST resource which isn't part of the defaults
            update: {
                method: 'PUT'
            }

        });

    }

);

// Define an AngularJS REST Resource for working with Instruction Set Executions
restResources.factory('instructionSetExecutionResource',

    function ($resource) {

        return $resource('/instructionsetexecution/:id');

    }

);