-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2018 at 08:41 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cf_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `bill_id` int(10) UNSIGNED NOT NULL,
  `bill_user_id` int(11) DEFAULT NULL,
  `bill_total` varchar(255) DEFAULT NULL,
  `bill_shop_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`bill_id`, `bill_user_id`, `bill_total`, `bill_shop_id`, `createdAt`, `updatedAt`) VALUES
(1, 2, '90000', 2, '2018-07-21 10:15:52', '2018-07-21 10:15:52'),
(2, 2, '200000', 2, '2018-07-20 10:19:43', '2018-07-21 10:19:43'),
(3, 3, '150000', 3, '2018-07-18 10:21:31', '2018-07-21 10:21:31'),
(4, 3, '124000', 3, '2018-07-21 15:30:08', '2018-07-21 15:30:08'),
(5, 2, '186000', 2, '2018-07-17 15:35:00', '2018-07-21 15:35:00'),
(6, 2, '186000', 2, '2018-07-22 15:37:21', '2018-07-21 15:37:21'),
(7, 2, '186000', 2, '2018-07-23 16:04:49', '2018-07-21 16:04:49'),
(8, 2, '33000', 2, '2018-07-24 16:19:29', '2018-07-21 16:19:29'),
(9, 2, '66000', 2, '2018-07-24 16:27:33', '2018-07-21 16:27:33'),
(10, 2, '50000', 2, '2018-07-29 13:40:18', '2018-07-29 13:40:18'),
(11, 2, '25000', 2, '2018-08-04 16:52:33', '2018-08-04 16:52:33'),
(12, 2, '62000', 2, '2018-08-08 01:25:03', '2018-08-08 01:25:03'),
(13, 2, '54600', 2, '2018-08-08 08:06:50', '2018-08-08 08:06:50');

-- --------------------------------------------------------

--
-- Table structure for table `detail_bill`
--

CREATE TABLE `detail_bill` (
  `detail_id` int(10) UNSIGNED NOT NULL,
  `detail_bill_id` int(11) DEFAULT NULL,
  `detail_drink_id` int(11) DEFAULT NULL,
  `detail_drink_name` varchar(255) DEFAULT NULL,
  `detail_number` int(11) DEFAULT NULL,
  `detail_price` varchar(255) DEFAULT NULL,
  `detail_toalMoney_drink` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `detail_bill`
--

INSERT INTO `detail_bill` (`detail_id`, `detail_bill_id`, `detail_drink_id`, `detail_drink_name`, `detail_number`, `detail_price`, `detail_toalMoney_drink`, `createdAt`, `updatedAt`) VALUES
(1, 3, 6, 'Sinh Tố Dưa Hấu', 2, '100000', NULL, '2018-07-21 10:59:07', '2018-07-21 10:59:07'),
(2, 3, 6, 'Sinh Tố Dưa Hấu', 2, '100000', NULL, '2018-07-21 11:01:06', '2018-07-21 11:01:06'),
(3, 3, 6, 'Sinh Tố Dưa Hấu', 2, '100000', NULL, '2018-07-21 11:01:54', '2018-07-21 11:01:54'),
(4, 3, 6, 'Sinh Tố Dưa Hấu', 2, '100000', NULL, '2018-07-21 11:03:26', '2018-07-21 11:03:26'),
(5, 3, 6, 'Sinh Tố Dưa Hấu', 2, '100000', '200008', '2018-07-21 11:04:20', '2018-07-21 11:04:20'),
(6, 7, 6, ' Sinh Tố Dưa Hấu', 3, '29000', '87000', '2018-07-21 16:04:49', '2018-07-21 16:04:49'),
(7, 7, 7, ' Sinh Tố Bơ', 2, '33000', '66000', '2018-07-21 16:04:49', '2018-07-21 16:04:49'),
(8, 7, 8, 'Cà Phê Đen', 1, '33000', '33000', '2018-07-21 16:04:49', '2018-07-21 16:04:49'),
(9, 8, 8, 'Cà Phê Đen', 1, '33000', '33000', '2018-07-21 16:19:29', '2018-07-21 16:19:29'),
(10, 9, 7, ' Sinh Tố Bơ', 1, '33000', '33000', '2018-07-21 16:27:33', '2018-07-21 16:27:33'),
(11, 9, 8, 'Cà Phê Đen', 1, '33000', '33000', '2018-07-21 16:27:33', '2018-07-21 16:27:33'),
(12, 10, 6, ' Sinh Tố Dưa Hấu', 1, '29000', '29000', '2018-07-29 13:40:18', '2018-07-29 13:40:18'),
(13, 10, 7, ' Sinh Tố Bơ', 1, '33000', '33000', '2018-07-29 13:40:18', '2018-07-29 13:40:18'),
(14, 10, 17, 'Trà Đào', 5, '41000', '205000', '2018-07-29 13:40:18', '2018-07-29 13:40:18'),
(15, 11, 6, ' Sinh Tố Dưa Hấu', 3, '29000', '87000', '2018-08-04 16:52:33', '2018-08-04 16:52:33'),
(16, 11, 7, ' Sinh Tố Bơ', 2, '33000', '66000', '2018-08-04 16:52:33', '2018-08-04 16:52:33'),
(17, 12, 6, ' Sinh Tố Dưa Hấu', 1, '29000', '29000', '2018-08-08 01:25:03', '2018-08-08 01:25:03'),
(18, 12, 7, ' Sinh Tố Bơ', 1, '33000', '33000', '2018-08-08 01:25:03', '2018-08-08 01:25:03'),
(19, 13, 6, ' Sinh Tố Dưa Hấu', 2, '29000', '58000', '2018-08-08 08:06:50', '2018-08-08 08:06:50'),
(20, 13, 7, ' Sinh Tố Bơ', 1, '33000', '33000', '2018-08-08 08:06:50', '2018-08-08 08:06:50');

-- --------------------------------------------------------

--
-- Table structure for table `drinks`
--

CREATE TABLE `drinks` (
  `drink_id` int(10) UNSIGNED NOT NULL,
  `drink_shop_id` int(11) DEFAULT NULL,
  `drink_name` varchar(20) DEFAULT NULL,
  `drink_price` varchar(255) DEFAULT NULL,
  `drink_avatar` varchar(100) DEFAULT NULL,
  `drink_eth` varchar(255) DEFAULT NULL,
  `drink_active` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`drink_id`, `drink_shop_id`, `drink_name`, `drink_price`, `drink_avatar`, `drink_eth`, `drink_active`) VALUES
(1, 1, 'Cà Phê Đen', '22000', 'f8f4c77e-d92e-4272-9cd7-e29e1ec9fc24.jpg', '2', 'on'),
(2, 1, 'Cà Phê Sữa', '25000', 'f8f4c77e-d92e-4272-9cd7-e29e1ec9fc24.jpg', '3', 'on'),
(3, 1, 'Cà Phê Đặc Biệt', '30000', 'f8f4c77e-d92e-4272-9cd7-e29e1ec9fc24.jpg', '1', 'on'),
(4, 1, 'Nước Cam', '35000', 'f8f4c77e-d92e-4272-9cd7-e29e1ec9fc24.jpg', '2', 'on'),
(5, 1, 'Nước Bưởi Ép', '35000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '3', 'on'),
(6, 2, ' Sinh Tố Dưa Hấu', '29000', 'f8f4c77e-d92e-4272-9cd7-e29e1ec9fc24.jpg', '3', 'on'),
(7, 2, ' Sinh Tố Bơ', '33000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '1', 'on'),
(8, 2, 'Cà Phê Đen', '33000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '3', 'on'),
(9, 2, 'Cà Phê Sữa', '37000', 'd142670b-dd79-438b-8df6-e37a716240db.png', '2', 'on'),
(10, 2, 'Trà xanh', '40000', '350d6bcb-39ce-4e90-a1d1-0d54649e1965.jpg', '1', 'on'),
(11, 2, 'Trà sữa ', '34000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '4', 'on'),
(13, 4, 'Cà phê đen', '22000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '4', 'on'),
(14, 4, 'Cà phê sữa', '25000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '3', 'on'),
(15, 4, 'Cam vắt', '32000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '3', 'on'),
(16, 4, 'Sữa dừa', '36000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '3', 'on'),
(17, 2, 'Trà Đào', '41000', 'e19690c3-0c6a-4fde-97d3-90c85b9d6a18.jpg', '2', 'on'),
(18, 2, 'Trà Đào', '35000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '5', 'on'),
(19, 4, 'Cà Phê Đen', '27000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg', '3', 'on'),
(24, 2, 'Test', '54561', 'b1dc3670-3449-45e4-8b0f-474ae607e0a9.png', '4', 'off'),
(26, 2, 'Test Image', '99999999', 'd3075831-6479-4120-a882-d860e1fe99a7.jpg', '2', 'off'),
(27, 2, 's', '2121', 'd7caf44a-d756-40f0-9c3a-e7947839e0a6.png', '2', 'on'),
(28, 2, 'Test', '123456', 'af21aea6-82a3-471b-a407-34c87bc484f2.jpg', '3', 'on'),
(29, 2, 'S', '30000', '6a9db5cd-cbc1-4140-87a8-366ffea44db9.jpg', '1', 'on'),
(30, 2, 'Test', '60000', '791f758b-6027-4de3-ada3-8754bb909abc.jpg', '2', 'on');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `position_id` int(10) UNSIGNED NOT NULL,
  `position_shop_id` varchar(255) DEFAULT NULL,
  `position_name` varchar(255) DEFAULT NULL,
  `position_active` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`position_id`, `position_shop_id`, `position_name`, `position_active`, `createdAt`, `updatedAt`) VALUES
(7, '2', 'Kế Toán', 'on', '2017-12-02 13:29:28', '2017-12-02 13:29:28'),
(8, '2', 'Kế Toán Trưởng', 'on', '2017-12-02 13:29:41', '2017-12-02 13:29:41'),
(9, '2', 'Thu Ngân', 'on', '2017-12-02 13:29:54', '2017-12-02 13:29:54'),
(10, '2', 'Nhân viên phục vụ ', 'on', '2017-12-02 13:30:32', '2017-12-02 13:30:32'),
(11, '2', 'Tạp vụ', 'on', '2017-12-02 13:30:44', '2017-12-02 13:30:44'),
(12, '4', 'Nhân viên thử việc', 'on', '2017-12-03 08:29:25', '2017-12-03 08:29:25'),
(14, '4', 'Thu Ngân - Ân', 'on', '2017-12-03 08:33:11', '2017-12-03 08:33:11'),
(15, '4', 'Tạp Vụ - Ân', 'on', '2017-12-03 08:33:24', '2017-12-03 08:33:24'),
(16, '4', 'Kế Toán - Ân', 'on', '2017-12-03 08:33:38', '2017-12-03 08:33:38'),
(17, '4', 'Giữ xe - Ân', 'on', '2017-12-03 08:33:52', '2017-12-03 08:33:52'),
(18, '2', 'Update position 4', 'on', '2018-06-11 10:02:23', '2018-06-11 14:38:13'),
(19, '2', 'Test 4', 'on', '2018-06-11 14:38:21', '2018-07-27 21:15:32'),
(20, '2', 'Test 5', 'off', '2018-07-27 21:15:39', '2018-07-28 09:10:01');

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `shop_id` int(10) UNSIGNED NOT NULL,
  `shop_name` varchar(20) DEFAULT NULL,
  `shop_system_id` int(11) DEFAULT NULL,
  `shop_email` varchar(100) DEFAULT NULL,
  `shop_address` varchar(255) DEFAULT NULL,
  `shop_phone` varchar(15) DEFAULT NULL,
  `shop_avatar` varchar(100) DEFAULT NULL,
  `shop_dayFrom` date DEFAULT NULL,
  `shop_dayTo` date DEFAULT NULL,
  `shop_active` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_system_id`, `shop_email`, `shop_address`, `shop_phone`, `shop_avatar`, `shop_dayFrom`, `shop_dayTo`, `shop_active`, `createdAt`, `updatedAt`) VALUES
