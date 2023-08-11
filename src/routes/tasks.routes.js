const {Router} = require('express');
//const pool = require ('../db');
const {getAllSabores, getSabor, getSaborId, createSabor, deleteSabor, uptadeSabor, getAllProductos, getAllColores, getColor, 
        getColorId, createColor, deleteColor, uptadeColor, getAllTipos, getTipo, getTipoId, createTipo, deleteTipo, updateTipo, getAllFormas, 
        getForma, getFormaId, createForma, deleteForma, updateForma, createProducto,  deleteProducto, updateProducto, getAllRevista,
        createUsuario,createPersonaNatural, getAllValores, getValor, createValor, deleteValor, updateValor, 
        getAllDescuentos, getDescuento, createDescuento, deleteDescuento, deleteDescuentop, updateDescuento, getAllSaborProducto, getSaborProducto,
        createSaborProducto, deleteSaborProducto, updateSaborProducto, getAllColorProducto, getColorProducto,
        createColorProducto, deleteColorProducto, updateColorProducto, getAllCanjePunto, getAllClienteJuridico, 
        getClienteJuridico, createClienteJuridico, deleteClienteJuridico, updateClienteJuridico, getAllTiendas, 
        getAllLugares, getAllTelefonos, createTelefonoCJ, createPersonaContacto, deletePersonaContacto, updatePersonaContacto, 
        updateTelefonoCJ,deleteTelefonoCJ, getAllPersonaEmpleado, getPersonaEmpleado, createPersonaEmpleado,
        deletePersonaEmpleado,updatePersonaEmpleado, createTelefonoPE, updateTelefonoPE, deleteTelefonoPE,
        getAllDepartamento, getAllusuarioEmpleado, getusuarioEmpleado, createusuarioEmpleado, 
        deleteusuarioEmpleado, deleteusuarioEmpleado2, updateusuarioEmpleado, getAllRoles, 
        deleteusuarioJuridico2, getUsuario, getAllRolFuncion, createRolFuncion, getAllFuncion, 
        deleteRolFuncion, getAllcambioEstatus, getAllEstatus, getAllPP, deleteproductoTienda,
        createcambioEstatus, updatecambioEstatus, getProductosdeTienda, createDetallePedido, updateDetallePedido,
        deleteDetallePedido, deletePersonaJur_Cliente, getAllClientesNaturales, getClienteNatural, createClienteNatural,
        deleteClienteNatural, updateClienteNatural, deleteusuarioClienteNatural, deletePersonaNat_Cliente, getAllTelefonosCN,
        getTelefonoCN, createTelefonoCN, deleteTelefonoCN, updateTelefonoCN, getAllUsuariosCN,
        getUsuarioCN, createUsuarioCN, deleteUsuarioCN, updateUsuarioCN, deletePedidoUsuario, getAllUsuariosCJ,
        getUsuarioCJ, createUsuarioCJ, deleteUsuarioCJ, updateUsuarioCJ, deleteusuarioClienteJuridico, getRol,
        createRol, updateRol, updateRolUsuario, deleteRol, deleteUsuario, getAllUsuarios, createPedido,
        getAllpedidos, createPedidoEstatus, getProductosdeTienda2, getAllBancos, getPuntos, getTotalPagar,
        createPagoPunto, createMetodoPagoPunto, updatePedidoEstatus, createPedidoEstatus2, updatedescontar,
        createMetodoPagoEfectivo, createPagoEfectivo, createPuntos, updatetotal, descontarinv, descontarinv2,
        createPagoDebito, createMetodoPagoDebito, createPagoCredito, createPagoMovil, createPagoZelle,
        createPagoPaypal, createPagoZinli, createPagoCheque, getReporteEmpleados, getAllpedidosOnline,
         getAllPP2, getAllpedidosPandM, getAllPP3, createPedido2, createDetallePedidoPM, getInventario, 
         createOrdenReposicion, getInventario2, getPMasVendido, getPMenosVendido, getMetodosPago,
         getUsoPuntos, getVentasOnline, getVentasxTienda, getVentasxMes, updatedescontar2, 
         createReporteEmpleados, getPuntos2, getReporteEmpleadosTRIM1, getReporteEmpleadosTRIM2, 
         getReporteEmpleadosTRIM3,  getReporteEmpleadosTRIM4} = require('../controllers/tasks.controller')

