UPDATE [dbo].[tipo_usuario]
SET
[rol_usuario]=@tipo

WHERE [id_tipo]=@id;

SELECT *
FROM [dbo].[tipo_usuario]

WHERE [id_tipo]=@id;