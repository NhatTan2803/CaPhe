/**
 * Detail_bill.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Mã chi tiết hóa đơn
    detail_id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    // Mã Hóa đơn
    detail_bill_id: {
      type: 'integer',
    },
    // Mã đồ uống
    detail_drink_id: {
      type: 'integer',
    },
    // Tên đồ uống,đáng lẽ không cần nhưng thích :)))))
    detail_drink_name: {
      type: 'string',
    },
    // Số lượng số uống
    detail_number: {
      type: 'integer',
    },   
    // Giá 1 sản phẩm
    detail_price: {
      type: 'decimal'
    },
    // Tổng giá tiền thành của 1 sản phẩm
    detail_toalMoney_drink: {
      type: 'decimal'
    }
  }
};