(1, 'Vườn Treo', 1, 'vuontreo@gmail.com', '3 Hoàng Văn Thụ,P.3,Quận Gò Vấp,Hồ Chí Minh', '0974206931', '321377a3-6ab4-4769-8aa0-9ad1169794ca.jpg', '2017-12-13', '2017-12-14', 'on', '2017-11-22 19:51:08', '2017-12-06 10:28:25'),
(2, 'The Coffee House', 2, 'TCH@gmail.com', '3 Hàng Hải, phường 23,Quận 3,Hồ Chí Minh', '08942145643', '321377a3-6ab4-4769-8aa0-9ad1169794ca.jpg', '2017-12-13', '2017-12-27', 'on', '2017-11-22 19:52:27', '2017-12-05 17:27:47'),
(3, 'Hiland Coffee', 4, 'hiland@gamail.com', '26 Gia Bắc,phường 29,quận 8,Hồ Chí Minh', '09434233322', 'c733ebeb-9c3a-404b-b883-9e790c35f44a.jpg', '2017-12-11', '2017-12-23', 'on', '2017-11-22 19:57:50', '2017-12-06 10:28:41'),
(4, 'Cà Phê 81', 1, '81@gmail.com', '13 ung văn khiêm,Phường 23,Quận 5,Hồ Chí Minh', '01263520689', '5e6c344c-185c-4cc8-a21a-d16067842243.jpg', '2017-12-13', '2018-04-27', 'on', '2017-11-22 20:01:26', '2017-12-05 17:26:52'),
(5, 'The S Coffee1', 5, 'thescoffee@gmail.com', '120 Phạm Văn Đồng,P.3,Quận Bình Chánh,Hồ Chí Minh', '0984729473', '29d38417-9c25-4d46-94f4-ecd576d58fc2.png', '2017-12-06', '2018-02-27', 'on', '2017-12-06 10:41:52', '2018-07-28 09:18:09'),
(6, 'Koi 7', 1, 'phuclong@gmail.com', '123 Điện Biện Phủ, Q3, HCM', '0121589658', '57ecd513-a17d-4433-be54-ecb15b65dac7.jpg', '2018-05-14', '2018-08-14', 'on', '2018-06-09 12:03:36', '2018-07-28 09:17:07'),
(7, 'Final', 2, 'test@gmail.com', '1233', '0909856895', '703d1fa3-4947-4286-b817-538a02ebca29.png', '2018-06-15', '2018-06-23', 'on', '2018-06-09 12:05:26', '2018-08-08 01:05:29'),
(8, 'Test Final', 1, 'final@gmail.com', 'HCM', '08589658996', '', '2018-06-10', '2018-06-24', 'off', '2018-06-09 14:01:52', '2018-07-28 09:12:27'),
(11, 'Test', 1, 'test@gmail.com', '142324', '42334242', '', '2018-07-26', '2018-07-31', 'off', '2018-07-27 21:39:54', '2018-07-28 00:36:16'),
(12, 'Test', 5, 'test@gmail.com', '123', '123', '55fd198e-7d88-44f7-b8b4-37b81b6e9a88.jpg', '2018-07-22', '2018-07-26', 'off', '2018-07-28 09:18:48', '2018-07-28 09:18:55'),
(13, 's', 1, '1686337@gmail.com', '123', '0909856895', 'a163d153-d9cd-4376-889a-ceae539955e5.jpg', '2018-07-22', '2018-07-29', 'off', '2018-07-28 22:36:18', '2018-07-28 22:36:23');

