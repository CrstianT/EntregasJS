let cuotas = prompt("Selecciona cantidad de cuotas para calcular descuento (1, 3, 6, 9, 12) o escribe 'Salir' para finalizar:");

while (cuotas !== "Salir") {
    switch (cuotas) {
        case "1":
            alert("20% de descuento");
            break;
        case "3":
            alert("15% de descuento");
            break;
        case "6":
            alert("10% de descuento");
            break;
        case "9":
            alert("5% de descuento");
            break;
        case "12":
            alert("Sin descuento");
            break;
        default:
            alert("Cantidad de cuotas ingresada no disponible");
            break;
    }
    cuotas = prompt("Selecciona cantidad de cuotas para calcular descuento (1, 3, 6, 9, 12) o escribe 'Salir' para finalizar:");
}