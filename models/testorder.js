'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TestOrder.belongsTo(models.TestCustomer);
      TestOrder.belongsTo(models.TestProduct);
      TestOrder.hasOne(models.TestCustomer);
      TestOrder.hasOne(models.TestProduct);
    }
  }
  TestOrder.init({
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'TestOrder',
  });
  return TestOrder;
};