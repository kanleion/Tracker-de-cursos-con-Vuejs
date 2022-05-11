new Vue({
    el: '#app',

    data() {
        return {
            courses: [],
            title: "",
            time: "",

        }
    },

    computed: {
        totalTime() {
            let sum = 0;
            for (let i = 0; i < this.courses.length; i++) {
                sum += parseInt(this.courses[i].time);
            }
            return sum;
        }
    },

    methods: {
        addCourse() {
            this.courses.push({ name: this.title, time: this.time });
            this.title = "";
            this.time = 0;
        }
    }
})