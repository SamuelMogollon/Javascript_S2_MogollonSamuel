
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
while (booleanito == true) {
    let menu1 = parseInt(prompt(`
    =============================================
    Menù Inventario Efectivo
    =============================================
    Ingrese la informacion del ingrediente
    1. Añadir Inventario
    2. Listar Inventario
    3. Actualizar inventario
    4. Eliminar datos
    5. Salir
    =============================================
    `))
    if (menu1 === 1) {
        let anadir = prompt(`
        =============================================
        Menù Añadir al Inventario
        =============================================
        1. Añadir Ingrediente
        2. Añadir Categorìa
        3. Añadir Hamburguesa
        4. Añadir Chef
        5. Salir
        =============================================
        `)
        if (anadir === '1') {
            let nombreI = prompt(`
            =============================================
            Añadir Ingrediente
            =============================================
            Ingrese la informaciòn del ingredente:
    
            Nombre del ingrediente:
            `)
            let descripcionI = prompt(`
            =============================================
            Añadir Ingrediente
            =============================================
            Ingrese la informacion del ingrediente:
                
            Descripcion del ingrediente:
            `)
            let precioI = prompt(`
            =============================================
            Añadir Ingrediente
            =============================================
            Ingrese la informacion del ingrediente:
                
            Precio del ingrediente:
            `)
            let stockI = prompt(`
            =============================================
            Añadir Ingrediente
            =============================================
            Ingrese la informacion del ingrediente:
            
            Stock del ingrediente:
            `)
        }
        else if (anadir === '2') {
            let nombreC = prompt(`
            =============================================
            Añadir Categoria
            =============================================
            Ingrese la informacion de la categoria:

            Nombre de la Categoria:
            `)
            let descripcionC = prompt(`
            =============================================
            Añadir Categoria
            =============================================
            Ingrese la informacion de la categoria:

            Descripcion de la Categoria:
            `)
        }
        else if (anadir === '3') {
            let nombreH = prompt(`
            =============================================
            Añadir Hamburguesa
            =============================================
            Ingrese la infomacion de la Hamburguesa:
            
            Nombre de la Hamburguesa:
            `)
            let categoriaH = prompt(`
            =============================================
            Añadir Hamburguesa
            =============================================
            Ingrese la informacion de la Hamburguesa:
            
            Categoria de la Hamburguesa:`
            )
            let ingredientesH = prompt(`
            =============================================
            Añadir Hamburguesa
            =============================================
            Ingrese la informacion de la Hamburguesa:
            
            Ingredientes de la Hamburguesa:`)
            let precioH = prompt(`
            =============================================
            Añadir Hamburguesa
            =============================================
            Ingrese la informacion de la Hamburguesa:
            
            Precio de la Hamburguesa:`)
        }
        else if (anadir === '4') {
            let nombreChef = prompt(`
            =============================================
            Añadir Chef
            =============================================
            Ingrese la informacion del Chef:

            Nombre del Chef:
            `)
            let especialidadChef = prompt(`
            =============================================
            Añadir Chef
            =============================================
            Ingrese la informacion del Chef:

            Especialidad del Chef:
            `)
        }
    }
    else if (menu1 === '2') {
        let listarInventario = prompt(`
        =============================================
        Menù Listar Inventario
        =============================================
        1. Listar Ingredientes
        2. Listar Categorias
        3. Listar Hamburguesas
        4. Listar Chefs
        5. Salir
        `)
        if (listarInventario === '1') {
            for (let i = 0; i < listaIngredientes.length; i++) {
                alert: (
                    "nombre" = listaIngredientes[i]["nombre"],
                    "descripcion" = listaIngredientes[i]["descripcion"],
                    "precio" = listaIngredientes[i]["precio"],
                    "stock" = listaIngredientes[i]["stock"]
                )
            }

        }
    }
}
