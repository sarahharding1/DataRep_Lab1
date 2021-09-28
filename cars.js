class Vehicle
{
    constructor(make, model, year){
        // arguments
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// let myVehicle = new Vehicle('VW', 'Golf', 2021);
// myVehicle.Information();


// child class
class Cars extends Vehicle
{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        // method that shows the number of doors
        console.log(`Doors: ${this.doors}`);
    }
}

let mcCar = new Cars('VW', 'Polo', 2021, 5);
myCar.Information();