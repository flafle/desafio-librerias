//Creo mi clase
class Producto {
    constructor(nombre,modelo,precio,stock) {
        this.nombre= nombre,
        this.modelo= modelo;
        this.precio = precio;
        this.stock = stock;

        this.azafranes = []; //creo array
    }
    agregarAzafran(azafran) {
        this.azafranes.push(azafran);
    }
    eliminarUltimoAzafran() {//como es para eliminar no es necesario que escriba nada dentro del parentesis.
        this.azafranes.pop();
    }
}
//anillados
const producto1 = new Producto ("Floral", "Cuadriculado", "1000", "3");
const producto2 = new Producto ("Ciudad", "Pentagramado", "2000", "2");
const producto3 = new Producto ("Mujeres", "Agenda", "1800", "2");
const producto4 = new Producto ("Bosque", "Album", "3000", "2");
const producto5 = new Producto ("Cocina", "Rayado", "800", "3");
//cosidos
const producto6 = new Producto ("Constelacion", "Rayado", "1000", "1");
const producto7 = new Producto ("Gato", "Cuadriculado", "1000", "1");
const producto8 = new Producto ("Glitter", "Pentagramado", "2000", "4");
const producto9 = new Producto ("Puntos", "Agenda", "1800", "2");
const producto10 = new Producto ("Fotografia", "Album", "3000", "4");
const producto11 = []

//carrito array vacio consultando localstorage


//array de productos:
const productos = [producto1,producto2, producto3, producto4, producto5,];

const productos2 = [producto6,producto7, producto8, producto9, producto10,];
//consulto dos elementos del div productos
const botonCarrito = document.getElementById ("carrito");
const divProductos =document.getElementById("divProductos");
const btnProductos = document.getElementById ("btnProductos");
//operador nullish/ 
let acumulador = 0;
productos.forEach((producto) => {
acumulador += producto.precio ?? 0 ;
})
// muestro cada uno de mis productos
productos.forEach((cuadernos, inicio) => {
    divProductos.innerHTML +=`
        <div class="card border-dark mb-3" id="cuadernos${inicio} "  style="max-width: 20rem;">
           <div class="card-header">${cuadernos.nombre}</div>
              <div class="card-body">
              <h4 class="card-title">${cuadernos.modelo} </h4>
              <p class="card-text">${cuadernos.precio} </p>
              <p class="card-text">${cuadernos.stock} </p>
              <button class="btn btn-warning"> <i class="fas fa-cart-arrow-down"></i></button>
            </div>
         </div>`

});

productos2.forEach((cuadernos, inicio)=>{

    divProductos.innerHTML +=`
        <div class="card border-secondary mb-3" id="cuadernos${inicio} "  style="max-width: 20rem;">
          <div class="card-header">${cuadernos.nombre}</div>
            <div class="card-body">
            <h4 class="card-title">${cuadernos.modelo}</h4>
            <p class="card-text">${cuadernos.precio}</p>
            <p class="card-text">${cuadernos.stock} </p>
            <button class="btn btn-warning"> <i class="fas fa-cart-arrow-down"></i></button>
        </div>
      </div>`
});
//librerias
divProductos.addEventListener("click", () => {
    Swal.fire({
        title: "Ya agregaste un Azafrán!",
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })

})

botonCarrito.addEventListener("click", () => {  //sweet alert
    Swal.fire(
        "Necesitas algo mas?",
        "Puedes seguir mirando nuestros productos!",
        " 🌞 "
      );
});