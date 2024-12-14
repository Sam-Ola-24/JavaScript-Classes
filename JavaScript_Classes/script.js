

class ProductProperties{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //Method to get total value
    getTotalValue(){
        return this.price * this.quantity;
    }

    toString(){
        return "Product: "+this.name+", "+"Price: $"+this.price+", "+"Quantity: "+this.quantity;
    }
}

//Test statements
// let test = new ProductProperties("Mango", 30, 40);

// console.log(test.getTotalValue());
// console.log(test.toString());