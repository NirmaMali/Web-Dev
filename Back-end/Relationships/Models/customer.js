const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(()=> console.log("Connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("pre middleware called");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length > 0){
       let res= await Order.deleteMany({
            _id: {
                $in: customer.orders,
            } });
            console.log(res);
        }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//functions
const findCustomer = async () => {
let result =await Customer.findOne({}).populate("orders");
console.log(result);
};

// findCustomer();

const addOrders = async () => {
    let newCust= new  Customer({
        name: "Karan Arjun",
    });

    let newOrder1 = new Order({
        item: "Burger",
        price: 150,
    });

    newCust.orders.push(newOrder1);

    await newOrder1.save();
    await newCust.save();

    console.log("added new customer");
};

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("699869034bae37d12d111a7c");
    console.log(data);
};

// addOrders();

delCust();

