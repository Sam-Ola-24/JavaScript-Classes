

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

    //Method to print properties as string
    toString(){
        return "Product: "+this.name+", "+"Price: $"+this.price+", "+"Quantity: "+this.quantity;
    }

    //Static method to apply discount
    static applyDiscount(products, discount){
        let i;
        for(i = 0; i < products.length; i++){
            products[i].costPerItem = products[i].costPerItem - (discount / 100);
        }
    return  console.log(JSON.stringify(products));
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

    const banana = new PerishableProductProperties("Banana", 70, 100, "2024-12-31")

    const clipper = new ProductProperties("Clipper", 30, 40);

    console.log(clipper.getTotalValue());
    console.log(clipper.toString());

    console.log(banana.getTotalValue());
    console.log(banana.toString());

    //---------Creating static Methods and properties ---// 

    const productObject = 
    [
        {productName:"Computer", costPerItem:90},{productName:"Pencils", costPerItem:10},
        {productName:"Bags", costPerItem:80},{productName:"Books", costPerItem:40}
    ]

ProductProperties.applyDiscount(productObject, 20);
