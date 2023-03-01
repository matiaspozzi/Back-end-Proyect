import fs from "fs"

export default class ProductsManager {

    constructor() {
        this.products = [];
        this.path = ".products.json"

    };

    addProduct = async (Id, title, description, price, thumbnail, stock) => {

        const productIndex = this.products.findindex((product) => product.Id === Id)

        if (!Id || !title || !description || !price || !thumbnail || !stock) {
            console.log(`all fields are mandatory`);
            return;
        }

        if (productIndex === -1) {
            const product = {
                Id: this.product.length + 1,
                title,
                description,
                price,
                thumbnail,
                stock,
            };
            this.products.push(product);
            await fs.promises.writeFile(
                this.path, Json.stringlify(this.products, null, "\t")
            );
        } else {
            product.id = product.id = product[product.length - 1].id + 1

            console.log(`producto con mismo ${Id}`)
        }
    };

    getProducts = () => {
        console.log(this.products);
        return this.products;
    };





    getproductById = async (prodId) => {
        const productIdFound = this.products.findindex((prod) => prod.Id === productId)
        if (productIdFound === -1) {
            console.log(`Error: product with product ID ${productId} was not found`);

        } else {
            console.log(`info on product with product ID ${prodId}:`);
            console.log(this.products[productIdFound])
        }

    }


    deleteProducts = async (Id) => {

        if (fs.existsSync(this.path)) {
            let productFounded = this.products.find((product) => product.id === Id)

            if (productFounded) {
                try {
                    const valor = this.products.filter((event) => event.id != Id);

                    this.products = valor;

                    await fs.promises.writeFile(
                        this.path,
                        JSON.stringify(valor, null, "\t")
                    );
                    return "Product deleted";
                } catch (error) {
                    console.log(error);
                }
            } else {
                return `the product was deleted. id: ${Id} does not exist`;
            }
        }
    }


    updateProduct = async (Id, title, description, price, thumbnail, stock) => {
        try {
            const products = await this.getProducts();

            if (products === "error") {
                return "the file is empty";


            }

            let productExists = products.find((product) => product.Id === Id)
            if (productExists != undefined) {

                const productUpToUpdate = products.filter((product) => product.Id === Id);

                const productUpdate = {

                    Id: Id ?? productUpToUpdate[0].Id,
                    Name: Name ?? productUpToUpdate[0].Name,
                    Stock: Stock ?? productUpToUpdate[0].Stock,
                    Descript: Descript ?? productUpToUpdate[0].Descript,
                    Precio: Precio ?? productUpToUpdate[0].Precio,
                    Foto: Foto ?? productUpToUpdate[0].Foto,
                }

                products[Id - 1] = productUpdate;

             
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                return "productUptated";

            } else {
                return `the product to update to id: ${Id} does not exist in the list`;


            }

        } catch (error) {
            console.log(error)


        }
    }
}