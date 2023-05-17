function Circle(radius) {

    this.radius = radius;

    let defaultLocation = { X: 0,  y: 0 };

    this.getDefaulLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', { 
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            console.log(value)
            if (!value.x || !value.y)
              throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}


const circle = new Circle(1);
circle.defaultLocation



