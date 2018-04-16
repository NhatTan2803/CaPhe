/**
 * Positions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    position_id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement:true,
    },
    position_shop_id:{
      type:'string',
    },
    position_name:{
      type:'string',
      
    },
  
  }
};
