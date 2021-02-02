UPDATE [dbo].[usuario]
SET
[username]=@username,
[password]=@password,
[correo]=@correo,
[puesto]=@puesto,
[nombre_user]=@nombre,
[apellido1]=@apellido1,
[apellido2]=@apellido2,
[no_colaborador]=@no_colaborador,
[departamento]=@departamento,
[tipo_user]=@tipo

WHERE [id_user]=@id;

SELECT * FROM [dbo].[usuario] WHERE [id_user]=@id;