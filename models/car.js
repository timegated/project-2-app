module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    make: {
        type: DataTypes.STRING,
        // allowNull:false
        },
    model: {
        type: DataTypes.STRING
       
    },
    year: {
        type:DataTypes.INTEGER
       
    },
    price: {
        type: DataTypes.DOUBLE
       
    }
    
      
  })
  return Cars
}