INSERT INTO [dbo].[tipo_usuario](
    [rol_usuario]
)
VALUES(
    @tipo
)

SELECT SCOPE_IDENTITY() AS id_tipo