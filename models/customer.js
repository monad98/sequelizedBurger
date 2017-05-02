module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Customer.belongsToMany(models.Burger, {
          through: 'CustomerBurger',
          foreignKey: 'eaten_by'
        });
      }
    }
  });
  return Customer;
};
