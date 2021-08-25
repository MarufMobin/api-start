const user = { id: 1, name: "Gorib's Amir", job: "Actor" };
// console.log(user)
const stringified = JSON.stringify(user);
// console.log(stringified)


const store = {
    name: "Alia Store",
    addres: "Ranbir Road",
    profit: 1500,
    product: [ "Laptop", "Mobile", "MotherBoard"],
    owner: {
        name: "Alia Bhatt",
        profetional: "Actor",
    } ,
    isExpensive : false
};

const storeSringified = JSON.stringify(store);
// console.log(store)
// console.log(storeSringified);

const reverseStringified = JSON.parse(storeSringified);
// console.log(reverseStringified)