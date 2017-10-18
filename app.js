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

new Vue({
    el: '#vue-computed-properties',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        /*addToA: function () {
            console.log('addToA')
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB')
            return this.b + this.age;
        }*/
    },
    computed: {
        addToA: function () {
            console.log('addToA')
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB')
            return this.b + this.age;
        }
    }
});
new Vue({
    el: '#vue-dynamic-css',
    data: {
        available: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        },
    }
});
new Vue({
    el: '#vue-conditionals',
    data: {
        success: false,
        error: false
    },
    methods: {

    },
    computed: {
        
    }
});

new Vue({
    el: '#vue-boucle-for',
    data: {
        name: 'Jack',
        characters: ['Mario', 'Luigi', 'Yoshi'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 35},
            {name: 'Ken', age: 45},
            {name: 'Toto', age: 55}
        ]
    },
    methods: {

    },
    computed: {
        
    }
});
new Vue({
    el: '#vue-punchbag',
    data: {
        name: 'Jack',
        characters: ['Mario', 'Luigi', 'Yoshi'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 35},
            {name: 'Ken', age: 45},
            {name: 'Toto', age: 55}
        ]
    },
    methods: {

    },
    computed: {
        
    }
});
