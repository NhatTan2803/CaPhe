/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  // AdminController
  'POST /shops/create': 'AdminController.shop_create',
  'PUT /shops/update': 'AdminController.shop_update',
  'GET /shops/get': 'AdminController.shop_info',
  'GET /shops/get-list': 'AdminController.shop_list',
  'GET /shops/get-list-name': 'AdminController.shop_list_name',// lấy danh sách khong kèm theo tên hệ thống
  'DELETE /shops/del': 'AdminController.shop_del',
  'POST /shops/create_boss': 'AdminController.user_create_boss',
  'GET /users/listaccount': 'AdminController.all_account',
  'POST /shop/upload-imgshop': 'AdminController.shop_upload_avatar',
  'POST /shop/upload-imgBoss': 'AdminController.Boss_upload_avatar',

  //SystemController
  'GET /systems/listsystem': 'SystemController.system_list',
  'POST /systems/create': 'SystemController.system_create',
  'GET /systems/get': 'SystemController.system_info',
  'DELETE /systems/del': 'SystemController.system_del',
  // UserController
  'POST /users/login': 'UsersController.user_login',
  'GET /users/profile': 'UsersController.user_profile',
  'GET /users/listaccount': 'AdminController.all_account',
  //BossController
  'POST /boss/create': 'BossController.user_create_staff',
  'POST /boss/get-name': 'BossController.user_profile_shop',
  'POST /boss/upload-imgStaff': 'BossController.Staff_upload_avatar',
  'POST /boss/upload-imgDrink': 'BossController.Drink_upload_avatar',
  'POST /boss/get-listStaff': 'BossController.user_list_staff',
  
  
  // 'GET /systems/get': 'UserController.system_info',
  // 'DELETE /systems/del': 'UserController.system_del',

  //Bills Contronller
  'POST /bills/create': 'BillsController.Bill_create',
  //Detail_bill Contronller
  'POST /detail-bill/create': 'Detail_billController.detail_bill_create',
  //Drinks Contronller
  'POST /drinks/create': 'DrinksController.Drinks_create',
  'POST /drinks/get': 'DrinksController.Drinks_get',
  //Type_Drinks Contronller
  'POST /type-drinks/create': 'Type_drinksController.TypeDrinks_create',
  'GET /type-drinks/get': 'Type_drinksController.TypeDrinks_get',
  //PositionController
  'POST /positions/list-position': 'PositionController.position_list',
  'POST /positions/create': 'PositionController.position_create',
  'GET /positions/get': 'PositionController.position_info',
  'DELETE /positions/del': 'PositionController.position_del',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
