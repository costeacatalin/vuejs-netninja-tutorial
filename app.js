new Vue({
    el: '#vue-binding',
    data: {
        name: "Cat",
        job: "on sait pas",
        website: "http://google.fr",
        websiteTag: '<a href="http://yahoo.fr">websisteTag</a>'
    },
    methods: {
        greet: function(moment) {
            return 'Good ' + moment + ' ' + this.name;
        },
    }
});

new Vue({
    el: '#vue-mouse-event',
    data: {
        age: 39,
        coordX: 0,
        coordY: 0
    },
    methods: {
        addYear: function(year) {
            this.age+=year;
        },
        subYear: function(year) {
            this.age-=year;
        },
        updateXY: function(event) {
            this.coordX = event.offsetX;
            this.coordY = event.offsetY;
        },
        click: function() {
            alert("You clicked on me !");
        }
    }
});

new Vue({
    el: '#vue-key-event',
    data: {

    },
    methods: {
        logName: function () {
            console.log('You entered your name');
        },
        logAge: function () {
            console.log('You entered your age');
        }
    }
});

new Vue({
    el: '#vue-binding-2-ways',
    data: {
        height: ''
    },
    methods: {
        logHeight: function () {
            console.log('You entered your name');
        },
    }
});