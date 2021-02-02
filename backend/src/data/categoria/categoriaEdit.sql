UPDATE [dbo].[categoria]
SET
[nombre_cat]=@nombre

WHERE [id_cat]=@id


SELECT *
FROM [dbo].[categoria]

WHERE [id_cat]=@id