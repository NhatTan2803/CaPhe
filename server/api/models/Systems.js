/**
 * Systems.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    system_id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement:true,
    },
    system_name:{
      type:'string',
      unique: true,
    },
    system_address:{
      type:'string',
    }
  }
};

