-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2023 at 11:53 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `added_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `address`, `contact`, `createdAt`, `updatedAt`, `added_by`) VALUES
(1, 'Nayan Restro', '1234 Main Street, Bangalore', '9994578584', '2023-09-14 22:06:13', '2023-09-15 11:01:01', NULL),
(3, 'Lalit Restaurant', '13 Church Street, Bangalore', '914258586', '2023-09-14 22:15:20', '2023-09-14 22:15:20', NULL),
(7, 'Nabaranaia Restaurant', '1234 Main Street, Bangalore', '9994578584', '2023-09-15 10:44:29', '2023-09-16 21:22:31', 6),
(9, 'Sushant Restro', 'Bangalore-56004', '8456784512', '2023-09-15 10:47:18', '2023-09-16 21:23:30', 5),
(12, 'Jeeven Restaurant', '114 Main Road, Patna', '9142456456', '2023-09-16 20:45:10', '2023-09-16 20:45:10', NULL),
(15, 'Neha Restro', 'Naveen Nagar - 56006', '9898456457', '2023-09-16 21:33:06', '2023-09-16 21:40:29', 9),
(16, 'HSR restro ', 'HSR - Pune', '989845645', '2023-09-16 21:45:09', '2023-09-16 21:45:09', 10);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230914213510-create-restaurant.js'),
('20230915121154-add-email-to-restaurants.js'),
('20230915121556-remove-email-from-restaurants.js'),
('20230916190408-create-user.js'),
('20230916190450-add-added-by-to-restaurants.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `createdAt`, `updatedAt`) VALUES
(4, 'Rishab singh', 'Rishab123@gmail.com', '2023-09-16 19:57:21', '2023-09-16 21:14:41'),
(5, 'Sushant Kumar Suman', 'sushant123@gmail.com', '2023-09-16 21:06:52', '2023-09-16 21:26:43'),
(6, 'Siddharth Jain', 'sid123@gmail.com', '2023-09-16 21:19:44', '2023-09-16 21:26:35'),
(7, 'Sathvik Kumar', 'sathvik1234@gmail.com', '2023-09-16 21:21:45', '2023-09-16 21:22:02'),
(9, 'Neha Prajapati', 'neha123@gmail.com', '2023-09-16 21:40:19', '2023-09-16 21:40:19'),
(10, 'Hey Coach ', 'hey1234@gmail.com', '2023-09-16 21:44:33', '2023-09-16 21:44:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurants_added_by_foreign_idx` (`added_by`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD CONSTRAINT `restaurants_added_by_foreign_idx` FOREIGN KEY (`added_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
