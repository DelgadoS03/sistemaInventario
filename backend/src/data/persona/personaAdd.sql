INSERT INTO [dbo].[persona](
    [no_colaborador],
    [nombre],
    [apellido1],
    [apellido2],
    [correo],
    [telefono],
    [puesto],
    [departament]
)

VALUES(
    @no_colaborador,
    @nombre,
    @apellido1,
    @apellido2,
    @correo,
    @telefono,
    @puesto,
    @departamento
)

SELECT SCOPE_IDENTITY() AS id_per