const router = Router();

//Sabor
router.get('/sabor', getAllSabores)
router.get('/sabor/:id', getSabor)
router.get('/sabor/id/:tipo', getSaborId)
router.post('/sabor', createSabor)
router.delete('/sabor/:id', deleteSabor )
router.put('/sabor/:id', uptadeSabor )

//Color
router.get('/color', getAllColores)
router.get('/color/:id', getColor)
router.get('/color/id/:tipo', getColorId)
router.post('/color', createColor)
router.delete('/color/:id', deleteColor)
router.put('/color/:id', uptadeColor)

//Tipo
router.get('/tipo', getAllTipos)
router.get('/tipo/:id', getTipo) //obtener
router.get('/tipo/id/:nombre', getTipoId)
router.post('/tipo', createTipo) //crear
router.delete('/tipo/:id', deleteTipo) //borrar
router.put('/tipo/:id', updateTipo ) //actualizar

//Forma
router.get('/forma', getAllFormas)
router.get('/forma/:id', getForma) //obtener
router.get('/forma/id/:tipo', getFormaId)
router.post('/forma', createForma) //crear
router.delete('/forma/:id', deleteForma) //borrar
router.put('/forma/:id', updateForma) //actualizar

//Productos
router.get('/productos', getAllProductos)
router.post('/productos', createProducto) //crear
router.put('/productos/:id', updateProducto) //actualizar
router.delete('/productos/:id', deleteProducto) //borrar

//Sabor_Producto
router.get('/sabor_producto', getAllSaborProducto)
router.get('/sabor_producto/:id', getSaborProducto) //obtener
router.post('/sabor_producto', createSaborProducto) //crear
router.delete('/sabor_producto_delete', deleteSaborProducto) //borrar
router.put('/sabor_producto_put', updateSaborProducto) //actualizar

//Color_Producto
router.get('/color_producto', getAllColorProducto)
router.get('/color_producto/:id', getColorProducto) //obtener
router.post('/color_producto', createColorProducto) //crear
router.delete('/color_producto_delete', deleteColorProducto) //borrar
router.put('/color_producto_put', updateColorProducto) //actualizar

//Usuario
router.get('/usuario', createUsuario )
router.get('/persona/natural', createPersonaNatural )

//valor
router.get('/valor', getAllValores)
router.get('/valor/:id', getValor) //obtener
router.post('/valor', createValor) //crear
router.delete('/valor/:id', deleteValor) //borrar
router.put('/valor/:id', updateValor ) //actualizar

//descuento
router.get('/descuento', getAllDescuentos)
router.get('/descuento/:id', getDescuento) //obtener
router.post('/descuento', createDescuento) //crear
router.delete('/descuento/:id', deleteDescuento) //borrar
router.delete('//descuento_por_pro_clave/:id', deleteDescuentop) //borrar
router.put('/descuento/:id', updateDescuento ) //actualizar

//revista
router.get('/revista', getAllRevista)

//ClienteJuridicouridica
router.get('/ClienteJuridico', getAllClienteJuridico)
router.get('/ClienteJuridico/:id', getClienteJuridico) //obtener
router.post('/ClienteJuridico', createClienteJuridico) //crear
router.delete('/ClienteJuridico/:id', deleteClienteJuridico) //borrar
router.put('/ClienteJuridico/:id', updateClienteJuridico ) //actualizar
router.delete('/personaJuridica_delete', deletePersonaJur_Cliente)
router.delete('/usuarioJuridico_delete/:id', deleteusuarioClienteJuridico) //borrar

//Canje Punto
router.get('/canjePunto', getAllCanjePunto)

//Tienda
router.get('/tienda', getAllTiendas)

//Lugar
router.get('/lugar', getAllLugares)

//telefonoCJ
router.get('/telefono', getAllTelefonos)
router.post('/telefonoCJ', createTelefonoCJ) //crear
router.put('/telefonoCJ_update', updateTelefonoCJ) //actualizar
router.delete('/telefonoCJ_delete', deleteTelefonoCJ) //borrar

//Persona Contaco
router.post('/persona_contacto', createPersonaContacto) //crear
router.delete('/persona_contacto_delete', deletePersonaContacto) //borrar
router.put('/persona_contacto/:id', updatePersonaContacto ) //actualizar

