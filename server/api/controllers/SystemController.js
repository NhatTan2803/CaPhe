/**
 * SystemController
 *
 * @description :: Server-side logic for managing systems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	system_create: function (req, res) {
        var system_name = req.param('system_name'),
            system_address = req.param('system_address'),
            system_active = req.param('system_active');
        if (!system_name || system_name === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập tên hệ thống',
            })
        }
        if (!system_address || system_address === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập địa chỉ hệ thống',
            })
        }
        Systems.create({ system_name,system_address, system_active }).exec(function (err, created) {
            if (err) { return console.log('error') }
            if (created) {
                return res.json({
                    status: 'success',
                    message: 'Tao ten he thong quan thanh cong',
                    system: created,
                })
            }
        });

    },
    system_del: function(req,res){
        var system_id = req.param('system_id');
        if(!system_id || system_id ==='')
        {
            return console.log('Id chua duoc truyen vao,khong xac dinh doi tuong xoa')
        }
        Systems.destroy({system_id}).exec(function(err,destroied){
            if(err) {return console.log(err)}
            if(destroied){
                return res.json({
                    status:'success',
                    message:'Xoa thanh cong',
                })
            }
        })
    },
    system_info: function (req, res) {
        var system_id = req.param('system_id');
        if (!system_id || system_id === 0) {
            return res.json({
                status: 'error',
                message: 'id khong hop le',
            })
        }
        Systems.find({ system_id }).exec(function (err, found) {
            if (err) { return console.log(err) }
            if (found) {
                return res.json({
                    status: 'success',
                    message: 'Lay thanh cong thong tin he thong',
                    system: found
                });
            }
            else {
                return res.json({
                    status: 'error',
                    message: 'Khong tim thay he thong co ID nay',
                });
            }
        });
    },
    system_list: function (req, res) {
        Systems.find().exec(function (err, found) {
            if (err) { return console.log(err) }
            if (found) {
                
                return res.json({
                    status: 'success',
                    system: found
                });
            }
        }, error => {
            console.log(error)
        });
    },
    //Cập nhật thông tin quán
    system_update: function (req, res) {
        var system_id = req.param('system_id'),
            system_name = req.param('system_name'),
            system_address = req.param('system_address'),
            system_active = req.param('system_active')

        if (!system_id || system_id === '') {
            return console.log('Id chưa được nhập')
        }
        Systems.update({ system_id: system_id },
            {
                system_name: system_name,
                system_address: system_address,
                system_active: system_active
            }
            ).exec(function (err, updated) {
                if (err) { return console.log(err) }
                if (updated) {
                    return res.json({
                        status: 'success',
                        message: 'Cập nhật thành công',
                        system: Object.assign({}, updated[0])
                    })
                }
            })
        
    },
};

