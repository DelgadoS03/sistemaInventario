UPDATE [dbo].[resguardo]
SET
[fecha]=@fecha,
[observaciones]=@observaciones,
[documento]=@documento,
[usuario]=@usuario,
[persona]=@persona

WHERE [id_res]=@id;

SELECT *FROM [dbo].[resguardo] WHERE [id_res]=@id;
