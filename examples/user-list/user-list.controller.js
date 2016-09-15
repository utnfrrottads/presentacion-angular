(function() {
    'use strict';

    // Create module and controller
    angular
        .module('userListControllerDemo', [])
        .controller('UserListController', UserListController);


    UserListController.$inject = [ '$timeout'
    ];

    function UserListController($timeout) {
        // Controller as viewModel
        var vm = this;
        // Initialization
        vm.list = [];
        vm.item = {
            name: '',
            lastname: '',
            phone: '',
            email: '',
            dateOfBirth: ''};

        // Controller methods
        vm.add = add;
        vm.remove = remove;
        vm.edit = edit;

        /* Adds an item to the todo list */
        function add(item) {
            vm.list.push(item);
            vm.item = {};
        }

        function edit(item){
          vm.item = item;
        }

        /* Removes the item in the list with index: $index*/
        function remove(index) {
            vm.list.splice(index,1);
        }
    }
})();
