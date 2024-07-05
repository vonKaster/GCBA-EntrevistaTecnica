import { Router, Request, Response } from 'express';
import Producto from '../models/producto.model';

const router = Router();

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 *       400:
 *        description: Error al obtener los productos
 */
router.get('/productos', async (req: Request, res: Response) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/productos/:id', async (req: Request, res: Response) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Error al crear el producto
 */
router.post('/productos', async (req: Request, res: Response) => {
    try {
        const { nombre, descripcion, precio, cantidad } = req.body;
        const newProducto = await Producto.create({ nombre, descripcion, precio, cantidad });
        res.status(201).json(newProducto);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualiza un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       400:
 *         description: Error al actualizar el producto
 */
router.put('/productos/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, cantidad } = req.body;
        const producto = await Producto.findByPk(id);
        if (producto) {
            producto.nombre = nombre;
            producto.descripcion = descripcion;
            producto.precio = precio;
            producto.cantidad = cantidad;
            await producto.save();
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /productos/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               precio:
 *                 type: number
 *               cantidad:
 *                 type: integer
 *             example:
 *               precio: 25.99
 *     responses:
 *       200:
 *         description: Producto actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       400:
 *         description: Error al actualizar el producto
 */
router.patch('/productos/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, cantidad } = req.body;
        const producto = await Producto.findByPk(id);
        
        if (producto) {
            if (nombre !== undefined) {
                producto.nombre = nombre;
            }
            if (descripcion !== undefined) {
                producto.descripcion = descripcion;
            }
            if (precio !== undefined) {
                producto.precio = precio;
            }
            if (cantidad !== undefined) {
                producto.cantidad = cantidad;
            }
            
            await producto.save();
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       404:
 *         description: Producto no encontrado
 *       400:
 *         description: Error al eliminar el producto
 */
router.delete('/productos/:id', async (req: Request, res: Response) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            await producto.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;