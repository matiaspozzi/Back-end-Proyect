import ManagerUsuarios from "./ManagerUsers.js";

const manager = new ManagerUsuarios()

const env = async() => {
    let primeraConsulta = await manager.consultarUsuarios()
    console.log(primeraConsulta)

    const usuario = {
        nombre:"Mario",
        apellido:"Valencia",
        edad: 26,
        curso:"back-end"
    }

    let result = await manager.crearUsuarios(usuario)
console.log(result)

    let segundaConsulta = await manager.consultarUsuarios();
    console.log(segundaConsulta)
}

env()