module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  })
  return Users
}