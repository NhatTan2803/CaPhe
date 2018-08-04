/**
 * BillsController
 *
 * @description :: Server-side logic for managing Bills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    Bill_create: function (req, res) {
        var bill_total = req.param('bill_total'),
            bill_shop_id = req.param('bill_shop_id');
            // bill_id = req.param('bill_id'),
            bill_user_id = req.param('bill_user_id');
            // bill_Mreceive = req.param('bill_Mreceive'),
            // bill_Mreturn = req.param('bill_Mreturn');
        Bills.create(
            {
                // bill_id,
                bill_shop_id,
                bill_user_id,
                bill_total,
                // bill_Mreceive,
                // bill_Mreturn
            }
        ).exec(function (err, create) {
            // if (err) { return console.log(err) }
            if (create) {
                return res.json({
                    status: 'success',
                    bill: create
                })
            }
            else {
                return res.json({
                    status: 'error',
                    message: 'Lỗi thanh toán'
                })
            }
        })
    },

    Bill_count_invoice: function (req, res) {
        let idShop = req.param('idShop');

        let sql = "SELECT COUNT(bill_id) as count FROM bills WHERE bill_shop_id =" + idShop ;

        Bills.query(sql, function (err, result) {
            // if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    bill: Object.assign({}, result[0]),
                })
            } else {
                return res.json({
                    status: 'error',
                    message: 'Error'
                })
            }
        })
    },
};