-- --------------------------------------------------------

--
-- Table structure for table `systems`
--

CREATE TABLE `systems` (
  `system_id` int(10) UNSIGNED NOT NULL,
  `system_name` varchar(255) DEFAULT NULL,
  `system_address` varchar(255) DEFAULT NULL,
  `system_active` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `systems`
--

INSERT INTO `systems` (`system_id`, `system_name`, `system_address`, `system_active`, `createdAt`, `updatedAt`) VALUES
(1, 'Koi', '123 Điện Biện Phủ, Q3, HCM', 'on', '2017-11-12 18:27:46', '2018-06-09 11:38:34'),
(2, 'The Coffee House', '1 Lê lợi,Phường Đa Kao,Quận HCM', 'on', '2017-11-20 20:25:54', '2017-11-20 20:25:54'),
(3, 'CafeIn', '168 Nguyễn Tất Thành,Phường 3,Quận 8,HCM', 'on', '2017-11-20 20:27:20', '2017-11-20 20:27:20'),
(4, 'Hiland Coffee', '17 Nguyễn Đình Chiểu,Phường 2,Quận 3,Hồ Chí Minh', 'on', '2017-11-21 15:52:11', '2017-11-21 15:52:11'),
(5, 'Test', 'HCM', 'on', '2018-06-09 09:47:11', '2018-06-09 10:02:38'),
(9, 'kdfsf', '1234567', 'on', '2018-06-09 10:06:24', '2018-06-09 10:48:53'),
(10, 'test6', '345678', 'on', '2018-06-09 10:49:29', '2018-06-09 11:39:01'),
(14, 'asfsdff', 'abvvcda', 'on', '2018-06-09 11:50:56', '2018-06-09 12:00:15'),
(15, 'sfsadfa', '123', 'on', '2018-06-09 12:01:00', '2018-07-28 09:20:17'),
(16, '123', '12', 'off', '2018-07-28 09:20:26', '2018-07-28 09:38:25'),
(17, '1', '', 'off', '2018-07-28 22:37:29', '2018-07-28 22:37:32');

-- --------------------------------------------------------

--
-- Table structure for table `type_drinks`
--

CREATE TABLE `type_drinks` (
  `type_id` int(10) UNSIGNED NOT NULL,
  `type_shop_id` int(11) DEFAULT NULL,
  `type_name` varchar(20) DEFAULT NULL,
  `type_avatar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_shop_id` int(11) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `user_Idcard` varchar(13) DEFAULT NULL,
  `user_birthday` date DEFAULT NULL,
  `user_sex` varchar(10) DEFAULT NULL,
  `user_avatar` varchar(100) DEFAULT NULL,
  `user_phone` varchar(15) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_active` varchar(255) DEFAULT NULL,
  `user_position_id` int(11) DEFAULT NULL,
  `user_permission` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_shop_id`, `user_name`, `user_email`, `user_password`, `user_Idcard`, `user_birthday`, `user_sex`, `user_avatar`, `user_phone`, `user_address`, `user_active`, `user_position_id`, `user_permission`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Nguyễn Nhật Tân', '1@gmail.com', '$2a$10$DnAbQ/UFCZRl.QYL6UdaKO2uTLplGEZ3fO59xFjfkf4/ZCWtksp8i', NULL, '2018-02-02', 'male', '5c87d951-48c2-4cbd-bc56-9006db03386a.jpg', '0984456148', '145/12/3 D2,P.25,Quận Bình Thạnh,Hồ Chí Minh', 'on', 1, 'admin', '2017-11-18 20:07:51', '2017-11-18 20:07:51'),
(2, 2, 'Trương Tấn Sang', '2@gmail.com', '$2a$10$Qk7JuIZ39jcKmXLC42jjNO.AD/57bAVN6//K07tiN9sroaJqMcnla', '225647597', '2018-02-02', 'male', '5c87d951-48c2-4cbd-bc56-9006db03386a.jpg', '0984456148', '145/12/3 D2,P.25,Quận Bình Thạnh,Hồ Chí Minh', 'on', 7, 'boss', '2017-11-18 20:08:08', '2017-12-06 10:30:54'),
(3, 3, 'Nguyễn Hải Ân', '3@gmail.com', '$2a$10$Uak5bx/hBSVFuSZVbyHJduTQO81x/yZ6qOVwLJ2z4isEKr5Nh129i', NULL, '2018-02-02', 'male', '3957f9b5-28be-44fc-8666-0ec7f7cccd71.jpg', '0984456148', '145/12/3 D2,P.25,Quận Bình Thạnh,Hồ Chí Minh', 'on', 1, 'staff', '2017-11-18 20:08:30', '2017-11-18 20:08:30'),
(4, 1, 'Trần Song Thy', '4@gmail.com', '$2a$10$B7ayEERpquyK2iRBWVcqs.sIKVg7JYJpSRMSwzc0IzvtUGEflVQgO', '225493718', '2017-12-11', 'male', '8c33f50a-46b9-4bea-b79c-1f7cedf82e6d.jpg', '0914413959', '10 Hải ân,P.2.Quận 12,Hồ Chí Minh', 'on', 1, 'boss', '2017-11-22 02:36:25', '2017-12-06 09:22:52'),
(5, 4, 'Nguyễn Ân ', 'an@gmail.com', '$2a$10$9H2pCKdXsSs/tf1iW0i2legQWOIr2IUISVxYFj2mV0BFNimQ34rSS', '2254028754', '2017-02-12', 'male', 'dab3ff83-64a2-4b14-bc88-e358b919dc89.jpg', '01694720847', '6 Ung Thái Văn,P.27,Quận 12,Hồ Chí Minh', 'off', 2, 'boss', '2017-12-02 12:35:01', '2017-12-06 11:14:17'),
(6, 2, 'Test Staff Update2', 'tesboss2@gmail.com', '$2a$10$yaGU0CfaKY1Of8E8iq89Te8dWCKbJ7E9I4CBd4E2G//gk3AqRQNu2', '123456789', '2018-06-23', 'male', 'image.png', '0926265656', 'HCM', 'off', 7, 'staff', '2017-12-02 20:02:11', '2018-06-23 11:23:45'),
(7, 2, 'Trần Văn Tài', 'tai@gmail.com', '$2a$10$DW3aLX6JfwbDW6sZ67XCye41NP5SF3dOnDU9pEDpvzkPi8Gs.zjHy', '224593285', '2012-08-01', 'male', '3914ba4c-b80b-4d0e-82e2-4a7737d10a3c.jpg', '01694729472', 'demo 12', 'on', 11, 'staff', '2017-12-02 20:17:44', '2017-12-06 16:46:49'),
(8, 2, 'Huỳnh Trọng Tình', 'tinh@gmail.com', '$2a$10$Sk6b5Il.ItG0Zr8PyBkb3eU5NPtwhEpHdZs8hxKX3mbjT9r4GvRHG', '332830194', '1990-06-15', 'male', '49497a97-1bbe-436f-9e96-2129f5744fb5.jpg', '0914439268', '286, 3 tháng 2, P.12,Quận 10,Hồ Chí Minh', 'off', 10, 'staff', '2017-12-03 08:17:42', '2017-12-06 16:56:01'),
(9, 2, 'Nguyễn Hoàng Yến', 'yen@gmail.com', '$2a$10$Vudx8a3yzBfqIuGC7jFL.udTqQuonmtX4BtDI32X/VPu2cEfOYEQK', '225472972', '1989-07-07', 'female', '3957f9b5-28be-44fc-8666-0ec7f7cccd71.jpg', '090753926', '190, Nguyễn Trãi, P.3,Quận 5,Hồ Chí Minh', 'on', 8, 'staff', '2017-12-03 08:23:33', '2017-12-06 16:51:26'),
(10, 4, 'Nguyễn Sinh Hùng', 'hung@gmail.com', '$2a$10$x6G3JH.EpzTguau/pGGuUujfjxva7laF4ewk60WmGQKENID8tig2y', '332794718', '1985-11-15', 'male', '3957f9b5-28be-44fc-8666-0ec7f7cccd71.jpg', '09144294724', '116, Nguyễn Trãi, P.3, Quận 5,Hồ Chí Minh', 'on', 17, 'staff', '2017-12-03 08:35:33', '2017-12-03 08:35:33'),
(11, 4, 'Nguyễn Nhật Ngân', 'ngan@gmail.com', '$2a$10$z70Tcgv7o/sLpUVSkpU5leF28D6/B.zQeZyGuQZgwFi8.1mBDb7oO', '225395830', '1985-02-02', 'female', '364c03ed-a779-4713-8681-cf57f671a846.jpg', '0914413959', ' 323 Huỳnh Tấn Phát, Quận 7,Hồ Chí Minh', 'on', 14, 'staff', '2017-12-03 08:41:30', '2017-12-03 08:41:30'),
(12, 4, 'Nguyễn Nhật Trân', 'tran@gmail.com', '$2a$10$OhclRjmTsHfkpCCuO4KOB.NxNeVyUG6mS/hTguauxZTq.QKGgVGVG', '447204825', '1989-04-01', 'female', '65bb4870-4270-4dea-bd31-7aeac6396e35.png', '0985863835', ' 336, Võ Văn Ngân, Q. Thủ Đức, Hồ Chí Minh', 'on', 16, 'staff', '2017-12-03 09:06:17', '2017-12-03 09:06:17'),
(13, 4, 'Đặng Văn Nghĩa', 'nghia@gmail.com', '$2a$10$oNUOMHK8SxCcTqIJJ/Zpn.HG/0P39hYox14Acogq6gGx/d4bxxjl6', '224364085', '1986-04-16', 'male', '3d12ebbd-8ceb-4d1b-8dd8-a6abdcc54647.jpg', '0917402847', '336, Võ Văn Ngân, Q. Thủ Đức, Hồ Chí Minh', 'on', 16, 'staff', '2017-12-04 10:39:32', '2017-12-04 10:39:32'),
(14, 2, 'Nguyễn Tùng Hướng', 'huong@gmail.com', '$2a$10$hL4gm.X08TRJX3Nsge0qj.HYcgfRlq5nTfKf/PL9XJNnD.9nPWHpy', '224301649', '1993-02-17', 'female', '9a4622f2-fb85-4196-ba3c-7b2fc2f37e53.jpg', '01693620593', ' 507 - 509, Quang Trung, P.10,Quận Gò Vấp,Hồ Chí Minh', 'on', 11, 'staff', '2017-12-04 10:43:24', '2017-12-06 16:51:38'),
(15, NULL, 'Nguyễn Thanh Thảo', 'thaonguyen@gmail.com', '$2a$10$Dq./4XrMXxFDi4Nb4YXAd.Or25tSgJnzEEZhaePkePySmnVh.IoiW', '225394852', '2018-06-23', 'female', 'c4feb98c-25c1-40e4-ad4e-71434b876895.png', '01664795792', '490/12/9 Điện Biên Phủ,P. 25, Quận Bình Thạnh,Hồ Chí Minh', 'off', 8, 'boss', '2017-12-04 10:56:24', '2018-06-23 11:58:28'),
(16, 4, 'Nguyễn Ngọc Lâm', 'lam@gmail.com', '$2a$10$/lfsGxcUYlrISu/zk5S7sedMnima60b42o2rz3rrYfceORvpEzR66', NULL, '1996-08-31', 'male', 'dc0ac633-79b0-43e5-a78c-e91b541e74b0.jpg', '0913574976', 'Xã Diên Lâm,Huyện Diên Khánh,Khánh Hòa', 'off', 1, 'boss', '2017-12-06 10:47:39', '2017-12-06 11:13:35'),
(17, 4, 'Nguyễn Phương Trinh', 'trinh@gmail.com', '$2a$10$Wvq4YP3mOCLx6qa5lgXbdOdffjO6igy4qJdUs.vowjyxs.CX0/pKK', '223593638', '1996-06-20', 'female', '7cd970bc-de68-40d9-baee-e7ce9f0aa6fa.png', '0918483928', '120/3/3 Kha Vạn Cân,P.2,Quận Thủ Đức,Hồ Chí Minh', 'on', 1, 'boss', '2017-12-06 10:57:02', '2017-12-06 11:12:41'),
(18, 5, 'Nguyễn Thành Trang', 'trang@gmail.com', '$2a$10$KW6BBO8Vd9r.2xlx/Uhue.rmTwNRCEN8sHtR8vBN6Mvhk/FSDtN76', '225693862', '1996-09-21', 'male', '2307321a-1baa-4999-84f9-f937de4bcf10.jpg', '0914439683', 'Phòng 2,Lầu 13,Chung Cư Phạm Viết Chánh,P3,Quận Bình Thạnh,Hồ Chí Minh', 'on', 1, 'boss', '2017-12-06 11:01:49', '2017-12-06 15:21:37'),
(19, NULL, 'Test Boss Update', 'tesboss1@gmail.com', '$2a$10$J2FsCMGR/RZ52MDIukA2xuBUWvVW0f6yUond4XBftjaV4eGN.SZCi', '123456789', '2018-06-23', 'male', 'image.png', '0926265656', 'HCM', 'off', 1, 'boss', '2018-06-09 23:16:30', '2018-06-23 11:58:32'),
(21, 1, 'S', 'ss@gmail.com', '$2a$10$pNdiTj25RtqzdV.UNwskQOuhZvK/07xobeTrWX0soNGTvtAbUZcEi', '464565', '2018-06-02', 'male', '5c87d951-48c2-4cbd-bc56-9006db03386a.jpg', '4652131355', 'hcm', 'on', 1, 'boss', '2018-06-10 08:57:29', '2018-06-10 08:57:29'),
(22, 1, 'T', 's@gmail.com', '$2a$10$mHFYh29F5FET/qxrqJRQMenvlcfxmJH37.cSfWqQIzK8MuP0BTFgm', '464565', '2018-06-23', 'male', 'bba75fcc-a53f-422e-ad71-eed6e425703d.png', '4652131355', 'hcm', 'on', 2, 'boss', '2018-06-10 09:11:54', '2018-06-23 14:40:39'),
(23, 2, 'Test Staff Add', 'teststaff1@gmail.com', '$2a$10$u2zXFr0eXl6WKvCn3EN4d.5qhZCKuKyi13DtkNVbuCD7TuAZ82Y7a', '123456789', '2018-06-23', 'male', 'b8ecd8da-9394-4e79-b75e-c80ec2268087.png', '0926265656', 'HCM', 'on', 7, 'staff', '2018-06-10 16:38:08', '2018-06-23 10:14:32'),
(24, 2, 'S', 'ssf@gmail.com', '$2a$10$dLkRtv/uGLlsZNiy/gfF2.qp/NK9QRmTS53NI2TSVFA8zWHK2heTm', '464565', '2018-06-23', 'male', '5c87d951-48c2-4cbd-bc56-9006db03386a.jpg', '4652131355', 'hcm', 'off', 7, 'staff', '2018-06-10 17:25:08', '2018-06-23 11:23:35'),
(25, 2, 'Test Update', 'ssfsf@gmail.com', '$2a$10$97U8fEQmeXtoDbrSXScf6uL/2AClrqLJg4xdFfjID36qGoYUp9QuK', '464565', '2018-06-23', 'male', '5c87d951-48c2-4cbd-bc56-9006db03386a.jpg', '4652131355', 'hcm', 'off', 7, 'staff', '2018-06-10 17:26:00', '2018-06-23 11:23:40'),
(26, 2, 'Test Staff Update2', 'tesboss22@gmail.com', '$2a$10$pdy5056QhyXkWCrY535eV./bel5gWXVYou6iBsx7UA46NpeDq4PHG', '123456789', '2018-06-23', 'male', 'image.png', '0926265656', 'HCM', 'off', 7, 'staff', '2018-06-10 17:27:37', '2018-06-23 11:01:38'),
(27, 2, 'S', 'Test@gmail.com', '$2a$10$b2vyJWOX9mhD2KmYOCGaV.HQeuTuGfYKbJeMo8lz4H6UtFrz4tNUG', '45645545', '2018-07-14', 'male', '486a4ce0-5484-42e3-9e0b-281a814d8302.png', '5454542312', 'HCM', 'on', 7, 'staff', '2018-06-23 10:17:58', '2018-07-14 14:02:43'),
(28, 2, 's', 'testusser@gmail.com', '$2a$10$WNOaweuQkXzol4rskMh1iuKIQiXxbZBFRTvLqRIMm/LgLZNO9RqHW', '45645545', '2018-06-07', 'male', '197e4df0-ea2a-49bd-b7a0-6f74eb1de2a1.png', '5443212', 'HCM', 'on', NULL, 'boss', '2018-06-23 14:41:35', '2018-06-23 14:41:50'),
(29, 2, 'sdfsf', 'ssfsdf@gmail.com', '$2a$10$wxGcwUZUfU4nQxuANRq0Qen/fuw9jL46jPtu5P7mnQaNJxn8XXsXq', '464565', '1990-02-07', 'male', '11208d08-c0e4-4504-a44f-314ba23b33e2.jpg', '4652131355', 'hcm', 'off', 8, 'staff', '2018-07-27 21:13:53', '2018-07-27 21:14:20'),
(30, 2, 'S', 'kjskfd@gmail.com', '$2a$10$KZW04fClxginlGUnBNepkOWjvuE0x1r87DPxOktOP4TP0ag1bU56a', '464565', '2018-07-12', 'male', '2bcd122f-ee29-4faa-993c-678ae203a71e.jpg', '4652131355', 'sdf', 'on', 7, 'staff', '2018-07-27 21:33:06', '2018-07-27 21:33:06'),
(31, 1, 'S', '123@gmail.com', '$2a$10$pW/DHexo0ZQL/gQbY3W5f.kUtJV5TjvLkdfIfgOOyOoWZyW3NwLaO', '', '1990-07-05', 'male', '9b8354f6-9812-4121-a270-7b6696c2b229.jpg', '4652131355', '123', 'on', 8, 'boss', '2018-07-28 10:22:57', '2018-07-28 10:22:57'),
(32, 2, 'S', 'testkdjf@gmail.com', '$2a$10$34iPhP46eaqO0nfYaH30Qe9g5iYNU/sIrRTyII5XywuMWQVH2mqDO', '', '2018-07-28', 'male', 'f47fe8f6-cc6f-4561-b00f-fa502523343e.jpg', '4652131355', 'hcm', 'off', 8, 'boss', '2018-07-28 14:42:22', '2018-07-28 14:43:58'),
(33, 2, 'S', '16867@gmail.com', '$2a$10$ZBrB7rVbaFvLQxOZeEbdTu66gXqMVFMGoD1kRpxfzUm7Xt9ISgVuW', '', '2018-07-28', 'male', '209d7745-148b-42cb-94cf-c2b76f7cf35c.jpg', '0909856895', 'hcm', 'on', 8, 'boss', '2018-07-28 16:10:35', '2018-07-28 22:50:10'),
(34, 2, 'S', '168673@gmail.com', '$2a$10$sd3KWBO6zJ/SWOrsyI/qqeapEDUYhH8fZXYDCF3u22K0/dRqTqQ56', '', '2018-07-29', 'male', 'da4de147-f7d1-45ce-9ab1-b2b9d41394d6.png', '0909856895', 'hcm', 'on', 8, 'staff', '2018-07-29 09:09:20', '2018-07-29 09:10:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`bill_id`);

--
-- Indexes for table `detail_bill`
--
ALTER TABLE `detail_bill`
  ADD PRIMARY KEY (`detail_id`);

--
-- Indexes for table `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`drink_id`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`position_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`shop_id`);

--
-- Indexes for table `systems`
--
ALTER TABLE `systems`
  ADD PRIMARY KEY (`system_id`),
  ADD UNIQUE KEY `system_name` (`system_name`);

--
-- Indexes for table `type_drinks`
--
ALTER TABLE `type_drinks`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `bill_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `detail_bill`
--
ALTER TABLE `detail_bill`
  MODIFY `detail_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `drinks`
--
ALTER TABLE `drinks`
  MODIFY `drink_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `position_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shop_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `systems`
--
ALTER TABLE `systems`
  MODIFY `system_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `type_drinks`
--
ALTER TABLE `type_drinks`
  MODIFY `type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
