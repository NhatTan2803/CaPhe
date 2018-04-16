/**
 * Type_drinksController
 *
 * @description :: Server-side logic for managing Type_drinks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	TypeDrinks_get: function (req, res) {
        Type_drinks.find().exec(function (err, find) {
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
    TypeDrinks_create: function (req, res) {
        var drink_name = req.param('drink_name'),
            drink_type_id = req.param('drink_type_id'),
            drink_price = req.param('drink_price'),
            drink_avatar = req.param('drink_avatar');
        Type_drinks.create(
            {
                drink_name,
                drink_type_id,
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
                })
            }
        })
    }
};

