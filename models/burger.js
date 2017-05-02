// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm");

// module.exports = {
//   selectAll: async() => await orm.selectAll("burgers"),

//   insertOne: async(data) => {
//     const response = await orm.insertOne("burgers", data);
//     return response;
//   },
//   updateOne: async(data, condition) => {
//     const response = await orm.updateOne("burgers", data, condition);
//     return response;
//   }
// };

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // Giving the Author model a name of type STRING
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    // devoured: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    //   validate: {
    //     notNull: true
    //   }
    // },
  }, {
    classMethods: {
      associate: function (models) {
        Burger.belongsToMany(models.Customer, {
          through: 'CustomerBurger',
          foreignKey: 'burger_id'
        });
      }
    }
  });
  return Burger;
};

