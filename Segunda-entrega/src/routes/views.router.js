import ProductManager from '../ProductManager.js';
import { Router } from "express";


const router = Router();
const productmanager=new ProductManager();

const productos= await productmanager.getProducts();

router.get("/",async(req,res)=>{
    

    res.render("home",{productos, style: "styles.css", title: "Products"});
})

router.get("/realtimeproducts", async (req,res)=>{
   res.render("realTimeProducts",{
    productos,
    style:"styles.css",
    title:"Real Time Products",
   });
});

export default router;