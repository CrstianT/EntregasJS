// Constructor productos
class Producto{
    constructor(id, nombre, categoria, precio){
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    }
}    

// Filtrar Productos
function filtrarPrecio(productos){
    const resultado = productos.filter(producto => {
    const condicion = producto.precio <= 10000
    return condicion;
    })
    return resultado 
}


// Array de productos
const productos = [
    new Producto(1, "Linea Aviator", "Lentes", 15000),
    new Producto(2, "Linea Erika/Chris", "Lentes", 14000),
    new Producto(3, "Linea Scuderia Ferrari", "Lentes", 18000),
    new Producto(4, "Fundas y Estuches", "Estuches", 5000),
    new Producto(5, "Adicionales", "Accesorios", 2500),
];


// Para probar en consola
const productosFiltrados = filtrarPrecio(productos);
console.log(productosFiltrados);
    