//PersonaEmpleado
router.get('/PersonaEmpleado', getAllPersonaEmpleado)
router.get('/PersonaEmpleado/:id', getPersonaEmpleado) //obtener
router.post('/PersonaEmpleado', createPersonaEmpleado) //crear
router.delete('/PersonaEmpleado/:id', deletePersonaEmpleado) //borrar
router.put('/PersonaEmpleado/:id', updatePersonaEmpleado ) //actualizar


//Departamento
router.get('/Departamento', getAllDepartamento)

//telefonoPE
router.post('/telefonoPE', createTelefonoPE) //crear
router.put('/telefonoPE_update', updateTelefonoPE) //actualizar
router.delete('/telefonoPE_delete', deleteTelefonoPE) //borrar

//UsuarioEmpleado
router.get('/usuarioEmpleado', getAllusuarioEmpleado)
router.get('/usuarioEmpleado/:id', getusuarioEmpleado) //obtener
router.post('/usuarioEmpleado', createusuarioEmpleado) //crear
router.delete('/usuarioEmpleado/:id', deleteusuarioEmpleado) //borrar
router.delete('/usuarioEmpleado_delete', deleteusuarioEmpleado2) //borrar
router.put('/usuarioEmpleado/:id', updateusuarioEmpleado ) //actualizar


//UsuarioJuridico
router.delete('/usuarioJuridico_delete', deleteusuarioJuridico2) //borrar

//rol
router.get('/rol', getAllRoles)

//login
router.get('/login/:usu_username/:usu_contrasena', getUsuario)

//Asignacion de roles
router.get('/rol_funcion', getAllRolFuncion)
router.post('/rol_funcion', createRolFuncion) //crear
router.delete('/rol_funcion/:id', deleteRolFuncion) //borrar
/*
router.delete('/color_producto_delete', deleteColorProducto) //borrar
router.put('/color_producto_put', updateColorProducto) //actualizar*/

//Funcion
router.get('/funcion', getAllFuncion)

//CambioEstatus
router.get('/cambioEstatus', getAllcambioEstatus)
router.post('/cambioEstatus', createcambioEstatus) //crear
router.put('/cambioEstatus', updatecambioEstatus ) //actualizar

//Estatus
router.get('/Estatus', getAllEstatus)

//productospedido
router.get('/productoPedido/:ped_numero_compra', getAllPP)
router.get('/productoPedido2/:ped_numero_compra', getAllPP2)
router.get('/productoPedido3/:ped_numero_compra', getAllPP3)
router.post('/productoPedido', createDetallePedido) //crear
router.post('/productoPedidoPM', createDetallePedidoPM) //crear
router.put('/productoPedido/:id', updateDetallePedido) //actualizar
router.delete('/productoPedido/:id/:ped_numero_compra', deleteDetallePedido) //borrar

//productotienda
router.delete('/productotienda/:pro_clave', deleteproductoTienda) 
router.get('/productoTienda', getProductosdeTienda)
router.get('/productoTienda2/:ped_numero_compra', getProductosdeTienda2)

//Cliente Natural
router.get('/clientesNat', getAllClientesNaturales)
router.get('/clientesNat/:id', getClienteNatural) //obtener
router.post('/clientesNat', createClienteNatural) //crear
router.delete('/clientesNat/:id', deleteClienteNatural) //borrar
router.put('/clientesNat/:id', updateClienteNatural) //actualizar
router.delete('/usuarioNatural_delete/:id', deleteusuarioClienteNatural) //borrar
router.delete('/personaNatural_delete', deletePersonaNat_Cliente)

//Telefono CN
router.get('/telefonos', getAllTelefonosCN)
router.get('/telefono/:id', getTelefonoCN) //obtener
router.post('/telefonos', createTelefonoCN) //crear
router.delete('/telefonoCN_delete', deleteTelefonoCN) //borrar
router.put('/telefonoCN_update', updateTelefonoCN) //actualizar

//USUARI NATURAL
router.get('/usuarioNatural', getAllUsuariosCN)
router.get('/usuarioNatural/:id', getUsuarioCN) //obtener
router.post('/usuarioNatural', createUsuarioCN) //crear
router.delete('/usuarioNatural/:id', deleteUsuarioCN) //borrar
router.put('/usuarioNatural/:id', updateUsuarioCN) //actualizar
router.delete('pedidoUsuario_delete', deletePedidoUsuario)

