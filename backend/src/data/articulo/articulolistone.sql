SELECT 
[id_art],
[nombre_art],
[marca],
[modelo],
[no_serie],
[no_inventario],
[cantidad],
[descripcion],
[localizacion],
[imagen],
[categoria],
[resguardo],
[feha]
FROM [dbo].[articulo]

WHERE [id_art]=@id