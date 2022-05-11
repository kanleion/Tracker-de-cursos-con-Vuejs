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

            //validando que el array este vacio o que su propiedad esta vacia
            if (!this.courses.length) {
                return 0;
            }

            let sum = 0;
            for (let i = 0; i < this.courses.length; i++) {
                sum += parseInt(this.courses[i].time);
            }
            return sum;
        }
    },

    methods: {
        addCourse() {
            if (!this.title || !this.time) {
                return
            }
            this.courses.push({ name: this.title, time: this.time });
            this.title = "";
            this.time = 0;
        }
    }
})