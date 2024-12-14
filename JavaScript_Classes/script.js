

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

//-------section 2 Creating a subclass --------------------------//

class PerishableProductProperties extends ProductProperties{
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString(){
        return "Product: "+this.name+", "+"Price: $"+this.price+", "+"Quantity: "+this.quantity+
        " Expiration Date: "+this.expirationDate;
    }

    }

    //Two instaces of the subclass/parent class with sample data

    const banana = new PerishableProductProperties("banana", 70, 100, "2024-12-31")

    const clipper = new ProductProperties("Clipper", 30, 40);

    console.log(clipper.getTotalValue());
    console.log(clipper.toString());

    console.log(banana.getTotalValue());
    console.log(banana.toString());