//Usuario Juridico
router.get('/usuarioJuridico', getAllUsuariosCJ)
router.get('/usuarioJuridico/:id', getUsuarioCJ) //obtener
router.post('/usuarioJuridico', createUsuarioCJ) //crear
router.delete('/usuarioJuridico/:id', deleteUsuarioCJ) //borrar
router.put('/usuarioJuridico/:id', updateUsuarioCJ) //actualizar

//Roles
router.get('/rol', getAllRoles)
router.get('/rol/:id', getRol)
router.post('/rol', createRol)
router.delete('/rol/:id', deleteRol)
router.put('/rol/:id', updateRol)
router.put('/rol_usuario', updateRolUsuario)

//eliminarusuario
router.delete('/eliminarusuario/:id', deleteUsuario)

//usuarios
router.get('/usuariosss', getAllUsuarios)

//usuarios
router.get('/banco', getAllBancos)

//pedidos
router.get('/pedidos', getAllpedidos)
router.get('/pedidosOnline', getAllpedidosOnline)
router.get('/pedidosPandM', getAllpedidosPandM)
router.post('/newpedido', createPedido) //crear
router.post('/newpedido2', createPedido2) //crear
router.post('/newpedidoEstatus', createPedidoEstatus) //crear


//puntos
router.get('/punto/:id', getPuntos)
router.get('/punto2/:id', getPuntos2)

//totalapagar
router.get('/totalPagar/:id', getTotalPagar)


//pagopuntos
router.post('/pagopunto', createPagoPunto) 
router.post('/pagopunto2', createMetodoPagoPunto)
router.put('/descontarpunto', updatedescontar)
router.put('/descontarpunto2', updatedescontar2)

//pagoefectivo
router.post('/pagoefectivo', createPagoEfectivo) 
router.post('/pagoefectivo2', createMetodoPagoEfectivo)

//pagoeTDD
router.post('/pagoedebito', createPagoDebito) 
router.post('/pagodebito2', createMetodoPagoDebito)

//pagoeTDC
router.post('/pagocredito', createPagoCredito) 

//pagoPM
router.post('/pagoMovil', createPagoMovil) 

//pagoZelle
router.post('/pagZelle', createPagoZelle)

//pagoPaypal
router.post('/pagPaypal', createPagoPaypal)

//pagoZinli
router.post('/pagoZinli', createPagoZinli)

//pagoCheque
router.post('/pagoCheque', createPagoCheque)

//pedidopagado
router.put('/pedidopagado/:id', updatePedidoEstatus)
router.post('/pedidopagado/:id', createPedidoEstatus2)

//otorgarpuntos
router.post('/otorgarpuntos', createPuntos)

//actualizartotalpedido
router.put('/actotal/', updatetotal)

//descontarinventario
router.put('/descontarinv/', descontarinv)
router.put('/descontarinv2/', descontarinv2)

//ControlEmpleados
//router.get('/controlEmpleados', getReporteEmpleados)

//inventario
router.get('/inventario', getInventario)

//ordenreposicion
router.post('/ordenreposicion', createOrdenReposicion)

//consultarinventario
router.get('/inventario2', getInventario2)

//Dashboard
router.get('/ventasxMes', getVentasxMes)
router.get('/proMasVend', getPMasVendido)
router.get('/proMenosVend', getPMenosVendido)
router.get('/porcenMetPago', getMetodosPago)
router.get('/usoPuntos', getUsoPuntos)
router.get('/ventasOnline', getVentasOnline)

//ventas por tienda
router.get('/ventasxTienda', getVentasxTienda)

router.get('/getcontrolEmpleados', getReporteEmpleados)
router.post('/controlEmpleados', createReporteEmpleados)


router.get('/getcontrolEmpleadosTRIM1', getReporteEmpleadosTRIM1) //primer trimestre
router.get('/getcontrolEmpleadosTRIM2', getReporteEmpleadosTRIM2) //segundo trimestre
router.get('/getcontrolEmpleadosTRIM3', getReporteEmpleadosTRIM3) //tercer trimestre
router.get('/getcontrolEmpleadosTRIM4', getReporteEmpleadosTRIM4) //cuarto trimestre

module.exports = router;