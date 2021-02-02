UPDATE [dbo].[persona]

SET
[no_colaborador]=@no_colaborador,
    [nombre]=@nombre,
    [apellido1]=@apellido1,
    [apellido2]=@apellido2,
    [correo]=@correo,
    [telefono]=@telefono,
    [puesto]=@puesto,
    [departament]=@departamento

WHERE [id_per]=@id;

SELECT *FROM [dbo].[persona] WHERE [id_per]=@id;