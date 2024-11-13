let marketvendor = {
    location: "Kampala",
    products: [
    { name: "Bananas", price: 10000, quantity: 50 },
    { name: "cassava", price: 15000, quantity: 20 },
    { name: "tomatoes", price: 30000, quantity: 30 }
    ],
    calculateTotalrevenue: function() {
        let totalRevenue = 0;
        for (let product in this.products) {
            totalRevenue += this.products[product].price * this.products[product].quantity;
        }
        return totalRevenue;
    }
};

const totalRevenue = marketvendor.calculateTotalrevenue();
console.log(`The total revenue for all products in stock is $${totalRevenue}.`);
  