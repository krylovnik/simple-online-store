const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue: "USER"}
})
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},

})
const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
})
const device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,allowNull: false},
    price: {type: DataTypes.INTEGER,allowNull: false},
    rating: {type: DataTypes.INTEGER,defaultValue: 0},
    img: {type: DataTypes.STRING,allowNull: false},
    role: {type:DataTypes.STRING, defaultValue: "USER"}
})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique:true, allowNull: false}
})
const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique:true, allowNull: false}
})
const rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER,allowNull: false}
})
const deviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})