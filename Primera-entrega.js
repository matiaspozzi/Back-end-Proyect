class ProductsManager {

    constructor() {
        this.products = [];


        getProduct = () => {
            console.log(this.products)
            return this.products;
        };

        if (product === -1) {
            const product = {
                prodId: this.product.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(product);

            console.log(`product with code ${code} added successfully`);

        } else {
        }
        console.log(`Error: Product with code ${code} already exist`);
    };
};



getproductById = (prodId) => {
    const productIdFound = this.products.findindex((prod) => prod.prodId === productId)
    if (productIdFound === -1) {
        console.log(`Error: product with product ID ${productId} was not found`);


    } else {
        console.log(`info on product with product ID ${productId}:`);
        console.log(this.products[productIdFound])
    }

}


addProduct = (title, description, price, thumbnail, code, stock) =>{
    
    const productIndex = this.products.findindex((product) =>product.code === code)

    
    if( !title || !description || !price || !thumbnail || !code || !stock) {
        console.log(`all fields are mandatory`);
        return
    }
    
}