import ProductManager from '../ProductManager.js';
import { Router } from "express";


const router = Router();
const productmanager=new ProductManager();

router.get("/",async(req,res)=>{
    const productos= await productmanager.getProducts();

    res.render("home",{productos});
})

router.get("/realtimeproducts", async (req,res)=>{
   
    res.render("realTimeProducts",{});
})
export default router;