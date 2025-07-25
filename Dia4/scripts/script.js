
listaIngredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]

listaCategorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

listaHamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

listaChefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]

booleanito = true;
boolIngrediente = true;
boolHmaburguesa = true;
boolCategoria = true;
boolChef = true;

while (booleanito === true) {
    let menu = parseInt(prompt(
        "=======================================================" + "\n" +
        "Elija el modulo que quiere ver" + "\n" +
        "=======================================================" + "\n" +
        "1. Ingrediente" + "\n" +
        "2. categorias" + "\n" +
        "3. hamburguesas" + "\n" +
        "4. Chef" + "\n" +
        "5. Salir"))

    if (menu === 1) {
        while (boolIngrediente === true) {
            let menuIngredientes = parseInt(prompt(
                "=======================================================" + "\n" +
                "Elija la opcion" + "\n" +
                "=======================================================" + "\n" +
                "1. Crear" + "\n" +
                "2. listar" + "\n" +
                "3. actualizar" + "\n" +
                "4. eliminar" + "\n" +
                "5. Salir"))
            if (menuIngredientes === 1) {
                let nombreI = prompt("Ingrese el nombre del ingrediente")
                let descripcionI = prompt("Ingrese la descripcion del ingrediente")
                let precioI = prompt("Ingrese el precio del ingrediente")
                let stockI = prompt("Ingrese el stock del ingrediente")
                let crearIngrediente = { "nombre": nombreI, "descripcion": descripcionI, "precio": precioI, "stock": stockI }
                listaIngredientes.push(crearIngrediente);
            }
            else if (menuIngredientes === 2) {

                let listarIngredientes = ""

                for (let i = 0; i < listaIngredientes.length; i++) {
                    listarIngredientes = listarIngredientes + (
                        "ID : " + (i + 1) + "\n" +
                        "Nombre : " + listaIngredientes[i]["nombre"] + "\n" +
                        "Descripcion : " + listaIngredientes[i]["descripcion"] + "\n" +
                        "Precio : " + listaIngredientes[i]["precio"] + "\n" +
                        "Stock : " + listaIngredientes[i]["stock"] + "\n"
                    );

                }
                alert(listarIngredientes)
            }
            else if (menuIngredientes === 3) {
                let listarIngredientes = ""

                for (let i = 0; i < listaIngredientes.length; i++) {
                    listarIngredientes = listarIngredientes + (
                        "ID : " + (i + 1) + "\n" +
                        "Nombre : " + listaIngredientes[i]["nombre"] + "\n" +
                        "Descripcion : " + listaIngredientes[i]["descripcion"] + "\n" +
                        "Precio : " + listaIngredientes[i]["precio"] + "\n" +
                        "Stock : " + listaIngredientes[i]["stock"] + "\n"
                    );

                }
                alert(listarIngredientes)
                let actualizarIngredientes = parseInt(prompt(
                    "Ingrese el ID del dato a actualizar: "
                ));
                let confirmarIngredienteNew = parseInt(prompt(
                    "Nombre : " + listaIngredientes[actualizarIngredientes - 1]["nombre"] + "\n" +
                    "Descripcion : " + listaIngredientes[actualizarIngredientes - 1]["descripcion"] + "\n" +
                    "Precio : " + listaIngredientes[actualizarIngredientes - 1]["precio"] + "\n" +

                    "Stock : " + listaIngredientes[actualizarIngredientes - 1]["stock"] + "\n" + "\n" +
                    "Estas seguro que deseas modificar este dato       1.Si 2.No"
                ));
                if (confirmarIngredienteNew === 1) {
                    let nombreINew = prompt("Ingrese el nombre del ingrediente")
                    let descripcionINew = prompt("Ingrese la descripcion del ingrediente")
                    let precioINew = prompt("Ingrese el precio del ingrediente")
                    let stockINew = prompt("Ingrese el stock del ingrediente")
                    let ingredienteActualizado = { "nombre": nombreINew, "descripcion": descripcionINew, "precio": precioINew, "stock": stockINew }
                    listaIngredientes[actualizarIngredientes - 1] = ingredienteActualizado
                }
                else {
                    alert("Gracias por Confirmar")
                }
            }

            else if (menuIngredientes === 4) {
                let listarIngredientes = ""

                for (let i = 0; i < listaIngredientes.length; i++) {
                    listarIngredientes = listarIngredientes + (
                        "ID : " + (i + 1) + "\n" +
                        "Nombre : " + listaIngredientes[i]["nombre"] + "\n" +
                        "Descripcion : " + listaIngredientes[i]["descripcion"] + "\n" +
                        "Precio : " + listaIngredientes[i]["precio"] + "\n" +
                        "Stock : " + listaIngredientes[i]["stock"] + "\n"
                    );

                }
                alert(listarIngredientes)
                let eliminarIngrediente = parseInt(prompt("Ingrese el ID del dato a eliminar: "))
                let confirmarEliminarI = parseInt(prompt(
                    "Nombre : " + listaIngredientes[eliminarIngrediente - 1]["nombre"] + "\n" +
                    "Descripcion : " + listaIngredientes[eliminarIngrediente - 1]["descripcion"] + "\n" +
                    "Precio : " + listaIngredientes[eliminarIngrediente - 1]["precio"] + "\n" +
                    "Stock : " + listaIngredientes[eliminarIngrediente - 1]["stock"] + "\n" + "\n" +
                    "Esta seguro de eliminar este dato  1.Si 2.No"));
                if (confirmarEliminarI === 1) {
                    listaIngredientes.pop(eliminarIngrediente - 1)
                    alert("El dato ha sido eliminado")
                }
                else {
                    alert("Gracias por Confirmar!!!!!!!!!!!")
                }
            }
            else if (menu === 2) {
                while (boolCategoria === true) {
                    let menuCategoria = parseInt(prompt(
                        "=======================================================" + "\n" +
                        "Elija la opcion" + "\n" +
                        "=======================================================" + "\n" +
                        "1. Crear" + "\n" +
                        "2. listar" + "\n" +
                        "3. actualizar" + "\n" +
                        "4. eliminar" + "\n" +
                        "5. Salir"))
                    if (menuCategoria == 1) {
                        let nombreC = prompt("Ingrese el nombre del ingrediente")
                        let descripcionC = prompt("Ingrese la descripcion del ingrediente")
                        let precioC = prompt("Ingrese el precio del ingrediente")
                        let stockC = prompt("Ingrese el stock del ingrediente")
                        let crearCategoria = { "nombre": nombreC, "descripcion": descripcionC, "precio": precioC, "stock": stockC }
                        listaCategorias.push(crearCategoria);
                    }
                    else if (menuCategoria === 2) {

                        let listarCategorias = ""

                        for (let i = 0; i < listaCategorias.length; i++) {
                            listarCategorias = listarCategorias + (
                                "ID : " + (i + 1) + "\n" +
                                "Nombre : " + listaCategorias[i]["nombre"] + "\n" +
                                "Descripcion : " + listaCategorias[i]["descripcion"] + "\n" +
                                "Precio : " + listaCategorias[i]["precio"] + "\n" +
                                "Stock : " + listaCategorias[i]["stock"] + "\n"
                            );

                        }
                        alert(listarCategorias)
                    }
                    else if (menuCategoria === 3) {
                        let listarCategorias = ""
                        let menuHamburguesas = parseInt(prompt(
                            "=======================================================" + "\n" +
                            "Elija la opcion" + "\n" +
                            "=======================================================" + "\n" +
                            "1. Crear" + "\n" +
                            "2. listar" + "\n" +
                            "3. actualizar" + "\n" +
                            "4. eliminar" + "\n" +
                            "5. Salir"))
                        if (menuHamburguesas === 1) {
                            ingredientesList = [""]

                            let nombreH = prompt("Ingrese el nombre de la hamburguesa")
                            let categoriaH = prompt("Ingrese la categoria de la hamburguesa")
                            let ingredientesH = parseInt(prompt("Ingrese cuantos ingredientes desea agregar"))
                            for (let k = 0; k < ingredientesH; k++) {
                                let ingredientesHamburguesa = prompt("Ingrese los ingredientes:  ");
                                ingredientesList.push(ingredientesHamburguesa);

                            }
                            let precioH = prompt("Ingrese el precio de la hamburguesa")
                            let chefH = prompt("Ingrese el chef de la hamburguesa")
                            let crearHamburguesa = { "nombre": nombreH, "categoria": categoriaH, "ingredientes": ingredientesH, "precio": precioH, "chef": chefH }
                            listaHamburguesas.push(crearHamburguesa);
                        }
                        else if (menuHamburguesas === 2) {
                            let listarHamburguesas = ""

                            for (let i = 0; i < listaHamburguesas.length; i++) {
                                listarHamburguesas = listarHamburguesas + (
                                    "ID : " + (i + 1) + "\n" +
                                    "Nombre : " + listaHamburguesas[i]["nombre"] + "\n" +
                                    "Categoria : " + listaHamburguesas[i]["categoria"] + "\n" +
                                    "Ingredientes : " + listaHamburguesas[i]["ingredientes"] + "\n" +
                                    "Precio : " + listaHamburguesas[i]["precio"] + "\n" +
                                    "Chef : " + listaHamburguesas[i]["chef"] + "\n"
                                );
                            } istarCategorias = listarCategorias + (
                                "ID : " + (i + 1) + "\n" +
                                "Nombre : " + listaCategorias[i]["nombre"] + "\n" +
                                "Descripcion : " + listaCategorias[i]["descripcion"] + "\n" +
                                "Precio : " + listaCategorias[i]["precio"] + "\n" +
                                "Stock : " + listaCategorias[i]["stock"] + "\n"
                            );

                        }
                        alert(listarCategorias)
                        let actualizarCategorias = parseInt(prompt(
                            "Ingrese el ID del dato a actualizar: "
                        ));
                        let confirmarCategoriaNew = parseInt(prompt(
                            "Nombre : " + listaCategorias[actualizarCategorias - 1]["nombre"] + "\n" +
                            "Descripcion : " + listaCategorias[actualizarCategorias - 1]["descripcion"] + "\n" +
                            "Precio : " + listaCategorias[actualizarCategorias - 1]["precio"] + "\n" +
                            "Stock : " + listaCategorias[actualizarCategorias - 1]["stock"] + "\n" + "\n" +
                            "Estas seguro que deseas modificar este dato       1.Si 2.No"
                        ));
                        if (confirmarCategoriaNew === 1) {
                            let nombreCNew = prompt("Ingrese el nombre del ingrediente")
                            let descripcionCNew = prompt("Ingrese la descripcion del ingrediente")
                            let precioCNew = prompt("Ingrese el precio del ingrediente")
                            let stockCNew = prompt("Ingrese el stock del ingrediente")
                            let categoriaActualizada = { "nombre": nombreCNew, "descripcion": descripcionCNew, "precio": precioCNew, "stock": stockCNew }
                            listaCategorias[actualizarCategorias - 1] = categoriaActualizada
                        }
                        else {
                            alert("Gracias por Confirmar")
                        }
                    }
                    else if (menuCategoria === 4) {
                        let listarCategorias = ""

                        for (let i = 0; i < listaCategorias.length; i++) {
                            listarCategorias = listarCategorias + (
                                "ID : " + (i + 1) + "\n" +
                                "Nombre : " + listaCategorias[i]["nombre"] + "\n" +
                                "Descripcion : " + listaCategorias[i]["descripcion"] + "\n" +
                                "Precio : " + listaCategorias[i]["precio"] + "\n" +
                                "Stock : " + listaCategorias[i]["stock"] + "\n"
                            );

                        }
                        alert(listarCategorias)

                        let eliminarCategoria = parseInt(prompt("Ingrese el ID del dato a eliminar: "))
                        let confirmarEliminarC = parseInt(prompt(
                            "Nombre : " + listaCategorias[eliminarCategoria - 1]["nombre"] + "\n" +
                            "Descripcion : " + listaCategorias[eliminarCategoria - 1]["descripcion"] + "\n" +
                            "Precio : " + listaCategorias[eliminarCategoria - 1]["precio"] + "\n" +
                            "Stock : " + listaCategorias[eliminarCategoria - 1]["stock"] + "\n" + "\n" +
                            "Esta seguro de eliminar este dato  1.Si 2.No"));
                        if (confirmarEliminarC === 1) {
                            listaCategorias.pop(eliminarCategoria - 1)
                            alert("El dato ha sido eliminado")
                        }
                        else {
                            alert("Gracias por Confirmar!!!!!!!!!!!")
                        }
                    }

                }
            }
            else if (menu === 3) {
                while (boolHmaburguesa === true) {
                    let menuHamburguesas = parseInt(prompt(
                        "=======================================================" + "\n" +
                        "Elija la opcion" + "\n" +
                        "=======================================================" + "\n" +
                        "1. Crear" + "\n" +
                        "2. listar" + "\n" +
                        "3. actualizar" + "\n" +
                        "4. eliminar" + "\n" +
                        "5. Salir"))
                    if (menuHamburguesas === 1) {
                        ingredientesList = [""]

                        let nombreH = prompt("Ingrese el nombre de la hamburguesa")
                        let categoriaH = prompt("Ingrese la categoria de la hamburguesa")
                        let ingredientesH = parseInt(prompt("Ingrese cuantos ingredientes desea agregar"))
                        for (let k = 0; k < ingredientesH; k++) {
                            let ingredientesHamburguesa = prompt("Ingrese los ingredientes:  ");
                            ingredientesList.push(ingredientesHamburguesa);

                        }
                        let precioH = prompt("Ingrese el precio de la hamburguesa")
                        let chefH = prompt("Ingrese el chef de la hamburguesa")
                        let crearHamburguesa = { "nombre": nombreH, "categoria": categoriaH, "ingredientes": ingredientesH, "precio": precioH, "chef": chefH }
                        listaHamburguesas.push(crearHamburguesa);
                    }
                    else if (menuHamburguesas === 2) {
                        let listarHamburguesas = ""

                        for (let i = 0; i < listaHamburguesas.length; i++) {
                            listarHamburguesas = listarHamburguesas + (
                                "ID : " + (i + 1) + "\n" +
                                "Nombre : " + listaHamburguesas[i]["nombre"] + "\n" +
                                "Categoria : " + listaHamburguesas[i]["categoria"] + "\n" +
                                "Ingredientes : " + listaHamburguesas[i]["ingredientes"] + "\n" +
                                "Precio : " + listaHamburguesas[i]["precio"] + "\n" +
                                "Chef : " + listaHamburguesas[i]["chef"] + "\n"
                            );
                        }
                        alert(listarHamburguesas)
                    }
                    else if (menuHamburguesas === 3) {
                        for (let i = 0; i < listaHamburguesas.length; i++) {
                            listarHamburguesas = listarHamburguesas + (
                                "ID : " + (i + 1) + "\n" +
                                "Nombre : " + listaHamburguesas[i]["nombre"] + "\n" +
                                "Categoria : " + listaHamburguesas[i]["categoria"] + "\n" +
                                "Ingredientes : " + listaHamburguesas[i]["ingredientes"] + "\n" +
                                "Precio : " + listaHamburguesas[i]["precio"] + "\n" +
                                "Chef : " + listaHamburguesas[i]["chef"] + "\n"
                            );
                        }
                        alert(listarHamburguesas)
                        let actualizarHamburguesa = parseInt(prompt(
                            "Ingrese el ID del dato a actualizar: "
                        ));
                        let confirmarHamburguesaNew = parseInt(prompt(
                            "Nombre : " + listaHamburguesas[actualizarHamburguesa - 1]["nombre"] + "\n" +
                            "Descripcion : " + listaHamburguesas[actualizarHamburguesa - 1]["descripcion"] + "\n" +
                            "Precio : " + listaHamburguesas[actualizarHamburguesa - 1]["precio"] + "\n" +
                            "Stock : " + listaHamburguesas[actualizarHamburguesa - 1]["stock"] + "\n" + "\n" +
                            "Estas seguro que deseas modificar este dato       1.Si 2.No"
                        ));
                        if (confirmarHamburguesaNew === 1) {
                            let nombreHNew = prompt("Ingrese el nombre del ingrediente")
                            let descripcionHNew = prompt("Ingrese la descripcion del ingrediente")
                            let precioHNew = prompt("Ingrese el precio del ingrediente")
                            let stockHNew = prompt("Ingrese el stock del ingrediente")
                            let hamburguesaActualizada = { "nombre": nombreHNew, "descripcion": descripcionHNew, "precio": precioHNew, "stock": stockHNew }
                            listaHamburguesas[actualizarHamburguesa - 1] = hamburguesaActualizada
                        }
                        else {
                            alert("Gracias por Confirmar")
                        }
                    }
                    else if (menuHamburguesas === 4) {
                        let listarH = ""

                for (let i = 0; i < listaIngredientes.length; i++) {
                    listarIngredientes = listarIngredientes + (
                        "ID : " + (i + 1) + "\n" +
                        "Nombre : " + listaIngredientes[i]["nombre"] + "\n" +
                        "Descripcion : " + listaIngredientes[i]["descripcion"] + "\n" +
                        "Precio : " + listaIngredientes[i]["precio"] + "\n" +
                        "Stock : " + listaIngredientes[i]["stock"] + "\n"
                    );

                }
                alert(listarIngredientes)
                let eliminarIngrediente = parseInt(prompt("Ingrese el ID del dato a eliminar: "))
                let confirmarEliminarI = parseInt(prompt(
                    "Nombre : " + listaIngredientes[eliminarIngrediente - 1]["nombre"] + "\n" +
                    "Descripcion : " + listaIngredientes[eliminarIngrediente - 1]["descripcion"] + "\n" +
                    "Precio : " + listaIngredientes[eliminarIngrediente - 1]["precio"] + "\n" +
                    "Stock : " + listaIngredientes[eliminarIngrediente - 1]["stock"] + "\n" + "\n" +
                    "Esta seguro de eliminar este dato  1.Si 2.No"));
                if (confirmarEliminarI === 1) {
                    listaIngredientes.pop(eliminarIngrediente - 1)
                    alert("El dato ha sido eliminado")
                }
                else {
                    alert("Gracias por Confirmar!!!!!!!!!!!")
                }
                    }
                }
            }


        }

    }
}


