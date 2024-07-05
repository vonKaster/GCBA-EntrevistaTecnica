import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Prueba Técnica GCBA - CRUD Productos',
            version: '1.0.0',
            description: 'API para una gestión de productos'
        },
        servers: [
            {
                url: '/api',
                description: 'BasePath por defecto de la API'
            }
        ],
        components: {
            schemas: {
                Producto: {
                    type: 'object',
                    required: ['nombre', 'descripcion', 'precio', 'cantidad'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'ID del producto'
                        },
                        nombre: {
                            type: 'string',
                            description: 'Nombre del producto'
                        },
                        descripcion: {
                            type: 'string',
                            description: 'Descripción del producto'
                        },
                        precio: {
                            type: 'number',
                            format: 'decimal',
                            description: 'Precio del producto'
                        },
                        cantidad: {
                            type: 'integer',
                            description: 'Cantidad del producto'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;