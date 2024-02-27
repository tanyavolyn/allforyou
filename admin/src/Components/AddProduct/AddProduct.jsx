import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image:"",
        category: "blusen",
        price: ""
    });

    const imageHandler = (e) => {
setImage(e.target.files[0]);
    }
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }
    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append("product", image);
        await fetch("http://localhost:8000/upload", {
            method: "POST",
            headers:{
                Accept:"application/json",
            },
            body:formData, 
        }).then((res) => res.json()).then((data)=>{responseData=data});
       
        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
       

            await fetch("http://localhost:8000/addproduct", {
                method: "POST",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(product),

            }).then((res)=>res.json()).then((data)=>{
                data.success?alert("Product added"):alert("Faild")
            })
        }
    
    }

  return (
    <div>
<p>Product title</p>
<input value = {productDetails.name} onChange = {changeHandler} type="text" name="name" placeholder="Type here"/>
<p>Price</p>
<input value = {productDetails.price} onChange = {changeHandler} type="text" name="price" placeholder="Type here"/>
<p>Product Category</p>
<select value = {productDetails.category} onChange = {changeHandler} name="category">
    <option value="blusen">Blusen</option>
    <option value="maentel">Mäntel</option>
    <option value="kleider">Kleider</option>
    <option value="roecke">Röcke</option>
    <option value="hose">Hose</option>
    <option value="schuhe">Schuhe</option>
</select>
<label htmlFor="file-input">
    <img src={image ? URL.createObjectURL(image) : upload_area}/>
</label>
<input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
<button onClick={()=>{Add_Product()}}>Add</button>
    </div>
  )
}

export default AddProduct;