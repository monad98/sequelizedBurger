// const burger = require('../model/burger');

const db = require('../models');

//burger and customer
module.exports.index = async(req, res, next) => {

  const burgers = await db.Burger.findAll({});
  const customers = await db.Customer.findAll({
    include: {
      model: db.Burger,
      through: {
        attributes: ['burger_name']
      }
    },
    order: [[ 'name', 'ASC'], [ db.Burger,  'id', 'ASC']]    
  });

  res.render('index', {
    burgers,
    customers
  });
}

//create burger
module.exports.createBurger = async(req, res, next) => {
  await db.Burger.create(req.body);
  res.redirect("/");
}

//Create customer
module.exports.createCustomer = async(req, res, next) => {
  await db.Customer.create(req.body);
  res.redirect("/");
}

//Devour
module.exports.update = async(req, res, next) => {
  const burgerId = parseInt(req.params.burger);
  const customerId = parseInt(req.body.by);
  console.log(req.body);

  const burger = await db.Burger.findOne({
    where: {
      id: burgerId
    }
  });

  await burger.addCustomer(customerId);
  res.redirect("/");  
}