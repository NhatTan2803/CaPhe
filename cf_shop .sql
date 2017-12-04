-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 04, 2017 lúc 06:07 AM
-- Phiên bản máy phục vụ: 10.1.26-MariaDB
-- Phiên bản PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cf_shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bills`
--

CREATE TABLE `bills` (
  `bill_id` varchar(255) NOT NULL,
  `bill_user_id` int(11) DEFAULT NULL,
  `bill_total` varchar(255) DEFAULT NULL,
  `bill_Mreceive` varchar(255) DEFAULT NULL,
  `bill_Mreturn` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `bills`
--

INSERT INTO `bills` (`bill_id`, `bill_user_id`, `bill_total`, `bill_Mreceive`, `bill_Mreturn`, `createdAt`, `updatedAt`) VALUES
('17111153fcs', 3, '70000', NULL, NULL, '2017-12-01 15:42:41', '2017-12-01 15:42:41'),
('171113lct', 3, '155000', NULL, NULL, '2017-12-01 03:46:49', '2017-12-01 03:46:49');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail_bill`
--

CREATE TABLE `detail_bill` (
  `detail_id` int(10) UNSIGNED NOT NULL,
  `detail_bill_id` varchar(255) DEFAULT NULL,
  `detail_drink_id` int(11) DEFAULT NULL,
  `detail_drink_name` varchar(255) DEFAULT NULL,
  `detail_number` int(11) DEFAULT NULL,
  `detail_price` varchar(255) DEFAULT NULL,
  `detail_moneyItem_drink` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `detail_bill`
--

INSERT INTO `detail_bill` (`detail_id`, `detail_bill_id`, `detail_drink_id`, `detail_drink_name`, `detail_number`, `detail_price`, `detail_moneyItem_drink`, `createdAt`, `updatedAt`) VALUES
(1, '171113lct', 2, 'Cà Phê Sữa', 2, '25000', '50000', '2017-12-01 03:46:49', '2017-12-01 03:46:49'),
(2, '171113lct', 4, 'Nước Cam', 3, '35000', '105000', '2017-12-01 03:46:49', '2017-12-01 03:46:49'),
(3, '17111153fcs', 4, 'Nước Cam', 2, '35000', '70000', '2017-12-01 15:42:41', '2017-12-01 15:42:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `drinks`
--

CREATE TABLE `drinks` (
  `drink_id` int(10) UNSIGNED NOT NULL,
  `drink_shop_id` int(11) DEFAULT NULL,
  `drink_name` varchar(20) DEFAULT NULL,
  `drink_price` varchar(255) DEFAULT NULL,
  `drink_avatar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `drinks`
--

INSERT INTO `drinks` (`drink_id`, `drink_shop_id`, `drink_name`, `drink_price`, `drink_avatar`) VALUES
(1, 1, 'Cà Phê Đen', '22000', NULL),
(2, 1, 'Cà Phê Sữa', '25000', NULL),
(3, 1, 'Cà Phê Đặc Biệt', '30000', NULL),
(4, 1, 'Nước Cam', '35000', NULL),
(5, 1, 'Nước Bưởi Ép', '35000', NULL),
(6, 2, ' Sinh Tố Dưa Hấu', '29000', NULL),
(7, 2, ' Sinh Tố Bơ', '33000', NULL),
(8, 2, 'Cà Phê Đen', '33000', NULL),
(9, 2, 'Cà Phê Sữa', '37000', NULL),
(10, 2, 'Trà xanh', '40000', NULL),
(11, 2, 'Trà sữa ', '34000', ''),
(12, 2, 'Bí Đao', '27000', ''),
(13, 4, 'Cà phê đen', '22000', ''),
(14, 4, 'Cà phê sữa', '25000', ''),
(15, 4, 'Cam vắt', '32000', ''),
(16, 4, 'Sữa dừa', '36000', ''),
(17, 2, 'Trà Đào', '35000', NULL),
(18, 2, 'Trà Đào', '35000', '472a085b-d799-46be-a741-5f4131fde0eb.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `positions`
--

CREATE TABLE `positions` (
  `position_id` int(10) UNSIGNED NOT NULL,
  `position_shop_id` varchar(255) DEFAULT NULL,
  `position_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `positions`
--

INSERT INTO `positions` (`position_id`, `position_shop_id`, `position_name`, `createdAt`, `updatedAt`) VALUES
(7, '2', 'Kế Toán', '2017-12-02 13:29:28', '2017-12-02 13:29:28'),
(8, '2', 'Kế Toán Trưởng', '2017-12-02 13:29:41', '2017-12-02 13:29:41'),
(9, '2', 'Thu Ngân', '2017-12-02 13:29:54', '2017-12-02 13:29:54'),
(10, '2', 'Nhân viên phục vụ ', '2017-12-02 13:30:32', '2017-12-02 13:30:32'),
(11, '2', 'Tạp vụ', '2017-12-02 13:30:44', '2017-12-02 13:30:44'),
(12, '4', 'Nhân viên thử việc', '2017-12-03 08:29:25', '2017-12-03 08:29:25'),
(14, '4', 'Thu Ngân - Ân', '2017-12-03 08:33:11', '2017-12-03 08:33:11'),
(15, '4', 'Tạp Vụ - Ân', '2017-12-03 08:33:24', '2017-12-03 08:33:24'),
(16, '4', 'Kế Toán - Ân', '2017-12-03 08:33:38', '2017-12-03 08:33:38'),
(17, '4', 'Giữ xe - Ân', '2017-12-03 08:33:52', '2017-12-03 08:33:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shops`
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
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `shops`
--

INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_system_id`, `shop_email`, `shop_address`, `shop_phone`, `shop_avatar`, `shop_dayFrom`, `shop_dayTo`, `createdAt`, `updatedAt`) VALUES
(1, 'Vườn treo', NULL, 'Vườn treo', '4 Nguyễn Trãi,phường 2,Quận 1,Hồ Chí Minh', '098745633', '3dccf508-c6b2-4071-af70-836753a25d3a.jpg', '2017-11-22', '2018-01-30', '2017-11-22 19:51:08', '2017-11-22 19:51:08'),
(2, 'The Coffee House', 2, 'The Coffee House', '3 Hàng Hải, phường 23,Quận 3,Hồ Chí Minh', '08942145643', '362ed309-4cd3-4c82-bd03-e2b41ac1e3a3.jpg', '2017-11-01', '2020-10-27', '2017-11-22 19:52:27', '2017-11-22 19:52:27'),
(3, 'Hiland Coffee', 4, 'Hiland Coffee', '26 Gia Bắc,phường 29,quận 8,Hồ Chí Minh', '094342333222', 'c733ebeb-9c3a-404b-b883-9e790c35f44a.jpg', '2017-11-01', '2025-11-26', '2017-11-22 19:57:50', '2017-11-22 19:57:50'),
(4, 'Cà Phê 81', NULL, 'Cà Phê 81', '13 ung văn khiêm,Phường 23,Quận 5,Hồ Chí Minh', '01263520689', 'a2e76676-e489-4298-9103-3964b53bfd38.jpg', '2002-07-17', '2023-10-31', '2017-11-22 20:01:26', '2017-11-22 20:01:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `systems`
--

CREATE TABLE `systems` (
  `system_id` int(10) UNSIGNED NOT NULL,
  `system_name` varchar(255) DEFAULT NULL,
  `system_address` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `systems`
--

INSERT INTO `systems` (`system_id`, `system_name`, `system_address`, `createdAt`, `updatedAt`) VALUES
(1, 'Milano', '159 đường 2/3, Phường 15,quận 10,HCM', '2017-11-12 18:27:46', '2017-11-12 18:27:46'),
(2, 'The Coffee House', '1 Lê lợi,Phường Đa Kao,Quận HCM', '2017-11-20 20:25:54', '2017-11-20 20:25:54'),
(3, 'CafeIn', '168 Nguyễn Tất Thành,Phường 3,Quận 8,HCM', '2017-11-20 20:27:20', '2017-11-20 20:27:20'),
(4, 'Hiland Coffee', '17 Nguyễn Đình Chiểu,Phường 2,Quận 3,Hồ Chí Minh', '2017-11-21 15:52:11', '2017-11-21 15:52:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `type_drinks`
--

CREATE TABLE `type_drinks` (
  `type_id` int(10) UNSIGNED NOT NULL,
  `type_shop_id` int(11) DEFAULT NULL,
  `type_name` varchar(20) DEFAULT NULL,
  `type_avatar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
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
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`user_id`, `user_shop_id`, `user_name`, `user_email`, `user_password`, `user_Idcard`, `user_birthday`, `user_sex`, `user_avatar`, `user_phone`, `user_address`, `user_active`, `user_position_id`, `user_permission`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'Nguyễn Nhật Tân', '1@gmail.com', '$2a$10$DnAbQ/UFCZRl.QYL6UdaKO2uTLplGEZ3fO59xFjfkf4/ZCWtksp8i', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', '2017-11-18 20:07:51', '2017-11-18 20:07:51'),
(2, 2, 'Trương Tấn Sang', '2@gmail.com', '$2a$10$Qk7JuIZ39jcKmXLC42jjNO.AD/57bAVN6//K07tiN9sroaJqMcnla', NULL, NULL, NULL, NULL, NULL, NULL, 'on', NULL, 'boss', '2017-11-18 20:08:08', '2017-11-18 20:08:08'),
(3, 3, 'Nguyễn Hải Ân', '3@gmail.com', '$2a$10$Uak5bx/hBSVFuSZVbyHJduTQO81x/yZ6qOVwLJ2z4isEKr5Nh129i', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'staff', '2017-11-18 20:08:30', '2017-11-18 20:08:30'),
(4, 1, 'Trần Song Thy', '4@gmail.com', '$2a$10$B7ayEERpquyK2iRBWVcqs.sIKVg7JYJpSRMSwzc0IzvtUGEflVQgO', NULL, '2017-12-11', NULL, '', '4444444', '4', NULL, NULL, 'boss', '2017-11-22 02:36:25', '2017-11-22 02:36:25'),
(5, 4, 'Nguyễn Ân', 'an@gmail.com', '$2a$10$9H2pCKdXsSs/tf1iW0i2legQWOIr2IUISVxYFj2mV0BFNimQ34rSS', NULL, '2017-02-12', 'male', 'bf33c0a8-ec90-4706-9174-d1bbd2c92ebe.jpg', '34235342654', '6 Ung Thái Văn,P.27,Quận 12,Hồ Chí Minh', 'on', NULL, 'boss', '2017-12-02 12:35:01', '2017-12-02 12:35:01'),
(6, 2, 'Thái Sang', 'sang@gmail.com', '$2a$10$yaGU0CfaKY1Of8E8iq89Te8dWCKbJ7E9I4CBd4E2G//gk3AqRQNu2', '224395840', '2017-04-12', 'male', '429f0f3c-7251-4791-b0df-7221bfe65942.jpg', '01693759234', 'demo', NULL, 10, 'staff', '2017-12-02 20:02:11', '2017-12-02 20:02:11'),
(7, 2, 'Trần Văn Tài', 'tai@gmail.com', '$2a$10$DW3aLX6JfwbDW6sZ67XCye41NP5SF3dOnDU9pEDpvzkPi8Gs.zjHy', '224593285', '2012-08-01', 'male', '38124c95-9cc7-4970-a1f4-3e0dc4b4fe07.jpg', '01694729472', 'demo 1', NULL, 11, 'staff', '2017-12-02 20:17:44', '2017-12-02 20:17:44'),
(8, 2, 'Huỳnh Trọng Tình', 'tinh@gmail.com', '$2a$10$Sk6b5Il.ItG0Zr8PyBkb3eU5NPtwhEpHdZs8hxKX3mbjT9r4GvRHG', '332830194', '1990-06-15', 'male', '49497a97-1bbe-436f-9e96-2129f5744fb5.jpg', '0914439268', '286, 3 tháng 2, P.12,Quận 10,Hồ Chí Minh', NULL, 8, 'staff', '2017-12-03 08:17:42', '2017-12-03 08:17:42'),
(9, 2, 'Nguyễn Hoàng Yến', 'yen@gmail.com', '$2a$10$Vudx8a3yzBfqIuGC7jFL.udTqQuonmtX4BtDI32X/VPu2cEfOYEQK', '225472972', '1989-07-07', 'female', '3957f9b5-28be-44fc-8666-0ec7f7cccd71.jpg', '090753926', '190, Nguyễn Trãi, P.3,Quận 5,Hồ Chí Minh', NULL, 9, 'staff', '2017-12-03 08:23:33', '2017-12-03 08:23:33'),
(10, 4, 'Nguyễn Sinh Hùng', 'hung@gmail.com', '$2a$10$x6G3JH.EpzTguau/pGGuUujfjxva7laF4ewk60WmGQKENID8tig2y', '332794718', '1985-11-15', 'male', '', '09144294724', '116, Nguyễn Trãi, P.3, Quận 5,Hồ Chí Minh', NULL, 17, 'staff', '2017-12-03 08:35:33', '2017-12-03 08:35:33'),
(11, 4, 'Nguyễn Nhật Ngân', 'ngan@gmail.com', '$2a$10$z70Tcgv7o/sLpUVSkpU5leF28D6/B.zQeZyGuQZgwFi8.1mBDb7oO', '225395830', '1985-02-02', 'female', '364c03ed-a779-4713-8681-cf57f671a846.jpg', '0914413959', ' 323 Huỳnh Tấn Phát, Quận 7,Hồ Chí Minh', NULL, 14, 'staff', '2017-12-03 08:41:30', '2017-12-03 08:41:30'),
(12, 4, 'Nguyễn Nhật Trân', 'tran@gmail.com', '$2a$10$OhclRjmTsHfkpCCuO4KOB.NxNeVyUG6mS/hTguauxZTq.QKGgVGVG', '447204825', '1989-04-01', 'female', '65bb4870-4270-4dea-bd31-7aeac6396e35.png', '0985863835', ' 336, Võ Văn Ngân, Q. Thủ Đức, Hồ Chí Minh', NULL, 16, 'staff', '2017-12-03 09:06:17', '2017-12-03 09:06:17'),
(13, 4, 'Đặng Văn Nghĩa', 'nghia@gmail.com', '$2a$10$oNUOMHK8SxCcTqIJJ/Zpn.HG/0P39hYox14Acogq6gGx/d4bxxjl6', '224364085', '1986-04-16', 'male', '3d12ebbd-8ceb-4d1b-8dd8-a6abdcc54647.jpg', '0917402847', '336, Võ Văn Ngân, Q. Thủ Đức, Hồ Chí Minh', NULL, 16, 'staff', '2017-12-04 10:39:32', '2017-12-04 10:39:32'),
(14, 2, 'Nguyễn Tùng Hướng', 'huong@gmail.com', '$2a$10$hL4gm.X08TRJX3Nsge0qj.HYcgfRlq5nTfKf/PL9XJNnD.9nPWHpy', '224301649', '1993-02-17', 'female', '9a4622f2-fb85-4196-ba3c-7b2fc2f37e53.jpg', '01693620593', ' 507 - 509, Quang Trung, P.10,Quận Gò Vấp,Hồ Chí Minh', NULL, 10, 'staff', '2017-12-04 10:43:24', '2017-12-04 10:43:24'),
(15, 2, 'Nguyễn Thanh Thảo', 'thaonguyen@gmail.com', '$2a$10$Dq./4XrMXxFDi4Nb4YXAd.Or25tSgJnzEEZhaePkePySmnVh.IoiW', '225394852', '1996-09-05', 'female', 'c4feb98c-25c1-40e4-ad4e-71434b876895.png', '01664795792', '490/12/9 Điện Biên Phủ,P. 25, Quận Bình Thạnh,Hồ Chí Minh', 'on', 8, 'staff', '2017-12-04 10:56:24', '2017-12-04 10:56:24');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`bill_id`);

--
-- Chỉ mục cho bảng `detail_bill`
--
ALTER TABLE `detail_bill`
  ADD PRIMARY KEY (`detail_id`);

--
-- Chỉ mục cho bảng `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`drink_id`);

--
-- Chỉ mục cho bảng `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`position_id`),
  ADD UNIQUE KEY `position_name` (`position_name`);

--
-- Chỉ mục cho bảng `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`shop_id`);

--
-- Chỉ mục cho bảng `systems`
--
ALTER TABLE `systems`
  ADD PRIMARY KEY (`system_id`),
  ADD UNIQUE KEY `system_name` (`system_name`);

--
-- Chỉ mục cho bảng `type_drinks`
--
ALTER TABLE `type_drinks`
  ADD PRIMARY KEY (`type_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `detail_bill`
--
ALTER TABLE `detail_bill`
  MODIFY `detail_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `drinks`
--
ALTER TABLE `drinks`
  MODIFY `drink_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `positions`
--
ALTER TABLE `positions`
  MODIFY `position_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `shops`
--
ALTER TABLE `shops`
  MODIFY `shop_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `systems`
--
ALTER TABLE `systems`
  MODIFY `system_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `type_drinks`
--
ALTER TABLE `type_drinks`
  MODIFY `type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
