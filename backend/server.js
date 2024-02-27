const express = require('express');
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));


require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 1000;
app.use(express.json());
app.use(cors());

// const ImportData = require('./DataImport.js');
// const productRoute = require('./Routes/ProductRoutes.js');
// const { notFound, errorHandler } = require('./Middleware/Errors.js');




mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("WE WERE CONNECTED TO MONGO"))
.catch ((err) => console.log(err))

//API
app.get("/", (req,res) => {
    res.send("Express App is running")
})


// app.use("/api/import/", ImportData);
// app.use("/api/products/", productRoute);
const storage = multer.diskStorage({
    destination: "./upload/image",
    filename:(req,file,cb) =>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})

//upload image
app.use("/images,", express.static("upload/images"))
app.post("/upload", upload.single("product"), (req,res) => {
    res.json({
        success: 1,
image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    // searchTerm: {
    //     type: String,
    //     required: true,
    // },
    price: {
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    avilable: {
        type: Boolean,
        default: true,
    }
})

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length>0){
        let last_product_array = products.slice(-1);
        let last_product =last_product_array[0];
        id = last_product.id+1;
    } else {
        id=1;

    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        //searchTerm: req.body.searchTerm,
        price: req.body.price
    });

    console.log(product)
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})



// ERROR
// app.use(notFound)
// app.use(errorHandler)

// Creating API for deleting Products
app.post("/removeproduct", async(req,res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})



// Creating API for getting all products

app.get ("/allproducts", async (req,res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);

})

//creating endpoint for edding products in cart 
app.post("/addtocart", async (req,res) => {
console.log(req.body)
})

//Shema creating for User model

const Users = mongoose.model("Users", {
    name: {
        type: String,
         },
  email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
         },
         cartData: {
            type: Object,
             },
             date:{
                type: Date,
                default:Date.now,
             }
})

// Creating Endpoint for registering the user

app.post("/signup", async(req,res) => {
let check = await Users.findOne({email:req.body.email});
if(check){
    return res.status(400).json({success:false, errors: "existing user found with same email adress"})
}
let cart = {};
for (let i=0; i < 300; i++){
    cart[i]=0;
}
const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password:req.body.password,
    cartData:cart,
})
await user.save();
const data = {
    user:{
        id:user.id
    }
}
const token = jwt.sign(data, "secret_ecom");
res.json({success:true, token})
})

// Creating endpoint for user login 
app.post("/login", async (req,res) =>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, "secret_ecom");
            res.json({success:true, token})
        }else{
            res.json({success:false, errors:"Wrong Password"})
        }
      }else{
        res.json({success:false, errors:"Wrong Email"})
      }
})

// app.post("/addtocart", async (req,res) =>{

// })

 //Create an endpoint for saving the product in cart
 app.post('/getcart', async (req, res) => {
    console.log("Get Cart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
  
    })

// creating endpoint for adding products in the cart

app.post("/addtocart", async(req,res)=>{
    console.log(req.body);
})

app.listen (PORT, () => {
    console.log(`server running in port ${PORT}`)
})