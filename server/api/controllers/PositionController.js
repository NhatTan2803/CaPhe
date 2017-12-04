/**
 * PositionController
 *
 * @description :: Server-side logic for managing positions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	position_create: function (req, res) {
        var position_name = req.param('position_name'),
            position_shop_id = req.param('position_shop_id')
            
        if (!position_name || position_name === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập tên hệ thống',
            })
        }
        Positions.create({ position_name,position_shop_id }).exec(function (err, created) {
            if (err) { return console.log('error') }
            if (created) {
                return res.json({
                    status: 'success',
                    message: 'Tạo vị trí thành công',
                    positions: created,
                })
            }
        });

    },
    position_del: function(req,res){
        var position_id = req.param('position_id');
        if(!position_id || position_id ==='')
        {
            return console.log('Id chua duoc truyen vao,khong xac dinh doi tuong xoa')
        }
        Positions.destroy({position_id}).exec(function(err,destroied){
            if(err) {return console.log(err)}
            if(destroied){
                return res.json({
                    status:'success',
                    message:'Xoa thanh cong',
                })
            }
        })
    },
    position_info: function (req, res) {
        var position_id = req.header.authID;
        if (!position_id || position_id === '' || position_id === 0) {
            return res.json({
                status: 'error',
                message: 'id khong hop le',
            })
        }
        Positions.findOne({ position_id }).exec(function (err, found) {
            if (err) { return console.log('loi server') }
            if (found) {
                return res.json({
                    status: 'success',
                    message: 'Lay thanh cong thong tin he thong',
                    position: found
                });
            }
            else {
                return res.json({
                    status: 'error',
                    message: 'KHong tim thay he thong co ID nay',
                });
            }
        });
    },
    position_list: function (req, res) {
        var position_shop_id = req.param('position_shop_id')
        console.log(position_shop_id);
        Positions.find({position_shop_id}).exec(function (err, found) {
            if (err) { return console.log(err) }
            if (found) {
                
                return res.json({
                    status: 'success',
                    position: found
                });
            }
        }, error => {
            console.log(error)
        });
    },
};

