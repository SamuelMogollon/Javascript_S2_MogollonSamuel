
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

                for(let i = 0; i < listaIngredientes.length; i++) {
                    listarIngredientes = listarIngredientes +(
                        "ID : " + (i + 1) + "\n" +
                        "Nombre : " + listaIngredientes[i]["nombre"] + "\n" +
                        "Descripcion : " + listaIngredientes[i]["descripcion"] + "\n" +
                        "Precio : " + listaIngredientes[i]["precio"] + "\n" +
                        "Stock : " + listaIngredientes[i]["stock"] + "\n"
                    );

                }
                alert(listarIngredientes)
            }
            else if (menuIngredientes ===  3) {
                let listarIngredientes = ""

                for(let i = 0; i < listaIngredientes.length; i++) {
                    listarIngredientes = listarIngredientes +(
                        "ID : " + (i + 1) + "\n" +
                        "Nombre : " + listaIngredientes[i]["nombre"] + "\n" +
                        "Descripcion : " + listaIngredientes[i]["descripcion"] + "\n" +
                        "Precio : " + listaIngredientes[i]["precio"] + "\n" +
                        "Stock : " + listaIngredientes[i]["stock"] + "\n"
                    );

                }
                alert(listarIngredientes)
                let actualizarIngredientes = parseInt(prompt(
                    "*"
                ));
            }
        }
    }
}
