/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const moment = require('moment');
module.exports = {
    //Tao shop
    shop_create: function (req, res) {
        var shop_name = req.param('shop_name'),
            shop_system_id = req.param('shop_system_id'),
            shop_address = req.param('shop_address'),
            shop_phone = req.param('shop_phone'),
            shop_avatar = req.param('shop_avatar'),
            shop_email = req.param('shop_name'),
            shop_dayFrom = req.param('shop_dayFrom'),
            shop_dayTo = req.param('shop_dayTo');
        // console.log(shop_name,shop_address,shop_phone,shop_avatar);

        if (!shop_name || shop_name === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập tên quán',
            })
        }
        if (!shop_address || shop_address === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập địa chỉ',
            })
        }

        if (!shop_phone || shop_phone === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập số điện thoại',
            })
        }
        if (!shop_avatar || shop_avatar === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa thêm ảnh cho quán',
            })
        }
        if (!shop_email || shop_email === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập email',
            })
        }
        if (!shop_dayFrom || shop_dayFrom === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập ngày thuê',
            })
        }
        // tao quan,email,ten quan van cho trung vi 1 so quan van co ten giong,email thi 1 chu 
        //dung 1 mail de quan ly
        console.log('Chưa format: ' + shop_dayFrom);
        let i = shop_dayFrom.split('/')[2] + "-" + shop_dayFrom.split('/')[1] + "-" + shop_dayFrom.split('/')[0];// ('16','10','2017')
        let j = shop_dayTo.split('/')[2] + "-" + shop_dayTo.split('/')[1] + "-" + shop_dayTo.split('/')[0];// ('16','10','2017')

        console.log('Đã format:' + moment(i).format('YYYY-MM-DD'));
        console.log('Đã format:' + moment(j).format('YYYY-MM-DD'));

        shop_dayFrom = moment(i).format('YYYY-MM-DD');
        shop_dayTo = moment(j).format('YYYY-MM-DD');
        Shops.create({
            shop_email,
            shop_system_id,
            shop_name,
            shop_address,
            shop_phone,
            shop_avatar,
            shop_dayFrom,
            shop_dayTo
        }).exec(function (err, created) {
            if (err) { return console.log('error') }
            if (created) {
                return res.json({
                    status: 'success',
                    message: 'Tạo shop thành công',
                    shop: created,
                })
            }
        });

    },
    //Cập nhật thông tin quán
    shop_update: function (req, res) {
        var shop_id = req.param('shop_id'),
            shop_name = req.param('shop_name'),
            shop_system_id = req.param('shop_system_id'),
            shop_address = req.param('shop_address'),
            shop_phone = req.param('shop_phone'),
            shop_avatar = req.param('shop_avatar'),
            shop_email = req.param('shop_name');
        shop_dayFrom = req.param('shop_dayFrom');
        shop_dayTo = req.param('shop_dayTo');

        if (!shop_id || shop_id === '') {
            return console.log('Id chưa được nhập')
        }
        Shops.update({ shop_id: shop_id }, { shop_email: shop_email }, { shop_system_id: shop_system_id }, { shop_name: shop_name },
            { shop_address: shop_address }, { shop_phone: shop_phone },
            { shop_avatar: shop_avatar }).exec(function (err, updated) {
                if (err) { return console.log('Lỗi! Id truyền vào có vấn đề') }
                if (updated) {
                    return res.json({
                        status: 'success',
                        message: 'Cập nhật thành công',
                    });
                }
            });
    },
    //Lấy thông tin của quán
    shop_info: function (req, res) {
        var shop_id = req.header.authEmail;
        if (!shop_id || shop_id === '' || shop_id === 0) {
            return res.json({
                status: 'error',
                message: 'id không hợp lệ',
            })
        }
        Shops.findOne({ shop_id }).exec(function (err, found) {
            if (err) { return console.log('lỗi server') }
            if (found) {
                return res.json({
                    status: 'success',
                    message: 'Lấy thành công thông tin cá nhân',
                    shop: found
                });
            }
            else {
                return res.json({
                    status: 'error',
                    message: 'Không tìm thấy quán có Id này ',
                });
            }
        });
    },
    //Xóa quán
    shop_del: function (req, res) {
        var shop_id = req.param('shop_id');
        if (!shop_id || shop_id === '') {
            return console.log('Id chưa được truyền vào,không xác định đối tượng xóa')
        }
        Shops.destroy({ shop_id }).exec(function (err, destroied) {
            if (err) { return console.log(err) }
            if (destroied) {
                return res.json({
                    status: 'success',
                    message: 'Xóa thành công',
                })
            }
        })
    },
    shop_list: function (req, res) {
        var sql = 'SELECT shops.shop_id, shops.shop_name,shops.shop_phone ,shops.shop_dayFrom,shops.shop_dayTo,shops.shop_avatar, systems.system_name  from shops LEFT JOIN systems on systems.system_id= shops.shop_system_id'
        Shops.query(sql, function (err, result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    shops: result,
                })
            }
        })
    },
    shop_list_name: function (req, res) {

        Shops.find().exec(function (err, found) {
            if (err) { return console.log(err) }
            if (found) {
                return res.json({
                    status: 'success',
                    message: 'Thành công',
                    shopname: found,
                })
            }
        })
    },
    //Tạo tài khoản cho chủ quá,chỉ có admin mà mình mới tạo được
    user_create_boss: function (req, res) {
        var user_name = req.param('boss_name')
        user_email = req.param('boss_email')
        user_password = req.param('boss_password')
        user_shop_id = req.param('boss_shop_id')
        user_birthday = req.param('boss_birthday')
        user_sex = req.param('boss_sex')
        user_avatar = req.param('boss_avatar')
        user_phone = req.param('boss_phone')
        user_address = req.param('boss_address')
        user_permission = 'boss'
        user_active = req.param('boss_active');
        // if (!user_email || user_email === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa nhập email'
        //     });
        // }
        // if (!user_password || user_password === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa nhập mật khẩu'
        //     });
        // }
        // if (!user_shop_id || user_shop_id === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa nhập user thuộc quán nào'
        //     });
        // }
        // if (!user_name || user_name === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa nhập tên chủ quán'
        //     });
        // }
        // if (!user_phone || user_phone === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa nhập số điện thoại'
        //     });
        // }
        // if (!user_address || user_address === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa nhập chỉ chủ quán'
        //     });
        // }
        // if (!user_permission || user_permission === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa nhập quyền của chủ quán'
        //     });
        // }
        // if (!user_active || user_active === '') {
        //     return res.json({
        //         status: 'error',
        //         message: 'Bạn chưa chọn chế độn hoạt động'
        //     });
        // }
        // console.log('Chưa format: ' + user_birthday);
        // let i = user_birthday.split('/')[2] + "-" + user_birthday.split('/')[1] + "-" + user_birthday.split('/')[0];// ('16','10','2017')

        // console.log('Đã format:' + moment(i).format('YYYY-MM-DD'));
        // user_birthday = moment(i).format('YYYY-MM-DD');
        //kiem tra email
        Users.findOne({ user_email: user_email }).exec(function (err, found) {
            if (err) { return console.log('Lỗi Server') }
            if (found) {
                return res.json({
                    status: 'error',
                    message: 'Email đã tồn tại'
                });
            } else {
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
                    user_active
                }).exec(function (err, created) {
                    console.log(user_email,
                        user_password,
                        user_shop_id,
                        user_name,
                        user_birthday,
                        user_sex,
                        user_avatar,
                        user_phone,
                        user_address,
                        user_permission)
                    if (err) { return console.log('loi ne') }
                    if (created) {
                        return res.json({
                            status: 'success',
                            message: 'Tạo tài khoản cho chủ quán thành công'
                        });
                    }
                });
            }
        });
    },
    // Tất cả tài khoản
    all_account: function (req, res) {
        var sql ='SELECT users.user_email,users.user_name ,users.user_active,users.user_phone,shops.shop_name FROM users LEFT JOIN shops ON users.user_shop_id = shops.shop_id where users.user_permission="boss"'
        Users.query(sql,function(err,result) {
            if (err) { return console.log(err) }
            if (result) {
                return res.json({
                    status: 'success',
                    account: result,
                });
            }
        }, error => {
            console.log(error);
            return;
        });
    },
    list_system: function (req, res) {
        Systems.find().exec(function (err, found) {
            if (err) { return console.log(err) }
            if (found) {
                console.log(found);
                return res.json({
                    status: 'success',
                    system: found
                });
            }
        }, error => {
            console.log(error)
        });
    },
    // úp ảnh cho việc tạo shop
    shop_upload_avatar: function (req, res) {
        req.file('avatar').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/imgShop')
        }, function (err, uploadedFiles) {
            if (err) { return console.log(err) }
            if (uploadedFiles.length > 0) {
                var avatar = require('path').basename(uploadedFiles[0].fd);
                return res.json({
                    status: 'success',
                    message: 'Upload ảnh thành công',
                    imgShop: avatar
                });
            }
        });
    },
    // úp ảnh cho việc tạp tài khoản chủ quán
    Boss_upload_avatar: function (req, res) {
        req.file('avatar').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/imgBoss')
        }, function (err, uploadedFiles) {
            if (err) { return console.log(err) }
            if (uploadedFiles.length > 0) {
                var avatar = require('path').basename(uploadedFiles[0].fd);
                return res.json({
                    status: 'success',
                    message: 'Upload ảnh thành công',
                    imgBoss: avatar
                });
            }
        });
    },
}


