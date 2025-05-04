const menu = [
    { name: "Margherita" , price : 8 },
    { name: "Pepperoni" , price : 10 },
    { name: "BBQ Chicken" , price : 12 },
    { name: "Vegetarian" , price : 9 },
    // { name: "Hawaiian" , price : 11 },
    // { name: "Meat Lovers" , price : 13 },
    // { name: "Buffalo Chicken" , price : 12 },
    // { name: "Pesto Veggie" , price : 10 },
    // { name: "Four Cheese" , price : 11 },
]
const cashInRegister = 100;
const orderQueue = []
function addNewPizza(pizzaObject) {
    menu.push(pizzaObject);
}
function placeOrder(pizzaName) {
    const pizza = menu.find(p => p.name === pizzaName);
    cashInRegister += pizza.price;
    const newOder = {
        id: orderId++,
        name: pizza.name,
        status: "Ordered",
    }; 
    return newOder;
}
function completeOrder(orderId) {
    const order = menu.find(o => o.id === orderId)
    order.status = "Completed";
    return order;
}
addNewPizza({ name: "Seafood" , price : 14 });
addNewPizza({ name: "Spinach and Feta" , price : 10 });
addNewPizza({ name: "Tandoori Chicken" , price : 12 });
placeOrder("Tandoori Chicken");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);