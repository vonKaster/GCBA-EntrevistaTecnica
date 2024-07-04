# Ejercicio 4

### Debido a que no se aclaró usé de ejemplo MySQL como motor.

> Productos que tengan nombre pero no descripción

`SELECT *
FROM Producto
WHERE nombre IS NOT NULL AND descripcion IS NULL;`

> Productos vendidos en las últimas 24 horas

`SELECT p.*
FROM Producto p
JOIN DetalleVenta dv ON p.id_producto = dv.id_producto
JOIN Venta v ON dv.id_venta = v.id_venta
WHERE v.fecha >= NOW() - INTERVAL 1 DAY;`

> Recuento de todos los estados de venta

`SELECT estado, COUNT(*) AS cantidad
FROM Venta
GROUP BY estado;`

> Ventas en las que el cliente con email X gastó una suma mayor a Y (en este caso `X` es `fran@mail.com` e `Y` es `1500`)

`SELECT v.*
FROM Venta v
JOIN Cliente c ON v.id_cliente = c.id_cliente
WHERE c.email = 'fran@mail.com' 
  AND v.monto_total > 1500;`

