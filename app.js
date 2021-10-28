var app = new Vue({
    el: '#app',
    data: {
        todoText: '',
        doList: [],
        nameList: '',
        oldItem: 0,
        check: false
    },
    computed: {

    },
    methods: {
        clear: function() {
            this.todoText = '';
        },
        add: function() {
            if (this.todoText.length > 0) {
                let text = this.todoText[0].toUpperCase() + this.todoText.slice(1);
                this.doList[this.oldItem].taskList.push({
                    text: text,
                    line: false
                });
                this.doList[this.oldItem].count++;
                this.todoText = '';
            }
        },
        done: function(item) {
            item.line = !item.line;
        },
        delTask: function(index) {
            this.doList[this.oldItem].taskList.splice(index, 1);
            this.doList[this.oldItem].count--;
        },
        delList: function(index) {
            if (confirm('Are you sure you want to remove this list?')) {
                this.doList.splice(index, 1);
            }
        },
        uncheck: function(item) {
            item.line = !item.line;
        },
        create: function(index) {
            if (this.nameList.length >= 1) {
                let text = this.nameList[0].toUpperCase() + this.nameList.slice(1);
                this.doList.push({
                    name: text,
                    count: 0,
                    active: false,
                    taskList: [],
                });
                this.nameList = '';
                this.check = true;
            }
            if (this.doList.length == 1) {
                this.oldItem = index;
                this.doList[0].active = true;
            }
        },
        // must be change
        activeList: function(item, index) {
            if (this.doList[index].active != true) {
                this.doList[index].active = true;
                this.doList[this.oldItem].active = false;
                this.oldItem = index;
            }
        },
    }
});