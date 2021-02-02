import { Request, Response } from "express";

class IndexControlador{
public    index (req:Request, res:Response){
    res.json({text:'La otra ruta esta en /articulos'});
    }
}

export const indexControlador = new IndexControlador();