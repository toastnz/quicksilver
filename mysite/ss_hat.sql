# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.24)
# Database: ss_hat
# Generation Time: 2015-08-28 00:19:00 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table ArchiveWidget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ArchiveWidget`;

CREATE TABLE `ArchiveWidget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DisplayMode` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table AssignUsersToWorkflowAction
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AssignUsersToWorkflowAction`;

CREATE TABLE `AssignUsersToWorkflowAction` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AssignInitiator` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `AssignUsersToWorkflowAction` WRITE;
/*!40000 ALTER TABLE `AssignUsersToWorkflowAction` DISABLE KEYS */;

INSERT INTO `AssignUsersToWorkflowAction` (`ID`, `AssignInitiator`)
VALUES
	(1,0),
	(5,0),
	(8,0);

/*!40000 ALTER TABLE `AssignUsersToWorkflowAction` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table AssignUsersToWorkflowAction_Groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AssignUsersToWorkflowAction_Groups`;

CREATE TABLE `AssignUsersToWorkflowAction_Groups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AssignUsersToWorkflowActionID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `AssignUsersToWorkflowActionID` (`AssignUsersToWorkflowActionID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table AssignUsersToWorkflowAction_Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AssignUsersToWorkflowAction_Users`;

CREATE TABLE `AssignUsersToWorkflowAction_Users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AssignUsersToWorkflowActionID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `AssignUsersToWorkflowActionID` (`AssignUsersToWorkflowActionID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BaseHomePage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BaseHomePage`;

CREATE TABLE `BaseHomePage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FeatureOneTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureOneCategory` enum('bell','comments','film','flag','globe','group','list','phone','rss','time','user') CHARACTER SET utf8 DEFAULT 'comments',
  `FeatureOneContent` mediumtext CHARACTER SET utf8,
  `FeatureOneButtonText` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureTwoTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureTwoCategory` enum('bell','comments','film','flag','globe','group','list','phone','rss','time','user') CHARACTER SET utf8 DEFAULT 'comments',
  `FeatureTwoContent` mediumtext CHARACTER SET utf8,
  `FeatureTwoButtonText` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `LearnMorePageID` int(11) NOT NULL DEFAULT '0',
  `FeatureOneLinkID` int(11) NOT NULL DEFAULT '0',
  `FeatureTwoLinkID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LearnMorePageID` (`LearnMorePageID`),
  KEY `FeatureOneLinkID` (`FeatureOneLinkID`),
  KEY `FeatureTwoLinkID` (`FeatureTwoLinkID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BaseHomePage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BaseHomePage_Live`;

CREATE TABLE `BaseHomePage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FeatureOneTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureOneCategory` enum('bell','comments','film','flag','globe','group','list','phone','rss','time','user') CHARACTER SET utf8 DEFAULT 'comments',
  `FeatureOneContent` mediumtext CHARACTER SET utf8,
  `FeatureOneButtonText` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureTwoTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureTwoCategory` enum('bell','comments','film','flag','globe','group','list','phone','rss','time','user') CHARACTER SET utf8 DEFAULT 'comments',
  `FeatureTwoContent` mediumtext CHARACTER SET utf8,
  `FeatureTwoButtonText` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `LearnMorePageID` int(11) NOT NULL DEFAULT '0',
  `FeatureOneLinkID` int(11) NOT NULL DEFAULT '0',
  `FeatureTwoLinkID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LearnMorePageID` (`LearnMorePageID`),
  KEY `FeatureOneLinkID` (`FeatureOneLinkID`),
  KEY `FeatureTwoLinkID` (`FeatureTwoLinkID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `BaseHomePage_Live` WRITE;
/*!40000 ALTER TABLE `BaseHomePage_Live` DISABLE KEYS */;

INSERT INTO `BaseHomePage_Live` (`ID`, `FeatureOneTitle`, `FeatureOneCategory`, `FeatureOneContent`, `FeatureOneButtonText`, `FeatureTwoTitle`, `FeatureTwoCategory`, `FeatureTwoContent`, `FeatureTwoButtonText`, `LearnMorePageID`, `FeatureOneLinkID`, `FeatureTwoLinkID`)
VALUES
	(1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0);

/*!40000 ALTER TABLE `BaseHomePage_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table BaseHomePage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BaseHomePage_versions`;

CREATE TABLE `BaseHomePage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `FeatureOneTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureOneCategory` enum('bell','comments','film','flag','globe','group','list','phone','rss','time','user') CHARACTER SET utf8 DEFAULT 'comments',
  `FeatureOneContent` mediumtext CHARACTER SET utf8,
  `FeatureOneButtonText` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureTwoTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeatureTwoCategory` enum('bell','comments','film','flag','globe','group','list','phone','rss','time','user') CHARACTER SET utf8 DEFAULT 'comments',
  `FeatureTwoContent` mediumtext CHARACTER SET utf8,
  `FeatureTwoButtonText` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `LearnMorePageID` int(11) NOT NULL DEFAULT '0',
  `FeatureOneLinkID` int(11) NOT NULL DEFAULT '0',
  `FeatureTwoLinkID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `LearnMorePageID` (`LearnMorePageID`),
  KEY `FeatureOneLinkID` (`FeatureOneLinkID`),
  KEY `FeatureTwoLinkID` (`FeatureTwoLinkID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `BaseHomePage_versions` WRITE;
/*!40000 ALTER TABLE `BaseHomePage_versions` DISABLE KEYS */;

INSERT INTO `BaseHomePage_versions` (`ID`, `RecordID`, `Version`, `FeatureOneTitle`, `FeatureOneCategory`, `FeatureOneContent`, `FeatureOneButtonText`, `FeatureTwoTitle`, `FeatureTwoCategory`, `FeatureTwoContent`, `FeatureTwoButtonText`, `LearnMorePageID`, `FeatureOneLinkID`, `FeatureTwoLinkID`)
VALUES
	(1,1,3,NULL,'comments',NULL,NULL,NULL,'comments',NULL,NULL,0,0,0);

/*!40000 ALTER TABLE `BaseHomePage_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table BasePage_RelatedPages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BasePage_RelatedPages`;

CREATE TABLE `BasePage_RelatedPages` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BasePageID` int(11) NOT NULL DEFAULT '0',
  `ChildID` int(11) NOT NULL DEFAULT '0',
  `SortOrder` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BasePageID` (`BasePageID`),
  KEY `ChildID` (`ChildID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BasePage_Terms
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BasePage_Terms`;

CREATE TABLE `BasePage_Terms` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BasePageID` int(11) NOT NULL DEFAULT '0',
  `TaxonomyTermID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BasePageID` (`BasePageID`),
  KEY `TaxonomyTermID` (`TaxonomyTermID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Blog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Blog`;

CREATE TABLE `Blog` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PostsPerPage` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Blog_Contributors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Blog_Contributors`;

CREATE TABLE `Blog_Contributors` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Blog_Editors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Blog_Editors`;

CREATE TABLE `Blog_Editors` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Blog_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Blog_Live`;

CREATE TABLE `Blog_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PostsPerPage` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Blog_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Blog_versions`;

CREATE TABLE `Blog_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `PostsPerPage` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `ParentID` (`ParentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Blog_Writers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Blog_Writers`;

CREATE TABLE `Blog_Writers` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogArchiveWidget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogArchiveWidget`;

CREATE TABLE `BlogArchiveWidget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NumberToDisplay` int(11) NOT NULL DEFAULT '0',
  `ArchiveType` enum('Monthly','Yearly') CHARACTER SET utf8 DEFAULT 'Monthly',
  `BlogID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogCategoriesWidget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogCategoriesWidget`;

CREATE TABLE `BlogCategoriesWidget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogCategory
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogCategory`;

CREATE TABLE `BlogCategory` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('BlogCategory') CHARACTER SET utf8 DEFAULT 'BlogCategory',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `BlogID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogEntry
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogEntry`;

CREATE TABLE `BlogEntry` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT NULL,
  `Author` mediumtext CHARACTER SET utf8,
  `Tags` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogEntry_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogEntry_Live`;

CREATE TABLE `BlogEntry_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT NULL,
  `Author` mediumtext CHARACTER SET utf8,
  `Tags` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogEntry_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogEntry_versions`;

CREATE TABLE `BlogEntry_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `Date` datetime DEFAULT NULL,
  `Author` mediumtext CHARACTER SET utf8,
  `Tags` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogHolder
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogHolder`;

CREATE TABLE `BlogHolder` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AllowCustomAuthors` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowFullEntry` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `OwnerID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OwnerID` (`OwnerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogHolder_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogHolder_Live`;

CREATE TABLE `BlogHolder_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AllowCustomAuthors` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowFullEntry` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `OwnerID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OwnerID` (`OwnerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogHolder_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogHolder_versions`;

CREATE TABLE `BlogHolder_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `AllowCustomAuthors` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowFullEntry` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `OwnerID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `OwnerID` (`OwnerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogPost
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogPost`;

CREATE TABLE `BlogPost` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PublishDate` datetime DEFAULT NULL,
  `AuthorNames` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `Summary` mediumtext CHARACTER SET utf8,
  `FeaturedImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `FeaturedImageID` (`FeaturedImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogPost_Authors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogPost_Authors`;

CREATE TABLE `BlogPost_Authors` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogPostID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogPostID` (`BlogPostID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogPost_Categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogPost_Categories`;

CREATE TABLE `BlogPost_Categories` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogPostID` int(11) NOT NULL DEFAULT '0',
  `BlogCategoryID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogPostID` (`BlogPostID`),
  KEY `BlogCategoryID` (`BlogCategoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogPost_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogPost_Live`;

CREATE TABLE `BlogPost_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PublishDate` datetime DEFAULT NULL,
  `AuthorNames` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `Summary` mediumtext CHARACTER SET utf8,
  `FeaturedImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `FeaturedImageID` (`FeaturedImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogPost_Tags
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogPost_Tags`;

CREATE TABLE `BlogPost_Tags` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogPostID` int(11) NOT NULL DEFAULT '0',
  `BlogTagID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogPostID` (`BlogPostID`),
  KEY `BlogTagID` (`BlogTagID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogPost_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogPost_versions`;

CREATE TABLE `BlogPost_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `PublishDate` datetime DEFAULT NULL,
  `AuthorNames` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `Summary` mediumtext CHARACTER SET utf8,
  `FeaturedImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `FeaturedImageID` (`FeaturedImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogRecentPostsWidget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogRecentPostsWidget`;

CREATE TABLE `BlogRecentPostsWidget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NumberOfPosts` int(11) NOT NULL DEFAULT '0',
  `BlogID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogTag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogTag`;

CREATE TABLE `BlogTag` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('BlogTag') CHARACTER SET utf8 DEFAULT 'BlogTag',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `BlogID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogTagsWidget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogTagsWidget`;

CREATE TABLE `BlogTagsWidget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogID` (`BlogID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogTree
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogTree`;

CREATE TABLE `BlogTree` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `LandingPageFreshness` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogTree_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogTree_Live`;

CREATE TABLE `BlogTree_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `LandingPageFreshness` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BlogTree_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogTree_versions`;

CREATE TABLE `BlogTree_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `LandingPageFreshness` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BrokenExternalLink
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BrokenExternalLink`;

CREATE TABLE `BrokenExternalLink` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('BrokenExternalLink') CHARACTER SET utf8 DEFAULT 'BrokenExternalLink',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Link` varchar(2083) CHARACTER SET utf8 DEFAULT NULL,
  `HTTPCode` int(11) NOT NULL DEFAULT '0',
  `TrackID` int(11) NOT NULL DEFAULT '0',
  `StatusID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `TrackID` (`TrackID`),
  KEY `StatusID` (`StatusID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BrokenExternalPageTrack
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BrokenExternalPageTrack`;

CREATE TABLE `BrokenExternalPageTrack` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('BrokenExternalPageTrack') CHARACTER SET utf8 DEFAULT 'BrokenExternalPageTrack',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Processed` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `PageID` int(11) NOT NULL DEFAULT '0',
  `StatusID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `PageID` (`PageID`),
  KEY `StatusID` (`StatusID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BrokenExternalPageTrackStatus
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BrokenExternalPageTrackStatus`;

CREATE TABLE `BrokenExternalPageTrackStatus` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('BrokenExternalPageTrackStatus') CHARACTER SET utf8 DEFAULT 'BrokenExternalPageTrackStatus',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Status` enum('Completed','Running') CHARACTER SET utf8 DEFAULT 'Running',
  `JobInfo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table CarouselItem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CarouselItem`;

CREATE TABLE `CarouselItem` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('CarouselItem') CHARACTER SET utf8 DEFAULT 'CarouselItem',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Caption` mediumtext CHARACTER SET utf8,
  `Archived` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `SortOrder` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `ImageID` int(11) NOT NULL DEFAULT '0',
  `LinkID` int(11) NOT NULL DEFAULT '0',
  `ExtraTextField` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ImageID` (`ImageID`),
  KEY `LinkID` (`LinkID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `CarouselItem` WRITE;
/*!40000 ALTER TABLE `CarouselItem` DISABLE KEYS */;

