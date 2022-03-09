-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 10 fév. 2022 à 16:03
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gsb`
--

-- --------------------------------------------------------

--
-- Structure de la table `emprunter`
--

CREATE TABLE `emprunter` (
  `idMateriel` int(11) NOT NULL,
  `matriculeVisiteur` int(10) NOT NULL,
  `dateDebut` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `dateFin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `materiel`
--

CREATE TABLE `materiel` (
  `ID` int(11) NOT NULL,
  `type` varchar(10) NOT NULL COMMENT 'tablette ou ordinateur',
  `prix` double NOT NULL,
  `taille` varchar(24) NOT NULL,
  `couleur` varchar(24) NOT NULL,
  `model` varchar(24) NOT NULL,
  `poids` double NOT NULL,
  `emprunt` varchar(5) NOT NULL COMMENT 'oui ou non'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `materiel`
--

INSERT INTO `materiel` (`ID`, `type`, `prix`, `taille`, `couleur`, `model`, `poids`, `emprunt`) VALUES
(1, 'tablette', 180.1, '17.5 pouces', 'orange', 'Samsung tab 4', 2.5, ''),
(2, 'ordinateur', 1049.99, '19.5 pouces', 'blanc', 'acer nitro 5', 2.8, '');

-- --------------------------------------------------------

--
-- Structure de la table `visiteur`
--

CREATE TABLE `visiteur` (
  `VIS_MATRICULE` int(10) NOT NULL,
  `VIS_NOM` char(25) DEFAULT NULL,
  `VIS_PRENOM` char(50) DEFAULT NULL,
  `VIS_ADRESSE` char(50) DEFAULT NULL,
  `VIS_CP` char(5) DEFAULT NULL,
  `VIS_VILLE` char(30) DEFAULT NULL,
  `VIS_DATEEMBAUCHE` datetime DEFAULT current_timestamp(),
  `SEC_CODE` char(1) DEFAULT NULL,
  `LAB_CODE` char(2) DEFAULT NULL,
  `VIS_MDP` varchar(24) NOT NULL,
  `VIS_MAIL` varchar(48) NOT NULL,
  `VIS_ROLE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `visiteur`
--

INSERT INTO `visiteur` (`VIS_MATRICULE`, `VIS_NOM`, `VIS_PRENOM`, `VIS_ADRESSE`, `VIS_CP`, `VIS_VILLE`, `VIS_DATEEMBAUCHE`, `SEC_CODE`, `LAB_CODE`, `VIS_MDP`, `VIS_MAIL`, `VIS_ROLE`) VALUES
(1, 'Villechalane', 'Louis', '8 cours Lafontaine', '29000', 'BREST', '2021-11-09 15:00:31', '', 'SW', 'test', '', ''),
(2, 'Andre', 'David', '1 r Aimon de Chiss', '38100', 'GRENOBLE', '2021-11-02 15:00:35', '', 'GY', 'test', '', ''),
(3, 'Bedos', 'Christian', '1 r B', '65000', 'TARBES', '2021-11-02 15:00:39', '', 'GY', 'test', '', ''),
(5, 'test', 'test', 'test', '77290', 'test', '2021-11-09 15:00:31', 'P', 'SW', 'tes', 'test', 'test'),
(9, 'test', 'test', 'test', '77294', 'tetstst', '2021-11-18 16:25:36', 'P', 'SW', 'tetstte', 'tetstets', 'testets');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `emprunter`
--
ALTER TABLE `emprunter`
  ADD KEY `matriculeVisiteur` (`matriculeVisiteur`);

--
-- Index pour la table `materiel`
--
ALTER TABLE `materiel`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `visiteur`
--
ALTER TABLE `visiteur`
  ADD PRIMARY KEY (`VIS_MATRICULE`),
  ADD KEY `DEPENDRE_FK` (`LAB_CODE`),
  ADD KEY `SEC_CODE` (`SEC_CODE`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `materiel`
--
ALTER TABLE `materiel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `visiteur`
--
ALTER TABLE `visiteur`
  MODIFY `VIS_MATRICULE` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `emprunter`
--
ALTER TABLE `emprunter`
  ADD CONSTRAINT `emprunter_ibfk_1` FOREIGN KEY (`matriculeVisiteur`) REFERENCES `visiteur` (`VIS_MATRICULE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
