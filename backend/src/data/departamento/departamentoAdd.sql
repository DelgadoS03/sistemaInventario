INSERT INTO [dbo].[departamento](
    [nombre_dep],
    [clave]
)

VALUES(
    @nombre,
    @clave
)

SELECT SCOPE_IDENTITY() AS id_dep