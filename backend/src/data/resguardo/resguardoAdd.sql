INSERT INTO [dbo].[resguardo](
    [fecha],
    [observaciones],
    [documento],
    [usuario],
    [persona]
)
VALUES(
    @fecha,
    @observaciones,
    @documento,
    @usuario,
    @persona
);

SELECT SCOPE_IDENTITY() AS id_res;