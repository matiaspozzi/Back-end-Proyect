import ManagerUsuarios from "./ManagerUsers.js";

const manager = new ManagerUsuarios()

const env = async() => {
    let primeraConsulta = await manager.ManagerUsuarios
    console.log(primeraConsulta)

    const usuario = {
        nombre:"Mario",
        apellido:"Valencia",
        edad: 26,
        curso:"back-end"
    }

    let result = await manager.crearUsuario(usuario)
console.log(result)

    let segundaConsulta = await manager.consultarUsuarios();
    console.log(segundaConsulta)
}

env()