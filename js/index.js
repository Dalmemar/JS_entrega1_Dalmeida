const containerProducts = document.getElementById("containerproducts");
const verCarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modalcontainer");
const cantidadCarrito = document.getElementById("cantidadCarrito"); 

let carrito = JSON.parse(localStorage.getItem("carrito")) ||  [];

productos.forEach ((producto) => {
    let content = document.createElement("div");
    content.className = "div-container"
    content.innerHTML = `
    <img src= "${producto.imagen}" class = "img-producto">
    <h4 class = "nombre-producto text-center">${producto.Nombre}</h4>
    <p class = "precio-producto text-center">${producto.Precio} $</p>
    `;

    containerProducts.append (content);

    let comprar = document.createElement ("button")
    comprar.innerText = "Comprar";
    comprar.className = "botton-comprar";   

    content.append (comprar);

    comprar.addEventListener ("click", () => {

    const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id )

    if (repeat){
        carrito.map((prod) => {
            if (prod.id === producto.id){
                prod.cantidad++ 
                alert("Se agrego un producto con exito al carrito");
            }
        });
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.Nombre,
            precio: producto.Precio,
            imagen: producto.imagen,
            cantidad: producto.cantidad,
        })
        
        carritoCounter();
        saveLocal();
    }
    });
});


const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

};


 

