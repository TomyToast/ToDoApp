const app = new Vue({
    el: "#app",
    data() {
        return {
            taskText: "",
            tasks: []
        };
    },
    methods: {
        addTask () {
            this.tasks.push(this.taskText);
            this.taskText = "";
        },
        deleteTask (index) {
            this.tasks.splice(index, 1);
        }
    },
    computed: {

    }
});

