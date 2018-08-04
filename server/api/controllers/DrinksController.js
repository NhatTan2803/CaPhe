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
            drink_active = req.param('drink_active');
        if (!drink_name || drink_name === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập tên đồ uống',
            })
        }
        if (!drink_price || drink_price === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập giá đồ uống',
            })
        }
        if (!drink_shop_id || drink_shop_id === '') {
            return res.json({
                status: 'error',
                message: 'Shop không hợp lệ',
            })
        }
        Drinks.create(
            {
                drink_name,
                drink_shop_id,
                drink_price,
                drink_avatar,
                drink_active
            }
        ).exec(function (err, tao) {
            if (err) {
                return console.log(err)
            }
            if (tao) {
                return res.json({
                    status: 'success',
                    message: 'Thêm sản phẩm thành công',
                    drink: tao
                })
            }
        })
    },
    Drinks_update: function (req, res) {
        var drink_id = req.param('drink_id'),
            drink_name = req.param('drink_name'),
            drink_price = req.param('drink_price'),
            drink_avatar = req.param('drink_avatar');
            drink_active = req.param('drink_active');
        Drinks.update({ drink_id },{
                drink_name,
                drink_price,
                drink_avatar,
                drink_active
            }).exec(function (err, updated) {
                if (err) { console.log(err) }
                if (updated) {
                    return res.json({
                        status: 'success',
                        message: 'Cập nhật thành công',
                        drink: Object.assign({}, updated[0])
                    })
                }
            })
    }
};

