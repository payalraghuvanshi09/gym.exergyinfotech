-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2022 at 03:30 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance_table`
--

CREATE TABLE `attendance_table` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `login_time` time NOT NULL,
  `logout_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance_table`
--

INSERT INTO `attendance_table` (`id`, `user_id`, `date`, `login_time`, `logout_time`) VALUES
(32, 58, '2022-06-29', '07:00:00', '09:00:00'),
(33, 57, '2022-07-09', '07:40:00', '11:40:00'),
(34, 57, '2022-07-07', '05:58:00', '05:59:00');

-- --------------------------------------------------------

--
-- Table structure for table `employee_bank_details_table`
--

CREATE TABLE `employee_bank_details_table` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pan_number` varchar(110) NOT NULL,
  `aadhar_card` varchar(110) NOT NULL,
  `bank_name` varchar(110) NOT NULL,
  `bank_account_number` varchar(110) NOT NULL,
  `bank_ifsc_code` varchar(110) NOT NULL,
  `date_of_joining` datetime NOT NULL,
  `date_of_releving` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `muscles_group_table`
--

CREATE TABLE `muscles_group_table` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `salary_table`
--

CREATE TABLE `salary_table` (
  `id` int(11) NOT NULL,
  `monthly` int(11) NOT NULL,
  `dates` date NOT NULL,
  `employee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `salary_table`
--

INSERT INTO `salary_table` (`id`, `monthly`, `dates`, `employee`) VALUES
(1, 1500, '2022-07-08', 58),
(2, 1500, '2022-07-08', 58),
(3, 1500, '2022-07-08', 58),
(4, 1500, '2022-07-08', 58),
(5, 1500, '2022-07-08', 58),
(6, 1500, '2022-07-08', 58),
(7, 1500, '2022-07-07', 58);

-- --------------------------------------------------------

--
-- Table structure for table `subscription_table`
--

CREATE TABLE `subscription_table` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `duration` int(11) NOT NULL,
  `price` decimal(65,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscription_table`
--

INSERT INTO `subscription_table` (`id`, `name`, `duration`, `price`) VALUES
(4, 'monthly', 1, '1500'),
(6, 'yearly', 12, '120000'),
(8, '', 0, '0'),
(10, '', 0, '0');

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `fathers_name` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `date_of_joining` varchar(100) NOT NULL,
  `date_of_birth` varchar(100) NOT NULL,
  `blood_group` varchar(100) NOT NULL,
  `weight` decimal(10,2) NOT NULL,
  `height` decimal(10,2) NOT NULL,
  `type_of_subscription` varchar(100) NOT NULL,
  `marital_status` varchar(100) NOT NULL,
  `emergency_contact` varchar(10) NOT NULL,
  `reference_name` varchar(100) NOT NULL,
  `reference_mobile_number` varchar(100) NOT NULL,
  `user_type` enum('1','2','3') NOT NULL DEFAULT '3' COMMENT '1=admin,2=employees, 3=customers\r\n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`id`, `name`, `fathers_name`, `gender`, `mobile`, `email`, `password`, `address`, `date_of_joining`, `date_of_birth`, `blood_group`, `weight`, `height`, `type_of_subscription`, `marital_status`, `emergency_contact`, `reference_name`, `reference_mobile_number`, `user_type`) VALUES
(54, 'admin', '', '', '', 'admin@gmail.com', '$2b$10$HZmqatQKZKr.xOLbyVg74eslXZGjoFIQriqpLL/g3DhCwNxCjgpjK', '', '', '', '', '0.00', '0.00', '', '', '', '', '', '1'),
(55, 'dasdsa', 'sdad', 'asdas', 'sdad', 'as@w.com', '', '', '', '', '', '0.00', '0.00', '', '', '', '', '', '2'),
(56, 'dtukituit;p', 'honey', '57i4', '[0uu[', 'hedllo@gmail.com', '', 'UK', 'i764', 'i7564', 'i574', '0.00', '0.00', 'p97 79', 'i647', '64i7', '4i67', 'i74', '3'),
(57, 'alex', '8769', '57i4', '[0uu[', 'helloss@gmail.com', '', '754i', 'i764', 'i7564', 'i574', '0.00', '0.00', '4i67', 'i647', '64i7', '4i67', 'i74', '2'),
(58, 'alex', 'hello', 'male', '987675656', 'hello@gmail.com', '', 'uk', '2022-07-01', '2022-07-07', 'A+', '50.00', '50.00', 'monthly', 'married', '8796-089-9', 'robert', '8709867795', '2'),
(60, 'alex', 'hello', 'male', '987675656', 'hell@gmail.com', '', 'uk', '2022-06-30', '2022-07-06', 'A+', '50.00', '50.00', 'monthly', 'married', '56u3', 'robert', '8709867795', '2'),
(64, 'alex', 'hello', 'male', '987675656', 'admin5@gmail.com', '', 'uk', '97[u9', 'i7564', 'A+', '50.00', '50.00', 'monthly', 'married', '64i7', '4i67', '8709867795', '3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance_table`
--
ALTER TABLE `attendance_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_bank_details_table`
--
ALTER TABLE `employee_bank_details_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `muscles_group_table`
--
ALTER TABLE `muscles_group_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary_table`
--
ALTER TABLE `salary_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee` (`employee`);

--
-- Indexes for table `subscription_table`
--
ALTER TABLE `subscription_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance_table`
--
ALTER TABLE `attendance_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `employee_bank_details_table`
--
ALTER TABLE `employee_bank_details_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `muscles_group_table`
--
ALTER TABLE `muscles_group_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salary_table`
--
ALTER TABLE `salary_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subscription_table`
--
ALTER TABLE `subscription_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee_bank_details_table`
--
ALTER TABLE `employee_bank_details_table`
  ADD CONSTRAINT `employee_bank_details_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
