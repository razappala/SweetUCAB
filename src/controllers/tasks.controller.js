const pool = require('../db')

//SABOR
const getAllSabores = async (req,res,next) => {
    try {
        const allSabores = await pool.query ("select * from sabor")
        res.json(allSabores.rows);
    } catch (error) {
        next(error)
    }
 
}

const getSabor = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from sabor where sab_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Sabor no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const getSaborId = async (req,res,next) => {
    try {
        const {tipo} = req.params;
        const result =await pool.query("select sab_id from sabor where sab_tipo = $1", [tipo]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Sabor no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}
 
const createSabor = async (req,res,next) => {
    const {sab_tipo, sab_descripcion} = req.body

    try {
        const result =  await pool.query(
            "Insert into sabor (sab_tipo, sab_descripcion) Values ($1,$2) RETURNING *", [
            sab_tipo,
            sab_descripcion]
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteSabor = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from sabor where sab_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Sabor no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const uptadeSabor =  async (req,res,next) => {
    const {id} = req.params;
    const {sab_tipo, sab_descripcion} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE sabor set sab_tipo=$1, sab_descripcion=$2 where sab_id = $3", 
            [sab_tipo,sab_descripcion,id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Sabor no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

//COLOR
const getAllColores = async (req,res,next) => {
    try {
        const allColores = await pool.query ("select * from color")
        res.json(allColores.rows);
    } catch (error) {
        next(error)
    }
 
}

const getColor = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from color where col_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Color no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const getColorId = async (req,res,next) => {
    try {
        const {tipo} = req.params;
        const result =await pool.query("select col_id from color where col_tipo = $1", [tipo]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Color no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}
 
const createColor = async (req,res,next) => {
    const {col_tipo, col_descripcion} = req.body

    try {
        const result =  await pool.query(
            "Insert into color (col_tipo, col_descripcion) Values ($1,$2) RETURNING *", [
            col_tipo,
            col_descripcion]
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteColor = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from color where col_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Color no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const uptadeColor =  async (req,res,next) => {
    const {id} = req.params;
    const {col_tipo, col_descripcion} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE color set col_tipo=$1, col_descripcion=$2 where col_id = $3", 
            [col_tipo,col_descripcion,id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : " no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const getAllTipos = async (req,res,next) => {
    try {
        const allTipos = await pool.query ("select * from tipo")
        res.json(allTipos.rows);
    } catch (error) {
        next(error)
    }
 
}

//TIPO
const getTipo = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from tipo where tip_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Tipo no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const getTipoId = async (req,res,next) => {
    try {
        const {nombre} = req.params;
        const result =await pool.query("select tip_id from tipo where tip_nombre = $1", [nombre]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Tipo no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createTipo = async (req,res,next) => {
    const {tip_nombre, tip_descripcion} = req.body

    try {
        const result =  await pool.query(
            "Insert into tipo (tip_nombre, tip_descripcion) Values ($1,$2) RETURNING *", [
            tip_nombre,
            tip_descripcion]
        );
        //res.render('create_sabor.html');
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteTipo = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from tipo where tip_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Tipo no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateTipo =  async (req,res,next) => {
    const {id} = req.params;
    const {tip_nombre, tip_descripcion} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE tipo set tip_nombre=$1, tip_descripcion=$2 where tip_id = $3", 
            [tip_nombre,tip_descripcion,id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Tipo no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

//Forma
const getAllFormas = async (req,res,next) => {
    try {
        const allFormas = await pool.query ("select * from forma")
        res.json(allFormas.rows);
    } catch (error) {
        next(error)
    }
 
}

const getForma = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from forma where for_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Forma no encontrada"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const getFormaId = async (req,res,next) => {
    try {
        const {tipo} = req.params;
        const result =await pool.query("select for_id from forma where for_tipo = $1", [tipo]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Forma no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createForma = async (req,res,next) => {
    const {for_tipo, for_descripcion} = req.body

    try {
        const result =  await pool.query(
            "Insert into forma (for_tipo, for_descripcion) Values ($1,$2) RETURNING *", [
            for_tipo,
            for_descripcion]
        );
        //res.render('create_sabor.html');
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteForma = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result = await pool.query("delete from forma where for_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Forma no encontrada"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateForma =  async (req,res,next) => {
    const {id} = req.params;
    const {for_tipo, for_descripcion} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE forma set for_tipo=$1, for_descripcion=$2 where for_id = $3", 
            [for_tipo,for_descripcion,id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Forma no encontrada"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}


const getAllSaborProducto = async (req,res,next) => {
    try {
        const allSabores = await pool.query ("select * from sabor_producto")
        res.json(allSabores.rows);
    } catch (error) {
        next(error)
    }
 
}

const getSaborProducto = async (req,res,next) => {
    /*try {
        const {id} = req.params;
        const result =await pool.query("select * from sabor where sab_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Sabor no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }*/
}

const createSaborProducto = async (req,res,next) => {
    const {sab_id, pro_nombre} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO sabor_producto(sab_id, pro_clave) VALUES ("+sab_id+", (select pro_clave from producto where pro_nombre= '"+pro_nombre+"'AND pro_clave not in(select pro_clave from sabor_producto))) RETURNING *"/*, 
            [sab_id, pro_nombre]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteSaborProducto = async (req,res,next) => {
    //const {id} = req.params;
    const {pro_clave} = req.body;

    try {
        const result =await pool.query("DELETE FROM sabor_producto sp WHERE sp.pro_clave = $1", [pro_clave]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Sabor_Producto no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateSaborProducto =  async (req,res,next) => {
    //const {id} = req.params;
    const {sab_id, pro_clave2, sab_tipo2} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE sabor_producto SET sab_id="+sab_id+" WHERE pro_clave ="+pro_clave2+" AND sab_id in (select sab_id FROM sabor where sab_tipo='"+sab_tipo2+"')"
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Sabor_Producto no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const getAllColorProducto = async (req,res,next) => {
    try {
        const allSabores = await pool.query ("select * from color_producto")
        res.json(allSabores.rows);
    } catch (error) {
        next(error)
    }
 
}

const getColorProducto = async (req,res,next) => {
    /*try {
        const {id} = req.params;
        const result =await pool.query("select * from sabor where sab_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Sabor no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }*/
}

const createColorProducto = async (req,res,next) => {
    const {col_id, pro_nombre} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO color_producto(col_id, pro_clave) VALUES ("+col_id+", (select pro_clave from producto where pro_nombre= '"+pro_nombre+"'AND pro_clave not in(select pro_clave from color_producto))) RETURNING *"/*, [
            col_id,
            pro_nombre]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteColorProducto = async (req,res,next) => {
    //const {id} = req.params;
    const {pro_clave} = req.body;

    try {
        const result =await pool.query("DELETE FROM color_producto cp WHERE cp.pro_clave = $1", [pro_clave]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Color_Producto no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const updateColorProducto =  async (req,res,next) => {
    //const {id} = req.params;
    const {col_id, pro_clave2, col_tipo2} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE color_producto SET col_id="+col_id+" WHERE pro_clave ="+pro_clave2+" AND col_id in (select col_id FROM color where col_tipo='"+col_tipo2+"')"
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Color_Producto no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
    
}

const createProducto = async (req,res,next) => {
    const {pro_nombre, pro_historia, pro_precio_actual, pro_peso_neto, pro_beneficio,fk_tipo, fk_forma} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO producto( pro_nombre, pro_historia, pro_precio_actual, pro_peso_neto, pro_beneficio, fk_tipo, fk_forma) Values ($1,$2,$3,$4,$5,$6,$7) RETURNING *", [pro_nombre, pro_historia, pro_precio_actual, pro_peso_neto, pro_beneficio, fk_tipo, fk_forma]
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const getAllProductos = async (req,res,next) => {
    try {
        const AllProductos = await pool.query (
            "SELECT p.pro_clave, p.pro_nombre, p.pro_historia, p.pro_precio_actual, p.pro_peso_neto, p.pro_beneficio, s.sab_tipo, c.col_tipo, tip_nombre, for_tipo FROM producto p, sabor s, color c, tipo, forma, sabor_producto sp, color_producto cp WHERE fk_tipo=tip_id AND fk_forma=for_id AND sp.pro_clave=p.pro_clave AND sp.sab_id=s.sab_id AND cp.pro_clave=p.pro_clave AND cp.col_id=c.col_id")
        //const AllProductos = await pool.query ("SELECT * from producto")
        res.json(AllProductos.rows);
    } catch (error) {
        next(error)
    }
 
}

const updateProducto =  async (req,res,next) => {
    const {id} = req.params;
    const {pro_nombre, pro_historia, pro_precio_actual, pro_peso_neto, pro_beneficio, fk_tipo, fk_forma} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE producto set  pro_nombre=$1, pro_historia=$2, pro_precio_actual=$3, pro_peso_neto=$4, pro_beneficio=$5, fk_tipo=$6, fk_forma=$7 where pro_clave = $8", 
            [pro_nombre, pro_historia, pro_precio_actual, pro_peso_neto, pro_beneficio, fk_tipo, fk_forma,id]
        );
        res.json(result.rows[0])
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Producto no encontrado"
         });
    
    } catch (error) {
        next(error)
    }
    
}


const  deleteProducto = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result = await pool.query(" delete from producto where pro_clave=$1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Producto no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const createPersonaNatural = async (req,res,next) => {
    /*const {pro_nombre, pro_historia, pro_precio, pro_peso_neto, pro_beneficio, fk_sabor, fk_color, fk_tipo, fk_forma} = req.body

    try {
        const result =  await pool.query(
            "Insert into producto (pro_nombre, pro_historia, pro_precio, pro_peso_neto, pro_beneficio, fk_sabor, fk_color, fk_tipo, fk_forma) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *", [pro_nombre, pro_historia, pro_precio, pro_peso_neto, pro_beneficio, fk_sabor, fk_color, fk_tipo, fk_forma]
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }*/
}

const createUsuario = async (req,res,next) => {
    const {usu_username,usu_contrasena} = req.body

    try {
        const result =  await pool.query(
            "Insert into producto (pro_nombre, pro_historia, pro_precio, pro_peso_neto, pro_beneficio, fk_sabor, fk_color, fk_tipo, fk_forma) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *", [pro_nombre, pro_historia, pro_precio, pro_peso_neto, pro_beneficio, fk_sabor, fk_color, fk_tipo, fk_forma]
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const getAllRevista = async (req,res,next) => {
    try {
        const AllProductosRev = await pool.query ("SELECT * from revista");
        res.json(AllProductosRev.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllValores = async (req,res,next) => {
    try {
        //const allValores = await pool.query ("SELECT val_id, val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, fk_punto FROM valor")
        const allValores = await pool.query ("SELECT val_id, val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, mpa_id FROM valor, metodo_de_pago_canje_punto WHERE fk_metpago_canje_punto=mpa_id")
        res.json(allValores.rows);
    } catch (error) {
        next(error)
    }
}

const getValor = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from tipo where val_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Valor no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createValor = async (req,res,next) => {
    const {val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, mpa_id} = req.body

    try {
        const result =  await pool.query(
            "Insert into valor (val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, fk_metpago_canje_punto) Values ($1,$2,$3,$4) RETURNING *", [
                val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, mpa_id]
        );
        //res.render('create_sabor.html');
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteValor = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from valor where val_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Valor no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateValor =  async (req,res,next) => {
    const {id} = req.params;
    const {val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, mpa_id} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE valor set val_precio=$1, val_fecha_hora_inicio=$2, val_fecha_hora_fin=$3, fk_metpago_canje_punto=$4  where val_id = $5", 
            [val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, mpa_id,id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Valor no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const getAllDescuentos = async (req,res,next) => {
    try {
        const allDescuentos = await pool.query ("SELECT des_id, des_fecha_inicio, des_fecha_fin, des_porcentaje, des_codigo, pro_nombre, rev_id FROM descuento, producto, revista where FK_producto = pro_clave AND FK_revista = rev_id ")
        res.json(allDescuentos.rows);
    } catch (error) {
        next(error)
    }
 
}

const getDescuento = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from descuento where des_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Descuento no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createDescuento = async (req,res,next) => {
    const {des_fecha_inicio, des_fecha_fin, des_porcentaje, des_codigo, fk_producto, fk_revista} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO descuento(des_fecha_inicio, des_fecha_fin, des_porcentaje, des_codigo, fk_producto, fk_revista) Values ($1,$2,$3,$4,$5,$6) RETURNING *", [
                des_fecha_inicio, des_fecha_fin, des_porcentaje, des_codigo, fk_producto, fk_revista]
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteDescuento = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from descuento where des_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Descuento no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const deleteDescuentop = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from descuento where fk_producto = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Descuento no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateDescuento =  async (req,res,next) => {
    const {id} = req.params;
    const {des_fecha_inicio, des_fecha_fin, des_porcentaje, des_codigo, fk_producto, fk_revista} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE descuento set des_fecha_inicio=$1, des_fecha_fin=$2, des_porcentaje=$3, des_codigo=$4, fk_producto=$5, fk_revista=$6  where des_id=$7", 
            [des_fecha_inicio, des_fecha_fin, des_porcentaje, des_codigo, fk_producto, fk_revista,id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Descuento no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const getAllCanjePunto = async (req,res,next) => {
    try {
        //const allValores = await pool.query ("SELECT val_id, val_precio, val_fecha_hora_inicio, val_fecha_hora_fin, fk_punto FROM valor")
        const allCanjePunto = await pool.query ("select * from metodo_de_pago_canje_punto")
        res.json(allCanjePunto.rows);
    } catch (error) {
        next(error)
    }
}


const getAllClienteJuridico = async (req,res,next) => {
    try {
        const AllClienteJuridico = await pool.query (
            "select pj.per_id,pj.per_rif, pj.perj_denom_comercial, pj.perj_razon_social, pj.perj_pagina_web, pj.perj_capital, pj.perj_direccion_fiscal, pj.perj_direccion_principal, lgf.lug_nombre AS lug_nombre_fiscal, lgp.lug_nombre AS lug_nombre_principal, t.tie_nombre, (SELECT tel_numero FROM telefono WHERE fk_persona_juridica=pj.per_id LIMIT 1), (select pco_id from persona_contacto WHERE fk_persona_juridica=pj.per_id LIMIT 1), (select pco_nombre from persona_contacto WHERE fk_persona_juridica=pj.per_id LIMIT 1), (select pco_apellido from persona_contacto WHERE fk_persona_juridica=pj.per_id LIMIT 1) FROM persona_persona_juridica pj, lugar lgf, lugar lgp, tienda t WHERE pj.fk_lugar_fiscal=lgf.lug_id AND pj.fk_lugar_principal=lgp.lug_id AND pj.fk_tienda =t.tie_clave")
        res.json(AllClienteJuridico.rows);
    } catch (error) {
        next(error)
    }
 
}

const getClienteJuridico = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from descuento where des_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Descuento no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createClienteJuridico = async (req,res,next) => {
    const {per_rif, perj_denom_comercial, perj_razon_social, perj_pagina_web, perj_capital, perj_direccion_fiscal, perj_direccion_principal,
    lug_nombre_fiscal, lug_nombre_principal, tie_nombre} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO persona_persona_juridica( per_rif, perj_denom_comercial, perj_razon_social, perj_pagina_web, perj_capital, perj_direccion_fiscal, perj_direccion_principal,fk_lugar_fiscal, fk_lugar_principal, fk_tienda) VALUES ('"+per_rif+"', '"+perj_denom_comercial+"' , '"+perj_razon_social+"', '"+perj_pagina_web+"' , "+perj_capital+", '"+perj_direccion_fiscal+"' , '"+perj_direccion_principal+"' , "+lug_nombre_fiscal+" , "+lug_nombre_principal+" , "+tie_nombre+") RETURNING *",/* [
                per_rif, perj_denom_comercial, perj_razon_social, perj_pagina_web, perj_capital, 
                perj_direccion_fiscal, perj_direccion_principal,
                lug_nombre_fiscal, lug_nombre_principal, tie_nombre]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteClienteJuridico = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("DELETE FROM persona_persona_juridica WHERE per_id = $1;", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Cliente Juridico no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateClienteJuridico =  async (req,res,next) => {
    const {id} = req.params;
    const {per_rif, perj_denom_comercial, perj_razon_social, perj_pagina_web, perj_capital, perj_direccion_fiscal, perj_direccion_principal,
        lug_nombre_fiscal, lug_nombre_principal, tie_nombre} = req.body
    try {
        const result = await pool.query(
            "UPDATE persona_persona_juridica set per_rif='"+per_rif+"', perj_denom_comercial='"+perj_denom_comercial+"' , perj_razon_social='"+perj_razon_social+"' , perj_pagina_web='"+perj_pagina_web+"', perj_capital="+perj_capital+", perj_direccion_fiscal='"+perj_direccion_fiscal+"', perj_direccion_principal='"+perj_direccion_principal+"', fk_lugar_fiscal="+lug_nombre_fiscal+", fk_lugar_principal="+lug_nombre_principal+", fk_tienda="+tie_nombre+"  where per_id="+id
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Descuento no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const deletePersonaJur_Cliente = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body

    try {

        const result =await pool.query("delete from persona_persona_juridica where per_id ="+per_id,);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Persona juridica no encontrada"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}


const getAllTiendas = async (req,res,next) => {
    try {
        const allTiendas = await pool.query ("Select * from tienda")
        res.json(allTiendas.rows);
    } catch (error) {
        next(error)
    }
}

//Lugar
const getAllLugares = async (req,res,next) => {
    try {
        const allLugares = await pool.query ("Select * from lugar where lug_tipo='Estado'")
        res.json(allLugares.rows);
    } catch (error) {
        next(error)
    }
}


const createTelefonoCJ = async (req,res,next) => {
    const {tel_numero, per_rif} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO telefono( tel_numero, fk_persona_natural, fk_persona_juridica, fk_persona_empleado, fk_persona_contacto) VALUES ('"+tel_numero+"',null,(select per_id FROM persona_persona_juridica WHERE per_rif='"+per_rif+"') ,null, null) RETURNING *",/* [
                per_rif, perj_denom_comercial, perj_razon_social, perj_pagina_web, perj_capital, 
                perj_direccion_fiscal, perj_direccion_principal,
                lug_nombre_fiscal, lug_nombre_principal, tie_nombre]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const updateTelefonoCJ =  async (req,res,next) => {
    //const {id} = req.params;
    const {per_id,tel_numero} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE telefono SET tel_numero="+tel_numero+" WHERE fk_persona_juridica ="+per_id
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Telefono no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
    
}

const deleteTelefonoCJ = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body;

    try {
        const result =await pool.query("DELETE FROM telefono WHERE fk_persona_juridica = $1", [per_id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Telefono no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const getAllTelefonos = async (req,res,next) => {
    try {
        const allTelefonos = await pool.query ("select * from telefono")
        res.json(allTelefonos.rows);
    } catch (error) {
        next(error)
    }
 
}

const  createPersonaContacto = async (req,res,next) => {
    const {pco_nombre, pco_apellido, per_rif} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO persona_contacto(pco_nombre, pco_apellido, fk_persona_juridica) VALUES ('"+pco_nombre+"', '"+pco_apellido+"',(SELECT per_id FROM persona_persona_juridica WHERE per_rif='"+per_rif+"')) RETURNING *;",/* [
                per_rif, perj_denom_comercial, perj_razon_social, perj_pagina_web, perj_capital, 
                perj_direccion_fiscal, perj_direccion_principal,
                lug_nombre_fiscal, lug_nombre_principal, tie_nombre]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const updatePersonaContacto =  async (req,res,next) => {
    const {id} = req.params;
    const {pco_nombre, pco_apellido} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE persona_contacto SET pco_nombre='"+pco_nombre+"', pco_apellido='"+pco_apellido+"' WHERE pco_id="+id, 
        );
        res.json(result.rows[0])
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Persona Contacto no encontrada"
         });
    
    } catch (error) {
        next(error)
    }
    
}

const deletePersonaContacto = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body;

    try {
        const result =await pool.query("DELETE FROM persona_contacto WHERE fk_persona_juridica = $1", [per_id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Persona de Contacto no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}




const getAllPersonaEmpleado = async (req,res,next) => {
    try {
        const AllPersonaEmpleado = await pool.query (
            "SELECT pe.per_id, pe.per_rif, pe.emp_cedula, pe.emp_salario, lug_nombre, tie_nombre, dep_nombre, (SELECT tel_numero FROM telefono WHERE fk_persona_empleado=pe.per_id LIMIT 1) FROM persona_empleado pe, lugar l, tienda, departamento WHERE  pe.fk_tienda=tie_clave AND pe.fk_departamento=dep_id AND pe.fk_lugar=lug_id ")
        res.json(AllPersonaEmpleado.rows);
    } catch (error) {
        next(error)
    }
 
}

const getPersonaEmpleado = async (req,res,next) => {
    /*try {
        const {id} = req.params;
        const result =await pool.query("select * from descuento where des_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Descuento no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }*/
}

const createPersonaEmpleado = async (req,res,next) => {
    const {per_rif, emp_cedula, emp_salario, lug_id, tie_clave,dep_id} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO persona_empleado(per_rif, emp_cedula, emp_salario, fk_lugar, fk_tienda, fk_departamento) VALUES ('"+per_rif+"', "+emp_cedula+"," +emp_salario+","+lug_id+","+tie_clave+","+dep_id+") RETURNING *;"
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deletePersonaEmpleado = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("DELETE FROM persona_empleado WHERE per_id = $1;", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Empleado no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updatePersonaEmpleado =  async (req,res,next) => {
    const {id} = req.params;
    const {per_rif, emp_cedula, emp_salario, lug_id, tie_clave,dep_id} = req.body
    try {
        const result = await pool.query(
            "UPDATE persona_empleado set per_rif='"+per_rif+"', emp_cedula="+emp_cedula+" , emp_salario="+emp_salario+" , fk_lugar="+lug_id+", fk_tienda="+tie_clave+", fk_departamento="+dep_id+" where per_id="+id
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Empleado no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const createTelefonoPE = async (req,res,next) => {
    const {tel_numero, emp_cedula} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO telefono(tel_numero, fk_persona_empleado) VALUES ('"+tel_numero+"',(select per_id FROM persona_empleado WHERE emp_cedula='"+emp_cedula+"')) RETURNING *;"
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const updateTelefonoPE =  async (req,res,next) => {
    //const {id} = req.params;
    const {per_id,tel_numero} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE telefono SET tel_numero="+tel_numero+" WHERE fk_persona_empleado ="+per_id
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Telefono no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
    
}

const deleteTelefonoPE = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body;

    try {
        const result =await pool.query("DELETE FROM telefono WHERE fk_persona_empleado = $1", [per_id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Telefono no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const getAllDepartamento = async (req,res,next) => {
    try {
        const allDepartamento = await pool.query ("select * from departamento")
        res.json(allDepartamento.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllusuarioEmpleado = async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT u.usu_id, u.usu_username, u.usu_contrasena, r.rol_nombre, p.emp_cedula FROM persona_empleado p, usuario u left join rol r on r.rol_clave = u.fk_rol where p.per_id = u.fk_persona_empleado")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const getusuarioEmpleado= async (req,res,next) => {
    /*try {
        const {id} = req.params;
        const result =await pool.query("select * from usuario where des_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Usuario no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }*/
}

const createusuarioEmpleado = async (req,res,next) => {
    const {usu_username, usu_contrasena, fk_rol,fk_persona_empleado} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO usuario(usu_username, usu_contrasena, fk_rol, fk_persona_empleado) VALUES  ('"+usu_username+"','"+usu_contrasena+"',"+fk_rol+","+fk_persona_empleado+") RETURNING * "
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteusuarioEmpleado = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from usuario where usu_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const deleteusuarioEmpleado2 = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body

    try {
        const result =await pool.query("delete from usuario where fk_persona_empleado = $1", [per_id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateusuarioEmpleado =  async (req,res,next) => {
    const {id} = req.params;
    const {usu_username, usu_contrasena, fk_rol, fk_persona_empleado} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE usuario set usu_username='"+usu_username+"', usu_contrasena='"+usu_contrasena+"', fk_rol="+fk_rol+", fk_persona_empleado="+fk_persona_empleado+" where usu_id="+id
          
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Usuario no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const getAllRoles = async (req,res,next) => {
    try {
        const allRoles = await pool.query ("Select * from rol")
        res.json(allRoles.rows);
    } catch (error) {
        next(error)
    }
}

const deleteusuarioJuridico2 = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body

    try {
        const result =await pool.query("delete from usuario where fk_persona_juridica = $1", [per_id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const getUsuario = async (req,res,next) => {
    const {usu_username, usu_contrasena} = req.params
    try {
        const allUsuarios = await pool.query ("SELECT * FROM usuario WHERE usu_username='"+usu_username+"' AND usu_contrasena='"+usu_contrasena+"'")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}


const getAllRolFuncion = async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT rf.rf_id,r.rol_nombre, f.fun_tipo, f.fun_descripcion FROM rol r, funcion f, rol_funcion rf WHERE r.rol_clave=rf.rol_clave AND f.fun_id=rf.fun_id")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const createRolFuncion = async (req,res,next) => {
    const {rol_clave, fun_id} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO rol_funcion(rol_clave, fun_id) VALUES ($1,$2) RETURNING * ", [rol_clave,fun_id]
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const getAllFuncion = async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT * from funcion")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const deleteRolFuncion = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from rol_funcion where rf_id= $1 OR rol_clave=$2", [id,id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "RolFuncion no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}



const getAllcambioEstatus = async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT distinct p.ped_numero_compra, p.ped_fecha, e.est_tipo, pe.pe_fecha_hora_inicio, pe.pe_fecha_hora_fin FROM pedido p, estatus e, pedido_estatus pe WHERE pe.ped_numero_compra=p.ped_numero_compra AND pe.est_clave=e.est_clave AND pe_fecha_hora_fin is null")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const updatecambioEstatus =  async (req,res,next) => {
    const {est_tipo, ped_numero_compra} = req.body;
    
    try {
        const result = await pool.query("UPDATE public.pedido_estatus SET pe_fecha_hora_fin=current_timestamp WHERE est_clave in (select est_clave from estatus where est_tipo='"+est_tipo+"') AND (ped_numero_compra="+ped_numero_compra+")")
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Usuario no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const createcambioEstatus = async (req,res,next) => {
    const {ped_numero_compra, est_clave} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO public.pedido_estatus(ped_numero_compra, est_clave, pe_fecha_hora_inicio) VALUES ( "+ped_numero_compra+","+est_clave+", current_timestamp)");
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}


const getAllEstatus = async (req,res,next) => {
    try {
        const allEstatus = await pool.query ("SELECT * from estatus")
        res.json(allEstatus.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllPP = async (req,res,next) => {
    const {ped_numero_compra} = req.params
    try {
        const allEstatus = await pool.query ("SELECT distinct d.dp_id, pr.pro_clave, pr.pro_nombre, d.dp_cantidad FROM detalle_pedido d, producto_tienda pt, producto pr WHERE d.ped_numero_compra=$1 and pr.pro_clave in (select pro_clave from producto_tienda where pt_id=d.pt_id)",[ped_numero_compra])
        res.json(allEstatus.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllPP2 = async (req,res,next) => {
    const {ped_numero_compra} = req.params
    try {
        const allEstatus = await pool.query ("SELECT distinct d.dp_id, pr.pro_clave, pr.pro_nombre, d.dp_cantidad, d.dp_precio,d.dp_precio*d.dp_cantidad as preciot FROM detalle_pedido d, producto_tienda pt, producto pr WHERE d.ped_numero_compra=$1 and pr.pro_clave in (select pro_clave from producto_tienda where pt_id=d.pt_id)",[ped_numero_compra])
        res.json(allEstatus.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllPP3 = async (req,res,next) => {
    const {ped_numero_compra} = req.params
    try {
        const allEstatus = await pool.query ("SELECT distinct d.dp_id, pr.pro_clave, pr.pro_nombre, d.dp_cantidad, CAST((d.dp_precio/pr.pro_peso_neto) as numeric(5,2) )as pgramo , CAST(((d.dp_precio/pr.pro_peso_neto)*d.dp_cantidad) as numeric(5,2)) as preciot FROM detalle_pedido d, producto_tienda pt, producto pr WHERE d.ped_numero_compra=$1 and pr.pro_clave in (select pro_clave from producto_tienda where pt_id=d.pt_id)",[ped_numero_compra])
        res.json(allEstatus.rows);
    } catch (error) {
        next(error)
    }
 
}

const getProductosdeTienda = async (req,res,next) => {
    try {
        const allEstatus = await pool.query ("SELECT distinct p.pro_clave, p.pro_nombre, pt.pt_cantidad FROM producto p, producto_tienda pt WHERE p.pro_clave=pt.pro_clave ")
        res.json(allEstatus.rows);
    } catch (error) {
        next(error)
    }
 
}


const getProductosdeTienda2 = async (req,res,next) => {
    const {ped_numero_compra} = req.params;
    try {
        const allEstatus = await pool.query ("SELECT p.pro_clave, p.pro_nombre, pt.pt_cantidad FROM producto p, producto_tienda pt WHERE p.pro_clave=pt.pro_clave AND pt.tie_clave in (select fk_tienda from pedido where ped_numero_compra=$1)", [ped_numero_compra]);
        res.json(allEstatus.rows);
    } catch (error) {
        next(error)
    }
 
}


const deleteproductoTienda = async (req,res,next) => {
    const {pro_clave} = req.params;


        const result =await pool.query("delete from detalle_pedido where pt_id in (select pt_id from producto_tienda p where p.pro_clave=$1)", [pro_clave]);
        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Detalle Pedido no encontrado"
        });


        const result2 =await pool.query("delete from producto_tienda where pro_clave= $1", [pro_clave]);
            if (result2.rowCount === 0)
            return res.status(404).json({
                message : "Producto tienda no encontrado"
            });


}

const createDetallePedido = async (req,res,next) => {
    const {ped_numero_compra, pro_clave, dp_cantidad} = req.body


        const result =  await pool.query(
            "INSERT INTO public.detalle_pedido(ped_numero_compra, pt_id, dp_cantidad, dp_precio) VALUES ($1, (select pt_id from producto_tienda where pro_clave=$2 and tie_clave in (select fk_tienda FROM pedido WHERE ped_numero_compra=$3 )),$4,(select p.pro_precio_actual FROM producto p WHERE p.pro_clave=$5))", [
                ped_numero_compra,pro_clave,ped_numero_compra,dp_cantidad,pro_clave]);
                const result2 =  await pool.query(
                    "UPDATE public.pedido SET ped_total= (SELECT SUM(dp_precio*dp_cantidad) from detalle_pedido dp where dp.ped_numero_compra = $1 ) where ped_numero_compra = $2;",[ped_numero_compra,ped_numero_compra]);        
        res.json(result.rows[0])

}

const createDetallePedidoPM = async (req,res,next) => {
    const {ped_numero_compra, pro_clave, dp_cantidad,dp_precio} = req.body


        const result =  await pool.query(
            "INSERT INTO public.detalle_pedido(ped_numero_compra, pt_id, dp_cantidad, dp_precio) VALUES ($1, (select pt_id from producto_tienda where pro_clave=$2 and tie_clave in (select fk_tienda FROM pedido WHERE ped_numero_compra=$3 )),$4,(select CAST( (p.pro_precio_actual/p.pro_peso_neto) as numeric(5,2)) FROM producto p WHERE p.pro_clave=$5))", [
                ped_numero_compra,pro_clave,ped_numero_compra,dp_cantidad,pro_clave]);


        const result2 =  await pool.query(
            "UPDATE public.pedido SET ped_total= (SELECT SUM(dp_precio*dp_cantidad) from detalle_pedido dp where dp.ped_numero_compra = $1 ) where ped_numero_compra = $2;",[ped_numero_compra,ped_numero_compra]);
        res.json(result.rows[0])

}

const updateDetallePedido =  async (req,res,next) => {
    const {id} = req.params;
    const {dp_cantidad} = req.body;
    
    try {
        const result = await pool.query("UPDATE public.detalle_pedido SET dp_cantidad=$1 WHERE dp_id=$2;", [
            dp_cantidad,
            id])
    
            const result2 = await pool.query(
                "UPDATE public.pedido SET ped_total= (SELECT SUM(dp_precio*dp_cantidad) from detalle_pedido dp where dp.ped_numero_compra in (select ped_numero_compra from detalle_pedido where dp_id=$1) ) where ped_numero_compra in (select ped_numero_compra from detalle_pedido where dp_id=$2);",[id,id]
            );

        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Detalle Pedido no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const deleteDetallePedido = async (req,res,next) => {
    const {id,ped_numero_compra} = req.params;


        const result =await pool.query("DELETE FROM public.detalle_pedido WHERE dp_id=$1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Tipo no encontrado"
        });

        const result2 =  await pool.query(
            "UPDATE public.pedido SET ped_total= (SELECT SUM(dp_precio*dp_cantidad) from detalle_pedido dp where dp.ped_numero_compra = $1 ) where ped_numero_compra = $2;",[ped_numero_compra,ped_numero_compra]);

        return res.sendStatus(204)


}

const getAllClientesNaturales = async (req,res,next) => {
    try {
        const AllClientesNat = await pool.query (
            "SELECT p.per_id, p.per_rif, p.pern_codigo_carnet, p.pern_cedula, p.pern_p_nombre, p.pern_s_nombre, p.pern_p_apellido, p.pern_s_apellido, p.pern_direccion, (SELECT tel_numero FROM telefono WHERE fk_persona_natural=p.per_id LIMIT 1), l.lug_nombre, ti.tie_nombre FROM persona_persona_natural p, lugar l, tienda ti WHERE  p.fk_tienda=ti.tie_clave AND p.fk_lugar=l.lug_id   ");                                                                                                                                                                                                                  
        res.json(AllClientesNat.rows);
    } catch (error) {
        next(error)
    }
}

const getClienteNatural = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from persona_persona_natural where des_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Cliente Natural no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createClienteNatural = async (req,res,next) => {
    const {per_rif, pern_codigo_carnet, pern_cedula, pern_p_nombre, pern_s_nombre, pern_p_apellido, pern_s_apellido, pern_direccion, fk_lugar, fk_tienda} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO persona_persona_natural(per_rif, pern_codigo_carnet, pern_cedula, pern_p_nombre, pern_s_nombre, pern_p_apellido, pern_s_apellido, pern_direccion, fk_lugar, fk_tienda) Values ('"+per_rif+"' , '"+pern_codigo_carnet+"','"+pern_cedula+"','"+pern_p_nombre+"','"+pern_s_nombre+"','"+pern_p_apellido+"','"+pern_s_apellido+"','"+pern_direccion+"','"+fk_lugar+"','"+fk_tienda+"') RETURNING * "/*, [
                per_rif, pern_codigo_carnet, pern_cedula, pern_p_nombre, pern_s_nombre, pern_p_apellido, pern_s_apellido, pern_direccion, fk_lugar, fk_tienda]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteClienteNatural = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from persona_persona_natural where per_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Cliente Natural no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateClienteNatural =  async (req,res,next) => {
    const {id} = req.params;
    const {per_rif, pern_codigo_carnet, pern_cedula, pern_p_nombre, pern_s_nombre, pern_p_apellido, pern_s_apellido, pern_direccion, fk_lugar, fk_tienda} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE persona_persona_natural set per_rif='"+per_rif+"', pern_codigo_carnet='"+pern_codigo_carnet+"', pern_cedula='"+pern_cedula+"', pern_p_nombre='"+pern_p_nombre+"', pern_s_nombre='"+pern_s_nombre+"', pern_p_apellido='"+pern_p_apellido+"', pern_s_apellido='"+pern_s_apellido+"', pern_direccion='"+pern_direccion+"', fk_lugar='"+fk_lugar+"', fk_tienda='"+fk_tienda+"'  where per_id="+id,
           // [per_rif, pern_codigo_carnet, pern_cedula, pern_p_nombre, pern_s_nombre, pern_p_apellido, pern_s_apellido, pern_direccion, fk_lugar, fk_tienda, id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Cliente Natural no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const deleteusuarioClienteNatural = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body

    try {

        const result =await pool.query("delete from usuario where fk_persona_natural ="+per_id,);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const deletePersonaNat_Cliente = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body

    try {

        const result =await pool.query("delete from persona_persona_natural where per_id ="+per_id,);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Persona natural no encontrada"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const getAllTelefonosCN = async (req,res,next) => {
    try {
        const allTelefonos = await pool.query ("select * from telefono")
        res.json(allTelefonos.rows);
    } catch (error) {
        next(error)
    }
 
}

const getTelefonoCN = async (req,res,next) => {
   /* try {
        const {id} = req.params;
        const result =await pool.query("select * from forma where for_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Forma no encontrada"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }*/
}

const createTelefonoCN = async (req,res,next) => {
    const {tel_numero, per_rif} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO telefono(tel_numero, fk_persona_natural, fk_persona_juridica, fk_persona_empleado, fk_persona_contacto) VALUES ('"+tel_numero+"',(select per_id FROM persona_persona_natural WHERE per_rif='"+per_rif+"'),null ,null, null) RETURNING *",// [
          
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteTelefonoCN = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body;

    try {
        const result =await pool.query("DELETE FROM telefono WHERE fk_persona_natural = $1", [per_id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Telefono no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const updateTelefonoCN =  async (req,res,next) => {
    //const {id} = req.params;
    const {per_id,tel_numero} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE telefono SET tel_numero="+tel_numero+" WHERE fk_persona_natural ="+per_id
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Telefono no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
  
}

const getAllUsuariosCN = async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT u.usu_id, u.usu_username, u.usu_contrasena, r.rol_nombre, p.pern_cedula FROM persona_persona_natural p, usuario u left join rol r on r.rol_clave = u.fk_rol where p.per_id = u.fk_persona_natural")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const getUsuarioCN = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from usuario where usu_clave = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Usuario no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createUsuarioCN = async (req,res,next) => {
    const {usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO usuario (usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) Values ('"+usu_username+"','"+usu_contrasena+"','"+fk_rol+"','"+fk_persona_natural+"',null,null) RETURNING *",/* [
                usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteUsuarioCN = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from usuario where usu_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateUsuarioCN =  async (req,res,next) => {
    const {id} = req.params;
    const {usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE usuario set usu_username='"+usu_username+"', usu_contrasena='"+usu_contrasena+"', fk_rol='"+fk_rol+"', fk_persona_natural='"+fk_persona_natural+"', fk_persona_juridica=null, fk_persona_empleado=null  where usu_id="+id, 
          
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Usuario no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const deletePedidoUsuario = async (req,res,next) => {
    //const {id} = req.params;
    const {usu_id} = req.body

    try {

        const result =await pool.query("delete from pedido where fk_usuario in"+usu_id,);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "No se encuentran pedidos de este usuario"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}


//Usuarios Juridicos
const getAllUsuariosCJ = async (req,res,next) => {
    try {
        const allUsuariosJ = await pool.query ("SELECT u.usu_id, u.usu_username, u.usu_contrasena, r.rol_nombre, p.per_rif FROM persona_persona_juridica p, usuario u left join rol r on r.rol_clave = u.fk_rol where p.per_id = u.fk_persona_juridica ")
        res.json(allUsuariosJ.rows);
    } catch (error) {
        next(error)
    }
 
}

const getUsuarioCJ = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * persona_persona_juridica where des_id = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Usuario no encontrado"
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createUsuarioCJ = async (req,res,next) => {
    const {usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO usuario (usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) Values ('"+usu_username+"','"+usu_contrasena+"','"+fk_rol+"',null,'"+fk_persona_juridica+"',null) RETURNING *",/* [
                usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado]*/
        );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteUsuarioCJ = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result =await pool.query("delete from usuario where usu_id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateUsuarioCJ =  async (req,res,next) => {
    const {id} = req.params;
    const {usu_username, usu_contrasena, fk_rol, fk_persona_natural, fk_persona_juridica, fk_persona_empleado} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE usuario set usu_username='"+usu_username+"', usu_contrasena='"+usu_contrasena+"', fk_rol='"+fk_rol+"', fk_persona_natural=null, fk_persona_juridica='"+fk_persona_juridica+"', fk_persona_empleado=null  where usu_id="+id, 
          
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Usuario no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const deleteusuarioClienteJuridico = async (req,res,next) => {
    //const {id} = req.params;
    const {per_id} = req.body

    try {

        const result =await pool.query("delete from usuario where fk_persona_juridica ="+per_id,);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const getRol = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result =await pool.query("select * from rol where rol_clave = $1", [id]);

        if (result.rows.length===0)
            return res.status(404).json({
                message : "Rol no encontrado"
            })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const createRol = async (req,res,next) => {
    const {rol_nombre, rol_descripcion} = req.body

    try {
        const result =  await pool.query(
            "Insert into rol (rol_nombre, rol_descripcion) Values ('"+rol_nombre+"','"+rol_descripcion+"') RETURNING *", 
        );
        //res.render('create_sabor.html');
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const deleteRol = async (req,res,next) => {
    const {id} = req.params;

    try {
        const result = await pool.query("delete from rol where rol_clave = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Rol no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateRolUsuario = async (req,res,next) => {
    const {fk_rol} = req.body;

    try {
        const result = await pool.query("update usuario set fk_rol=null where fk_rol="+fk_rol);

        if (result.rowCount === 0)
            return res.status(404).json({
                message : "Usuario con dicho rol no encontrado"
        });

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateRol =  async (req,res,next) => {
    const {id} = req.params;
    const {rol_nombre, rol_descripcion} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE rol set rol_nombre='"+rol_nombre+"', rol_descripcion='"+rol_descripcion+"' where rol_clave ="+id, 
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Rol no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const deleteUsuario = async (req,res,next) => {
    const {id} = req.params;


        const result = await pool.query("Delete from detalle_pedido where ped_numero_compra in (select ped_numero_compra FROM pedido WHERE fk_usuario=$1) ", [id]);
        const result1 = await pool.query("Delete from pedido_met_pago where ped_numero_compra in (select ped_numero_compra FROM pedido WHERE fk_usuario=$1)", [id]);
        const result2 = await pool.query("Delete from pedido_estatus where ped_numero_compra in (select ped_numero_compra FROM pedido WHERE fk_usuario=$1)", [id]);
        const result4 = await pool.query("Delete from pedido where fk_usuario=$1", [id]);

        if (result4.rowCount === 0)
            return res.status(404).json({
                message : "Pedido no eliminado no encontrado"
        });

        return res.sendStatus(204)
}

const getAllUsuarios = async (req,res,next) => {
    try {
        const allusuarios = await pool.query ("Select * from usuario")
        res.json(allusuarios.rows);
    } catch (error) {
        next(error)
    }
}


const createPedido = async (req,res,next) => {
    const {tie_clave, usu_id} = req.body


        const result = await pool.query("INSERT INTO public.pedido(ped_fecha, ped_total, ped_iva, fk_tienda, fk_usuario) VALUES (CURRENT_TIMESTAMP, 0, 0, $1, $2) returning *;" ,[tie_clave,usu_id]);
        const result2 =  await pool.query("INSERT INTO public.pedido_estatus(ped_numero_compra, est_clave, pe_fecha_hora_inicio) VALUES ((select MAX(ped_numero_compra)from pedido where fk_usuario ="+usu_id+"),(select est_clave from   estatus where est_tipo LIKE '%Presupuesto%'), CURRENT_TIMESTAMP) returning *");
        res.json(result2.rows[0])


}

const createPedido2 = async (req,res,next) => {
    const {tie_clave, usu_id} = req.body


        const result = await pool.query("INSERT INTO public.pedido(ped_fecha, ped_total, ped_iva, fk_tienda, fk_usuario) VALUES (CURRENT_TIMESTAMP, 0, 16, $1, $2) returning *;" ,[tie_clave,usu_id]);
        const result2 =  await pool.query("INSERT INTO public.pedido_estatus(ped_numero_compra, est_clave, pe_fecha_hora_inicio) VALUES ((select MAX(ped_numero_compra)from pedido where fk_usuario ="+usu_id+"),(select est_clave from   estatus where est_tipo LIKE '%Presupuesto%'), CURRENT_TIMESTAMP) returning *");
        res.json(result2.rows[0])


}


const createPedidoEstatus = async (req,res,next) => {
    const {tie_clave, usu_id} = req.body

    try {
        const result =  await pool.query("INSERT INTO public.pedido_estatus(ped_numero_compra, est_clave, pe_fecha_hora_inicio) VALUES ((select MAX(ped_numero_compra)from pedido where fk_usuario ="+usu_id+"),(select est_clave from   estatus where est_tipo LIKE '%Presupuesto%'), CURRENT_TIMESTAMP) returning *");
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }

}

const getAllpedidos = async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT distinct p.ped_numero_compra, p.ped_fecha, t.tie_nombre, u.usu_username, e.est_tipo, p.ped_total FROM pedido p, estatus e, pedido_estatus pe, tienda t, usuario u WHERE pe.ped_numero_compra=p.ped_numero_compra AND pe.est_clave=e.est_clave AND pe_fecha_hora_fin is null AND p.fk_tienda=tie_clave AND p.fk_usuario=u.usu_id AND t.tie_tipo is true AND p.ped_iva=0")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllpedidosOnline = async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT p.ped_numero_compra, p.ped_fecha, t.tie_nombre, u.usu_username, e.est_tipo, p.ped_total FROM pedido p, estatus e, pedido_estatus pe, tienda t, usuario u WHERE pe.ped_numero_compra=p.ped_numero_compra AND pe.est_clave=e.est_clave AND pe_fecha_hora_fin is null AND p.fk_tienda=tie_clave AND p.fk_usuario=u.usu_id AND t.tie_tipo is false")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllpedidosPandM= async (req,res,next) => {
    try {
        const allUsuarios = await pool.query ("SELECT p.ped_numero_compra, p.ped_fecha, t.tie_nombre, u.usu_username, e.est_tipo, p.ped_total FROM pedido p, estatus e, pedido_estatus pe, tienda t, usuario u, detalle_pedido dp WHERE pe.ped_numero_compra=p.ped_numero_compra AND pe.est_clave=e.est_clave AND pe_fecha_hora_fin is null AND p.fk_tienda=tie_clave AND p.fk_usuario=u.usu_id AND t.tie_tipo is true AND p.ped_iva=16 group by (p.ped_numero_compra, p.ped_fecha, t.tie_nombre, u.usu_username, e.est_tipo, p.ped_total )")
        res.json(allUsuarios.rows);
    } catch (error) {
        next(error)
    }
 
}

const getAllBancos = async (req,res,next) => {
    try {
        const allBancos= await pool.query ("SELECT * from banco")
        res.json(allBancos.rows);
    } catch (error) {
        next(error)
    }
 
}

const getPuntos = async (req,res,next) => {
    const {id} = req.params;
    try {
        const allPuntos= await pool.query ("select sum(pun_acumulados) from punto where fk_usuario in (select usu_id from usuario where usu_username='"+id+"')" )
        res.json(allPuntos.rows);
    } catch (error) {
        next(error)
    }
 
}

const getPuntos2 = async (req,res,next) => {
    const {id} = req.params;
    try {
        const allPuntos= await pool.query ("select sum(pun_acumulados)-coalesce(canjeados.ara,0) as dispo from punto,(select cast( sum(pm_monto)/(select val_precio from valor where val_id in (select val_id from valor where val_fecha_hora_fin is null)) as numeric (5)) as ara  FROM pedido_met_pago where mpa_id_canje_punto is not null and ped_numero_compra in (select ped_numero_compra from pedido where fk_usuario = (select usu_id from usuario where usu_username like '%"+id+"%') )) as canjeados where fk_usuario = (select usu_id from usuario where usu_username like '%"+id+"%') group by (canjeados.ara)")
        res.json(allPuntos.rows);
    } catch (error) {
        next(error)
    }
 
}

const getTotalPagar = async (req,res,next) => {
    const {id} = req.params;
    try {
        const allPuntos= await pool.query ("select p.ped_total - SUM (pm.pm_monto) as totalPagar from pedido_met_pago pm, pedido p where pm.ped_numero_compra=$1 and p.ped_numero_compra=$2 group by (p.ped_total)",[id,id] )
        res.json(allPuntos.rows);
    } catch (error) {
        next(error)
    }
 
}

const createPagoPunto = async (req,res,next) => {
    const {ped_numero_compra, usu_username, punto_canje} = req.body

    try {
        const result =  await pool.query("INSERT INTO public.metodo_de_pago_canje_punto(fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ((select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'), (select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning *; ");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_canje_punto) VALUES ("+ped_numero_compra+",(select val_precio*"+punto_canje+" from valor where val_id in (select MAX(val_id) from valor)),(select MAX(mpa_id) from metodo_de_pago_canje_punto)) returning *;");
        res.json(result2.rows[0])
    } catch (error) {
        next(error)
        
    }

}

const createMetodoPagoPunto = async (req,res,next) => {
    const {ped_numero_compra, usu_username, punto_canje} = req.body

    try {
        const result =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_canje_punto) VALUES ("+ped_numero_compra+",(select val_precio*"+punto_canje+" from valor where val_id in (select MAX(val_id) from valor)),(select MAX(mpa_id) from metodo_de_pago_canje_punto where fk_persona_juridica in (select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'))) returning *;");
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }

}

const updatePedidoEstatus =  async (req,res,next) => {
    const {id} = req.params;
    
    try {
        const result = await pool.query(
            "UPDATE public.pedido_estatus SET pe_fecha_hora_fin=current_timestamp WHERE est_clave in (select est_clave from estatus where est_tipo='Presupuesto') AND ped_numero_compra = $1" ,[id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Estatus no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
} 


const createPedidoEstatus2 = async (req,res,next) => {
    const {id} = req.params

    try {
        const result =  await pool.query(
            "INSERT INTO public.pedido_estatus(ped_numero_compra, est_clave, pe_fecha_hora_inicio) VALUES ( $1,(select est_clave from estatus where est_tipo='Pagado'), current_timestamp) returning *;",[id]);
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const updatedescontar =  async (req,res,next) => {
    const {ped_numero_compra,punto_canje,  usu_username} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE public.punto SET pun_acumulados=pun_acumulados -"+punto_canje+"WHERE pun_acumulados>="+punto_canje+" and fk_usuario in (select usu_id from usuario where usu_username='"+usu_username+"');" ,
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Punto no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const updatedescontar2 =  async (req,res,next) => {
    const {ped_numero_compra,punto_canje,  usu_username} = req.body;
    
    /*try {
        const result = await pool.query(
            "UPDATE public.punto SET pun_acumulados=pun_acumulados -1 WHERE pun_acumulados>=1 and fk_usuario in (select usu_id from usuario where usu_username='"+usu_username+"');" ,
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Punto no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }*/
    
}


const createPagoEfectivo = async (req,res,next) => {
    const {ped_numero_compra, usu_username, pm_monto,mpaE_denominacion} = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_efectivo(mpae_denominacion, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES('"+mpaE_denominacion+"',(select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'), (select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning *; ");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_efectivo)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_efectivo)) returning *;",[ped_numero_compra,pm_monto]);
        res.json(result2.rows[0])


}

const createMetodoPagoEfectivo = async (req,res,next) => {
    const {ped_numero_compra, usu_username, pm_monto,mpaE_denominacion} = req.body

    try {
        const result =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_efectivo)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_efectivo)) returning *;",[ped_numero_compra,pm_monto]);
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }

}

const createPuntos = async (req,res,next) => {
    const {ped_numero_compra,usu_username} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO public.punto(pun_acumulados, fk_pedido, fk_usuario) VALUES (1,"+ped_numero_compra+",(select usu_id from usuario where usu_username like'%"+usu_username+"%'));"
            );
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }
}

const updatetotal =  async (req,res,next) => {
    const {ped_numero_compra} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE public.pedido SET ped_total= (SELECT SUM(dp_precio*dp_cantidad) from detalle_pedido dp where dp.ped_numero_compra = $1 ) where ped_numero_compra = $2;",[ped_numero_compra,ped_numero_compra]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "Pedido no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const descontarinv =  async (req,res,next) => {
    const {dp_cantidad,dp_id} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE public.producto_tienda SET pt_cantidad = pt_cantidad -$1 WHERE pt_id in (select pt_id from detalle_pedido where dp_id = $2);",[dp_cantidad,dp_id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "ProductTienda no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const descontarinv2 =  async (req,res,next) => {
    const {dp_cantidad,dp_id} = req.body;
    
    try {
        const result = await pool.query(
            "UPDATE public.inventario SET inv_cantidad=inv_cantidad-$1 WHERE pt_id in (select pt_id from detalle_pedido where dp_id = $2);",[dp_cantidad,dp_id]
        );
    
        if(result.rowCount === 0)
            return res.status(404).json({
            message : "ProductTienda no encontrado"
         });
    
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const createPagoDebito = async (req,res,next) => {
    const { ped_numero_compra, usu_username, pm_monto2, mpaTd_tipo_cuenta, mpatd_nro_cuenta, mpatd_clave,  ban_id } = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_tarjeta_debito(mpatd_tipo_cuenta, mpatd_nro_cuenta, mpatd_clave, fk_banco, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ('"+mpaTd_tipo_cuenta+"', '"+mpatd_nro_cuenta+"', "+mpatd_clave+","+ban_id+",(select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'), (select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning*;");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_tar_deb)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_tarjeta_debito)) returning *;",[ped_numero_compra,pm_monto2]);
        res.json(result2.rows[0])

}

const createMetodoPagoDebito = async (req,res,next) => {
    const { ped_numero_compra, usu_username, pm_monto2, mpaTd_tipo_cuenta, mpatd_nro_cuenta, mpatd_clave,  ban_id } = req.body

    try {
        const result =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_tar_deb)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_tarjeta_debito)) returning *;",[ped_numero_compra,pm_monto2]);
        res.json(result.rows[0])
    } catch (error) {
        next(error)
        
    }

}

const createPagoCredito= async (req,res,next) => {
    const { ped_numero_compra, usu_username, pm_monto3, mpaTc_nro_tarjeta, mpaTc_fecha_vencimiento, mpaTc_cvv,
        mpaTc_tipo, ban_id} = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_tarjeta_credito(mpatc_nro_tarjeta, mpatc_fecha_vencimiento, mpatc_cvv, mpatc_tipo, fk_banco, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ('"+mpaTc_nro_tarjeta+"', '"+mpaTc_fecha_vencimiento+"',"+mpaTc_cvv+", '"+mpaTc_tipo+"',"+ban_id+", (select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'), (select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning * ;");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_tar_cred)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_tarjeta_credito)) returning *;",[ped_numero_compra,pm_monto3]);
        res.json(result2.rows[0])

}

const createPagoMovil= async (req,res,next) => {
    const {ped_numero_compra, usu_username, pm_monto4, mpaPm_numero_telf, ban_id } = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_pago_movil(mpapm_nro_telf, fk_banco, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ('"+mpaPm_numero_telf+"',"+ban_id+", (select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning *;");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_pago_movil)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_pago_movil)) returning *;",[ped_numero_compra,pm_monto4]);
        res.json(result2.rows[0])

}

const createPagoZelle= async (req,res,next) => {
    const {ped_numero_compra, usu_username, pm_monto5,  mpaZ_correo} = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_zelle(mpaz_correo, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ('"+mpaZ_correo+"', (select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning *;  ");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_zelle)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_zelle)) returning *;",[ped_numero_compra,pm_monto5]);
        res.json(result2.rows[0])

}

const createPagoPaypal = async (req,res,next) => {
    const {ped_numero_compra, usu_username, pm_monto6, mpaPp_nro_cuenta, mpaPp_correo} = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_paypal(mpapp_nro_cuenta, mpapp_correo, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ('"+mpaPp_nro_cuenta+"', '"+mpaPp_correo+"',  (select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning *;  ");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_paypal)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_paypal)) returning *;",[ped_numero_compra,pm_monto6]);
        res.json(result2.rows[0])

}

const createPagoZinli = async (req,res,next) => {
    const {ped_numero_compra, usu_username, pm_monto7, mpaZi_correo} = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_zinli(mpazi_correo, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ('"+mpaZi_correo+"' ,(select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning *;");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_zinli)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_zinli)) returning *;",[ped_numero_compra,pm_monto7]);
        res.json(result2.rows[0])

}

const createPagoCheque = async (req,res,next) => {
    const {ped_numero_compra, usu_username, pm_monto8, mpaCh_numero, mpaCh_nro_cuenta, ban_id} = req.body


        const result =  await pool.query("INSERT INTO public.metodo_de_pago_cheque(mpach_numero, mpach_nrocuenta, fk_banco, fk_persona_natural, fk_persona_juridica, fk_persona_empleado) VALUES ("+mpaCh_numero+", "+mpaCh_nro_cuenta+", "+ban_id+", (select fk_persona_natural from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_juridica from usuario where usu_username like '%"+usu_username+"%'),(select fk_persona_empleado from usuario where usu_username like '%"+usu_username+"%')) returning *;");
        const result2 =  await pool.query("INSERT INTO public.pedido_met_pago(ped_numero_compra, pm_monto, mpa_id_cheque)VALUES ($1,$2,(select MAX(mpa_id) from metodo_de_pago_cheque)) returning *;",[ped_numero_compra,pm_monto8]);
        res.json(result2.rows[0])

}


const getReporteEmpleados = async(req,res,next) => {
    try {
        const allControlEmp = await pool.query ("Select emp_cedula, (select count(a.cas_fecha) AS Dias_Inasistencia from control_asistencia a where (a.cas_hora_entrada = '0:00:00') and (a.cas_hora_salida = '0:00:00') and (Empleado.per_id = a.fk_persona_empleado)),(select count(a.cas_fecha) AS Entrada_Tarde from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada > d.hor_hora_inicio),(select count(a.cas_fecha) AS Cumple_Horario from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada <= d.hor_hora_inicio and a.cas_hora_salida >= d.hor_hora_fin),(select cast(avg(cas_hora_entrada)as time without time zone) AS Promedio_Entrada from control_asistencia where fk_persona_empleado = Empleado.per_id and (cas_hora_entrada <> '0:00:00')),(select cast(avg(cas_hora_salida)as time without time zone) AS Promedio_Salida from control_asistencia where fk_persona_empleado = Empleado.per_id and cas_hora_salida <> '0:00:00'),(select (d.hor_hora_inicio) AS Hora_Entrada from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id),(select (d.hor_hora_fin) AS Hora_Salida from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id)from persona_empleado AS Empleado")
        res.json(allControlEmp.rows);
    } catch (error) {
        next(error)
    }
}
 

const getReporteEmpleadosTRIM1 = async(req,res,next) => {
    try {
        const allControlEmp = await pool.query ("Select emp_cedula, (select count(a.cas_fecha) AS Dias_Inasistencia from control_asistencia a where (a.cas_fecha between '01/01/2022' and '31/03/2022')and (a.cas_hora_entrada = '0:00:00') and (a.cas_hora_salida = '0:00:00') and (Empleado.per_id = a.fk_persona_empleado)),(select count(a.cas_fecha) AS Entrada_Tarde from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada > d.hor_hora_inicio and a.cas_fecha between '01/01/2022' and '31/03/2022'),(select count(a.cas_fecha) AS Cumple_Horario from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada <= d.hor_hora_inicio and a.cas_hora_salida >= d.hor_hora_fin and cas_fecha between '01/01/2022' and '31/03/2022'),(select cast(avg(cas_hora_entrada)as time without time zone) AS Promedio_Entrada from control_asistencia where fk_persona_empleado = Empleado.per_id and (cas_hora_entrada <> '0:00:00') and cas_fecha between '01/01/2022' and '31/03/2022'),(select cast(avg(cas_hora_salida)as time without time zone) AS Promedio_Salida from control_asistencia where fk_persona_empleado = Empleado.per_id and cas_hora_salida <> '0:00:00' and cas_fecha between '01/01/2022' and '31/03/2022'),(select (d.hor_hora_inicio) AS Hora_Entrada from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id),(select (d.hor_hora_fin) AS Hora_Salida from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id)from persona_empleado AS Empleado")
        res.json(allControlEmp.rows);
    } catch (error) {
        next(error)
    }
}

const getReporteEmpleadosTRIM2 = async(req,res,next) => {
    try {
        const allControlEmp = await pool.query ("Select emp_cedula, (select count(a.cas_fecha) AS Dias_Inasistencia from control_asistencia a where (a.cas_hora_entrada = '0:00:00') and (a.cas_hora_salida = '0:00:00') and (Empleado.per_id = a.fk_persona_empleado) and a.cas_fecha between '01/04/2022' and '30/06/2022'),(select count(a.cas_fecha) AS Entrada_Tarde from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada > d.hor_hora_inicio and a.cas_fecha between '01/04/2022' and '30/06/2022'),(select count(a.cas_fecha) AS Cumple_Horario from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada <= d.hor_hora_inicio and a.cas_hora_salida >= d.hor_hora_fin and cas_fecha between '01/04/2022' and '30/06/2022'),(select cast(avg(cas_hora_entrada)as time without time zone) AS Promedio_Entrada from control_asistencia where fk_persona_empleado = Empleado.per_id and (cas_hora_entrada <> '0:00:00') and cas_fecha between '01/04/2022' and '30/06/2022'),(select cast(avg(cas_hora_salida)as time without time zone) AS Promedio_Salida from control_asistencia where fk_persona_empleado = Empleado.per_id and cas_hora_salida <> '0:00:00' and cas_fecha between '01/04/2022' and '30/06/2022'),(select (d.hor_hora_inicio) AS Hora_Entrada from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id),(select (d.hor_hora_fin) AS Hora_Salida from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id)from persona_empleado AS Empleado")
        res.json(allControlEmp.rows);
    } catch (error) {
        next(error)
    }
}

const getReporteEmpleadosTRIM3 = async(req,res,next) => {
    try {
        const allControlEmp = await pool.query ("Select emp_cedula, (select count(a.cas_fecha) AS Dias_Inasistencia from control_asistencia a where (a.cas_hora_entrada = '0:00:00') and (a.cas_hora_salida = '0:00:00') and (Empleado.per_id = a.fk_persona_empleado) and a.cas_fecha between '01/07/2022' and '30/09/2022'),(select count(a.cas_fecha) AS Entrada_Tarde from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada > d.hor_hora_inicio and a.cas_fecha between '01/07/2022' and '30/09/2022'),(select count(a.cas_fecha) AS Cumple_Horario from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada <= d.hor_hora_inicio and a.cas_hora_salida >= d.hor_hora_fin and cas_fecha between '01/07/2022' and '30/09/2022'),(select cast(avg(cas_hora_entrada)as time without time zone) AS Promedio_Entrada from control_asistencia where fk_persona_empleado = Empleado.per_id and (cas_hora_entrada <> '0:00:00') and cas_fecha between '01/07/2022' and '30/09/2022'),(select cast(avg(cas_hora_salida)as time without time zone) AS Promedio_Salida from control_asistencia where fk_persona_empleado = Empleado.per_id and cas_hora_salida <> '0:00:00' and cas_fecha between '01/07/2022' and '30/09/2022'),(select (d.hor_hora_inicio) AS Hora_Entrada from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id),(select (d.hor_hora_fin) AS Hora_Salida from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id)from persona_empleado AS Empleado")
        res.json(allControlEmp.rows);
    } catch (error) {
        next(error)
    }
}

const getReporteEmpleadosTRIM4 = async(req,res,next) => {
    try {
        const allControlEmp = await pool.query ("Select emp_cedula, (select count(a.cas_fecha) AS Dias_Inasistencia from control_asistencia a where (a.cas_hora_entrada = '0:00:00') and (a.cas_hora_salida = '0:00:00') and (Empleado.per_id = a.fk_persona_empleado) and a.cas_fecha between '01/10/2022' and '31/12/2022'),(select count(a.cas_fecha) AS Entrada_Tarde from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada > d.hor_hora_inicio and a.cas_fecha between '01/10/2022' and '31/12/2022'),(select count(a.cas_fecha) AS Cumple_Horario from control_asistencia a, empleado_horario c, horario d where Empleado.per_id=a.fk_persona_empleado and Empleado.per_id=c.per_id and d.hor_id=c.hor_id and a.cas_hora_entrada <= d.hor_hora_inicio and a.cas_hora_salida >= d.hor_hora_fin and cas_fecha between '01/10/2022' and '31/12/2022'),(select cast(avg(cas_hora_entrada)as time without time zone) AS Promedio_Entrada from control_asistencia where fk_persona_empleado = Empleado.per_id and (cas_hora_entrada <> '0:00:00') and cas_fecha between '01/10/2022' and '31/12/2022'),(select cast(avg(cas_hora_salida)as time without time zone) AS Promedio_Salida from control_asistencia where fk_persona_empleado = Empleado.per_id and cas_hora_salida <> '0:00:00' and cas_fecha between '01/10/2022' and '31/12/2022'),(select (d.hor_hora_inicio) AS Hora_Entrada from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id),(select (d.hor_hora_fin) AS Hora_Salida from empleado_horario c, horario d where Empleado.per_id=c.per_id and d.hor_id=c.hor_id)from persona_empleado AS Empleado")
        res.json(allControlEmp.rows);
    } catch (error) {
        next(error)
    }
}



const getInventario = async(req,res,next) => {
    try {
        const allControlEmp = await pool.query ("select pt.pt_id, t.tie_nombre, p.pro_clave, p.pro_nombre, i.inv_cantidad, a.alm_nombre, (100-i.inv_cantidad) as faltante  from producto_tienda pt, tienda t, producto p, inventario i, almacen a where pt.pt_id=i.pt_id and i.alm_id=a.alm_id and pt.tie_clave =t.tie_clave and pt.pro_clave = p.pro_clave and i.inv_cantidad < 100")
        res.json(allControlEmp.rows);
    } catch (error) {
        next(error)
    }
}

const getInventario2 = async(req,res,next) => {
    try {
        const allControlEmp = await pool.query ("select pt.pt_id, t.tie_nombre, p.pro_clave, p.pro_nombre, i.inv_cantidad, a.alm_nombre from producto_tienda pt, tienda t, producto p, inventario i, almacen a where pt.pt_id=i.pt_id and i.alm_id=a.alm_id and pt.tie_clave =t.tie_clave and pt.pro_clave = p.pro_clave order by (pt.pt_id)")
        res.json(allControlEmp.rows);
    } catch (error) {
        next(error)
    }
}


const createOrdenReposicion = async (req,res,next) => {
    const {pt_id,tie_nombre,pro_clave,rin_fecha} = req.body


        const result =  await pool.query("INSERT INTO public.reposicion_inventario(rin_nombre_pedido, rin_descripcion, rin_fecha) VALUES ('"+pt_id+"', 'Reposicion"+pro_clave+"', '"+rin_fecha+"') returning *;");
        const result2 =  await pool.query("INSERT INTO public.detalle_orden(rin_id, pt_id, do_cantidad) VALUES ((select MAX(rin_id) FROM reposicion_inventario ),"+pt_id+", 10000);");
        const result3 =  await pool.query("UPDATE public.producto_tienda SET pt_cantidad=pt_cantidad+10000 WHERE pt_id=$1;",[pt_id]);
        const result4 =  await pool.query("UPDATE public.inventario SET inv_cantidad=inv_cantidad+10000 WHERE pt_id=$1;",[pt_id]);
        res.json(result.rows[0])

}


const getVentasxMes = async(req,res,next) => {

    try {
        const allGrafica = await pool.query ("select to_char(ped_fecha,'Mon') as mes, count(*) as ventas FROM pedido where ped_numero_compra in (select ped_numero_compra from pedido_Estatus pe where pe.est_clave in (select est_clave from estatus where est_tipo like '%Pagado%'))group by 1;")
        res.json(allGrafica.rows);
        
    } catch (error) {
        next(error)
    }
}

const getPMasVendido = async(req,res,next) => {

    try {
        const allGrafica = await pool.query ("select p.pro_nombre, SUM(dp.dp_cantidad) AS cant from producto p, producto_tienda pt, detalle_pedido dp where (select pro_nombre from producto where pro_clave=p.pro_clave)=(select pro_nombre from producto where pro_clave=pt.pro_clave) and dp.pt_id=pt.pt_id and dp.ped_numero_compra in (select pe.ped_numero_compra from pedido_estatus pe where pe.est_clave in (select est_clave from estatus where est_tipo like '%Pagado%')) group by (p.pro_clave) order by cant desc limit 1")
        res.json(allGrafica.rows);
        
    } catch (error) {
        next(error)
    }
}

const getPMenosVendido = async(req,res,next) => {

    try {
        const allGrafica = await pool.query ("select distinct p.pro_nombre, SUM(dp.dp_cantidad) AS cant from producto p, producto_tienda pt, detalle_pedido dp where (select pro_nombre from producto where pro_clave=p.pro_clave)=(select pro_nombre from producto where pro_clave=pt.pro_clave) and dp.pt_id=pt.pt_id and dp.ped_numero_compra in (select pe.ped_numero_compra from pedido_estatus pe where pe.est_clave in (select est_clave from estatus where est_tipo like '%Pagado%')) group by (p.pro_clave) order by cant asc limit 1")
        res.json(allGrafica.rows);
        
    } catch (error) {
        next(error)
    }
}

const getMetodosPago = async(req,res,next) => {

    try {
        const allGrafica = await pool.query ("select count(mpa_id_efectivo)*100/count(pm_id) as Efectivo, count(mpa_id_tar_deb)*100/count(pm_id) as Debito, count(mpa_id_tar_cred)*100/count(pm_id) as Credito, count (mpa_id_pago_movil)*100/count(pm_id) as PagoMovil, count(mpa_id_zelle)*100/count(pm_id) as Zelle, count(mpa_id_paypal)*100/count(pm_id) as Paypal, count(mpa_id_zinli)*100/count(pm_id) as Zinli, count(mpa_id_cheque)*100/count(pm_id) as Cheque, count(mpa_id_canje_punto)*100/count(pm_id) as Puntos FROM pedido_met_pago")
        res.json(allGrafica.rows);
        
    } catch (error) {
        next(error)
    }
}

const getUsoPuntos = async(req,res,next) => {

    try {
        const allGrafica = await pool.query ("select sum(pun_acumulados) as otorgados, coalesce(canjeados2.ara,0) as canjeados from punto,(select cast( sum(pm_monto)/(select val_precio from valor where val_id in (select val_id from valor where val_fecha_hora_fin is null)) as numeric (5)) as ara FROM pedido_met_pago where mpa_id_canje_punto is not null ) as canjeados2 group by (canjeados2.ara)")
        res.json(allGrafica.rows);
        
    } catch (error) {
        next(error)
    }
}

const getVentasOnline = async(req,res,next) => {

    try {
        const allGrafica = await pool.query ("select distinct COUNT(*)from pedido p where p.fk_tienda in (select tie_clave from tienda where tie_tipo is false) and p.ped_numero_compra in (select pe.ped_numero_compra from pedido_estatus pe where pe.est_clave in (select est_clave from estatus where est_tipo like '%Pagado%'))")
        res.json(allGrafica.rows);
        
    } catch (error) {
        next(error)
    }
}

const getVentasxTienda = async(req,res,next) => {

    try {
        const allGrafica = await pool.query ("select tie_nombre, COUNT(ped_numero_compra) from tienda, pedido where tie_tipo is true and tie_clave=fk_tienda and ped_numero_compra in ( select ped_numero_compra from pedido_Estatus pe where pe.est_clave in ( select est_clave from estatus where est_tipo like '%Pagado%')) group by (tie_nombre)")
        res.json(allGrafica.rows);
        
    } catch (error) {
        next(error)
    }
}


const createReporteEmpleados = async (req,res,next) => {
    const {cas_hora_entrada, cas_hora_salida, cas_fecha, fk_persona_empleado} = req.body

    try {
        const result =  await pool.query(
            "INSERT INTO control_asistencia (cas_hora_entrada, cas_hora_salida, cas_fecha, fk_persona_empleado) VALUES('"+cas_hora_entrada+"','"+cas_hora_salida+"', '"+cas_fecha+"', $1)", [fk_persona_empleado],
            console.log(cas_hora_entrada),
            console.log(cas_hora_salida),
            console.log(cas_fecha),
            console.log(fk_persona_empleado)
            );
        res.json(result.rows[0])
        

    } catch (error) {
        next(error)
        
    }
}




module.exports ={
    getAllSabores,
    getSabor,
    getSaborId, 
    createSabor,
    deleteSabor,
    uptadeSabor,
    getAllColores,
    getColor, 
    getColorId,
    createColor,
    deleteColor,
    uptadeColor,
    getAllTipos,
    getTipo, 
    getTipoId,
    createTipo,
    deleteTipo,
    updateTipo,
    getAllFormas,
    getForma, 
    getFormaId,
    createForma,
    deleteForma,
    updateForma,
    getAllSaborProducto,
    getSaborProducto, 
    createSaborProducto,
    updateSaborProducto,
    deleteSaborProducto,
    getAllColorProducto, 
    getColorProducto,
    createColorProducto, 
    deleteColorProducto, 
    updateColorProducto,
    getAllProductos,
    createProducto,
    updateProducto,
    deleteProducto,
    getAllRevista,
    createUsuario,
    createPersonaNatural,
    getAllValores,
    getValor,
    createValor,
    deleteValor,
    updateValor,
    getAllDescuentos,
    getDescuento,
    createDescuento,
    deleteDescuento,
    updateDescuento,
    deleteDescuentop,
    getAllCanjePunto,
    getAllClienteJuridico, 
    getClienteJuridico,
    createClienteJuridico,
    deleteClienteJuridico,
    updateClienteJuridico, 
    deletePersonaJur_Cliente,
    getAllTiendas,
    getAllLugares,
    createTelefonoCJ,
    updateTelefonoCJ,
    deleteTelefonoCJ,
    getAllTelefonos,
    createPersonaContacto, 
    updatePersonaContacto,
    deletePersonaContacto,
    getAllPersonaEmpleado, 
    getPersonaEmpleado, 
    createPersonaEmpleado,
    deletePersonaEmpleado,
    updatePersonaEmpleado,
    createTelefonoPE,
    updateTelefonoPE,
    deleteTelefonoPE, 
    getAllDepartamento,
    getAllusuarioEmpleado,
    getusuarioEmpleado,
    createusuarioEmpleado, 
    deleteusuarioEmpleado,
    updateusuarioEmpleado,
    deleteusuarioEmpleado2,
    getAllRoles,
    deleteusuarioJuridico2,
    getUsuario,
    getAllRolFuncion,
    createRolFuncion,
    getAllFuncion,
    deleteRolFuncion,
    getAllcambioEstatus,
    getAllEstatus,
    getAllPP,
    deleteproductoTienda,
    updatecambioEstatus,
    createcambioEstatus,
    getProductosdeTienda,
    createDetallePedido, 
    updateDetallePedido,
    deleteDetallePedido,
    getAllClientesNaturales,
    getClienteNatural,
    createClienteNatural,
    deleteClienteNatural,
    updateClienteNatural,
    deleteusuarioClienteNatural,
    deletePersonaNat_Cliente,
    getAllTelefonosCN,
    getTelefonoCN,
    createTelefonoCN,
    deleteTelefonoCN,
    updateTelefonoCN,
    getAllUsuariosCN,
    getUsuarioCN,
    createUsuarioCN,
    deleteUsuarioCN,
    updateUsuarioCN,
    deletePedidoUsuario,
    getAllUsuariosCJ,
    getUsuarioCJ,
    createUsuarioCJ,
    deleteUsuarioCJ,
    updateUsuarioCJ,
    deleteusuarioClienteJuridico,
    getRol,
    createRol,
    updateRol,
    updateRolUsuario,
    deleteRol,
    deleteUsuario,
    getAllUsuarios,
    createPedido,
    getAllpedidos,
    createPedidoEstatus,
    getProductosdeTienda2,
    getAllBancos,
    getPuntos,
    getTotalPagar,
    createPagoPunto,
    createMetodoPagoPunto,
    updatePedidoEstatus,
    createPedidoEstatus2,
    updatedescontar,
    createMetodoPagoEfectivo,
    createPagoEfectivo,
    createPuntos,
    updatetotal,
    descontarinv,
    descontarinv2,
    createPagoDebito, 
    createMetodoPagoDebito,
    createPagoCredito,
    createPagoMovil,
    createPagoZelle,
    createPagoPaypal,
    createPagoZinli,
    createPagoCheque,
    getReporteEmpleados,
    getAllpedidosOnline,
    getAllPP2,
    getAllpedidosPandM,
    getAllPP3,
    createPedido2,
    createDetallePedidoPM,
    getInventario,
    createOrdenReposicion,
    getInventario2,
    getVentasxMes,
    getPMasVendido,
    getPMenosVendido,
    getMetodosPago,
    getUsoPuntos,
    getVentasOnline,
    getVentasxTienda,
    updatedescontar2,
    createReporteEmpleados,
    getPuntos2,
    getReporteEmpleadosTRIM1, 
    getReporteEmpleadosTRIM2, 
    getReporteEmpleadosTRIM3,
    getReporteEmpleadosTRIM4    
}