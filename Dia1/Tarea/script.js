
let gastos = []

booleanito = true;
while (booleanito === true) {
    let menu1 = parseInt(prompt(`
    =============================================
    Simulador de Gasto Diario
    =============================================
    Seleccione una opción:

    1. Registrar nuevo gasto
    2. Listar gastos
    3. Calcular total de gastos
    4. Generar reporte de gastos
    5. Salir
    =============================================
    `));
    if (menu1 === 1) {
        let montoGasto = prompt(`
            =============================================
            Registrar Nuevo Gasto
            =============================================
            Ingrese la información del gasto:

            - Monto del gasto:`)
            let categoria = prompt (`
            =============================================
            Registrar Nuevo Gasto
            =============================================
            Ingrese la informacion del gasto:

            Monto del gasto:
            =============================================

            - Categoría (ej. comida, transporte, entretenimiento, otros):
            - Descripción (opcional): `)
                    let descripcion = prompt (` =============================================
                    Registrar Nuevo Gasto
                    =============================================
                    Ingrese la información del gasto:

                    descripcion:
                    =============================================`)
                            let guardar = prompt(`Ingrese 'S' para guardar o 'C' para cancelar.`)
                            if (guardar === "s") {
                                let gastoNuevo = {
                                    "montoGasto": montoGasto,
                                    "categoria": categoria,
                                    "descripcion": descripcion,
                                }
                                gastos.push(gastoNuevo);
                                alert(gastos.toString)
                                
                                for(let i=0; i>gastos.length; i++){
                                    console.log(gastos[i]);
                                }
                            }
        
    }

    else if (menu1 === "2") {
        let menu3 = prompt(`
            =============================================
            Listar Gastos
            =============================================
            Seleccione una opción para filtrar los gastos:

            1. Ver todos los gastos
            2. Filtrar por categoría
            3. Filtrar por rango de fechas
            4. Regresar al menú principal
            =============================================
        `)
    }

    else if (menu1 === "3") {
        let menu4 = prompt(`
            =============================================
            Calcular Total de Gastos
            =============================================
            Seleccione el periodo de cálculo:

            1. Calcular total diario
            2. Calcular total semanal
            3. Calcular total mensual
            4. Regresar al menú principal
            =============================================
        `)
    }

    else if (menu1 === "4") {
        let menu5 = prompt(`
            =============================================
           Generar Reporte de Gastos
            =============================================
            Seleccione el tipo de reporte:

            1. Reporte diario
            2. Reporte semanal
            3. Reporte mensual
            4. Regresar al menú principal
            =============================================
        `)
    }

    else if (menu1 === "5") {
        let menu6 = prompt("¿Desea salir del programa? (S/N):");
        if (valor2 === "S") {
            (booleanito = false);
        }
    }
}



