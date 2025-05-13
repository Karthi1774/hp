// class constructor

class car{
    constructor(brand,price,speed,capacity,color){
        this.brand=brand;
        this.price=price;
        this.speed=speed;
        this.capacity=capacity;
        this.color=color;
    }
    create(){console.log(`I need ${this.brand} Car\nIts minimum ${this.price} cost\nIt run ${this.speed} \nThe Maximum of ${this.capacity} \nand i like ${this.color}`)}
}
const output= new car("BMW","25lakhs","200kmph","5 seats","blue")
output.create();

