const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML= `
    <h1 class = "h1-modal"> Mi Carrito </h1>
    `;

    modalContainer.append (modalHeader);

    const modalbutton = document.createElement ("h2");
    modalbutton.className = "boton-modal";
    modalbutton.innerText= "X";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";      
    });

    modalHeader.append(modalbutton);

    carrito.forEach((producto) => {
        let carritoContent = document.createElement ("div");
        carritoContent.className = "carrito-modal";
        carritoContent.innerHTML = `
        <img src= "${producto.imagen}">
        <h4> ${producto.nombre}</h4>
        <p>${producto.precio} $</p>  
        <span class ="restar"> - </span>
        <p>Cantidad: ${producto.cantidad}</p>  
        <span class ="sumar"> + </span>
        <p>SubTotal:$ ${producto.cantidad * producto.precio}</p> 
        <span class ="boton-eliminar"> ❌ </span> 

        `;

        modalContainer.append (carritoContent);


        let restar = carritoContent.querySelector(".restar");
        
        restar.addEventListener("click", () => {
            
            if(producto.cantidad !==1){
            producto.cantidad--
            }
            saveLocal();
            pintarCarrito ();
        });

        let sumar= carritoContent.querySelector(".sumar");

        sumar.addEventListener("click", () =>{
            producto.cantidad++; 
            saveLocal();
            pintarCarrito();
        });

        let eliminar= carritoContent.querySelector(".boton-eliminar");

        eliminar.addEventListener("click", ()=> {
            eliminarProducto(producto.id);
        });



     
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `
    Total a Pagar: ${total} $`;

    modalContainer.append(totalCompra);
};

verCarrito.addEventListener ("click", pintarCarrito);

const eliminarProducto = (id)=> {
    const foundId = carrito.find ((element) => element.id === id);

carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;   
});
carritoCounter();
saveLocal ();
pintarCarrito();

};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carrito.length));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))  ;
};      

carritoCounter();