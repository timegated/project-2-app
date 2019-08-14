module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users',  {
       username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    })
    Users.associate = function(models) {
        Users.hasMany(models.Cars, {
            onDelete: 'CASCADE'
        })
    }
    return Users
}