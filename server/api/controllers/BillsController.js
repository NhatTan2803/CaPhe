/**
 * BillsController
 *
 * @description :: Server-side logic for managing Bills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    Bill_create: function (req, res) {
        var bill_total = req.param('bill_total'),
            // bill_id = req.param('bill_id'),
            bill_user_id = req.param('bill_user_id');
            // bill_Mreceive = req.param('bill_Mreceive'),
            // bill_Mreturn = req.param('bill_Mreturn');
        Bills.create(
            {
                // bill_id,
                bill_user_id,
                bill_total,
                // bill_Mreceive,
                // bill_Mreturn
            }
        ).exec(function (err, create) {
            if (err) { return console.log(err) }
            if (create) {
                return res.json({
                    status: 'success',
                    bill: create
                })
            }
        })
    },

};

