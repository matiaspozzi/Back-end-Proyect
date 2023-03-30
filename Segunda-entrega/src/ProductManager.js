import fs from "fs";
import express from "express";
import { Blob } from "buffer";
import socket from "./socket.js";

export default class ProductManager {
    constructor() {
        this.productos = [];
        this.pathfiles = "./files";
        this.path = "./files/Productos.json";
    }

    productServer = express();
    returnObject = async () => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const result = JSON.parse(data);
        return result;

    }

    getProducts = async () => {
        try {
            if (!fs.existsSync(this.pathfiles)) {
                fs.mkdirSync(this.pathfiles)
            return [];
            }
            if (fs.existsSync(this.path)) {

                const data = await fs.promises.readFile(this.path, 'utf-8');

                const size = new Blob([data]).size;
                if (size > 0) {
                    const result = JSON.parse(data);
                    return result;
                } else {
                    return [];
                }
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)
        }

    }
    addProduct = async (productObject) => {

        try {
            if (!productObject.title || !productObject.description || !productObject.code || !productObject.price || !productObject.stock || !productObject.category) {
              
                return `All the fields must be completed`
            }
            if (productObject.id || productObject.id == 0) {
           
                return `The product does not have an ID assigned`
            }
            productObject.stock > 0
                ? productObject = { status: true, ...productObject }
                : productObject = { status: false, ...productObject }


         
      
            const productos = await this.getProducts();
            const productIndex = await productos.findIndex((prod) => prod.code === productObject.code);

            if (productIndex === -1) {
                productos.length === 0
                    ? productObject = { id: 1, ...productObject }
                    : productObject = { id: productos[productos.length - 1].id + 1, ...productObject }
                productos.push(productObject);
                await fs.promises.writeFile(this.path, JSON.stringify(productos, null, "\t"));
                socket.io.emit("productos", productos);
                return productos;
            } else {
                return `The product already exist in the list`
            }

        } catch (error) {
            console.log(error);
        }

    }

    getProductById = async (id) => {

        try {

            if (fs.existsSync(this.path)) {
                if (isNaN(id) || id < 1) {
                    return `This product has not a valid ID`
                }

                const result = await this.getProducts();
                let indexValue = result.find((event) => event.id === Number.parseInt(id));
                if (indexValue !== undefined) {
                    return indexValue;
                } else {
                  return `his product  with this ID does not exist in the list`
                }
         
               



            }
        } catch (error) {
            console.log(error);
        }



    }
    deleteProducts = async (id) => {
        try {
            if (id === null) {
                return `The Id does not exist`
            }
            if (isNaN(id) || id <= 0) {
                return `The id has not a valid value`
            }
            const productos = await this.getProducts()
            let productFounded = products.findIndex((product) => product.id === Number.parseInt(id))
            if (productFounded !== -1) {
                const valor = productos.filter((event) => event.id != id);
                await fs.promises.writeFile(this.path, JSON.stringify(valor, null, "\t"))
                socket.io.emit("productos", valor);
                return productFounded;
            } else {
                return `The product with this id does not exist so can not be eliminated`;
            }
        } catch (error) {
            console.log(error)
        }

    }
    updateProduct = async (idUpdate, productUpdate) => {
        try {

            const productos = await this.getProducts();
            if (!productUpdate) {
                return res.status(400).send({
                    status: "error",
                    message: { error: "The fields does not have any value" },
                });
            }
            if (isNaN(idUpdate) || idUpdate <= 0) {
                return `Id with a invalid position`;

            }
            if (productUpdate.id) {
                return res.status(400).send({
                    status: "error",
                    message: { error: "The ID of this product can not change" },
                });
            }
            let productExists = productos.findIndex((product) => product.id === Number.parseInt(idUpdate))
            if (productExists !== -1) {


                const productos = await this.getProducts();
                const productIdFound = products.findIndex((prod) => prod.id === parseInt(idUpdate));
          
                if (productIdFound !== -1) {
                  const updatedProduct = { ...productos[productIdFound], ...productUpdate}
                  products[productIdFound] = updatedProduct;
                  await fs.promises.writeFile(this.path,JSON.stringify(productos, null, "\t"));
                  return productos;
                } else {
                  return productIdFound
                }
             
            } else {
                return `The product with this id does not exist on the list so can not be updated`;
            }
        } catch (error) {
            console.log(error)
        }

    }

}
