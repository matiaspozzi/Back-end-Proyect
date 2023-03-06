import ProductManager from './desafio.js';
const manager = new ProductManager();
const operacionesProductos = async () => {
    try {



       await manager.getProducts();

        
              let product3 = await manager.addProduct("FGA04", "CDJ-3000", "Negra", 3000000, "no-image", 29)
        console.log(product3)
         let productoId= await manager.getProductById(2)
         console.log(productoId);
     
    } catch (error) {
        console.log(error);
    }


}
operacionesProductos();