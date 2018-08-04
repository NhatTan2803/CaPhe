/**
 * Drinks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    // Mã đồ uống
    drink_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    drink_shop_id: {
      type: 'integer',
    },
    // Tên đồ uống
    drink_name: {
      type: 'string',
      size: 20,
    },
    // Giá đồ uống
    drink_price: {
      type: 'decimal',
    },
    // Ảnh sản phẩm
    drink_avatar: {
      type: 'string',
      size: 100,
    },
    drink_active: {
      type: 'string',
      enum: ["on", "off"]
    }
  }
};

