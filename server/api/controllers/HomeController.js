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

        let sql = "SELECT date_format(bills.createdAt, '%d/%m') as Date, SUM(bill_total) as Data , COUNT(*) as Count FROM bills JOIN users on bills.bill_user_id = users.user_id WHERE bills.createdAt BETWEEN '" + fromDay + "' AND '" + toDay + "' AND users.user_shop_id = " + idShop + " GROUP BY date_format(bills.createdAt, '%d/%m') ORDER BY bills.createdAt ASC";
       
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

    //Dem chi tiet hoa don truyen vao ngay bd va kthuc
    Detail_Bill_count_by_day: function (req, res) {
        let idShop = req.param('idShop');
        let fromDay = req.param('fromDay');
        let toDay = req.param('toDay');

        let sql = "SELECT date_format(bills.createdAt, '%d/%m') as Date, SUM(detail_number) as SL , COUNT(*) as Count, SUM(detail_price) as Detail_Price, detail_drink_name as Drink_Name FROM detail_bill JOIN bills on detail_bill.detail_bill_id = bills.bill_id JOIN users ON bills.bill_user_id = users.user_id WHERE detail_bill.createdAt BETWEEN  '" + fromDay + "' AND '" + toDay + "' AND users.user_shop_id = " + idShop + " GROUP BY detail_drink_name";

        Bills.query(sql, function (err, result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    bill: result
                })
            }
        })
    },
};

