SELECT
[id_user],
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
FROM [dbo].[usuario]

WHERE [id_user]=@id;