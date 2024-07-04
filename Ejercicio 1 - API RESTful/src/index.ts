import express from 'express';
import sequelize from './config/database';
import productoRoutes from './routes/producto.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use('/api', productoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync().then(() => {
    console.log(`Conectado a la base de datos ${process.env.DB_NAME} exitosamente`);
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}).catch((err) => {
    console.error('No fue posible conectarse a la base de datos:', err);
});
