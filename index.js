
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

for (const key in customer){
    console.table(customer)
};

delete customer.email
customer.email = "Jak3Smith1992@email.com"
console.table(customer)

delete customer.email
customer.phone = "3195551234"
console.table(customer)

delete customer.email
customer.zipCode = "63132"
console.table(customer)

delete customer.email
customer.favoriteFlavors = "coffee", "strawberry"
console.table(customer)
// adding , (and "matcha") to the end of the above syntax, gave me an error every time so i took it out. 
delete customer.email
customer.zipCode = null
console.table(customer)

delete customer.email
customer.favoriteStore = null
console.table(customer)