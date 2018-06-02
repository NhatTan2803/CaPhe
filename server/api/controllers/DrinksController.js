/**
 * DrinksController
 *
 * @description :: Server-side logic for managing drinks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    Drinks_get: function (req, res) {
        var drink_shop_id = req.param('drink_shop_id')
        //console.log('chp truyen xuong'+req.param('drink_shop_id'))
        Drinks.find({ drink_shop_id }).exec(function (err, find) {
            if (err) {
                return console.log(err)
            }
            if (find) {
                return res.json({
                    status: 'success',
                    drinks: find,
                })
            }
        }, error => {
            console.log(error);
            return;
        })
    },
    Drinks_create: function (req, res) {
        var drink_name = req.param('drink_name'),
            drink_shop_id = req.param('drink_shop_id'),
            drink_price = req.param('drink_price'),
            drink_avatar = req.param('drink_avatar');
        Drinks.create(
            {
                drink_name,
                drink_shop_id,
                drink_price,
                drink_avatar
            }
        ).exec(function (err, tao) {
            if (err) {
                return console.log(err)
            }
            if (tao) {
                return res.json({
                    status: 'success',
                    message: 'Thêm sản phẩm thành công'
                })
            }
        })
    },
    Drinks_update: function (req, res) {
        var drink_id = req.param('drink_id'),
            drink_name = req.param('drink_name'),
            drink_price = req.param('drink_price'),
            drink_avatar = req.param('drink_avatar');
        Drinks.update({ drink_id },{
                drink_name,
                drink_price,
                drink_avatar
            }).exec(function (err, updated) {
                if (err) { console.log(err) }
                if (updated) {
                    return res.json({
                        status: 'success',
                        message: 'Cập nhật thành công'
                    })
                }
            })
    }
};

