UPDATE [dbo].[departamento]

SET
[nombre_dep]=@nombre,
[clave]=@clave

WHERE [id_dep]=@id;

SELECT 
[nombre_dep],
[clave]
FROM [dbo].[departamento]

WHERE [id_dep]=@id