INSERT INTO `CarouselItem` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Caption`, `Archived`, `SortOrder`, `ParentID`, `ImageID`, `LinkID`, `ExtraTextField`)
VALUES
	(1,'CarouselItem','2015-08-27 12:01:19','2015-08-27 12:12:51','LET\'S MAKE IT EASY TO...','This is the caption',0,1,1,2,0,NULL);

/*!40000 ALTER TABLE `CarouselItem` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table CarouselItemText
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CarouselItemText`;

CREATE TABLE `CarouselItemText` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Caption` mediumtext CHARACTER SET utf8,
  `Archived` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `SortOrder` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `ImageID` int(11) NOT NULL DEFAULT '0',
  `LinkID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ImageID` (`ImageID`),
  KEY `LinkID` (`LinkID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Comment`;

CREATE TABLE `Comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Comment') CHARACTER SET utf8 DEFAULT 'Comment',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `Comment` mediumtext CHARACTER SET utf8,
  `Email` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `URL` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `BaseClass` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `Moderated` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `IsSpam` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `AllowHtml` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `SecretToken` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Depth` int(11) NOT NULL DEFAULT '0',
  `AuthorID` int(11) NOT NULL DEFAULT '0',
  `ParentCommentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `AuthorID` (`AuthorID`),
  KEY `ParentCommentID` (`ParentCommentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ConcertinaItem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ConcertinaItem`;

CREATE TABLE `ConcertinaItem` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('ConcertinaItem') CHARACTER SET utf8 DEFAULT 'ConcertinaItem',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `Color` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `Caption` mediumtext CHARACTER SET utf8,
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `ImageID` int(11) NOT NULL DEFAULT '0',
  `Colour` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ImageID` (`ImageID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ConcertinaItem` WRITE;
/*!40000 ALTER TABLE `ConcertinaItem` DISABLE KEYS */;

INSERT INTO `ConcertinaItem` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Color`, `Caption`, `ParentID`, `ImageID`, `Colour`)
VALUES
	(1,'ConcertinaItem','2015-08-27 13:38:42','2015-08-27 13:43:40','What\r\nWe Know','pink','We will use our collective voice to influence policy and decisions on food and physical activity related environments at national, regional and local levels.\r\n\r\nWe will also seek to raise the profile of key issues with decision makers and the community through relationships and the media.',0,0,NULL),
	(2,'ConcertinaItem','2015-08-27 13:39:29','2015-08-27 13:43:49','What\r\nWe Know','pink','We will use our collective voice to influence policy and decisions on food and physical activity related environments at national, regional and local levels.\r\n\r\nWe will also seek to raise the profile of key issues with decision makers and the community through relationships and the media.',1,0,NULL),
	(3,'ConcertinaItem','2015-08-27 13:42:55','2015-08-27 13:43:43','pooop','green','fdsfdsf',0,0,NULL),
	(4,'ConcertinaItem','2015-08-27 13:47:53','2015-08-27 13:47:53','What\r\nWe Say','green','We will use our collective voice to influence policy and decisions on food and physical activity related environments at national, regional and local levels.\r\n\r\nWe will also seek to raise the profile of key issues with decision makers and the community through relationships and the media.',1,0,NULL),
	(5,'ConcertinaItem','2015-08-27 13:48:08','2015-08-27 13:48:08','What\r\nWe Do','blue','We will use our collective voice to influence policy and decisions on food and physical activity related environments at national, regional and local levels.\r\n\r\nWe will also seek to raise the profile of key issues with decision makers and the community through relationships and the media.',1,0,NULL);

/*!40000 ALTER TABLE `ConcertinaItem` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ContentWidget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ContentWidget`;

CREATE TABLE `ContentWidget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HTML` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table CustomCarouselItem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CustomCarouselItem`;

CREATE TABLE `CustomCarouselItem` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ExtraTextField` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table DatedUpdatePage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `DatedUpdatePage`;

CREATE TABLE `DatedUpdatePage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Abstract` mediumtext CHARACTER SET utf8,
  `Date` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table DatedUpdatePage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `DatedUpdatePage_Live`;

CREATE TABLE `DatedUpdatePage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Abstract` mediumtext CHARACTER SET utf8,
  `Date` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table DatedUpdatePage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `DatedUpdatePage_versions`;

CREATE TABLE `DatedUpdatePage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `Abstract` mediumtext CHARACTER SET utf8,
  `Date` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table EditableFormField
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EditableFormField`;

CREATE TABLE `EditableFormField` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('EditableFormField','EditableSpamProtectionField','EditableCheckbox','EditableCountryDropdownField','EditableDateField','EditableEmailField','EditableFileField','EditableFormHeading','EditableLiteralField','EditableMemberListField','EditableMultipleOptionField','EditableCheckboxGroupField','EditableDropdown','EditableRadioField','EditableNumericField','EditableTextField') CHARACTER SET utf8 DEFAULT 'EditableFormField',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Default` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Sort` int(11) NOT NULL DEFAULT '0',
  `Required` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `CustomErrorMessage` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomRules` mediumtext CHARACTER SET utf8,
  `CustomSettings` mediumtext CHARACTER SET utf8,
  `CustomParameter` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `Version` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `EditableFormField` WRITE;
/*!40000 ALTER TABLE `EditableFormField` DISABLE KEYS */;

INSERT INTO `EditableFormField` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Default`, `Sort`, `Required`, `CustomErrorMessage`, `CustomRules`, `CustomSettings`, `CustomParameter`, `Version`, `ParentID`)
VALUES
	(1,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:57:45','EditableFormHeading1','Contact Us',NULL,1,0,NULL,'a:0:{}','a:4:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:5:\"Level\";s:1:\"3\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,6,3),
	(2,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:57:45','EditableTextField2','Name',NULL,2,1,'Please enter your name','a:0:{}','a:6:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"1\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,6,3),
	(3,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:57:45','EditableEmailField3','Email Address',NULL,3,0,'Please Enter your email address','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,6,3),
	(4,'EditableNumericField','2015-08-28 10:37:28','2015-08-28 10:57:45','EditableNumericField4','Phone number',NULL,4,0,NULL,'a:0:{}','a:5:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:8:\"MinValue\";s:0:\"\";s:8:\"MaxValue\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,4,3),
	(5,'EditableDropdown','2015-08-28 10:37:51','2015-08-28 10:57:45','EditableDropdown5','Subject',NULL,5,0,'Please select an option','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,4,3),
	(6,'EditableTextField','2015-08-28 10:39:37','2015-08-28 10:57:45','EditableTextField6','Message',NULL,6,1,'Please enter a message','a:0:{}','a:6:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"5\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3,3);

/*!40000 ALTER TABLE `EditableFormField` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EditableFormField_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EditableFormField_Live`;

CREATE TABLE `EditableFormField_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('EditableFormField','EditableSpamProtectionField','EditableCheckbox','EditableCountryDropdownField','EditableDateField','EditableEmailField','EditableFileField','EditableFormHeading','EditableLiteralField','EditableMemberListField','EditableMultipleOptionField','EditableCheckboxGroupField','EditableDropdown','EditableRadioField','EditableNumericField','EditableTextField') CHARACTER SET utf8 DEFAULT 'EditableFormField',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Default` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Sort` int(11) NOT NULL DEFAULT '0',
  `Required` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `CustomErrorMessage` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomRules` mediumtext CHARACTER SET utf8,
  `CustomSettings` mediumtext CHARACTER SET utf8,
  `CustomParameter` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `Version` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `EditableFormField_Live` WRITE;
/*!40000 ALTER TABLE `EditableFormField_Live` DISABLE KEYS */;

INSERT INTO `EditableFormField_Live` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Default`, `Sort`, `Required`, `CustomErrorMessage`, `CustomRules`, `CustomSettings`, `CustomParameter`, `Version`, `ParentID`)
VALUES
	(1,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:57:45','EditableFormHeading1','Contact Us',NULL,1,0,NULL,'a:0:{}','a:4:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:5:\"Level\";s:1:\"3\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,6,3),
	(2,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:57:45','EditableTextField2','Name',NULL,2,1,'Please enter your name','a:0:{}','a:6:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"1\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,6,3),
	(3,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:57:45','EditableEmailField3','Email Address',NULL,3,0,'Please Enter your email address','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,6,3),
	(4,'EditableNumericField','2015-08-28 10:37:28','2015-08-28 10:57:45','EditableNumericField4','Phone number',NULL,4,0,NULL,'a:0:{}','a:5:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:8:\"MinValue\";s:0:\"\";s:8:\"MaxValue\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,4,3),
	(5,'EditableDropdown','2015-08-28 10:37:51','2015-08-28 10:57:45','EditableDropdown5','Subject',NULL,5,0,'Please select an option','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,4,3),
	(6,'EditableTextField','2015-08-28 10:39:37','2015-08-28 10:57:45','EditableTextField6','Message',NULL,6,1,'Please enter a message','a:0:{}','a:6:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"5\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3,3);

/*!40000 ALTER TABLE `EditableFormField_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EditableFormField_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EditableFormField_versions`;

CREATE TABLE `EditableFormField_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `WasPublished` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `AuthorID` int(11) NOT NULL DEFAULT '0',
  `PublisherID` int(11) NOT NULL DEFAULT '0',
  `ClassName` enum('EditableFormField','EditableSpamProtectionField','EditableCheckbox','EditableCountryDropdownField','EditableDateField','EditableEmailField','EditableFileField','EditableFormHeading','EditableLiteralField','EditableMemberListField','EditableMultipleOptionField','EditableCheckboxGroupField','EditableDropdown','EditableRadioField','EditableNumericField','EditableTextField') CHARACTER SET utf8 DEFAULT 'EditableFormField',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Default` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Sort` int(11) NOT NULL DEFAULT '0',
  `Required` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `CustomErrorMessage` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomRules` mediumtext CHARACTER SET utf8,
  `CustomSettings` mediumtext CHARACTER SET utf8,
  `CustomParameter` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `AuthorID` (`AuthorID`),
  KEY `PublisherID` (`PublisherID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `EditableFormField_versions` WRITE;
/*!40000 ALTER TABLE `EditableFormField_versions` DISABLE KEYS */;

