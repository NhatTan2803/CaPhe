/**
 * Detail_billController
 *
 * @description :: Server-side logic for managing Detail_bills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	detail_bill_create: function (req, res) {
        var detail_bill_id = req.param('detail_bill_id'),
            detail_drink_id = req.param('detail_drink_id'),
            detail_drink_name = req.param('detail_drink_name'),
            detail_number = req.param('detail_number'),
            detail_price = req.param('detail_price'),
            detail_moneyItem_drink = req.param('detail_toalMoney_drink')
        Detail_bill.create(
            {
                detail_bill_id,
                detail_drink_id,
                detail_drink_name,
                detail_number,
                detail_price,
                detail_moneyItem_drink
            }
        ).exec(function (err, create) {
            if (err) { return console.log(err) }
            if (create) {
                return res.json({
                    status: 'success',
                })
            }
        })
    }
};

