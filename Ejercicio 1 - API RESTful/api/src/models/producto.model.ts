import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Producto extends Model {
    public id!: number;
    public nombre!: string;
    public descripcion!: string;
    public precio!: number;
    public cantidad!: number;
}

Producto.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    descripcion: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'PRODUCTO'
});

export default Producto;