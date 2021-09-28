class BMI
{

    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }

}

letmyBMI = new BMI(2, 90);
let calc = myBMI.calculateBMI();
console.log(calc);

//console.log(`make: ${this,make}`)
//class Cars extends Vehicle
//