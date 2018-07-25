/**
 * Bills.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Mã hóa đơn
    bill_id: {
      type: 'integer',     
      autoIncrement: true,
      primaryKey: true,
    },
    // Mã nhân viên
    bill_user_id: {
      type: 'integer',
    },
    // Tổng tiền của hóa đơn
    bill_total: {
      type: 'decimal',
    }
    // Tiền nhận từ khách
    // bill_Mreceive: {
    //   type: 'decimal',
    // },
    // // Tiền trả khách
    // bill_Mreturn: {
    //   type: 'decimal',
    // }
    
  }
};

