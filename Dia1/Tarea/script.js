booleanito = true;
while (booleanito == true) {
    console.log(`
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
    `);
    let valor1 = prompt("Ingresa la opcion: ", 0);
    if (valor1 === "1") {
        console.log(`
            =============================================
            Registrar Nuevo Gasto
            =============================================
            Ingrese la información del gasto:

            - Monto del gasto:
            - Categoría (ej. comida, transporte, entretenimiento, otros):
            - Descripción (opcional):

            Ingrese 'S' para guardar o 'C' para cancelar.
            =============================================
        `)
    }

    else if (valor1 === "2") {
        console.log(`
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

    else if (valor1==="3") {
        console.log(`
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

    else if (valor1==="4") {
        console.log(`
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

    else if (valor1==="5") {
        let valor2 = prompt("¿Desea salir del programa? (S/N):", 0);
        if (valor2 === "S") {
            (booleanito = false);
        }
    }
}



