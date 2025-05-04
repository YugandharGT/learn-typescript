type Pizza = {
    id: number
    name: string
    price: number
}
type Order= {
    id: number
    name: Pizza
    status: "Ordered" | "Completed"
   }
const menu = [
    { id: 1, name: "Margherita" , price : 8 },
    { id: 2, name: "Pepperoni" , price : 10 },
    { id: 3, name: "BBQ Chicken" , price : 12 },
    { id: 4, name: "Vegetarian" , price : 9 },
]
 let cashInRegister = 100;
 let orderId = 1;
const orderQueue : Order[] = []
function getPizzaDetails(identifier: string | number) {
    if (typeof identifier === "string") {
        const pizza = menu.find(p => p.name.toLowerCase() === identifier.toLowerCase());
        if (!pizza) {
            console.log("Pizza not found in the menu.");
            return;
        }
        return pizza;
    } else {
        const order = menu.find(m => m.id === identifier);
        if (!order) {
            console.log("Order not found.");
            return;
        }
        return order;
    }
}
function addNewPizza(pizzaObject: Pizza) {
    menu.push(pizzaObject);
}
function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(p => p.name === pizzaName);
    if (!selectedPizza) {
        console.log("Pizza not found in the menu.");
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOder: Order = {
        id: orderId++,
        name: selectedPizza,
        status: "Ordered",
    }; 
    orderQueue.push(newOder);
    return newOder;
}
function completeOrder(orderId: number) {
    const order = orderQueue.find(o => o.id === orderId);
    if (!order) {
        console.log("Order not found.");
        return;
    }
    order.status = "Completed";
    return order;
}

placeOrder("Tandoori Chicken");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);

let myName: string = "John Doe";
let numberOfWheels: number = 4;
let isElectric: boolean = true;





type Address = {
    street:string
    city:string
    country:string
}
type Person = {
name: string
age:number
isStudent:boolean
address?: Address
}
let person: Person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}
let person2: Person = {
    name: "Jane Smith",
    age: 25,
    isStudent: true,
}

type User = {
    Usernmae: string
    role: "guest" | "admin" | "member"
}

type UserRole = "guest" | "admin" | "member"
let userRole: UserRole = "xjkgjdlks"
