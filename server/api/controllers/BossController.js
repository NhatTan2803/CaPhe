/**
 * BossController
 *
 * @description :: Server-side logic for managing bosses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const moment = require('moment');
module.exports = {
    user_create_staff: function (req, res) {
        var user_email = req.param('staff_email')
        user_password = req.param('staff_password')
        user_shop_id = req.param('staff_shop_id')
        user_name = req.param('staff_name')
        user_birthday = req.param('staff_birthday')
        user_sex = req.param('staff_sex')
        user_avatar = req.param('staff_avatar')
        user_phone = req.param('staff_phone')
        user_address = req.param('staff_address')
        user_permission = req.param('staff_permission');
        user_position_id = req.param('staff_position_id')
        user_Idcard = req.param('staff_Idcard');
        user_active = req.param('staff_active')
        //Kiem tra email
        console.log(user_Idcard)
        if (!user_email || user_email === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập email'
            });
        }
        if (!user_password || user_password === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập mật khẩu'
            });
        }
        if (!user_shop_id || user_shop_id === '') {
            return res.json({
                status: 'error',
                message: 'Thiếu shop ID'
            });
        }
        if (!user_name || user_name === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập tên'
            });
        }

        if (!user_Idcard || user_Idcard === '') {
            return res.json({
                status: 'error',
                message: 'Ban chua nhap CMND'
            });
        }

        console.log('Chưa format: ' + user_birthday);

        let i = user_birthday.split('/')[2] + "-" + user_birthday.split('/')[1] + "-" + user_birthday.split('/')[0];// ('16','10','2017')
        console.log('Đã format:' + moment(i).format('YYYY-MM-DD'));
        user_birthday = moment(i).format('YYYY-MM-DD');

        //Kiem tra user ton tai hay chua, voi findOne() tra ve 2 tham so (err, find)
        Users.findOne({ user_email: user_email }).exec(function (err, find) {
            //Neu trong qua trinh tao bi loi thi in ra man hinh
            if (err) { return console.log(err) }
            //User da ton tai
            if (find) {
                return res.json({
                    status: 'error',
                    message: 'Email da ton tai'
                })
            } else {
                //User chua ton tai, tien hanh tao moi
                Users.create({
                    user_email,
                    user_password,
                    user_shop_id,
                    user_name,
                    user_birthday,
                    user_sex,
                    user_avatar,
                    user_phone,
                    user_address,
                    user_permission,
                    user_Idcard,
                    user_position_id,
                    user_active
                }).exec(function (err, created) {
                    if (err) { return console.log(err) }
                    if (created) {
                        return res.json({
                            status: 'success',
                            message: 'tạo tài khoản cho nhân viên thành công',
                            user: created
                        });
                    }
                });
            }
        });

    },
    user_list_staff: function (req, res) {
        var idShop = req.param('idShop');
        var sql = 'SELECT users.user_Idcard,users.user_id,users.user_address,users.user_active,users.user_sex,users.user_position_id ,users.user_avatar,users.user_name ,users.user_phone,users.createdAt,users.user_email,positions.position_name from users LEFT JOIN positions on users.user_position_id = positions.position_id WHERE users.user_shop_id =' + idShop + ' and users.user_permission ="staff"'
        Shops.query(sql, function (err, result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    staffs: result,
                })
            }
        })

    },
    user_staff_update: function (req, res) {
        var user_name = req.param('staff_name'),
            user_id = req.param('staff_id'),
            user_email = req.param('staff_email'),
            user_Idcard = req.param('staff_Idcard'),
            user_sex = req.param('staff_sex'),
            user_position_id = req.param('staff_position_id'),
            user_phone = req.param('staff_phone'),
            user_address = req.param('staff_address'),
            user_avatar = req.param('staff_avatar'),
            user_active = req.param('staff_active');
        console.log(user_position_id);

        Users.update({ user_id }, {
            user_name,
            user_id,
            user_email,
            user_Idcard,
            user_sex,
            user_position_id,
            user_phone,
            user_avatar,
            user_address,
            user_active
        }).exec(function (err, updated) {
            if (err) { console.log(err) }
            if (updated) {
                return res.json({
                    status: 'success',
                    message: 'Cập nhật thành công'
                })

            }
        })
    },
    user_profile_shop: function (req, res) {
        var shop_id = req.param('shop_id');
        this.find({ shop_id }).exec(function (err, found) {
            if (err) { console.log(err) }
            if (found) {
                return res.json({
                    status: 'success',
                    shop: found,
                })
            }
        })
    },
    Staff_upload_avatar: function (req, res) {
        req.file('avatar').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/imgStaff')
        }, function (err, uploadedFiles) {
            if (err) { return console.log(err) }
            if (uploadedFiles.length > 0) {
                var avatar = require('path').basename(uploadedFiles[0].fd);
                return res.json({
                    status: 'success',
                    message: 'Upload ảnh thành công',
                    imgStaff: avatar
                });
            }
        });
    },
    Drink_upload_avatar: function (req, res) {
        req.file('avatar').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/imgDrink')
        }, function (err, uploadedFiles) {
            if (err) { return console.log(err) }
            if (uploadedFiles.length > 0) {
                var avatar = require('path').basename(uploadedFiles[0].fd);
                return res.json({
                    status: 'success',
                    message: 'Upload ảnh thành công',
                    imgDrink: avatar
                });
            }
        });
    },
    Bill_statistic_day: function (req, res) {
        var Idshop = req.param('Idshop');

        var sql = "SELECT SUM(bill_total) FROM bills JOIN users on bills.bill_user_id = users.user_id WHERE bills.createdAt > curdate() and users.user_shop_id ="+ Idshop;
        console.log(sql);

        Bills.query(sql, function (err, result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    money: result,
                })
            }
        })
    },
    Bill_statistic_week: function (req, res) {

        var Idshop = req.param('Idshop');

        var sql = "SELECT SUM(bill_total) FROM bills JOIN users on bills.bill_user_id = users.user_id WHERE bills.createdAt < date_add(curdate(),INTERVAL 1 Day) and bills.createdAt > date_sub(curdate(),INTERVAL 7 day) and users.user_shop_id =" + Idshop;
        console.log(sql);

        Bills.query(sql, function (err, result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    money: result,
                })
            }
        })
    },
    Bill_statistic_month: function (req, res) {
        
                var Idshop = req.param('Idshop');
        
                var sql = "SELECT SUM(bill_total) FROM bills JOIN users on bills.bill_user_id = users.user_id WHERE bills.createdAt < date_add(curdate(),INTERVAL 1 Day) and bills.createdAt > date_sub(curdate(),INTERVAL 30 day) and users.user_shop_id =" + Idshop;
                console.log(sql);
        
                Bills.query(sql, function (err, result) {
                    if (err) { return console.log(err) }
                    if (result) {
                        return res.json({
                            status: 'success',
                            message: 'Thành công',
                            money: result,
                        })
                    }
                })
            }
};

