-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.1.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for todo
CREATE DATABASE IF NOT EXISTS `todo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `todo`;

-- Dumping structure for table todo.task_details
CREATE TABLE IF NOT EXISTS `task_details` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `task_name` varchar(100) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `created_by` varchar(100) NOT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `updated_by` varchar(100) DEFAULT NULL,
  `deleted_at` datetime DEFAULT current_timestamp(),
  `deleted_by` varchar(100) DEFAULT NULL,
  `task_status` int(11) NOT NULL,
  PRIMARY KEY (`task_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `task_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table todo.task_details: ~9 rows (approximately)
DELETE FROM `task_details`;
INSERT INTO `task_details` (`task_id`, `task_name`, `user_id`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`, `task_status`) VALUES
	(1, 'Water plants', 1, '2023-03-31 12:06:40', 'sachin', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 1),
	(2, 'Take out the trash', 3, '2023-03-31 12:06:40', 'saran', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 2),
	(3, 'Make a grocery list', 4, '2023-03-31 12:06:40', 'raja', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 3),
	(4, 'Sweep the floor', 4, '2023-03-31 12:06:40', 'raja', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 3),
	(5, 'Walk the dog', 2, '2023-03-31 12:06:40', 'naveen', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 3),
	(6, 'Pick up dry cleaning', 1, '2023-03-31 12:06:40', 'saran', '2023-03-31 12:23:24', 'sachin', '2023-03-31 12:06:40', NULL, 1),
	(7, 'Read a chapter of a book', 1, '2023-03-31 12:06:40', 'sachin', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 1),
	(8, 'Pay bills', 3, '2023-03-31 12:06:40', 'saran', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 2),
	(9, 'Go for a hike', 3, '2023-03-31 12:06:40', 'saran', '2023-03-31 12:06:40', NULL, '2023-03-31 12:06:40', NULL, 2);

-- Dumping structure for table todo.user_details
CREATE TABLE IF NOT EXISTS `user_details` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `created_by` varchar(100) NOT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `updated_by` varchar(100) DEFAULT NULL,
  `deleted_at` datetime DEFAULT current_timestamp(),
  `deleted_by` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table todo.user_details: ~4 rows (approximately)
DELETE FROM `user_details`;
INSERT INTO `user_details` (`user_id`, `user_name`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
	(1, 'sachin', '2023-03-31 11:49:50', 'sachin', '2023-03-31 11:49:50', NULL, '2023-03-31 11:49:50', NULL),
	(2, 'naveen', '2023-03-31 11:52:28', 'naveen', '2023-03-31 11:52:28', 'sachin', '2023-03-31 11:52:28', NULL),
	(3, 'saran', '2023-03-31 11:52:28', 'saran', '2023-03-31 11:52:28', NULL, '2023-03-31 11:52:28', NULL),
	(4, 'raja', '2023-03-31 11:52:28', 'raja', '2023-03-31 11:52:28', NULL, '2023-03-31 11:52:28', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
