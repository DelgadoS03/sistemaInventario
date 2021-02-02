INSERT INTO [dbo].[usuario](
    [username],
    [password],
    [correo],
    [puesto],
    [nombre_user],
    [apellido1],
    [apellido2],
    [no_colaborador],
    [departamento],
    [tipo_user]
)
VALUES(
    @username,
    @password,
    @correo,
    @puesto,
    @nombre,
    @apellido1,
    @apellido2,
    @no_colaborador,
    @departamento,
    @tipo
)

SELECT SCOPE_IDENTITY() AS id_user