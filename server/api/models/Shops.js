/**
 * Shops.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    shop_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    shop_name: {
      type: 'string',
      size: 20,
    },
    shop_system_id:{
      type: 'integer'
    },
    shop_email: {
      type: 'string',
      size: 100,
    },
    shop_address: {
      type: 'string',

    },
    shop_phone: {
      type: 'string',
      size: 15,
    },
    shop_avatar: {
      type: 'string',
      size: 100,
    },
    shop_dayFrom: {
      type: 'date',
    },
    shop_dayTo: {
      type: 'date',
    }
  }
};

