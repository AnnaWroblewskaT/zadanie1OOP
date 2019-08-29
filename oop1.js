function Phone(brand, price, color, memory) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.memory = memory;
}

Phone.prototype.printInfo = function () {
    console.log("Brand: " + this.brand + ", price: " + this.price + "zł, colour: " + this.color + ", memory: " + this.memory + "GB.")
}

//apply 10% discount
Phone.prototype.discount10 = function () {

    let newPrice = this.price - this.price * 0.1;
    console.log("Price with our coupon is only " + newPrice + "!")
}

const samsungGalaxyS6 = new Phone("Samsung", 600, "black", 15);
const iPhone6s = new Phone("Apple", 2600, "white", 30);
const onePlusOne = new Phone("One", 300, "blue", 18);
const nokia00 = new Phone("Nokia", 450, "silver", 12);