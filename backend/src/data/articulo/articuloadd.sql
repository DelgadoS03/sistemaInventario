INSERT INTO [dbo].[articulo](
[nombre_art],
[marca],
[modelo],
[no_serie],
[no_inventario],
[cantidad],
[descripcion],
[localizacion],
[imagen],
[categoria]
)

VALUES(
    @nombre,
    @marca,
    @modelo,
    @no_serie,
    @no_inventario,
    @cantidad,
    @descripcion,
    @localizacion,
    @imagen,
    @categoria
)

SELECT SCOPE_IDENTITY() AS id_art