/**
 * BillsController
 *
 * @description :: Server-side logic for managing Bills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    //Dem hoa don truyen vao ngay bd va kthuc
    Bill_count_by_day: function (req, res) {
        let idShop = req.param('idShop');
        let fromDay = req.param('fromDay');
        let toDay = req.param('toDay');

        let sql = "SELECT SUM(bill_total) as data , COUNT(*) as Count FROM bills JOIN users on bills.bill_user_id = users.user_id WHERE bills.createdAt >" + "' " + fromDay + "'" + " AND bills.createdAt < " + "'" +  toDay + "'" + " and users.user_shop_id = '" + idShop + "'"; 

        Bills.query(sql, function (err, result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    bill: Object.assign({}, result[0]),
                })
            }
        })
    },


    //Dem hoa don theo tuan 
    Bill_count_by_week: function (req, res) {
        let idShop = req.param('idShop');
        let fromDay = req.param('fromDay');
        let toDay = req.param('toDay');

        let sql = "SELECT date_format(bills.createdAt, '%d/%m') as Date, SUM(bill_total) as Data , COUNT(*) as Count FROM bills JOIN users on bills.bill_user_id = users.user_id WHERE bills.createdAt BETWEEN '" +fromDay+  "' AND '" + toDay + "' AND users.user_shop_id = " + idShop + " GROUP BY date_format(bills.createdAt, '%d/%m')";
       
        Bills.query(sql, function (err, result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    bill: result,
                })
            }
        })
    },
};

