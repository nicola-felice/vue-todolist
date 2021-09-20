
const app = new Vue({
    el: '#root',
    data: {
        todos: [
            {
                id: 0,
                name: "fare la spesa",
                done: false,
            },
            {
                id: 1,
                name: "spazzare i pavomenti",
                done: false,
            },
            {
                id: 2,
                name: "preparare la cena",
                done: false,
            },
        ],

        newTodoText: '',
    },
    methods: {
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        },

        addNewTodo: function() {

            let newID;
            if ( this.todos.length == 0 ) {
                // if there are no todos the id is zero
                newID = 0;
            } else {
                // the id of the new todo is the id of the last todo in the list plus one
                newID = (this.todos.at(-1).id) + 1;
            }

            if ( this.newTodoText != '' ) {
                this.todos.push({
                    id: newID,
                    name: this.newTodoText,
                    done: false,
                });
            }

            this.newTodoText = '';        
        },

        todoDone: function(index) {
            if ( this.todos[index].done == false ) {
                this.todos[index].done = true;
            } else {
                this.todos[index].done = false;
            }
        },

        classListTodo: function(index) {
            if ( this.todos[index].done == false ) {
                return null;
            } else {
                return 'done';
            }
        },
    },
    mounted: function () {
        document.addEventListener('keydown', (event) => {
            if ( event.key == "Enter" ) {
                this.addNewTodo();
            }
        });
    }
});