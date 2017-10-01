// equivalent to 
// const ColorRed = 0; const ColorGreen = 1, const ColorBlue = 2;
enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;

// type conversion
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');

// lambda function or arrow function
// equivalent to (message) => {console.log(message)}
let doLog = (message) => console.log(message);

// class with optional parameters
class Point {
    // by defaul all variables are public
    // ? means this parameter is optinoal
    constructor(private _x?: number, private _y?: number) {
        // typescript will do the following automatically
        // if an access modifer is specified
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log(this._x + ' and ' + this._y)
    }

    // getter
    get x() { 
        return this._x
    }

    //  setter
    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0');
        this._x = value;
    }
}

// create an instance of Point 
let point = new Point(1, 2);
point.draw()
// usage of hidden getter and setter
let x = point.x
point.x = 1