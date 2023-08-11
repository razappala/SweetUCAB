function llenarTablaProductos() {
    //Ruta con la que accedo a los datos
    fetch("http://localhost:3000/productos")
    .then((response)=>response.json())
    .then((productos)=>{
        //console.log(productos);
        let tablaProductos=document.querySelector("#table-productos tbody");

            for(const itemProducto of productos){ 
                let tr="<tr><td>"+itemProducto.pro_nombre.link("producto_indv.html")+"</td><td>"+itemProducto.pro_historia+"</td><td>" +itemProducto.pro_precio+"</td><td>"+itemProducto.pro_peso_neto+"</td><td>"+itemProducto.pro_beneficio+"</td><td>"+itemProducto.sab_tipo+"</td></tr>";

                tablaProductos.innerHTML+=tr;
            }
    })

}
llenarTablaProductos();