const socket = io();

const list = document.getElementById("listproducts")
socket.on("productos", (productos) => {
    
    console.log(productos)
       let listProducts = "";
    productos.forEach((prod) => {
     
        listProducts += `<br>`+`-`+`The product ${prod.title} with the code ${prod.code} with a description ${prod.description} and the price of that product is ${prod.price}</br>`;
    });
    list.innerHTML = `${listProducts}`
 
});