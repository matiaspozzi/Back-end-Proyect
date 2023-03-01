import ProductsManager from "./archivos";
const Prin = new ProductsPrin();
const operacionesProductos = async () => {
try {
    let product1 = await Prin.addProduct(
    "1",
    "flx4",
    "negra",
    100000,
    "image",
    50
    );
    console.log(product1);
    let product2 = await Prin.addProduct(
    "2",
    "Cdj-2000",
    "MARRON",
    150000,
    "image",
    25
    );
    console.log(product2);
    let product3 = await Prin.addProduct(
    "3",
    "cdj-3000",
    "negro",
    2000000,
    "image",
    25
    );
    console.log(product3);

    let segundaConsulta = await Prin.getProductById(2);
    console.log(segundaConsulta);
    let productAct = await Prin.updateProduct(1, "flx4");
    console.log(productAct);
    let deleteproduct1 = await Prin.deleteProducts(3);
    console.log(deleteproduct1);
} catch (error) {
    console.log(error);
}
};
operacionesProductos();