UPDATE [dbo].[articulo]

SET
[nombre_art]=@nombre,
[marca]=@marca,
[modelo]=@modelo,
[no_serie]=@no_serie,
[no_inventario]=@no_inventario,
[cantidad]=@cantidad,
[descripcion]=@descripcion,
[localizacion]=@localizacion,
[imagen]=@imagen,
[categoria]=@categoria

WHERE [id_art]=@id


SELECT *
FROM [dbo].[articulo]

WHERE [id_art]=@id