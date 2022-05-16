-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Maj 2022, 22:04
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kalendarz`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `login` varchar(32) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id`, `login`, `password`, `role`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'user'),
(2, 'user', 'ee11cbb19052e40b07aac0ca060c23ee', 'user'),
(3, 'user', 'ee11cbb19052e40b07aac0ca060c23ee', 'user'),
(4, 'Useer', '47b08255359b7c52a2d6b36c400072e0', 'user'),
(5, 'mikolaj', 'b6daab230f59d5bebfa5420b45e904d0', 'user'),
(6, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'user'),
(7, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'user'),
(8, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'user'),
(9, '', 'd41d8cd98f00b204e9800998ecf8427e', 'user'),
(10, 'dfggdf', '2c8b94ecd7e6c679fcbbb55ddb5e6875', 'user');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wydarzenie`
--

CREATE TABLE `wydarzenie` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `color` varchar(64) NOT NULL,
  `date` date DEFAULT NULL,
  `shared` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`shared`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `wydarzenie`
--

INSERT INTO `wydarzenie` (`id`, `idUser`, `name`, `color`, `date`, `shared`) VALUES
(1, 2, 'Urodziny', '', '2022-04-06', NULL),
(2, 2, 'Urodziny', '', '2022-04-06', NULL),
(3, 2, 'Urodziny', '', '2022-04-06', NULL),
(4, 2, 'Urodziny', '', '2022-04-06', NULL),
(5, 2, 'name', 'color', '2022-05-10', NULL),
(6, 1, 'dfouibhvhiodfbpo', '#cf1717', '2022-05-29', NULL);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `wydarzenie`
--
ALTER TABLE `wydarzenie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `wydarzenie`
--
ALTER TABLE `wydarzenie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
