/**
 * Type_drinks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    // Mã loại đồ uống
    type_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    // Mã shop
    type_shop_id: {
      type: 'integer',
    },
    // Tên loại
    type_name: {
      type: 'string',
      size: 20,
    },
    //Ảnh loại
    type_avatar: {
      type: 'string',
      size: 100,
    }
  }
};

