import { Server } from "socket.io";
import ProductManager from "./ProductManager.js";
const socket = {};
socket.connect = (server) => {
    const productManager = new ProductManager();
    socket.io = new Server(server);
  
    socket.io.on("connection", async (socket) => {
      console.log(`cliente conectado`);
      const productos = await productManager.getProducts();

      socket.emit("productos",productos);
    });
  };
  

export default socket