/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcryptjs');
var jwt = require('../services/jsonwebtoken');
module.exports = {
    user_login: function (req, res) {
        
        var user_email = req.param('user_email')
        user_password = req.param('user_password');
        if (!user_email || user_email === '') {
            return res.json({
                status: 'error',
                message: 'Email của bạn chưa được nhập'
            });
        }
        if (!user_password || user_password === '') {
            return res.json({
                status: 'error',
                message: 'Bạn chưa nhập mật khẩu'
            });
        }
        Users.findOne({ user_email: user_email }).exec(function (err, found) {
            if (err) { console.log('Bị lỗi') }
            if (found) {
                Users.comparePassword(user_password, found, function (err, valid) {
                    if (err) {
                        return res.json({
                            status: 'error',
                            message: 'Lỗi'
                        })
                    }
                    else
                    {
                        if (valid) {
                            return res.json({
                                status: 'success',
                                message: 'Đăng nhập thành công',
                                token: jwt.encode(found.user_email),
                                user: found,
                            })
    
                        }
                        else
                        {
                            if (!valid) {
                                return res.json({
                                    status: 'error',
                                    message: 'Tài khoản không tồn tại'
                                })
                            }
                        }
                    }
                    
                    
                })
            }
        })
    },
    user_profile: function (req, res) {
        var user_email = req.headers.authEmail;
        Users.findOne({ user_email: user_email }).exec(function (err, find) {
            if (err) { return console.log(err) }
            if (find) {
                return res.json({
                    status: 'success',
                    message: 'GET profile thanh cong',
                    user: find
                })
            } else {
                return res.json({
                    status: 'success',
                    message: 'Khong tim thay user'
                })
            }
        });
    }
};

