SELECT
[id_per]
[no_colaborador],
[nombre],
[apellido1],
[apellido2],
[correo],
[telefono],
[puesto],
[departament]
FROM [dbo].[persona]
WHERE [id_per]=@id;