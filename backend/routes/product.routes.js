import express from "express" //for routes
import { getproduct,addproducts,getproductbyuser,myproducts,getproductbyid} from "../controller/product.controller.js"
// import Product from "../model/product.model.js"
const router=express.Router()


//on requesting / we must have the funciton getbook runned


//this is a api created
router.get('/',getproduct) 
router.post('/addproduct/:userId',addproducts)
router.get('/getproducts/:userId',getproductbyuser)
router.get('/myproducts/:userId',myproducts)
router.get('/getaproductbyid/:id',getproductbyid)
export default router