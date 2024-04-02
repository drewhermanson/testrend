const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Writeup extends Model {}

Writeup.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        manager: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        //type = write up or warning
        type: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        //reason for writeup
        reason: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        content: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        },
        user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
        //value to see if someone has acknowledged the writeup
        },
        acknowledged: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'writeup',
    });

module.exports = Writeup;