INSERT INTO `EditableFormField_versions` (`ID`, `RecordID`, `Version`, `WasPublished`, `AuthorID`, `PublisherID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Default`, `Sort`, `Required`, `CustomErrorMessage`, `CustomRules`, `CustomSettings`, `CustomParameter`, `ParentID`)
VALUES
	(1,1,1,0,1,0,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:33:32','EditableFormHeading0',NULL,NULL,1,0,NULL,NULL,NULL,NULL,3),
	(2,2,1,0,1,0,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:34:02','EditableTextField0',NULL,NULL,2,0,NULL,NULL,NULL,NULL,3),
	(3,3,1,0,1,0,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:34:16','EditableEmailField0',NULL,NULL,3,0,NULL,NULL,NULL,NULL,3),
	(4,1,2,1,1,1,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:35:00','EditableFormHeading1','Contact Us',NULL,1,0,NULL,'a:0:{}','a:4:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:5:\"Level\";s:1:\"3\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(5,2,2,1,1,1,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:35:01','EditableTextField2','Name',NULL,2,1,'Please enter your name','a:0:{}','a:6:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"1\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(6,3,2,1,1,1,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:35:01','EditableEmailField3','Email Address',NULL,3,0,NULL,'a:0:{}','a:3:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(7,1,3,1,1,1,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:35:15','EditableFormHeading1','Contact Us',NULL,1,0,NULL,'a:0:{}','a:4:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:5:\"Level\";s:1:\"3\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(8,2,3,1,1,1,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:35:15','EditableTextField2','Name',NULL,2,1,'Please enter your name','a:0:{}','a:6:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"1\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(9,3,3,1,1,1,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:35:15','EditableEmailField3','Email Address',NULL,3,0,'Please Enter your email address','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(10,4,1,0,1,0,'EditableNumericField','2015-08-28 10:37:28','2015-08-28 10:37:28','EditableNumericField0',NULL,NULL,4,0,NULL,NULL,NULL,NULL,3),
	(11,5,1,0,1,0,'EditableDropdown','2015-08-28 10:37:51','2015-08-28 10:37:51','EditableDropdown0',NULL,NULL,5,0,NULL,NULL,NULL,NULL,3),
	(12,1,4,1,1,1,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:39:21','EditableFormHeading1','Contact Us',NULL,1,0,NULL,'a:0:{}','a:4:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:5:\"Level\";s:1:\"3\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(13,2,4,1,1,1,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:39:21','EditableTextField2','Name',NULL,2,1,'Please enter your name','a:0:{}','a:6:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"1\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(14,3,4,1,1,1,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:39:21','EditableEmailField3','Email Address',NULL,3,0,'Please Enter your email address','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(15,4,2,1,1,1,'EditableNumericField','2015-08-28 10:37:28','2015-08-28 10:39:21','EditableNumericField4','Phone number',NULL,4,0,NULL,'a:0:{}','a:5:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:8:\"MinValue\";s:0:\"\";s:8:\"MaxValue\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(16,5,2,1,1,1,'EditableDropdown','2015-08-28 10:37:51','2015-08-28 10:39:21','EditableDropdown5','Subject',NULL,5,1,'Please select an option','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(17,6,1,0,1,0,'EditableTextField','2015-08-28 10:39:37','2015-08-28 10:39:37','EditableTextField0',NULL,NULL,6,0,NULL,NULL,NULL,NULL,3),
	(18,1,5,1,1,1,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:39:59','EditableFormHeading1','Contact Us',NULL,1,0,NULL,'a:0:{}','a:4:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:5:\"Level\";s:1:\"3\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(19,2,5,1,1,1,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:39:59','EditableTextField2','Name',NULL,2,1,'Please enter your name','a:0:{}','a:6:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"1\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(20,3,5,1,1,1,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:39:59','EditableEmailField3','Email Address',NULL,3,0,'Please Enter your email address','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(21,4,3,1,1,1,'EditableNumericField','2015-08-28 10:37:28','2015-08-28 10:39:59','EditableNumericField4','Phone number',NULL,4,0,NULL,'a:0:{}','a:5:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:8:\"MinValue\";s:0:\"\";s:8:\"MaxValue\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(22,5,3,1,1,1,'EditableDropdown','2015-08-28 10:37:51','2015-08-28 10:39:59','EditableDropdown5','Subject',NULL,5,1,'Please select an option','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(23,6,2,1,1,1,'EditableTextField','2015-08-28 10:39:37','2015-08-28 10:39:59','EditableTextField6','Message',NULL,6,1,'Please enter a message','a:0:{}','a:6:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"5\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(24,1,6,1,1,1,'EditableFormHeading','2015-08-28 10:33:32','2015-08-28 10:57:45','EditableFormHeading1','Contact Us',NULL,1,0,NULL,'a:0:{}','a:4:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:5:\"Level\";s:1:\"3\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(25,2,6,1,1,1,'EditableTextField','2015-08-28 10:34:02','2015-08-28 10:57:45','EditableTextField2','Name',NULL,2,1,'Please enter your name','a:0:{}','a:6:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"1\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(26,3,6,1,1,1,'EditableEmailField','2015-08-28 10:34:16','2015-08-28 10:57:45','EditableEmailField3','Email Address',NULL,3,0,'Please Enter your email address','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(27,4,4,1,1,1,'EditableNumericField','2015-08-28 10:37:28','2015-08-28 10:57:45','EditableNumericField4','Phone number',NULL,4,0,NULL,'a:0:{}','a:5:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:8:\"MinValue\";s:0:\"\";s:8:\"MaxValue\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(28,5,4,1,1,1,'EditableDropdown','2015-08-28 10:37:51','2015-08-28 10:57:45','EditableDropdown5','Subject',NULL,5,0,'Please select an option','a:0:{}','a:3:{s:10:\"ExtraClass\";s:4:\"half\";s:10:\"RightTitle\";s:0:\"\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3),
	(29,6,3,1,1,1,'EditableTextField','2015-08-28 10:39:37','2015-08-28 10:57:45','EditableTextField6','Message',NULL,6,1,'Please enter a message','a:0:{}','a:6:{s:10:\"ExtraClass\";s:0:\"\";s:10:\"RightTitle\";s:0:\"\";s:9:\"MinLength\";s:0:\"\";s:9:\"MaxLength\";s:0:\"\";s:4:\"Rows\";s:1:\"5\";s:10:\"ShowOnLoad\";s:4:\"Show\";}',NULL,3);

/*!40000 ALTER TABLE `EditableFormField_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EditableOption
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EditableOption`;

CREATE TABLE `EditableOption` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('EditableOption') CHARACTER SET utf8 DEFAULT 'EditableOption',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Default` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `EditableOption` WRITE;
/*!40000 ALTER TABLE `EditableOption` DISABLE KEYS */;

INSERT INTO `EditableOption` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Default`, `Sort`, `Version`, `ParentID`)
VALUES
	(1,'EditableOption','2015-08-28 10:38:28','2015-08-28 10:57:45','option1','Enquiry',0,1,5,5),
	(2,'EditableOption','2015-08-28 10:38:30','2015-08-28 10:57:45','option2','Complaint',0,2,5,5),
	(3,'EditableOption','2015-08-28 10:38:31','2015-08-28 10:57:45','option3','Carrer Application',0,3,5,5);

/*!40000 ALTER TABLE `EditableOption` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EditableOption_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EditableOption_Live`;

CREATE TABLE `EditableOption_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('EditableOption') CHARACTER SET utf8 DEFAULT 'EditableOption',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Default` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `EditableOption_Live` WRITE;
/*!40000 ALTER TABLE `EditableOption_Live` DISABLE KEYS */;

INSERT INTO `EditableOption_Live` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Default`, `Sort`, `Version`, `ParentID`)
VALUES
	(1,'EditableOption','2015-08-28 10:38:28','2015-08-28 10:57:45','option1','Enquiry',0,1,5,5),
	(2,'EditableOption','2015-08-28 10:38:30','2015-08-28 10:57:45','option2','Complaint',0,2,5,5),
	(3,'EditableOption','2015-08-28 10:38:31','2015-08-28 10:57:45','option3','Carrer Application',0,3,5,5);

/*!40000 ALTER TABLE `EditableOption_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EditableOption_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EditableOption_versions`;

CREATE TABLE `EditableOption_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `WasPublished` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `AuthorID` int(11) NOT NULL DEFAULT '0',
  `PublisherID` int(11) NOT NULL DEFAULT '0',
  `ClassName` enum('EditableOption') CHARACTER SET utf8 DEFAULT 'EditableOption',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Default` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `AuthorID` (`AuthorID`),
  KEY `PublisherID` (`PublisherID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `EditableOption_versions` WRITE;
/*!40000 ALTER TABLE `EditableOption_versions` DISABLE KEYS */;

INSERT INTO `EditableOption_versions` (`ID`, `RecordID`, `Version`, `WasPublished`, `AuthorID`, `PublisherID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Default`, `Sort`, `ParentID`)
VALUES
	(1,1,1,0,1,0,'EditableOption','2015-08-28 10:38:28','2015-08-28 10:38:28',NULL,NULL,0,0,0),
	(2,1,2,0,1,0,'EditableOption','2015-08-28 10:38:28','2015-08-28 10:38:28','option1',NULL,0,1,5),
	(3,2,1,0,1,0,'EditableOption','2015-08-28 10:38:30','2015-08-28 10:38:30',NULL,NULL,0,0,0),
	(4,2,2,0,1,0,'EditableOption','2015-08-28 10:38:30','2015-08-28 10:38:30','option2',NULL,0,2,5),
	(5,3,1,0,1,0,'EditableOption','2015-08-28 10:38:31','2015-08-28 10:38:31',NULL,NULL,0,0,0),
	(6,3,2,0,1,0,'EditableOption','2015-08-28 10:38:31','2015-08-28 10:38:31','option3',NULL,0,3,5),
	(7,1,3,1,1,1,'EditableOption','2015-08-28 10:38:28','2015-08-28 10:39:21','option1','Enquiry',0,1,5),
	(8,2,3,1,1,1,'EditableOption','2015-08-28 10:38:30','2015-08-28 10:39:21','option2','Complaint',0,2,5),
	(9,3,3,1,1,1,'EditableOption','2015-08-28 10:38:31','2015-08-28 10:39:21','option3','Carrer Application',0,3,5),
	(10,1,4,1,1,1,'EditableOption','2015-08-28 10:38:28','2015-08-28 10:39:59','option1','Enquiry',0,1,5),
	(11,2,4,1,1,1,'EditableOption','2015-08-28 10:38:30','2015-08-28 10:39:59','option2','Complaint',0,2,5),
	(12,3,4,1,1,1,'EditableOption','2015-08-28 10:38:31','2015-08-28 10:39:59','option3','Carrer Application',0,3,5),
	(13,1,5,1,1,1,'EditableOption','2015-08-28 10:38:28','2015-08-28 10:57:45','option1','Enquiry',0,1,5),
	(14,2,5,1,1,1,'EditableOption','2015-08-28 10:38:30','2015-08-28 10:57:45','option2','Complaint',0,2,5),
	(15,3,5,1,1,1,'EditableOption','2015-08-28 10:38:31','2015-08-28 10:57:45','option3','Carrer Application',0,3,5);

/*!40000 ALTER TABLE `EditableOption_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ErrorPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ErrorPage`;

CREATE TABLE `ErrorPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ErrorCode` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ErrorPage` WRITE;
/*!40000 ALTER TABLE `ErrorPage` DISABLE KEYS */;

INSERT INTO `ErrorPage` (`ID`, `ErrorCode`)
VALUES
	(4,404),
	(5,500);

/*!40000 ALTER TABLE `ErrorPage` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ErrorPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ErrorPage_Live`;

CREATE TABLE `ErrorPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ErrorCode` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ErrorPage_Live` WRITE;
/*!40000 ALTER TABLE `ErrorPage_Live` DISABLE KEYS */;

INSERT INTO `ErrorPage_Live` (`ID`, `ErrorCode`)
VALUES
	(4,404),
	(5,500);

/*!40000 ALTER TABLE `ErrorPage_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ErrorPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ErrorPage_versions`;

CREATE TABLE `ErrorPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `ErrorCode` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ErrorPage_versions` WRITE;
/*!40000 ALTER TABLE `ErrorPage_versions` DISABLE KEYS */;

INSERT INTO `ErrorPage_versions` (`ID`, `RecordID`, `Version`, `ErrorCode`)
VALUES
	(1,4,1,404),
	(2,5,1,500);

/*!40000 ALTER TABLE `ErrorPage_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EventPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EventPage`;

CREATE TABLE `EventPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `StartTime` time DEFAULT NULL,
  `EndTime` time DEFAULT NULL,
  `Location` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table EventPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EventPage_Live`;

CREATE TABLE `EventPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `StartTime` time DEFAULT NULL,
  `EndTime` time DEFAULT NULL,
  `Location` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table EventPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EventPage_versions`;

CREATE TABLE `EventPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `StartTime` time DEFAULT NULL,
  `EndTime` time DEFAULT NULL,
  `Location` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table File
# ------------------------------------------------------------

DROP TABLE IF EXISTS `File`;

CREATE TABLE `File` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('File','Folder','Image','Image_Cached') CHARACTER SET utf8 DEFAULT 'File',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Filename` mediumtext CHARACTER SET utf8,
  `Content` mediumtext CHARACTER SET utf8,
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `OwnerID` int(11) NOT NULL DEFAULT '0',
  `CurrentVersionID` int(11) NOT NULL DEFAULT '0',
  `SubsiteID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `OwnerID` (`OwnerID`),
  KEY `CurrentVersionID` (`CurrentVersionID`),
  KEY `SubsiteID` (`SubsiteID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `File` WRITE;
/*!40000 ALTER TABLE `File` DISABLE KEYS */;

INSERT INTO `File` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Filename`, `Content`, `ShowInSearch`, `CanViewType`, `ParentID`, `OwnerID`, `CurrentVersionID`, `SubsiteID`)
VALUES
	(1,'Folder','2015-08-27 11:45:57','2015-08-27 11:45:57','Uploads','Uploads','assets/Uploads/',NULL,1,'Inherit',0,1,0,0),
	(2,'Image','2015-08-27 11:45:58','2015-08-27 11:45:58','slider-image-homepage.jpg','slider image homepage','assets/Uploads/slider-image-homepage.jpg',NULL,1,'Inherit',1,1,2,0),
	(3,'Image','2015-08-27 14:02:00','2015-08-27 14:02:00','stakeholder.png','stakeholder','assets/Uploads/stakeholder.png',NULL,1,'Inherit',1,1,4,0);

/*!40000 ALTER TABLE `File` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table File_ViewerGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `File_ViewerGroups`;

CREATE TABLE `File_ViewerGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FileID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `FileID` (`FileID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table FileVersion
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FileVersion`;

CREATE TABLE `FileVersion` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('FileVersion') CHARACTER SET utf8 DEFAULT 'FileVersion',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `VersionNumber` int(11) NOT NULL DEFAULT '0',
  `Filename` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CreatorID` int(11) NOT NULL DEFAULT '0',
  `FileID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `CreatorID` (`CreatorID`),
  KEY `FileID` (`FileID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `FileVersion` WRITE;
/*!40000 ALTER TABLE `FileVersion` DISABLE KEYS */;

INSERT INTO `FileVersion` (`ID`, `ClassName`, `Created`, `LastEdited`, `VersionNumber`, `Filename`, `CreatorID`, `FileID`)
VALUES
	(1,'FileVersion','2015-08-27 11:45:58','2015-08-27 11:45:58',1,'/assets/Uploads/_versions/2/slider-image-homepage.1.jpg',1,2),
	(2,'FileVersion','2015-08-27 11:45:58','2015-08-27 11:45:58',2,'/assets/Uploads/_versions/2/slider-image-homepage.2.jpg',1,2),
	(3,'FileVersion','2015-08-27 14:02:00','2015-08-27 14:02:00',1,'/assets/Uploads/_versions/3/stakeholder.1.png',1,3),
	(4,'FileVersion','2015-08-27 14:02:00','2015-08-27 14:02:00',2,'/assets/Uploads/_versions/3/stakeholder.2.png',1,3);

/*!40000 ALTER TABLE `FileVersion` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Group`;

CREATE TABLE `Group` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Group') CHARACTER SET utf8 DEFAULT 'Group',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Description` mediumtext CHARACTER SET utf8,
  `Code` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Locked` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HtmlEditorConfig` mediumtext CHARACTER SET utf8,
  `AccessAllSubsites` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Group` WRITE;
/*!40000 ALTER TABLE `Group` DISABLE KEYS */;

INSERT INTO `Group` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Description`, `Code`, `Locked`, `Sort`, `HtmlEditorConfig`, `AccessAllSubsites`, `ParentID`)
VALUES
	(1,'Group','2015-08-27 11:12:44','2015-08-27 11:12:44','Content Authors',NULL,'content-authors',0,1,NULL,1,0),
	(2,'Group','2015-08-27 11:12:44','2015-08-27 11:12:44','Administrators',NULL,'administrators',0,0,NULL,1,0);

/*!40000 ALTER TABLE `Group` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Group_Members
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Group_Members`;

CREATE TABLE `Group_Members` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GroupID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `GroupID` (`GroupID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Group_Members` WRITE;
/*!40000 ALTER TABLE `Group_Members` DISABLE KEYS */;

INSERT INTO `Group_Members` (`ID`, `GroupID`, `MemberID`)
VALUES
	(1,2,1);

/*!40000 ALTER TABLE `Group_Members` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Group_Roles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Group_Roles`;

CREATE TABLE `Group_Roles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GroupID` int(11) NOT NULL DEFAULT '0',
  `PermissionRoleID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `GroupID` (`GroupID`),
  KEY `PermissionRoleID` (`PermissionRoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Group_Subsites
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Group_Subsites`;

CREATE TABLE `Group_Subsites` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GroupID` int(11) NOT NULL DEFAULT '0',
  `SubsiteID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `GroupID` (`GroupID`),
  KEY `SubsiteID` (`SubsiteID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table HybridSessionDataObject
# ------------------------------------------------------------

DROP TABLE IF EXISTS `HybridSessionDataObject`;

CREATE TABLE `HybridSessionDataObject` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('HybridSessionDataObject') CHARACTER SET utf8 DEFAULT 'HybridSessionDataObject',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `SessionID` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `Expiry` int(11) NOT NULL DEFAULT '0',
  `Data` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `SessionID` (`SessionID`),
  KEY `Expiry` (`Expiry`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table IFramePage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `IFramePage`;

CREATE TABLE `IFramePage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `IFrameURL` mediumtext CHARACTER SET utf8,
  `AutoHeight` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `AutoWidth` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `FixedHeight` int(11) NOT NULL DEFAULT '500',
  `FixedWidth` int(11) NOT NULL DEFAULT '0',
  `AlternateContent` mediumtext CHARACTER SET utf8,
  `BottomContent` mediumtext CHARACTER SET utf8,
  `ForceProtocol` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table IFramePage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `IFramePage_Live`;

CREATE TABLE `IFramePage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `IFrameURL` mediumtext CHARACTER SET utf8,
  `AutoHeight` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `AutoWidth` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `FixedHeight` int(11) NOT NULL DEFAULT '500',
  `FixedWidth` int(11) NOT NULL DEFAULT '0',
  `AlternateContent` mediumtext CHARACTER SET utf8,
  `BottomContent` mediumtext CHARACTER SET utf8,
  `ForceProtocol` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table IFramePage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `IFramePage_versions`;

CREATE TABLE `IFramePage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `IFrameURL` mediumtext CHARACTER SET utf8,
  `AutoHeight` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `AutoWidth` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `FixedHeight` int(11) NOT NULL DEFAULT '500',
  `FixedWidth` int(11) NOT NULL DEFAULT '0',
  `AlternateContent` mediumtext CHARACTER SET utf8,
  `BottomContent` mediumtext CHARACTER SET utf8,
  `ForceProtocol` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ImportedWorkflowTemplate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ImportedWorkflowTemplate`;

CREATE TABLE `ImportedWorkflowTemplate` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('ImportedWorkflowTemplate') CHARACTER SET utf8 DEFAULT 'ImportedWorkflowTemplate',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Filename` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Content` mediumtext CHARACTER SET utf8,
  `DefinitionID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `DefinitionID` (`DefinitionID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table LoginAttempt
# ------------------------------------------------------------

DROP TABLE IF EXISTS `LoginAttempt`;

CREATE TABLE `LoginAttempt` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('LoginAttempt') CHARACTER SET utf8 DEFAULT 'LoginAttempt',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Status` enum('Success','Failure') CHARACTER SET utf8 DEFAULT 'Success',
  `IP` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `MemberID` (`MemberID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Member
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Member`;

CREATE TABLE `Member` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Member') CHARACTER SET utf8 DEFAULT 'Member',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `FirstName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Surname` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(254) CHARACTER SET utf8 DEFAULT NULL,
  `TempIDHash` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `TempIDExpired` datetime DEFAULT NULL,
  `Password` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `RememberLoginToken` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `NumVisit` int(11) NOT NULL DEFAULT '0',
  `LastVisited` datetime DEFAULT NULL,
  `AutoLoginHash` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `AutoLoginExpired` datetime DEFAULT NULL,
  `PasswordEncryption` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Salt` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `PasswordExpiry` date DEFAULT NULL,
  `LockedOutUntil` datetime DEFAULT NULL,
  `Locale` varchar(6) CHARACTER SET utf8 DEFAULT NULL,
  `FailedLoginCount` int(11) NOT NULL DEFAULT '0',
  `DateFormat` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `TimeFormat` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `URLSegment` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `BlogProfileSummary` mediumtext CHARACTER SET utf8,
  `BlogProfileImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `BlogProfileImageID` (`BlogProfileImageID`),
  KEY `Email` (`Email`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Member` WRITE;
/*!40000 ALTER TABLE `Member` DISABLE KEYS */;

INSERT INTO `Member` (`ID`, `ClassName`, `Created`, `LastEdited`, `FirstName`, `Surname`, `Email`, `TempIDHash`, `TempIDExpired`, `Password`, `RememberLoginToken`, `NumVisit`, `LastVisited`, `AutoLoginHash`, `AutoLoginExpired`, `PasswordEncryption`, `Salt`, `PasswordExpiry`, `LockedOutUntil`, `Locale`, `FailedLoginCount`, `DateFormat`, `TimeFormat`, `URLSegment`, `BlogProfileSummary`, `BlogProfileImageID`)
VALUES
	(1,'Member','2015-08-27 11:12:44','2015-08-28 09:50:30','Default Admin',NULL,'admin','bc9b9c4587b0f68489b734915e254d67248f1186','2015-08-31 09:50:30',NULL,NULL,2,'2015-08-28 12:12:05',NULL,NULL,NULL,NULL,NULL,NULL,'en_GB',0,NULL,NULL,'default-admin',NULL,0);

/*!40000 ALTER TABLE `Member` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table MemberPassword
# ------------------------------------------------------------

DROP TABLE IF EXISTS `MemberPassword`;

CREATE TABLE `MemberPassword` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('MemberPassword') CHARACTER SET utf8 DEFAULT 'MemberPassword',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Password` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `Salt` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `PasswordEncryption` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `MemberID` (`MemberID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table NewsPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `NewsPage`;

CREATE TABLE `NewsPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Author` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeaturedImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `FeaturedImageID` (`FeaturedImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table NewsPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `NewsPage_Live`;

CREATE TABLE `NewsPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Author` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeaturedImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `FeaturedImageID` (`FeaturedImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table NewsPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `NewsPage_versions`;

CREATE TABLE `NewsPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `Author` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FeaturedImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `FeaturedImageID` (`FeaturedImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table NotifyUsersWorkflowAction
# ------------------------------------------------------------

DROP TABLE IF EXISTS `NotifyUsersWorkflowAction`;

CREATE TABLE `NotifyUsersWorkflowAction` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `EmailSubject` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `EmailFrom` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `EmailTemplate` mediumtext CHARACTER SET utf8,
  `ListingTemplateID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `NotifyUsersWorkflowAction` WRITE;
/*!40000 ALTER TABLE `NotifyUsersWorkflowAction` DISABLE KEYS */;

INSERT INTO `NotifyUsersWorkflowAction` (`ID`, `EmailSubject`, `EmailFrom`, `EmailTemplate`, `ListingTemplateID`)
VALUES
	(2,NULL,NULL,NULL,0),
	(6,NULL,NULL,NULL,0),
	(9,NULL,NULL,NULL,0);

/*!40000 ALTER TABLE `NotifyUsersWorkflowAction` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Permission
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Permission`;

CREATE TABLE `Permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Permission') CHARACTER SET utf8 DEFAULT 'Permission',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Code` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Arg` int(11) NOT NULL DEFAULT '0',
  `Type` int(11) NOT NULL DEFAULT '1',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `GroupID` (`GroupID`),
  KEY `Code` (`Code`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Permission` WRITE;
/*!40000 ALTER TABLE `Permission` DISABLE KEYS */;

INSERT INTO `Permission` (`ID`, `ClassName`, `Created`, `LastEdited`, `Code`, `Arg`, `Type`, `GroupID`)
VALUES
	(1,'Permission','2015-08-27 11:12:44','2015-08-27 11:12:44','CMS_ACCESS_CMSMain',0,1,1),
	(2,'Permission','2015-08-27 11:12:44','2015-08-27 11:12:44','CMS_ACCESS_AssetAdmin',0,1,1),
	(3,'Permission','2015-08-27 11:12:44','2015-08-27 11:12:44','CMS_ACCESS_ReportAdmin',0,1,1),
	(4,'Permission','2015-08-27 11:12:44','2015-08-27 11:12:44','SITETREE_REORGANISE',0,1,1),
	(5,'Permission','2015-08-27 11:12:44','2015-08-27 11:12:44','ADMIN',0,1,2),
	(6,'Permission','2015-08-27 11:12:44','2015-08-27 11:12:44','TRANSLATE_ALL',0,1,1),
	(7,'Permission','2015-08-27 11:12:44','2015-08-27 11:12:44','TRANSLATE_ALL',0,1,2);

/*!40000 ALTER TABLE `Permission` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table PermissionRole
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PermissionRole`;

CREATE TABLE `PermissionRole` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('PermissionRole') CHARACTER SET utf8 DEFAULT 'PermissionRole',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `OnlyAdminCanApply` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table PermissionRoleCode
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PermissionRoleCode`;

CREATE TABLE `PermissionRoleCode` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('PermissionRoleCode') CHARACTER SET utf8 DEFAULT 'PermissionRoleCode',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Code` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `RoleID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `RoleID` (`RoleID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table PublishItemWorkflowAction
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PublishItemWorkflowAction`;

CREATE TABLE `PublishItemWorkflowAction` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PublishDelay` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `PublishItemWorkflowAction` WRITE;
/*!40000 ALTER TABLE `PublishItemWorkflowAction` DISABLE KEYS */;

INSERT INTO `PublishItemWorkflowAction` (`ID`, `PublishDelay`)
VALUES
	(4,0);

/*!40000 ALTER TABLE `PublishItemWorkflowAction` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table QueuedJobDescriptor
# ------------------------------------------------------------

DROP TABLE IF EXISTS `QueuedJobDescriptor`;

CREATE TABLE `QueuedJobDescriptor` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('QueuedJobDescriptor') CHARACTER SET utf8 DEFAULT 'QueuedJobDescriptor',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `JobTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Signature` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `Implementation` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `StartAfter` datetime DEFAULT NULL,
  `JobStarted` datetime DEFAULT NULL,
  `JobRestarted` datetime DEFAULT NULL,
  `JobFinished` datetime DEFAULT NULL,
  `TotalSteps` int(11) NOT NULL DEFAULT '0',
  `StepsProcessed` int(11) NOT NULL DEFAULT '0',
  `LastProcessedCount` int(11) NOT NULL DEFAULT '1',
  `ResumeCounts` int(11) NOT NULL DEFAULT '0',
  `SavedJobData` mediumtext CHARACTER SET utf8,
  `SavedJobMessages` mediumtext CHARACTER SET utf8,
  `JobStatus` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `JobType` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `RunAsID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `RunAsID` (`RunAsID`),
  KEY `JobStatus` (`JobStatus`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Quicklink
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Quicklink`;

CREATE TABLE `Quicklink` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Quicklink') CHARACTER SET utf8 DEFAULT 'Quicklink',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ExternalLink` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `SortOrder` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `InternalLinkID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `InternalLinkID` (`InternalLinkID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Quicklink` WRITE;
/*!40000 ALTER TABLE `Quicklink` DISABLE KEYS */;

INSERT INTO `Quicklink` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `ExternalLink`, `SortOrder`, `ParentID`, `InternalLinkID`)
VALUES
	(1,'Quicklink','2015-08-27 13:00:08','2015-08-27 13:00:13','Streets Parks And Places',NULL,1,1,6),
	(2,'Quicklink','2015-08-27 13:00:31','2015-08-27 13:00:33','Food Environments And Marketing',NULL,2,1,8),
	(3,'Quicklink','2015-08-27 13:01:09','2015-08-27 13:01:11','Schools And Early Childhood Education',NULL,3,1,9),
	(4,'Quicklink','2015-08-27 13:01:25','2015-08-27 13:01:32','Work',NULL,4,1,10),
	(5,'Quicklink','2015-08-27 13:01:56','2015-08-27 13:01:58','Communities And Community Groups',NULL,5,1,11),
	(6,'Quicklink','2015-08-27 13:02:25','2015-08-27 13:02:32','Collaboration And Leadership',NULL,6,1,12);

/*!40000 ALTER TABLE `Quicklink` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table RedirectorPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RedirectorPage`;

CREATE TABLE `RedirectorPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RedirectionType` enum('Internal','External') CHARACTER SET utf8 DEFAULT 'Internal',
  `ExternalURL` varchar(2083) CHARACTER SET utf8 DEFAULT NULL,
  `LinkToID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LinkToID` (`LinkToID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RedirectorPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RedirectorPage_Live`;

CREATE TABLE `RedirectorPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RedirectionType` enum('Internal','External') CHARACTER SET utf8 DEFAULT 'Internal',
  `ExternalURL` varchar(2083) CHARACTER SET utf8 DEFAULT NULL,
  `LinkToID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LinkToID` (`LinkToID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RedirectorPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RedirectorPage_versions`;

CREATE TABLE `RedirectorPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `RedirectionType` enum('Internal','External') CHARACTER SET utf8 DEFAULT 'Internal',
  `ExternalURL` varchar(2083) CHARACTER SET utf8 DEFAULT NULL,
  `LinkToID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `LinkToID` (`LinkToID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RegistryPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RegistryPage`;

CREATE TABLE `RegistryPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DataClass` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `PageLength` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RegistryPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RegistryPage_Live`;

CREATE TABLE `RegistryPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DataClass` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `PageLength` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RegistryPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RegistryPage_versions`;

CREATE TABLE `RegistryPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `DataClass` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `PageLength` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteConfig
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig`;

CREATE TABLE `SiteConfig` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('SiteConfig') CHARACTER SET utf8 DEFAULT 'SiteConfig',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Tagline` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Theme` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers') CHARACTER SET utf8 DEFAULT 'Anyone',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers') CHARACTER SET utf8 DEFAULT 'LoggedInUsers',
  `CanCreateTopLevelType` enum('LoggedInUsers','OnlyTheseUsers') CHARACTER SET utf8 DEFAULT 'LoggedInUsers',
  `Locale` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `GACode` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookURL` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `TwitterUsername` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `AddThisProfileID` varchar(32) CHARACTER SET utf8 DEFAULT NULL,
  `FooterLogoLink` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FooterLogoDescription` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `AllChangesEnabled` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `AkismetKey` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `SubsiteID` int(11) NOT NULL DEFAULT '0',
  `LogoID` int(11) NOT NULL DEFAULT '0',
  `LogoRetinaID` int(11) NOT NULL DEFAULT '0',
  `FooterLogoID` int(11) NOT NULL DEFAULT '0',
  `FooterLogoRetinaID` int(11) NOT NULL DEFAULT '0',
  `FavIconID` int(11) NOT NULL DEFAULT '0',
  `AppleTouchIcon144ID` int(11) NOT NULL DEFAULT '0',
  `AppleTouchIcon114ID` int(11) NOT NULL DEFAULT '0',
  `AppleTouchIcon72ID` int(11) NOT NULL DEFAULT '0',
  `AppleTouchIcon57ID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SubsiteID` (`SubsiteID`),
  KEY `LogoID` (`LogoID`),
  KEY `LogoRetinaID` (`LogoRetinaID`),
  KEY `FooterLogoID` (`FooterLogoID`),
  KEY `FooterLogoRetinaID` (`FooterLogoRetinaID`),
  KEY `FavIconID` (`FavIconID`),
  KEY `AppleTouchIcon144ID` (`AppleTouchIcon144ID`),
  KEY `AppleTouchIcon114ID` (`AppleTouchIcon114ID`),
  KEY `AppleTouchIcon72ID` (`AppleTouchIcon72ID`),
  KEY `AppleTouchIcon57ID` (`AppleTouchIcon57ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteConfig` WRITE;
/*!40000 ALTER TABLE `SiteConfig` DISABLE KEYS */;

INSERT INTO `SiteConfig` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Tagline`, `Theme`, `CanViewType`, `CanEditType`, `CanCreateTopLevelType`, `Locale`, `GACode`, `FacebookURL`, `TwitterUsername`, `AddThisProfileID`, `FooterLogoLink`, `FooterLogoDescription`, `AllChangesEnabled`, `AkismetKey`, `SubsiteID`, `LogoID`, `LogoRetinaID`, `FooterLogoID`, `FooterLogoRetinaID`, `FavIconID`, `AppleTouchIcon144ID`, `AppleTouchIcon114ID`, `AppleTouchIcon72ID`, `AppleTouchIcon57ID`)
VALUES
	(1,'SiteConfig','2015-08-27 11:12:44','2015-08-27 12:14:20','Your Site Name','your tagline here',NULL,'Anyone','LoggedInUsers','LoggedInUsers','en_NZ',NULL,'http://www.facebook.com','http://www.twitt',NULL,NULL,NULL,1,NULL,0,0,0,0,0,0,0,0,0,0);

/*!40000 ALTER TABLE `SiteConfig` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteConfig_CreateTopLevelGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig_CreateTopLevelGroups`;

CREATE TABLE `SiteConfig_CreateTopLevelGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteConfigID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteConfigID` (`SiteConfigID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteConfig_EditorGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig_EditorGroups`;

CREATE TABLE `SiteConfig_EditorGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteConfigID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteConfigID` (`SiteConfigID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteConfig_translationgroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig_translationgroups`;

CREATE TABLE `SiteConfig_translationgroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OriginalID` int(11) NOT NULL DEFAULT '0',
  `TranslationGroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OriginalID` (`OriginalID`),
  KEY `TranslationGroupID` (`TranslationGroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteConfig_translationgroups` WRITE;
/*!40000 ALTER TABLE `SiteConfig_translationgroups` DISABLE KEYS */;

INSERT INTO `SiteConfig_translationgroups` (`ID`, `OriginalID`, `TranslationGroupID`)
VALUES
	(1,1,1);

/*!40000 ALTER TABLE `SiteConfig_translationgroups` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteConfig_ViewerGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig_ViewerGroups`;

CREATE TABLE `SiteConfig_ViewerGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteConfigID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteConfigID` (`SiteConfigID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree`;

CREATE TABLE `SiteTree` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('SiteTree','BasePage','Page','IFramePage','RegistryPage','Blog','BlogPost','BlogEntry','ErrorPage','RedirectorPage','FooterHolder','VirtualPage','SubsitesVirtualPage','BaseHomePage','HomePage','DatedUpdateHolder','EventHolder','NewsHolder','DatedUpdatePage','EventPage','NewsPage','SitemapPage','UserDefinedForm','BlogTree','BlogHolder') CHARACTER SET utf8 DEFAULT 'SiteTree',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MenuTitle` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Content` mediumtext CHARACTER SET utf8,
  `MetaDescription` mediumtext CHARACTER SET utf8,
  `ExtraMeta` mediumtext CHARACTER SET utf8,
  `ShowInMenus` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HasBrokenFile` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HasBrokenLink` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ReportClass` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `Locale` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `DesiredPublishDate` datetime DEFAULT NULL,
  `DesiredUnPublishDate` datetime DEFAULT NULL,
  `PublishOnDate` datetime DEFAULT NULL,
  `UnPublishOnDate` datetime DEFAULT NULL,
  `PublicHistory` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `ProvideComments` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ModerationRequired` enum('None','Required','NonMembersOnly') CHARACTER SET utf8 DEFAULT 'None',
  `CommentsRequireLogin` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `InheritSideBar` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `SubsiteID` int(11) NOT NULL DEFAULT '0',
  `PublishJobID` int(11) NOT NULL DEFAULT '0',
  `UnPublishJobID` int(11) NOT NULL DEFAULT '0',
  `WorkflowDefinitionID` int(11) NOT NULL DEFAULT '0',
  `SideBarID` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SubsiteID` (`SubsiteID`),
  KEY `PublishJobID` (`PublishJobID`),
  KEY `UnPublishJobID` (`UnPublishJobID`),
  KEY `WorkflowDefinitionID` (`WorkflowDefinitionID`),
  KEY `SideBarID` (`SideBarID`),
  KEY `ParentID` (`ParentID`),
  KEY `URLSegment` (`URLSegment`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteTree` WRITE;
/*!40000 ALTER TABLE `SiteTree` DISABLE KEYS */;

INSERT INTO `SiteTree` (`ID`, `ClassName`, `Created`, `LastEdited`, `URLSegment`, `Title`, `MenuTitle`, `Content`, `MetaDescription`, `ExtraMeta`, `ShowInMenus`, `ShowInSearch`, `Sort`, `HasBrokenFile`, `HasBrokenLink`, `ReportClass`, `CanViewType`, `CanEditType`, `Locale`, `DesiredPublishDate`, `DesiredUnPublishDate`, `PublishOnDate`, `UnPublishOnDate`, `PublicHistory`, `ProvideComments`, `ModerationRequired`, `CommentsRequireLogin`, `InheritSideBar`, `Version`, `SubsiteID`, `PublishJobID`, `UnPublishJobID`, `WorkflowDefinitionID`, `SideBarID`, `ParentID`)
VALUES
	(1,'HomePage','2015-08-27 11:12:44','2015-08-27 11:24:14','home','Home',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,1,0),
	(2,'Page','2015-08-27 11:12:44','2015-08-27 11:12:44','about-us','About Us',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.<br /></p>',NULL,NULL,1,1,3,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,0,0),
	(3,'UserDefinedForm','2015-08-27 11:12:44','2015-08-28 10:57:45','contact','Contact',NULL,'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>',NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,4,0,0,0,0,15,0),
	(4,'ErrorPage','2015-08-27 11:12:45','2015-08-27 11:12:45','page-not-found','Page not found',NULL,'<p>Sorry, it seems you were trying to access a page that doesn\'t exist.</p><p>Please check the spelling of the URL you were trying to access and try again.</p>',NULL,NULL,0,0,7,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,0,0),
	(5,'ErrorPage','2015-08-27 11:12:45','2015-08-27 11:12:45','server-error','Server error',NULL,'<p>Sorry, there was a problem handling your request.</p>',NULL,NULL,0,0,8,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,0,0),
	(6,'Page','2015-08-27 12:23:51','2015-08-27 12:24:38','streets-parks-and-places','Streets Parks And Places',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,4,0,0,0,0,2,7),
	(7,'Page','2015-08-27 12:24:23','2015-08-27 12:26:39','take-action','Take Action',NULL,NULL,NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,3,0),
	(8,'Page','2015-08-27 12:23:51','2015-08-27 12:24:57','food-environments-and-marketing','Food Environments And Marketing',NULL,NULL,NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,5,7),
	(9,'Page','2015-08-27 12:23:51','2015-08-27 12:25:21','schools-and-earlychildhood-education','Schools And Earlychildhood Education',NULL,NULL,NULL,NULL,1,1,3,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,7,7),
	(10,'Page','2015-08-27 12:23:51','2015-08-27 12:25:33','work','Work',NULL,NULL,NULL,NULL,1,1,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,9,7),
	(11,'Page','2015-08-27 12:23:51','2015-08-27 12:25:59','communities-and-community-groups','Communities And Community Groups',NULL,NULL,NULL,NULL,1,1,5,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,11,7),
	(12,'Page','2015-08-27 12:23:51','2015-08-27 12:26:23','collaboration-and-leadership','Collaboration And Leadership',NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,13,7),
	(13,'Page','2015-08-27 12:26:49','2015-08-27 12:27:29','resources','Resources',NULL,NULL,NULL,NULL,1,1,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,14,0),
	(14,'NewsHolder','2015-08-27 12:27:49','2015-08-27 12:28:05','news','News',NULL,NULL,NULL,NULL,1,1,5,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,16,0);

/*!40000 ALTER TABLE `SiteTree` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteTree_AdditionalWorkflowDefinitions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_AdditionalWorkflowDefinitions`;

CREATE TABLE `SiteTree_AdditionalWorkflowDefinitions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `WorkflowDefinitionID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `WorkflowDefinitionID` (`WorkflowDefinitionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_CrossSubsiteLinkTracking
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_CrossSubsiteLinkTracking`;

CREATE TABLE `SiteTree_CrossSubsiteLinkTracking` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `ChildID` int(11) NOT NULL DEFAULT '0',
  `FieldName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `ChildID` (`ChildID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_EditorGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_EditorGroups`;

CREATE TABLE `SiteTree_EditorGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_ImageTracking
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_ImageTracking`;

CREATE TABLE `SiteTree_ImageTracking` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `FileID` int(11) NOT NULL DEFAULT '0',
  `FieldName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `FileID` (`FileID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_LinkTracking
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_LinkTracking`;

CREATE TABLE `SiteTree_LinkTracking` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `ChildID` int(11) NOT NULL DEFAULT '0',
  `FieldName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `ChildID` (`ChildID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_Live`;

CREATE TABLE `SiteTree_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('SiteTree','BasePage','Page','IFramePage','RegistryPage','Blog','BlogPost','BlogEntry','ErrorPage','RedirectorPage','FooterHolder','VirtualPage','SubsitesVirtualPage','BaseHomePage','HomePage','DatedUpdateHolder','EventHolder','NewsHolder','DatedUpdatePage','EventPage','NewsPage','SitemapPage','UserDefinedForm','BlogTree','BlogHolder') CHARACTER SET utf8 DEFAULT 'SiteTree',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MenuTitle` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Content` mediumtext CHARACTER SET utf8,
  `MetaDescription` mediumtext CHARACTER SET utf8,
  `ExtraMeta` mediumtext CHARACTER SET utf8,
  `ShowInMenus` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HasBrokenFile` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HasBrokenLink` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ReportClass` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `Locale` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `DesiredPublishDate` datetime DEFAULT NULL,
  `DesiredUnPublishDate` datetime DEFAULT NULL,
  `PublishOnDate` datetime DEFAULT NULL,
  `UnPublishOnDate` datetime DEFAULT NULL,
  `PublicHistory` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `ProvideComments` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ModerationRequired` enum('None','Required','NonMembersOnly') CHARACTER SET utf8 DEFAULT 'None',
  `CommentsRequireLogin` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `InheritSideBar` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `SubsiteID` int(11) NOT NULL DEFAULT '0',
  `PublishJobID` int(11) NOT NULL DEFAULT '0',
  `UnPublishJobID` int(11) NOT NULL DEFAULT '0',
  `WorkflowDefinitionID` int(11) NOT NULL DEFAULT '0',
  `SideBarID` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SubsiteID` (`SubsiteID`),
  KEY `PublishJobID` (`PublishJobID`),
  KEY `UnPublishJobID` (`UnPublishJobID`),
  KEY `WorkflowDefinitionID` (`WorkflowDefinitionID`),
  KEY `SideBarID` (`SideBarID`),
  KEY `ParentID` (`ParentID`),
  KEY `URLSegment` (`URLSegment`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteTree_Live` WRITE;
/*!40000 ALTER TABLE `SiteTree_Live` DISABLE KEYS */;

INSERT INTO `SiteTree_Live` (`ID`, `ClassName`, `Created`, `LastEdited`, `URLSegment`, `Title`, `MenuTitle`, `Content`, `MetaDescription`, `ExtraMeta`, `ShowInMenus`, `ShowInSearch`, `Sort`, `HasBrokenFile`, `HasBrokenLink`, `ReportClass`, `CanViewType`, `CanEditType`, `Locale`, `DesiredPublishDate`, `DesiredUnPublishDate`, `PublishOnDate`, `UnPublishOnDate`, `PublicHistory`, `ProvideComments`, `ModerationRequired`, `CommentsRequireLogin`, `InheritSideBar`, `Version`, `SubsiteID`, `PublishJobID`, `UnPublishJobID`, `WorkflowDefinitionID`, `SideBarID`, `ParentID`)
VALUES
	(1,'HomePage','2015-08-27 11:12:44','2015-08-27 11:24:14','home','Home',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,1,0),
	(2,'Page','2015-08-27 11:12:44','2015-08-27 11:12:44','about-us','About Us',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.<br /></p>',NULL,NULL,1,1,3,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,0,0),
	(3,'UserDefinedForm','2015-08-27 11:12:44','2015-08-28 10:57:45','contact','Contact',NULL,'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>',NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,4,0,0,0,0,15,0),
	(4,'ErrorPage','2015-08-27 11:12:45','2015-08-27 11:12:45','page-not-found','Page not found',NULL,'<p>Sorry, it seems you were trying to access a page that doesn\'t exist.</p><p>Please check the spelling of the URL you were trying to access and try again.</p>',NULL,NULL,0,0,7,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,0,0),
	(5,'ErrorPage','2015-08-27 11:12:45','2015-08-27 11:12:45','server-error','Server error',NULL,'<p>Sorry, there was a problem handling your request.</p>',NULL,NULL,0,0,8,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,0,0),
	(6,'Page','2015-08-27 12:23:51','2015-08-27 12:24:38','streets-parks-and-places','Streets Parks And Places',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,4,0,0,0,0,2,7),
	(7,'Page','2015-08-27 12:24:23','2015-08-27 12:26:39','take-action','Take Action',NULL,NULL,NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,3,0),
	(8,'Page','2015-08-27 12:23:51','2015-08-27 12:24:57','food-environments-and-marketing','Food Environments And Marketing',NULL,NULL,NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,5,7),
	(9,'Page','2015-08-27 12:23:51','2015-08-27 12:25:21','schools-and-earlychildhood-education','Schools And Earlychildhood Education',NULL,NULL,NULL,NULL,1,1,3,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,7,7),
	(10,'Page','2015-08-27 12:23:51','2015-08-27 12:25:33','work','Work',NULL,NULL,NULL,NULL,1,1,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,9,7),
	(11,'Page','2015-08-27 12:23:51','2015-08-27 12:25:59','communities-and-community-groups','Communities And Community Groups',NULL,NULL,NULL,NULL,1,1,5,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,11,7),
	(12,'Page','2015-08-27 12:23:51','2015-08-27 12:26:23','collaboration-and-leadership','Collaboration And Leadership',NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,1,0,0,0,0,13,7),
	(13,'Page','2015-08-27 12:26:49','2015-08-27 12:27:29','resources','Resources',NULL,NULL,NULL,NULL,1,1,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,14,0),
	(14,'NewsHolder','2015-08-27 12:27:49','2015-08-27 12:28:05','news','News',NULL,NULL,NULL,NULL,1,1,5,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,3,0,0,0,0,16,0);

/*!40000 ALTER TABLE `SiteTree_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteTree_translationgroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_translationgroups`;

CREATE TABLE `SiteTree_translationgroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OriginalID` int(11) NOT NULL DEFAULT '0',
  `TranslationGroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OriginalID` (`OriginalID`),
  KEY `TranslationGroupID` (`TranslationGroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteTree_translationgroups` WRITE;
/*!40000 ALTER TABLE `SiteTree_translationgroups` DISABLE KEYS */;

INSERT INTO `SiteTree_translationgroups` (`ID`, `OriginalID`, `TranslationGroupID`)
VALUES
	(1,1,1),
	(2,2,2),
	(3,3,3),
	(4,4,4),
	(5,5,5),
	(6,6,6),
	(7,7,7),
	(8,8,8),
	(9,9,9),
	(10,10,10),
	(11,11,11),
	(12,12,12),
	(13,13,13),
	(14,14,14);

/*!40000 ALTER TABLE `SiteTree_translationgroups` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteTree_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_versions`;

CREATE TABLE `SiteTree_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `WasPublished` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `AuthorID` int(11) NOT NULL DEFAULT '0',
  `PublisherID` int(11) NOT NULL DEFAULT '0',
  `ClassName` enum('SiteTree','BasePage','Page','IFramePage','RegistryPage','Blog','BlogPost','BlogEntry','ErrorPage','RedirectorPage','FooterHolder','VirtualPage','SubsitesVirtualPage','BaseHomePage','HomePage','DatedUpdateHolder','EventHolder','NewsHolder','DatedUpdatePage','EventPage','NewsPage','SitemapPage','UserDefinedForm','BlogTree','BlogHolder') CHARACTER SET utf8 DEFAULT 'SiteTree',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MenuTitle` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Content` mediumtext CHARACTER SET utf8,
  `MetaDescription` mediumtext CHARACTER SET utf8,
  `ExtraMeta` mediumtext CHARACTER SET utf8,
  `ShowInMenus` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HasBrokenFile` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HasBrokenLink` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ReportClass` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `Locale` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `DesiredPublishDate` datetime DEFAULT NULL,
  `DesiredUnPublishDate` datetime DEFAULT NULL,
  `PublishOnDate` datetime DEFAULT NULL,
  `UnPublishOnDate` datetime DEFAULT NULL,
  `PublicHistory` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `ProvideComments` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ModerationRequired` enum('None','Required','NonMembersOnly') CHARACTER SET utf8 DEFAULT 'None',
  `CommentsRequireLogin` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `InheritSideBar` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `SubsiteID` int(11) NOT NULL DEFAULT '0',
  `PublishJobID` int(11) NOT NULL DEFAULT '0',
  `UnPublishJobID` int(11) NOT NULL DEFAULT '0',
  `WorkflowDefinitionID` int(11) NOT NULL DEFAULT '0',
  `SideBarID` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `AuthorID` (`AuthorID`),
  KEY `PublisherID` (`PublisherID`),
  KEY `SubsiteID` (`SubsiteID`),
  KEY `PublishJobID` (`PublishJobID`),
  KEY `UnPublishJobID` (`UnPublishJobID`),
  KEY `WorkflowDefinitionID` (`WorkflowDefinitionID`),
  KEY `SideBarID` (`SideBarID`),
  KEY `ParentID` (`ParentID`),
  KEY `URLSegment` (`URLSegment`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteTree_versions` WRITE;
/*!40000 ALTER TABLE `SiteTree_versions` DISABLE KEYS */;

INSERT INTO `SiteTree_versions` (`ID`, `RecordID`, `Version`, `WasPublished`, `AuthorID`, `PublisherID`, `ClassName`, `Created`, `LastEdited`, `URLSegment`, `Title`, `MenuTitle`, `Content`, `MetaDescription`, `ExtraMeta`, `ShowInMenus`, `ShowInSearch`, `Sort`, `HasBrokenFile`, `HasBrokenLink`, `ReportClass`, `CanViewType`, `CanEditType`, `Locale`, `DesiredPublishDate`, `DesiredUnPublishDate`, `PublishOnDate`, `UnPublishOnDate`, `PublicHistory`, `ProvideComments`, `ModerationRequired`, `CommentsRequireLogin`, `InheritSideBar`, `SubsiteID`, `PublishJobID`, `UnPublishJobID`, `WorkflowDefinitionID`, `SideBarID`, `ParentID`)
VALUES
	(1,1,1,1,0,0,'Page','2015-08-27 11:12:44','2015-08-27 11:12:44','home','Home',NULL,'<p>Welcome to SilverStripe! This is the default home page. You can edit this page by opening <a href=\"admin/\">the CMS</a>. You can now access the <a href=\"http://doc.silverstripe.org\">developer documentation</a>, or begin <a href=\"http://doc.silverstripe.org/doku.php?id=tutorials\">the tutorials.</a></p>',NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(2,2,1,1,0,0,'Page','2015-08-27 11:12:44','2015-08-27 11:12:44','about-us','About Us',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.<br /></p>',NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(3,3,1,1,0,0,'Page','2015-08-27 11:12:44','2015-08-27 11:12:44','contact-us','Contact Us',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.<br /></p>',NULL,NULL,1,1,3,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(4,4,1,1,0,0,'ErrorPage','2015-08-27 11:12:45','2015-08-27 11:12:45','page-not-found','Page not found',NULL,'<p>Sorry, it seems you were trying to access a page that doesn\'t exist.</p><p>Please check the spelling of the URL you were trying to access and try again.</p>',NULL,NULL,0,0,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(5,5,1,1,0,0,'ErrorPage','2015-08-27 11:12:45','2015-08-27 11:12:45','server-error','Server error',NULL,'<p>Sorry, there was a problem handling your request.</p>',NULL,NULL,0,0,5,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(6,1,2,1,1,1,'Page','2015-08-27 11:12:44','2015-08-27 11:13:53','home','Home',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,1,0),
	(7,1,3,1,1,1,'HomePage','2015-08-27 11:12:44','2015-08-27 11:24:14','home','Home',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,1,0),
	(8,6,1,0,1,0,'Page','2015-08-27 12:23:51','2015-08-27 12:23:51','new-page','New Page',NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(9,6,2,1,1,1,'Page','2015-08-27 12:23:51','2015-08-27 12:24:13','streets-parks-and-places','Streets Parks And Places',NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,2,0),
	(10,7,1,0,1,0,'Page','2015-08-27 12:24:23','2015-08-27 12:24:23','new-page','New Page',NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(11,7,2,1,1,1,'Page','2015-08-27 12:24:23','2015-08-27 12:24:31','take-action','Take Action',NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,3,0),
	(12,6,3,0,1,0,'Page','2015-08-27 12:23:51','2015-08-27 12:24:35','streets-parks-and-places','Streets Parks And Places',NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,2,7),
	(13,6,4,1,1,1,'Page','2015-08-27 12:23:51','2015-08-27 12:24:35','streets-parks-and-places','Streets Parks And Places',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,2,7),
	(14,8,1,1,1,1,'Page','2015-08-27 12:23:51','2015-08-27 12:24:57','food-environments-and-marketing','Food Environments And Marketing',NULL,NULL,NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,5,7),
	(15,9,1,1,1,1,'Page','2015-08-27 12:23:51','2015-08-27 12:25:21','schools-and-earlychildhood-education','Schools And Earlychildhood Education',NULL,NULL,NULL,NULL,1,1,3,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,7,7),
	(16,10,1,1,1,1,'Page','2015-08-27 12:23:51','2015-08-27 12:25:33','work','Work',NULL,NULL,NULL,NULL,1,1,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,9,7),
	(17,11,1,1,1,1,'Page','2015-08-27 12:23:51','2015-08-27 12:25:59','communities-and-community-groups','Communities And Community Groups',NULL,NULL,NULL,NULL,1,1,5,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,11,7),
	(18,12,1,1,1,1,'Page','2015-08-27 12:23:51','2015-08-27 12:26:23','collaboration-and-leadership','Collaboration And Leadership',NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,13,7),
	(19,7,3,1,1,1,'Page','2015-08-27 12:24:23','2015-08-27 12:26:33','take-action','Take Action',NULL,NULL,NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,3,0),
	(20,13,1,0,1,0,'Page','2015-08-27 12:26:49','2015-08-27 12:26:49','new-page','New Page',NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(21,13,2,1,1,1,'Page','2015-08-27 12:26:49','2015-08-27 12:26:57','resources','Resources',NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,14,0),
	(22,3,2,1,1,1,'Page','2015-08-27 11:12:44','2015-08-27 12:27:08','contact','Contact',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.</p>',NULL,NULL,1,1,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,15,0),
	(23,13,3,1,1,1,'Page','2015-08-27 12:26:49','2015-08-27 12:27:18','resources','Resources',NULL,NULL,NULL,NULL,1,1,4,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,14,0),
	(24,14,1,0,1,0,'NewsHolder','2015-08-27 12:27:49','2015-08-27 12:27:49','new-news-holder','New News Holder',NULL,NULL,NULL,NULL,1,1,8,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,0,0),
	(25,14,2,1,1,1,'NewsHolder','2015-08-27 12:27:49','2015-08-27 12:27:57','news','News',NULL,NULL,NULL,NULL,1,1,8,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,16,0),
	(26,14,3,1,1,1,'NewsHolder','2015-08-27 12:27:49','2015-08-27 12:28:02','news','News',NULL,NULL,NULL,NULL,1,1,5,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,16,0),
	(27,3,3,1,1,1,'UserDefinedForm','2015-08-27 11:12:44','2015-08-28 10:32:35','contact','Contact',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.</p>',NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,15,0),
	(28,3,4,1,1,1,'UserDefinedForm','2015-08-27 11:12:44','2015-08-28 10:33:25','contact','Contact',NULL,'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>',NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit','en_NZ',NULL,NULL,NULL,NULL,1,0,'NonMembersOnly',0,1,0,0,0,0,15,0);

/*!40000 ALTER TABLE `SiteTree_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteTree_ViewerGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_ViewerGroups`;

CREATE TABLE `SiteTree_ViewerGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table StakeholderItem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `StakeholderItem`;

CREATE TABLE `StakeholderItem` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('StakeholderItem') CHARACTER SET utf8 DEFAULT 'StakeholderItem',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `Image` mediumtext CHARACTER SET utf8,
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `ImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ImageID` (`ImageID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `StakeholderItem` WRITE;
/*!40000 ALTER TABLE `StakeholderItem` DISABLE KEYS */;

INSERT INTO `StakeholderItem` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Image`, `ParentID`, `ImageID`)
VALUES
	(1,'StakeholderItem','2015-08-27 14:02:08','2015-08-27 14:02:08','Auckland City Coucil',NULL,1,3),
	(2,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(3,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(4,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(5,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(6,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(7,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(8,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(9,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(10,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(11,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(12,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(13,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(14,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(15,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3),
	(16,'StakeholderItem','2015-08-27 14:09:06','2015-08-27 14:09:06','Auckland City Coucil',NULL,1,3);

/*!40000 ALTER TABLE `StakeholderItem` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SubmittedFileField
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SubmittedFileField`;

CREATE TABLE `SubmittedFileField` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UploadedFileID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `UploadedFileID` (`UploadedFileID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SubmittedForm
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SubmittedForm`;

CREATE TABLE `SubmittedForm` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('SubmittedForm') CHARACTER SET utf8 DEFAULT 'SubmittedForm',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `SubmittedByID` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SubmittedByID` (`SubmittedByID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SubmittedForm` WRITE;
/*!40000 ALTER TABLE `SubmittedForm` DISABLE KEYS */;

INSERT INTO `SubmittedForm` (`ID`, `ClassName`, `Created`, `LastEdited`, `SubmittedByID`, `ParentID`)
VALUES
	(1,'SubmittedForm','2015-08-28 10:51:38','2015-08-28 10:51:38',1,3),
	(2,'SubmittedForm','2015-08-28 10:57:25','2015-08-28 10:57:25',1,3);

/*!40000 ALTER TABLE `SubmittedForm` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SubmittedFormField
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SubmittedFormField`;

CREATE TABLE `SubmittedFormField` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('SubmittedFormField','SubmittedFileField') CHARACTER SET utf8 DEFAULT 'SubmittedFormField',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Value` mediumtext CHARACTER SET utf8,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SubmittedFormField` WRITE;
/*!40000 ALTER TABLE `SubmittedFormField` DISABLE KEYS */;

INSERT INTO `SubmittedFormField` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Value`, `Title`, `ParentID`)
VALUES
	(1,'SubmittedFormField','2015-08-28 10:51:38','2015-08-28 10:51:38','EditableFormHeading1',NULL,'Contact Us',1),
	(2,'SubmittedFormField','2015-08-28 10:51:38','2015-08-28 10:51:38','EditableTextField2','f','Name',1),
	(3,'SubmittedFormField','2015-08-28 10:51:38','2015-08-28 10:51:38','EditableEmailField3',NULL,'Email Address',1),
	(4,'SubmittedFormField','2015-08-28 10:51:38','2015-08-28 10:51:38','EditableNumericField4',NULL,'Phone number',1),
	(5,'SubmittedFormField','2015-08-28 10:51:38','2015-08-28 10:51:38','EditableDropdown5','Enquiry','Subject',1),
	(6,'SubmittedFormField','2015-08-28 10:51:38','2015-08-28 10:51:38','EditableTextField6','fd','Message',1),
	(7,'SubmittedFormField','2015-08-28 10:57:25','2015-08-28 10:57:25','EditableFormHeading1',NULL,'Contact Us',2),
	(8,'SubmittedFormField','2015-08-28 10:57:25','2015-08-28 10:57:25','EditableTextField2','f','Name',2),
	(9,'SubmittedFormField','2015-08-28 10:57:25','2015-08-28 10:57:25','EditableEmailField3',NULL,'Email Address',2),
	(10,'SubmittedFormField','2015-08-28 10:57:25','2015-08-28 10:57:25','EditableNumericField4',NULL,'Phone number',2),
	(11,'SubmittedFormField','2015-08-28 10:57:25','2015-08-28 10:57:25','EditableDropdown5','Enquiry','Subject',2),
	(12,'SubmittedFormField','2015-08-28 10:57:25','2015-08-28 10:57:25','EditableTextField6','fd','Message',2);

/*!40000 ALTER TABLE `SubmittedFormField` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Subsite
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Subsite`;

CREATE TABLE `Subsite` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Subsite') CHARACTER SET utf8 DEFAULT 'Subsite',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `RedirectURL` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `DefaultSite` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Theme` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Language` varchar(6) CHARACTER SET utf8 DEFAULT NULL,
  `IsPublic` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `PageTypeBlacklist` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SubsiteDomain
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SubsiteDomain`;

CREATE TABLE `SubsiteDomain` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('SubsiteDomain') CHARACTER SET utf8 DEFAULT 'SubsiteDomain',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Domain` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `IsPrimary` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `SubsiteID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SubsiteID` (`SubsiteID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SubsitesVirtualPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SubsitesVirtualPage`;

CREATE TABLE `SubsitesVirtualPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CustomMetaTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomMetaKeywords` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomMetaDescription` mediumtext CHARACTER SET utf8,
  `CustomExtraMeta` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SubsitesVirtualPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SubsitesVirtualPage_Live`;

CREATE TABLE `SubsitesVirtualPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CustomMetaTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomMetaKeywords` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomMetaDescription` mediumtext CHARACTER SET utf8,
  `CustomExtraMeta` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SubsitesVirtualPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SubsitesVirtualPage_versions`;

CREATE TABLE `SubsitesVirtualPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `CustomMetaTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomMetaKeywords` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CustomMetaDescription` mediumtext CHARACTER SET utf8,
  `CustomExtraMeta` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table TagCloudWidget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `TagCloudWidget`;

CREATE TABLE `TagCloudWidget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Limit` int(11) NOT NULL DEFAULT '0',
  `Sortby` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table TaxonomyTerm
# ------------------------------------------------------------

DROP TABLE IF EXISTS `TaxonomyTerm`;

CREATE TABLE `TaxonomyTerm` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('TaxonomyTerm') CHARACTER SET utf8 DEFAULT 'TaxonomyTerm',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table UserDefinedForm
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserDefinedForm`;

CREATE TABLE `UserDefinedForm` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SubmitButtonText` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ClearButtonText` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `OnCompleteMessage` mediumtext CHARACTER SET utf8,
  `ShowClearButton` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableSaveSubmissions` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `EnableLiveValidation` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HideFieldLabels` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableAuthenicatedFinishAction` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableCsrfSecurityToken` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `UserDefinedForm` WRITE;
/*!40000 ALTER TABLE `UserDefinedForm` DISABLE KEYS */;

INSERT INTO `UserDefinedForm` (`ID`, `SubmitButtonText`, `ClearButtonText`, `OnCompleteMessage`, `ShowClearButton`, `DisableSaveSubmissions`, `EnableLiveValidation`, `HideFieldLabels`, `DisableAuthenicatedFinishAction`, `DisableCsrfSecurityToken`)
VALUES
	(3,NULL,NULL,NULL,0,0,0,0,0,0);

/*!40000 ALTER TABLE `UserDefinedForm` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserDefinedForm_EmailRecipient
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserDefinedForm_EmailRecipient`;

CREATE TABLE `UserDefinedForm_EmailRecipient` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('UserDefinedForm_EmailRecipient') CHARACTER SET utf8 DEFAULT 'UserDefinedForm_EmailRecipient',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `EmailAddress` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `EmailSubject` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `EmailFrom` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `EmailReplyTo` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `EmailBody` mediumtext CHARACTER SET utf8,
  `SendPlain` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HideFormData` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `FormID` int(11) NOT NULL DEFAULT '0',
  `SendEmailFromFieldID` int(11) NOT NULL DEFAULT '0',
  `SendEmailToFieldID` int(11) NOT NULL DEFAULT '0',
  `SendEmailSubjectFieldID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `FormID` (`FormID`),
  KEY `SendEmailFromFieldID` (`SendEmailFromFieldID`),
  KEY `SendEmailToFieldID` (`SendEmailToFieldID`),
  KEY `SendEmailSubjectFieldID` (`SendEmailSubjectFieldID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table UserDefinedForm_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserDefinedForm_Live`;

CREATE TABLE `UserDefinedForm_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SubmitButtonText` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ClearButtonText` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `OnCompleteMessage` mediumtext CHARACTER SET utf8,
  `ShowClearButton` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableSaveSubmissions` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `EnableLiveValidation` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HideFieldLabels` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableAuthenicatedFinishAction` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableCsrfSecurityToken` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `UserDefinedForm_Live` WRITE;
/*!40000 ALTER TABLE `UserDefinedForm_Live` DISABLE KEYS */;

INSERT INTO `UserDefinedForm_Live` (`ID`, `SubmitButtonText`, `ClearButtonText`, `OnCompleteMessage`, `ShowClearButton`, `DisableSaveSubmissions`, `EnableLiveValidation`, `HideFieldLabels`, `DisableAuthenicatedFinishAction`, `DisableCsrfSecurityToken`)
VALUES
	(3,NULL,NULL,NULL,0,0,0,0,0,0);

/*!40000 ALTER TABLE `UserDefinedForm_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserDefinedForm_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserDefinedForm_versions`;

CREATE TABLE `UserDefinedForm_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `SubmitButtonText` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ClearButtonText` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `OnCompleteMessage` mediumtext CHARACTER SET utf8,
  `ShowClearButton` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableSaveSubmissions` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `EnableLiveValidation` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HideFieldLabels` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableAuthenicatedFinishAction` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DisableCsrfSecurityToken` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `UserDefinedForm_versions` WRITE;
/*!40000 ALTER TABLE `UserDefinedForm_versions` DISABLE KEYS */;

INSERT INTO `UserDefinedForm_versions` (`ID`, `RecordID`, `Version`, `SubmitButtonText`, `ClearButtonText`, `OnCompleteMessage`, `ShowClearButton`, `DisableSaveSubmissions`, `EnableLiveValidation`, `HideFieldLabels`, `DisableAuthenicatedFinishAction`, `DisableCsrfSecurityToken`)
VALUES
	(1,3,3,NULL,NULL,NULL,0,0,0,0,0,0),
	(2,3,4,NULL,NULL,NULL,0,0,0,0,0,0);

/*!40000 ALTER TABLE `UserDefinedForm_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table VirtualPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `VirtualPage`;

CREATE TABLE `VirtualPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `VersionID` int(11) NOT NULL DEFAULT '0',
  `CopyContentFromID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `CopyContentFromID` (`CopyContentFromID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table VirtualPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `VirtualPage_Live`;

CREATE TABLE `VirtualPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `VersionID` int(11) NOT NULL DEFAULT '0',
  `CopyContentFromID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `CopyContentFromID` (`CopyContentFromID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table VirtualPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `VirtualPage_versions`;

CREATE TABLE `VirtualPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `VersionID` int(11) NOT NULL DEFAULT '0',
  `CopyContentFromID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `CopyContentFromID` (`CopyContentFromID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Widget
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Widget`;

CREATE TABLE `Widget` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Widget','ContentWidget','BlogArchiveWidget','ArchiveWidget','BlogCategoriesWidget','BlogRecentPostsWidget','BlogTagsWidget','TagCloudWidget') CHARACTER SET utf8 DEFAULT 'Widget',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Sort` int(11) NOT NULL DEFAULT '0',
  `Enabled` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WidgetArea
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WidgetArea`;

CREATE TABLE `WidgetArea` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('WidgetArea') CHARACTER SET utf8 DEFAULT 'WidgetArea',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `WidgetArea` WRITE;
/*!40000 ALTER TABLE `WidgetArea` DISABLE KEYS */;

INSERT INTO `WidgetArea` (`ID`, `ClassName`, `Created`, `LastEdited`)
VALUES
	(1,'WidgetArea','2015-08-27 11:13:53','2015-08-27 11:13:53'),
	(2,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:24:13'),
	(3,'WidgetArea','2015-08-27 12:24:31','2015-08-27 12:24:31'),
	(4,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:24:41'),
	(5,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:24:42'),
	(6,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:25:06'),
	(7,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:25:06'),
	(8,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:25:26'),
	(9,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:25:26'),
	(10,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:25:42'),
	(11,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:25:42'),
	(12,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:26:08'),
	(13,'WidgetArea','2015-08-27 12:24:13','2015-08-27 12:26:08'),
	(14,'WidgetArea','2015-08-27 12:26:57','2015-08-27 12:26:57'),
	(15,'WidgetArea','2015-08-27 12:27:08','2015-08-27 12:27:08'),
	(16,'WidgetArea','2015-08-27 12:27:56','2015-08-27 12:27:56');

/*!40000 ALTER TABLE `WidgetArea` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WorkflowAction
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowAction`;

CREATE TABLE `WorkflowAction` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('WorkflowAction','AssignUsersToWorkflowAction','CancelWorkflowAction','NotifyUsersWorkflowAction','PublishItemWorkflowAction','SimpleApprovalWorkflowAction') CHARACTER SET utf8 DEFAULT 'WorkflowAction',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Comment` mediumtext CHARACTER SET utf8,
  `Type` enum('Dynamic','Manual') CHARACTER SET utf8 DEFAULT 'Manual',
  `Executed` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `AllowEditing` enum('By Assignees','Content Settings','No') CHARACTER SET utf8 DEFAULT 'No',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `AllowCommenting` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `WorkflowDefID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowDefID` (`WorkflowDefID`),
  KEY `MemberID` (`MemberID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `WorkflowAction` WRITE;
/*!40000 ALTER TABLE `WorkflowAction` DISABLE KEYS */;

INSERT INTO `WorkflowAction` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Comment`, `Type`, `Executed`, `AllowEditing`, `Sort`, `AllowCommenting`, `WorkflowDefID`, `MemberID`)
VALUES
	(1,'AssignUsersToWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Apply for approval',NULL,'Manual',0,'No',1,1,1,0),
	(2,'NotifyUsersWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Notify users',NULL,'Manual',0,'No',2,1,1,0),
	(3,'SimpleApprovalWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Approval',NULL,'Manual',0,'No',3,1,1,0),
	(4,'PublishItemWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Publish',NULL,'Manual',0,'No',4,1,1,0),
	(5,'AssignUsersToWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Assign Initiator Publish',NULL,'Manual',0,'No',5,1,1,0),
	(6,'NotifyUsersWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Notify Initiator Publish',NULL,'Manual',0,'No',6,1,1,0),
	(7,'CancelWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Reject changes',NULL,'Manual',0,'No',7,1,1,0),
	(8,'AssignUsersToWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Assign Initiator Cancel',NULL,'Manual',0,'No',8,1,1,0),
	(9,'NotifyUsersWorkflowAction','2015-08-27 11:12:44','2015-08-27 11:12:44','Notify Initiator Cancel',NULL,'Manual',0,'No',9,1,1,0);

/*!40000 ALTER TABLE `WorkflowAction` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WorkflowActionInstance
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowActionInstance`;

CREATE TABLE `WorkflowActionInstance` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('WorkflowActionInstance') CHARACTER SET utf8 DEFAULT 'WorkflowActionInstance',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Comment` mediumtext CHARACTER SET utf8,
  `Finished` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `WorkflowID` int(11) NOT NULL DEFAULT '0',
  `BaseActionID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowID` (`WorkflowID`),
  KEY `BaseActionID` (`BaseActionID`),
  KEY `MemberID` (`MemberID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WorkflowDefinition
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowDefinition`;

CREATE TABLE `WorkflowDefinition` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('WorkflowDefinition') CHARACTER SET utf8 DEFAULT 'WorkflowDefinition',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `Description` mediumtext CHARACTER SET utf8,
  `Template` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `TemplateVersion` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `RemindDays` int(11) NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `InitialActionButtonText` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `WorkflowDefinition` WRITE;
/*!40000 ALTER TABLE `WorkflowDefinition` DISABLE KEYS */;

INSERT INTO `WorkflowDefinition` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Description`, `Template`, `TemplateVersion`, `RemindDays`, `Sort`, `InitialActionButtonText`)
VALUES
	(1,'WorkflowDefinition','2015-08-27 11:12:44','2015-08-27 11:12:44','Two-step Workflow','Content Authors can write content and Content Publishers can approve/reject.','Review and Approve','0.2',3,1,NULL);

/*!40000 ALTER TABLE `WorkflowDefinition` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WorkflowDefinition_Groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowDefinition_Groups`;

CREATE TABLE `WorkflowDefinition_Groups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkflowDefinitionID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowDefinitionID` (`WorkflowDefinitionID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WorkflowDefinition_Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowDefinition_Users`;

CREATE TABLE `WorkflowDefinition_Users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkflowDefinitionID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowDefinitionID` (`WorkflowDefinitionID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WorkflowInstance
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowInstance`;

CREATE TABLE `WorkflowInstance` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('WorkflowInstance') CHARACTER SET utf8 DEFAULT 'WorkflowInstance',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `WorkflowStatus` enum('Active','Paused','Complete','Cancelled') CHARACTER SET utf8 DEFAULT 'Active',
  `TargetClass` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `TargetID` int(11) NOT NULL DEFAULT '0',
  `DefinitionID` int(11) NOT NULL DEFAULT '0',
  `CurrentActionID` int(11) NOT NULL DEFAULT '0',
  `InitiatorID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `DefinitionID` (`DefinitionID`),
  KEY `CurrentActionID` (`CurrentActionID`),
  KEY `InitiatorID` (`InitiatorID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WorkflowInstance_Groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowInstance_Groups`;

CREATE TABLE `WorkflowInstance_Groups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkflowInstanceID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowInstanceID` (`WorkflowInstanceID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WorkflowInstance_Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowInstance_Users`;

CREATE TABLE `WorkflowInstance_Users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkflowInstanceID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowInstanceID` (`WorkflowInstanceID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WorkflowTransition
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowTransition`;

CREATE TABLE `WorkflowTransition` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('WorkflowTransition') CHARACTER SET utf8 DEFAULT 'WorkflowTransition',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `Sort` int(11) NOT NULL DEFAULT '0',
  `Type` enum('Active','Passive') CHARACTER SET utf8 DEFAULT 'Active',
  `ActionID` int(11) NOT NULL DEFAULT '0',
  `NextActionID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ActionID` (`ActionID`),
  KEY `NextActionID` (`NextActionID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `WorkflowTransition` WRITE;
/*!40000 ALTER TABLE `WorkflowTransition` DISABLE KEYS */;

INSERT INTO `WorkflowTransition` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Sort`, `Type`, `ActionID`, `NextActionID`)
VALUES
	(1,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','notify',0,'Active',1,2),
	(2,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','approval',1,'Active',2,3),
	(3,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','Approve',2,'Active',3,4),
	(4,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','Reject',3,'Active',3,7),
	(5,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','assign',4,'Active',4,5),
	(6,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','notify',5,'Active',5,6),
	(7,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','assign',6,'Active',7,8),
	(8,'WorkflowTransition','2015-08-27 11:12:44','2015-08-27 11:12:44','notify',7,'Active',8,9);

/*!40000 ALTER TABLE `WorkflowTransition` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WorkflowTransition_Groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowTransition_Groups`;

CREATE TABLE `WorkflowTransition_Groups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkflowTransitionID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowTransitionID` (`WorkflowTransitionID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table WorkflowTransition_Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WorkflowTransition_Users`;

CREATE TABLE `WorkflowTransition_Users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkflowTransitionID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `WorkflowTransitionID` (`WorkflowTransitionID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
