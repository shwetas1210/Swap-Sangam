import Product from '../models/product.model.js'
import User from '../models/user.model.js'

export const getproduct=async(req,res)=>{   //we have used async here beacuse communication with database is asynchronous
    try{
    const product=await Product.find()  //since its asynchrnous operation
    res.status(200).json(product) //res 400 is taht of success
    }
    catch(error){
console.log("error in controller",error)
res.status(500).json(error)  //500 is internal server errror
    }

}
export const addproducts = async(req,res)=>{
    console.log(req.body);
    const userId = req.params.userId;
    try{
         const newproduct = new Product(req.body);
         await newproduct.save();
         const user = await User.findByIdAndUpdate(
              userId,
              { $push: { myproducts: newproduct._id } },
              { new: true }
         );
         res.status(200).json(newproduct);
    }
    catch(e){
         console.log(e);
    }
}

export const getproductbyuser = async(req,res)=>{
    console.log(req.params.userId);
    const userId=req.params.userId
    try{
         const user =  await User.findById(userId);
         const myproducts = user.myproducts;
         const product = await Product.find({ _id: { $in: myproducts } });
         res.status(200).json(product);
    } 
    catch(e){
         console.log(e);
    }
}
export const myproducts = async(req,res)=>{
     console.log(req.params.userId);
     const userId=req.params.userId
     try{
          const user =  await User.findById(userId);
          const myproduct = user.myproducts;
          const products = await Product.find({ _id: { $in: myproduct } });
          res.status(200).json(products);
     } 
     catch(e){
          console.log(e);
     }
}

export const getproductbyid = async(req,res)=>{
    const id = req.params.id;
    try{
         const product = await Product.findById(id);
         res.status(200).json(product);
    }
    catch(e){
         console.log(e);
    }
}