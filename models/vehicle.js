module.exports = (sequelize, DataTypes) => {
    const Cars = sequelize.define('Cars',  {
        make: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DOUBLE
        },
        description: {
            type: DataTypes.STRING
        },
        mileage: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.BOOLEAN,
        }
    })
 
    return Cars
}