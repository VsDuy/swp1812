-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: childrencare
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `blog_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` text COLLATE utf8mb3_bin,
  `bi` text COLLATE utf8mb3_bin,
  `blog_created_date` date DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `detail` text COLLATE utf8mb3_bin,
  `blog_image` text COLLATE utf8mb3_bin,
  `view_able` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  KEY `FK__blogs__user_id__5BE2A6F2` (`user_id`),
  CONSTRAINT `FK__blogs__user_id__5AEE82B9` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK__blogs__user_id__5BE2A6F2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (3,40,'Nowadays covid-19 broken eyes of children','Eyes health tips and care','2001-02-02',1,'Medicine is the science[1] and practice[2] of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness. Contemporary medicine applies biomedical sciences, biomedical research, genetics, and medical technology to diagnose, treat, and prevent injury and disease, typically through pharmaceuticals or surgery, but also through therapies as diverse as psychotherapy, external splints and traction, medical devices, biologics, and ionizing radiation, amongst others.[3]','departments-5.jpg',1),(4,40,'The children care for eyes 2020','The Centers for Disease Control and Prevention recently recommended that children ages 5 through 11 receive a COVID-19 booster shot five months after completing the vaccine series. In this Q&A, Kristin O','2001-02-02',2,'Medicine has been practiced since prehistoric times, during most of which it was an art (an area of skill and knowledge) frequently having connections to the religious and philosophical beliefs of local culture. For example, a medicine man would apply herbs and say prayers for healing, or an ancient philosopher and physician would apply bloodletting according to the theories of humorism. In recent centuries, since the advent of modern science, most medicine has become a combination of art and science (both basic and applied, under the umbrella of medical science). While stitching technique for sutures is an art learned through practice, the knowledge of what happens at the cellular and molecular level in the tissues being stitched arises through science.','date.jpg',1),(5,40,'Why You Should Get a COVID-19 Booster Shot for Your Child Age 5 to 11','Nurses Week Is Celebrated Across the Health System','2001-02-02',3,'Medicine has been practiced since prehistoric times, during most of which it was an art (an area of skill and knowledge) frequently having connections to the religious and philosophical beliefs of local culture. For example, a medicine man would apply herbs and say prayers for healing, or an ancient philosopher and physician would apply bloodletting according to the theories of humorism. In recent centuries, since the advent of modern science, most medicine has become a combination of art and science (both basic and applied, under the umbrella of medical science). While stitching technique for sutures is an art learned through practice, the knowledge of what happens at the cellular and molecular level in the tissues being stitched arises through science.','departments-4.jpg',1);
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` text COLLATE utf8mb3_bin,
  `icon` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Eyes','bi bi-binoculars color-cyan'),(2,'Mouth','bi bi-map color-orange'),(3,'Foot','bi bi-easel color-blue'),(4,'Nose','bi bi-command color-red'),(5,'Lung','bi bi-brightness-high color-teal'),(6,'Body','bi bi-box-seam color-indigo');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorymedicine`
--

DROP TABLE IF EXISTS `categorymedicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorymedicine` (
  `cateMedicine_id` int NOT NULL AUTO_INCREMENT,
  `cateMedicine_name` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`cateMedicine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorymedicine`
--

LOCK TABLES `categorymedicine` WRITE;
/*!40000 ALTER TABLE `categorymedicine` DISABLE KEYS */;
INSERT INTO `categorymedicine` VALUES (1,'Antipyretic'),(2,'\r\nAnalgesic'),(3,'\r\nDigestive'),(4,'\r\nDermatology'),(5,'\r\nInsecticide');
/*!40000 ALTER TABLE `categorymedicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `children`
--

DROP TABLE IF EXISTS `children`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `children` (
  `children_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `children_name` text COLLATE utf8mb3_bin,
  `children_gender` tinyint(1) DEFAULT NULL,
  `children_age` int NOT NULL,
  PRIMARY KEY (`children_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `children`
--

LOCK TABLES `children` WRITE;
/*!40000 ALTER TABLE `children` DISABLE KEYS */;
INSERT INTO `children` VALUES (1,47,'Nguyen Ngoc Khoa',1,8),(3,47,'Kieu Minh Dat',0,9),(4,48,'Trinh Xuan Truong',0,9),(5,48,'Nguyen Ngoc Khoa',1,9),(6,47,'kieu minh dat',0,3),(7,35,'Nguyen Ngoc Khoa',1,5),(8,35,'Nguyen Ngoc Hoan',1,1),(10,38,'Trinh Xuan Truong',0,1),(11,38,'Nguyen Ngoc Khoa',0,2),(12,33,'Kieu Minh Dat',1,2),(13,33,'Nguyen Ngoc Khoa',1,3),(14,17,'tung',1,0),(15,49,'tung',1,5),(16,49,'tung',1,0),(17,17,'1sad',1,0);
/*!40000 ALTER TABLE `children` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `comment_content` text COLLATE utf8mb3_bin,
  `comment_date` date DEFAULT NULL,
  `comment_createByUser` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'mot hai ba bon','2022-02-20','truong'),(2,'bon nam sau','2022-03-04','hoan'),(3,'bon nam sau','2022-03-04','khoa'),(7,'bay tam chin','2022-03-04','hao'),(8,'moi ma','2022-03-04','dat');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `feedback_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `reservation_id` int DEFAULT NULL,
  `content` text COLLATE utf8mb3_bin,
  `name` text COLLATE utf8mb3_bin,
  `gender` tinyint(1) DEFAULT NULL,
  `email` text COLLATE utf8mb3_bin,
  `mobile` text COLLATE utf8mb3_bin,
  `feedback_image` text COLLATE utf8mb3_bin,
  `rate_Star` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`feedback_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,0,0,'\r\na great experience','Kieu Minh Dat',0,'khoannhe153156@fpt.edu.vn','0869510920','hulk.jpg',4,1),(2,0,0,'Amazing goob job','Nguyen Ngoc Khoa',1,'sktngochoan@gmail.com','0869510920','departments-3 - Copy - Copy.jpg',3,1),(3,0,0,'test 1','Nguyen Ngoc Hoan',1,'hoannnhe151308@fpt.edu.vn','0869510920','body1.jpg',3,1),(4,0,0,'test 2','Nguyen Ngoc Hoan',1,'hoannnhe151308@fpt.edu.vn','0869510920','eye1.jpg',3,1),(5,49,33,'213','Nguyen Ngoc Hoan',1,'hoannnhe151308@fpt.edu.vn','0869510920','eye2.jpg',3,0),(6,49,33,'dasdad','Nguyen Ngoc Hoan',1,'hoannnhe151308@fpt.edu.vn','0869510920','eye2.jpg',3,0),(7,53,33,'hÃ o khÃ´n','Nguyen Ngoc Hoan',1,'hoannnhe151308@fpt.edu.vn','0869510920','',5,0),(8,55,33,'tetstdahj','Nguyen Ngoc Hoan',1,'hoannnhe151308@fpt.edu.vn','0869510920','departments-3.jpg',4,0),(9,0,0,'đwqfewf','tung',1,'trantungmr11@gmail.com','0337472684','',5,0);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `medicine_id` int NOT NULL AUTO_INCREMENT,
  `medicine_name` text COLLATE utf8mb3_bin,
  `medicine_image` text COLLATE utf8mb3_bin,
  `medicine_price` double DEFAULT NULL,
  `medicine_unit` int DEFAULT NULL,
  `medicine_quantity` int DEFAULT NULL,
  `medicine_detail` text COLLATE utf8mb3_bin,
  `medicine_cateId` int DEFAULT NULL,
  PRIMARY KEY (`medicine_id`),
  KEY `FK__medicine__medici__5CD6CB2B` (`medicine_cateId`),
  CONSTRAINT `FK__medicine__medici__5CD6CB2B` FOREIGN KEY (`medicine_cateId`) REFERENCES `categorymedicine` (`cateMedicine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
INSERT INTO `medicine` VALUES (1,'Acetaminophen Suppositories','AcetaminophenSuppositories.jpg',100,1,993,'Pain Reliever and Fever Reducer For Children',2),(2,'Children\'s Mucus Relief Multi-Symptom Cold','mucinex.jpg',120,1,998,'Cough Suppressant Mixed Berry',3),(3,'Oral Electrolyte Solution With Zinc, Orange','electrolytesolution.jpg',100,1,1000,'Compare to Pedialyte. Keep up with hydration and electrolyte needs in the face of illness, exercise, travel or heat exhaustion. Walgreens Electrolyte Solution helps prevent dehydration by quickly restoring fluids and electrolytes more effectively than sports drinks, sodas, juices and water. Replaces zinc as well as electrolytes and fluids. Pedialyte is a registered trademark of Abbott Laboratories. This product is not manufactured or distributed by Abbott Nutrition, Abbott Laboratories, the distributor of Pedialyte. Natural flavor with other natural flavor.\r\n\r\nFeel your best. Walgreens Electrolyte Solution is a ready-to-use electrolyte drink designed to help restore a healthy balance of electrolytes and fluids.\r\n\r\nThe fast, effective rehydration of Walgreens Electrolyte Solution helps replenish electrolytes quickly. This electrolyte drink helps restore fluids, electrolytes and zinc more effectively than sports drinks, sodas, juices and water. \r\n\r\nPediatricians and pharmacists recommend using electrolyte solution to quickly replenish electrolytes, fluids and zinc, and to help prevent dehydration. Compare to the national brand and save.\r\n\r\nHelps to prevent mild to moderate dehydration and to quickly restore electrolyte balance of minerals and fluids.\r\n\r\nIntense exercise, heat exhaustion, travel, and vomiting and diarrhea can deplete fluids and result in low electrolytes. Walgreens Electrolyte Solution can help prevent dehydration; use for fast, effective rehydration.\r\n\r\nMade in United States\r\n\r\n100% satisfaction guaranteed',3),(4,'Children\'s Prebiotic + Probiotic Gummies','orgamickidbiotics.jpg',100,2,1000,'800 million active cultures + 3g Fiber per serving\r\nRegularity and Digestive Health†\r\nSpecially formulated with prebiotic fiber\r\nMixed Berry flavors with other natural flavors\r\nNatural fruit flavors with other natural flavors\r\nDoes not contain wheat (gluten), milk, eggs, peanuts, soy\r\nNo added artificial preservatives\r\nSpecially formulated with prebiotic fiber',2),(5,'Children\'s Ibuprofen 100 mg, Chewable Orange','nurofen.jpg',100,2,993,'Compare to Children\'s Motrin active ingredient. The active ingredient in Walgreens Children\'s Ibuprofen 100 is ibuprofen 100 mg, a pain reliever and fever reducer for children ages 2 to 11. Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that temporarily reduces fever and provides temporary relief of minor aches and pains due to the common cold, flu, sore throat, headaches and toothaches. Relief that lasts up to 8 hours. Orange flavor chewable tablets are preservative free and gluten free. Chew or crush tablets completely before swallowing.\r\n\r\nThe active ingredient in Walgreens Children\'s Ibuprofen 100 chewable tablets is ibuprofen 100 mg, a pain reliever and fever reducer for kids. Compare to the active ingredient of Children\'s Motrin.\r\nChewable tablets are a convenient choice for today\'s busy families. No dosing container or water is needed. Walgreens Children\'s Ibuprofen 100 contains a nonsteroidal anti-inflammatory drug.\r\nWalgreens Children\'s Ibuprofen 100 is a pain reliever and fever reducer specifically formulated for kids ages 2-11 years. This children\'s medicine is gluten free and preservative free.\r\nMultiple symptom relief lasts up to 8 hours per dose. Orange flavor is a child-pleasing favorite to help the medicine go down.\r\nPain reliever and fever reducer: Walgreens Children\'s Ibuprofen 100 chewable tablets reduces fever and relieves minor aches and pains due to the common cold, flu, sore throat, headaches and toothaches.\r\nMade in UNITED STATES',1),(6,'Soothe Antacid Children\'s Chewable Tablets Bubble Gum','pepto.jpg',25.99,1,1000,'Description\r\nRelieves heartburn and sour stomach\r\nFor acid indigestion\r\nRelieves upset stomach\r\nRelieves Heartburn & Acid Indigestion\r\n\r\nRelieves upset stomach\r\nRelieves sour stomach.\r\n100% satisfaction guaranteed\r\nFind the right dose on chart below based on weight (preferred), otherwise use age\r\nRepeat dose as needed\r\nDo not take more than 3 tablets (ages 2-5) or 6 tablets (ages 6-11) in a 24-hour period, or use the maximum dosage for more than two weeks, except under the advice and supervision of a doctor',3),(7,'Children\'s Daytime/Nighttime Multi-Symptom Cold Medicine Berry','symptom.jpg',12.99,2,1000,'Well at Walgreens\r\nWalgreens Pharmacist Recommended†\r\n\r\nCombo Pack\r\n\r\nDaytime — Very Berry Flavor\r\nNighttime — Mixed Berry Flavor\r\nCompare to Children\'s Mucinex® Day Time Multi-Symptom Cold & Night Time Multi-Symptom Cold Active Ingredients^\r\nDosage Cup Provided\r\nChildren\'s Daytime Multi-Symptom Cold\r\n\r\nStuffy Nose\r\nCough\r\nChest Congestion\r\nHelps Break Up Mucus\r\nFor Ages 4+\r\nChildren\'s Nighttime Multi-Symptom Cold\r\n\r\nStuffy Nose\r\nCough\r\nRunny Nose & Sneezing\r\nFever & Sore Throat\r\nFor Ages 6 to 11',4),(8,'Baby Chest Rub Soothing Ointment','babyrob.jpg',15.99,1,1000,'Description\r\nLeaves baby\'s skin soft and smooth\r\nHelps soothe and comfort\r\nWith eucalyptus, rosemary, lavender\r\nHelps Soothe and Comfort Babies\r\n\r\nOn contact, the aloe and petrolatum go right to work, leaving your baby\'s skin soft and smooth.  Use when you want to comfort your fussy baby with scents of eucalyptus, rosemary, lavender & aloe vera.',5),(9,'30 Second Digital Thermometer','Equate.jpg',8.99,2,1000,'Description\r\nReady to read in 30 seconds\r\nClinically proven accurate\r\nLarge digital display\r\nRead in 30 Sec.\r\n\r\nReads in F or C.\r\n\r\nLarge digial display.\r\n\r\nMemory Recall.\r\n\r\nFever Alert over 99.5 Fahrenheit.\r\n\r\nClinically proven accurate.\r\n\r\nInclude 5 probe covers.\r\n\r\nFor oral or rectal use.\r\n\r\nPlease read complete instructions enclosed\r\n\r\nMade in China\r\n\r\n100% satisfaction guaranteed\r\n\r\nPlease remove the protective film on the display.\r\n\r\nDisinfect the probe with isopropyl (rubbing) alcohol before using.\r\n\r\nIf use for oral measurement, please place it near one of the heat poket and keep the mouse closed while measuring. (please read user manual)',4),(10,'Advantage Care Electrolyte Solution with Prevital Prebiotics, Strawberry Lemonade','meijer.jpg',15.99,1,1000,'Compare to Pedialyte AdvancedCare. Keep up with hydration and electrolyte needs in the face of illness (like vomiting and diarrhea), intense exercise, travel or heat exhaustion. Walgreens Advantage Care Electrolyte Solution helps children and adults prevent dehydration and rehydrate quickly by restoring electrolytes, fluids and zinc more effectively than sports drinks, sodas, juices and water. Walgreens Advantage Care electrolyte solutions also have Prevital Prebiotics to help promote a healthy digestive system. Medical Grade Hydration: Balance of sugar and electrolytes recommended by the American Academy of Pediatrics (Kleinman RE, 2019). Great for kids and adults. Pedialyte and Pedialyte AdvancedCare are registered trademarks of Abbott Laboratories. This product is not manufactured or distributed by Abbott Nutrition, Abbott Laboratories, the distributor of Pedialyte and Pedialyte AdvancedCare. Prevital is a registered trademark of PBM Nutritionals, LLC. Advantage is a registered trademark of PBM Products, LLC. \r\n\r\nUse Walgreens Advantage Care Electrolyte Solution for fast, effective rehydration and to help prevent dehydration. A full-flavored hydration option for adults and children. Compare to Pedialyte AdvancedCare. \r\nHydration: Use Walgreens Advantage Care Electrolyte Solution for fast, effective rehydration and to help prevent dehydration. A full-flavored hydration option for adults and children\r\nHelp Prevent Dehydration: Quickly replenishes electrolytes, fluids and zinc; designed to help prevent mild to moderate dehydration more effectively than common beverages: sports drinks, juice, soda and water. \r\nTrust and value: Pediatricians and pharmacists recommend using electrolyte solution to quickly replenish fluids, zinc and electrolytes to help prevent dehydration. Compare to the national brand and save. \r\nCommon Causes: Vomiting and diarrhea, intense exercise, heat exhaustion and travel can deplete fluid, zinc and electrolyte levels. Electrolyte solutions can help restore electrolytes and fluids. \r\nMade in United States',2),(11,'Vaporizer 1.0 Gallon','warmsteam.jpg',18.99,3,1000,'Helps temporarily relieve cough and congestion.\r\n\r\nWarm Steam\r\n\r\nEasy to Fill, Auto Shut-off, Nigh Light\r\n\r\nMedicine cup for use with liquid inhalants\r\n\r\nMade in MEXICO\r\n\r\n100% satisfaction guaranteed\r\n\r\nHold can upright, pull trigger back and spray the air in a sweeping motion throughout the entire room. For a noticeably fresh home, spray all the rooms in your home. Safe for use around cats and dogs. As with other air care products, not for use around birds.\r\n\r\n© 2013 Walgreen Co',1),(12,'Children\'s Dye-Free Ibuprofen 100 Oral Suspension Berry','motrin.jpg',20.99,1,1000,'Description\r\nRelieves minor aches and pains\r\nReduces fever\r\nLasts up to 8 hours\r\nCompare to Children\'s Motrin active ingredient. When pain or fever derails your child, get them back on track with Walgreens Children\'s Dye-Free Ibuprofen 100, Ibuprofen Oral Suspension 100 mg per 5 mL, Non-Staining Berry Flavor. This children\'s ibuprofen temporarily reduces fever and provides relief from minor aches and pains due to the common cold, flu, sore throat, headache and toothache. One dose of this berry-flavored cold medicine provides relief for up to 8 hours for children ages 2 to 11 years. Dye and alcohol free.\r\n\r\nActive ingredient: This berry flavored ibuprofen contains 100 mg per 5 mL of ibuprofen, which is a pain reliever and fever reducer.\r\nChildren\'s pain reliever and fever reducer: A nonsteroidal anti-inflammatory drug (NSAID) that temporarily reduces fever and relieves minor aches and pains of the common cold, flu, sore throat, headache and toothache.\r\nLasts up to 8 hours: This children\'s medicine will provide relief of minor aches and pains caused by the common cold and flu for up to 8 hours. Also temporarily reduces fever.\r\nMade for children: Non-staining Berry Flavor is a kid-friendly choice to help your child feel like themselves again. For children ages 2 to 11.\r\nGluten free: This children\'s oral suspension ibuprofen is gluten, dye and alcohol free. Features a child-resistant safety cap.',3),(13,'Dosage Syringe with Brush','dosage.jpg',50.99,1,1000,'Description\r\nGives accurate dose every time\r\nControl flow with extra-large plunger\r\nEasy-view calibrations\r\nAccurate dose every time\r\nColor coded cap for easy dosing\r\nControl flow with extra-large plunger\r\nEasy to hold & dose\r\nQuick & easy to clean\r\nContains: 1 Syringe 2 tsp (10 mL), 1 Brush\r\nBPA Free',5),(14,'Infrared Instant Ear Digital Thermometer','infared.jpg',30.99,2,1000,'2 second reading\r\nCertified accurate\r\nLED temperature indicator\r\nMemory recall for last 10 temperatures\r\nReads in °F or °C\r\nWalgreens pharmacist recommended*\r\n*Walgreens pharmacist survey study, November 2017\r\n\r\n100% satisfaction guaranteed',4),(15,'Baby Rectal Thermometer','rectal.jpg',16.99,3,1000,'Description\r\nBacklit LCD display\r\nFlex-tip\r\nReads in F or C\r\nMemory Recall\r\nFever Alert above 100.4 Fahrenheit\r\nClinically proven accurate\r\nFor rectal use only\r\nPlease read complete instructions enclosed',3);
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine_unit`
--

DROP TABLE IF EXISTS `medicine_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_unit` (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `unit_name` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine_unit`
--

LOCK TABLES `medicine_unit` WRITE;
/*!40000 ALTER TABLE `medicine_unit` DISABLE KEYS */;
INSERT INTO `medicine_unit` VALUES (1,'cough medicine'),(2,'bottle'),(3,'1');
/*!40000 ALTER TABLE `medicine_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription_details`
--

DROP TABLE IF EXISTS `prescription_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription_details` (
  `prescription_details_id` int NOT NULL AUTO_INCREMENT,
  `medical_id` int DEFAULT NULL,
  `medicine_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`prescription_details_id`),
  KEY `FK__prescript__medic__5DCAEF64` (`medical_id`),
  KEY `FK__prescript__medic__5EBF139D` (`medicine_id`),
  CONSTRAINT `FK__prescript__medic__5DCAEF64` FOREIGN KEY (`medical_id`) REFERENCES `reservation_medical` (`medical_id`),
  CONSTRAINT `FK__prescript__medic__5EBF139D` FOREIGN KEY (`medicine_id`) REFERENCES `medicine` (`medicine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_details`
--

LOCK TABLES `prescription_details` WRITE;
/*!40000 ALTER TABLE `prescription_details` DISABLE KEYS */;
INSERT INTO `prescription_details` VALUES (3,3,2,2,240),(4,3,3,1,100),(5,3,5,3,300),(6,4,2,2,240),(7,4,5,2,200),(8,4,10,2,31.98),(9,5,1,6,600),(10,5,5,7,700),(12,6,1,1,100),(13,6,2,2,240),(14,7,10,1,15.99),(15,8,4,1,100),(16,9,1,2,200),(17,9,2,1,120),(18,9,3,1,100),(19,10,2,2,240),(20,10,5,2,200);
/*!40000 ALTER TABLE `prescription_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `reservation_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  `note` text COLLATE utf8mb3_bin,
  `reservation_status` int DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  PRIMARY KEY (`reservation_id`),
  KEY `FK__reservati__user___60A75C0F` (`user_id`),
  CONSTRAINT `FK__reservati__user___5FB337D6` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK__reservati__user___60A75C0F` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (2,19,699,'Truong hop sap tu vong',1,'2022-06-04'),(3,22,699,'Con em ten khoa bi viem mao ga',1,'2022-06-05'),(4,25,699,'Con em ten truong bi sau rang',3,'2022-06-06'),(5,25,699,'Con em ten Hao bi thieu nang tu be',3,'2022-06-07'),(6,16,699,'Truong hop sap chet',1,'2022-06-03'),(7,19,699,'Truong hop sap tu vong',2,'2022-06-03'),(8,22,699,'Con em ten khoa bi viem mao ga',1,'2022-06-05'),(9,25,699,'Con em ten truong bi sau rang',4,'2022-06-03'),(10,25,699,'Con em ten Hao bi thieu nang tu be',1,'2022-06-07'),(11,16,699,'Truong hop sap chet',3,'2022-06-03'),(12,19,699,'Truong hop sap tu vong',3,'2022-06-09'),(13,22,699,'Con em ten khoa bi viem mao ga',1,'2022-06-04'),(14,25,699,'Con em ten truong bi sau rang',2,'2022-06-06'),(15,25,699,'Con em ten Hao bi thieu nang tu be',1,'2022-06-05'),(16,25,699,'Con em ten Hao bi thieu nang tu be',1,'2022-06-08'),(17,25,699,'Con em ten truong bi sau rang',2,'2022-06-07'),(18,22,699,'Con em ten khoa bi viem mao ga',1,'2022-06-06'),(20,19,699,'Truong hop sap tu vong',1,'2022-06-03'),(21,47,3500,'aa',1,'2022-06-16'),(22,47,800,'aa',1,'2022-06-16'),(23,47,800,'test 1',1,'2022-06-17'),(27,47,400,'test final',1,'2022-06-17'),(28,35,800,'cccc',1,'2022-06-17'),(29,47,800,'test final 123',1,'2022-06-17'),(30,35,800,'123141212',1,'2022-06-17'),(31,35,400,'23131',1,'2022-06-17'),(32,35,400,'123412',1,'2022-06-17'),(33,35,400,'test final',1,'2022-06-18'),(34,35,400,'Ayo',1,'2022-06-19'),(35,35,1000,'test finalllll!!!!',3,'2022-06-20'),(36,38,1600,'Truong hop sap ',1,'2022-06-20'),(37,35,400,'abc',4,'2022-06-24'),(38,35,800,'Truong hop khan cap',2,'2022-06-24'),(39,35,870,'123',1,'2022-06-24'),(40,35,400,'142314',2,'2022-06-24'),(41,35,400,'123',1,'2022-06-25'),(42,35,870,'23123',1,'2022-06-25'),(43,33,400,'3412',2,'2022-06-25'),(44,33,400,'213',1,'2022-06-25'),(45,33,400,'3141',3,'2022-06-25'),(46,35,400,'123',1,'2022-06-25'),(47,35,400,'23123',1,'2022-06-25'),(48,33,400,'31231',3,'2022-06-25'),(49,33,400,'123',3,'2022-06-25'),(50,33,400,'123',1,'2022-06-25'),(51,33,400,'23231',1,'2022-06-25'),(52,33,400,'123',1,'2022-06-25'),(53,33,1200,'23131',4,'2022-06-27'),(54,33,800,'test inter 3',1,'2022-07-11'),(55,33,800,'test',4,'2022-07-11'),(56,49,400,'htfhgf',1,'2023-05-19'),(57,17,400,'41-TRIAL-gregf 167',2,'2023-05-19'),(58,49,800,'34-TRIAL-Tùng 100',1,'2023-06-01');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation_detail`
--

DROP TABLE IF EXISTS `reservation_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation_detail` (
  `reservation_detail_id` int NOT NULL AUTO_INCREMENT,
  `reservation_id` int DEFAULT NULL,
  `service_id` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `num_of_person` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `nurse_id` int DEFAULT NULL,
  `begin_time` date DEFAULT NULL,
  `slot` int DEFAULT NULL,
  `children_id` int DEFAULT NULL,
  PRIMARY KEY (`reservation_detail_id`),
  KEY `FK__reservati__categ__628FA481` (`category_id`),
  KEY `FK__reservati__docto__6477ECF3` (`doctor_id`),
  KEY `FK__reservati__nurse__66603565` (`nurse_id`),
  KEY `FK__reservati__reser__68487DD7` (`reservation_id`),
  KEY `FK__reservati__servi__6A30C649` (`service_id`),
  CONSTRAINT `FK__reservati__categ__619B8048` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FK__reservati__categ__628FA481` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FK__reservati__docto__6383C8BA` FOREIGN KEY (`doctor_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK__reservati__docto__6477ECF3` FOREIGN KEY (`doctor_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK__reservati__nurse__656C112C` FOREIGN KEY (`nurse_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK__reservati__nurse__66603565` FOREIGN KEY (`nurse_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK__reservati__reser__6754599E` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`reservation_id`),
  CONSTRAINT `FK__reservati__reser__68487DD7` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`reservation_id`),
  CONSTRAINT `FK__reservati__servi__693CA210` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`),
  CONSTRAINT `FK__reservati__servi__6A30C649` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation_detail`
--

LOCK TABLES `reservation_detail` WRITE;
/*!40000 ALTER TABLE `reservation_detail` DISABLE KEYS */;
INSERT INTO `reservation_detail` VALUES (49,10,1,255,1,1,4,17,18,'2021-10-11',1,1),(56,5,2,199,1,1,1,17,18,'2020-11-02',3,3),(57,6,3,399,1,1,1,17,18,'2020-11-09',2,4),(61,6,2,255,1,1,1,17,18,'2020-12-11',4,5),(62,6,2,255,1,1,2,17,18,'2020-09-11',1,4),(63,6,2,255,1,1,3,17,18,'2020-07-11',4,4),(64,6,2,255,1,1,3,17,18,'2020-12-06',2,5),(65,6,2,255,1,1,4,17,18,'2020-05-11',3,5),(66,6,2,255,1,1,4,17,18,'2020-05-11',3,1),(67,12,3,255,1,1,4,17,18,'2021-08-11',2,3),(68,11,2,255,1,1,4,17,18,'2021-09-11',4,4),(69,10,1,255,1,1,4,17,18,'2021-10-11',1,5),(70,9,2,255,1,1,4,17,18,'2021-03-11',4,4),(71,8,2,255,1,1,4,17,18,'2021-02-11',2,3),(73,5,2,199,1,1,1,17,18,'2020-11-02',3,3),(74,6,3,399,1,1,1,17,18,'2020-11-09',1,5),(78,6,2,255,1,1,1,17,18,'2020-12-11',4,3),(79,6,2,255,1,1,2,17,18,'2020-09-11',1,4),(80,6,2,255,1,1,3,17,18,'2020-07-11',3,5),(81,6,2,255,1,1,3,17,18,'2020-12-06',4,1),(82,6,2,255,1,1,4,17,18,'2020-05-11',1,1),(83,6,2,255,1,1,4,17,18,'2020-05-11',3,4),(84,12,3,255,1,1,4,17,18,'2021-08-11',4,1),(85,11,2,255,1,1,4,17,18,'2021-09-11',3,4),(86,10,1,255,1,1,4,17,18,'2021-10-11',1,3),(87,9,2,255,1,1,4,17,18,'2021-03-11',2,5),(88,8,2,255,1,1,4,17,18,'2021-02-11',3,3),(90,21,36,400,2,2,5,17,18,'2022-06-24',2,1),(91,21,36,400,2,2,5,17,18,'2022-06-24',2,3),(92,21,37,400,1,1,6,20,21,'2022-06-25',3,1),(93,21,35,750,1,2,5,23,24,'2022-06-26',4,1),(94,21,35,750,1,2,5,23,24,'2022-06-26',4,3),(95,22,36,400,1,1,5,17,18,'2022-06-22',1,1),(96,22,37,400,1,1,6,23,24,'2022-06-30',2,1),(97,23,36,400,2,1,5,20,21,'2022-06-30',1,1),(102,27,36,400,1,1,5,26,24,'2022-06-29',2,1),(104,29,37,400,1,2,6,23,24,'2022-06-23',2,1),(105,29,37,400,1,2,6,23,24,'2022-06-23',2,3),(112,35,39,500,5,5,6,23,21,'2022-06-23',1,7),(113,35,39,500,5,5,6,23,21,'2022-06-23',1,8),(114,36,36,400,1,2,5,17,21,'2022-06-24',1,10),(115,36,36,400,1,2,5,17,21,'2022-06-24',1,11),(116,36,37,400,1,2,6,20,24,'2022-06-25',2,10),(117,36,37,400,1,2,6,20,24,'2022-06-25',2,11),(118,37,36,400,1,1,5,20,18,'2022-06-25',2,8),(119,38,36,400,1,2,5,20,21,'2022-06-29',2,7),(120,38,36,400,1,2,5,20,21,'2022-06-29',2,8),(124,40,36,400,1,1,5,23,21,'2022-06-27',1,7),(125,41,36,400,1,1,5,26,21,'2022-06-29',2,7),(126,42,36,400,1,1,5,17,18,'2022-06-28',1,7),(127,42,37,400,1,1,6,20,18,'2022-06-29',2,7),(128,42,31,70,1,1,4,26,21,'2022-06-30',4,7),(129,43,36,400,1,1,5,26,21,'2022-06-28',2,12),(131,45,36,400,1,1,5,20,24,'2022-06-29',3,12),(132,46,36,400,1,1,5,23,24,'2022-06-29',2,7),(133,47,36,400,1,1,5,20,21,'2022-06-30',2,7),(134,48,36,400,1,1,5,23,21,'2022-06-28',2,13),(135,49,36,400,1,1,5,20,21,'2022-06-29',2,12),(136,50,36,400,1,1,5,23,24,'2022-06-30',2,13),(137,51,36,400,1,1,5,17,21,'2022-06-28',1,12),(138,52,36,400,1,1,5,20,21,'2022-06-30',1,12),(139,53,36,400,1,2,5,20,21,'2022-06-30',1,12),(140,53,36,400,1,2,5,20,21,'2022-06-30',1,13),(141,53,37,400,1,1,6,20,21,'2022-06-30',2,12),(142,54,36,400,1,1,5,20,18,'2022-07-21',1,12),(143,54,37,400,1,1,6,17,18,'2022-07-21',1,12),(144,55,36,400,1,1,5,17,18,'2022-07-20',1,12),(145,55,37,400,1,1,6,20,21,'2022-07-21',2,12),(146,56,37,400,1,1,6,17,21,'2023-05-20',1,15),(148,58,36,400,2,1,5,20,21,'2023-06-22',2,15);
/*!40000 ALTER TABLE `reservation_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation_medical`
--

DROP TABLE IF EXISTS `reservation_medical`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation_medical` (
  `medical_id` int NOT NULL AUTO_INCREMENT,
  `reservation_detail_id` int DEFAULT NULL,
  `diagnosis` text COLLATE utf8mb3_bin,
  `created_date` date DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  PRIMARY KEY (`medical_id`),
  KEY `FK__reservati__docto__6B24EA82` (`doctor_id`),
  KEY `FK__reservati__reser__6C190EBB` (`reservation_detail_id`),
  CONSTRAINT `FK__reservati__docto__6B24EA82` FOREIGN KEY (`doctor_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK__reservati__reser__6C190EBB` FOREIGN KEY (`reservation_detail_id`) REFERENCES `reservation_detail` (`reservation_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation_medical`
--

LOCK TABLES `reservation_medical` WRITE;
/*!40000 ALTER TABLE `reservation_medical` DISABLE KEYS */;
INSERT INTO `reservation_medical` VALUES (1,139,'test 3','2022-06-28',33),(2,139,'test 4','2022-06-28',33),(3,139,'test 5','2022-06-28',33),(4,139,'test 6 for lazy load','2022-06-29',33),(5,139,'test for trigger','2022-06-29',33),(6,139,'ggdads','2022-06-29',33),(7,70,'abcdefgh','2022-07-10',33),(8,112,'test final','2022-07-10',33),(9,131,'test final inter 3','2022-07-11',33),(10,144,'aadjadmca ','2022-07-11',33);
/*!40000 ALTER TABLE `reservation_medical` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Admin'),(2,'Doctor'),(3,'Nurse'),(4,'Customer'),(5,'Manager');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `service_title` text COLLATE utf8mb3_bin,
  `service_bi` text COLLATE utf8mb3_bin,
  `service_created_date` date DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `service_price` double DEFAULT NULL,
  `service_discount` double DEFAULT NULL,
  `service_detail` text COLLATE utf8mb3_bin,
  `service_rateStar` int DEFAULT NULL,
  `service_vote` int DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  KEY `FK__service__categor__6E01572D` (`category_id`),
  CONSTRAINT `FK__service__categor__6D0D32F4` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FK__service__categor__6E01572D` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'Cut lip brake with low grip','Tissue ablation is a simple procedure to remove or relieve strain on the brakes in the mouth.','2022-01-02',1,200,159,'Low grip lip brake often causes tooth misalignment, creating a gap between two large front teeth affecting aesthetics and loss of confidence in communication; causes gum contraction, plaque accumulates more and makes it difficult to clean teeth.\r\n\r\nCutting the low-grip lip brake helps the lips to move easily and does not affect the lip muscles. Performing this procedure at ENAX Odonto-Stomatology Clinic, customers can be examined and consulted for free, the cost is appropriate and the process is safe and aesthetic for the customer.',4,59),(2,'Apply SDF to prevent and stop the ','SDF Apply Service to prevent and prevent the development of tooth decay','2020-11-11',1,150,120,'SDF Apply Service to prevent and prevent the development of dental caries at the Clinic',3,102),(3,'Welding deep teeth','Cavity filling is a technique that uses dental fillings to fill the gaps, fill in the missing tooth tissue due to decay, so that the teeth return to their original state.','2022-01-02',1,15,12,'Cavity filling is a technique that uses dental fillings to fill the gaps, fill in the missing tooth tissue due to decay, so that the teeth return to their original state.\r\n\r\nTooth decay will cause pain and discomfort in chewing, tooth decay will create deep holes in the oral cavity, causing food to accumulate, and causing bad breath.\r\n\r\n At the same time, tooth decay also causes the risk of infection, tooth loss, affecting the aesthetics and surrounding teeth\r\n\r\nTooth decay method is performed when the holes in the teeth or only tooth sensitivity, but no holes are seen. At this time, the doctor needs to take a film to determine the condition of the tooth decay, to proceed with the filling',5,111),(4,'\r\nWelding Milk Teeth','\r\nBaby teeth are often decayed, due to many reasons such as improper diet and oral hygiene','2021-06-07',2,10,8,'\r\nBaby teeth are often decayed, due to many reasons such as improper diet, oral hygiene, ...\r\nDepending on the condition behind the teeth, the doctor will examine and decide whether the method will seal the baby teeth or not.\r\nAt ENAX Oral and Maxillofacial Clinic, children will be thoroughly examined and consulted about the condition of their teeth and dental fillings according to the procedure, ensuring safety and aesthetics, and a service warranty of up to 6 months.',2,42),(5,'Combined teeth whitening','\r\nCombined teeth whitening service at the Clinic','2021-08-09',2,10,8,'\r\nCombined teeth whitening service at the Clinic',3,47),(6,'Cataracts','Children can develop cataracts, a condition where the lens of the eyes becomes cloudy. This rare condition can result in poor vision and is treatable.','2021-08-10',1,150,120,'We use advanced equipment in our visual electrophysiology lab to diagnose cataracts. Whether you need a new eyeglass prescription, which you can easily fill at one of our on-site Mizzou Optical retail stores, visual aids to enhance your eyesight, or cataract surgery, you’ll find it at MU Health Care. We offer complete services to improve vision and your quality of life.\r\n\r\nYour doctor will talk with you about your choices and suggest a custom treatment plan that takes into account your lifestyle and what’s important to you.',5,109),(7,'NDiabetic RetinopathyULL','If you have diabetes, it\'s important to have your eyes checked regularly. High blood sugar can weaken and damage the tiny blood vessels in your eye, which can lead to diabetic retinopathy. ','2021-10-11',1,130,111,'Diabetic retinopathy doesn’t have symptoms in the early stages. Regular screenings can help catch the disease before it leads to serious complications. At University of Missouri Health Care’s Mason Eye Clinic, our eye care specialists (ophthalmologists) specialize in diagnosing and treating diabetic retinopathy. Our ophthalmologists work together with your primary care doctor or endocrinologist to offer you complete care.\r\n\r\nWe can help prevent the disease and protect your eyesight.',4,56),(8,'Convergence Insufficiency','This common disorder occurs when vision is limited at close proximity to an object. Often times, one eye will turn outward when attempting to focus on a close object.','2021-10-11',1,200,189,'In children, convergence insufficiency can often be treated by practicing convergence through exercises. These exercises may be prescribed by an orthoptist (a medical technician who is specifically trained in ocular muscle function and binocular vision) or by an ophthalmologist. There is also a computer program available which may be used on a home computer to increase convergence ability. The results of the computer program are often followed by your eye care professional with print outs that can be brought in to the office visit. Finally, in-office exercises for convergence insufficiency are administered by certain specialized practitioners, but at home treatment is usually sufficient.',3,74),(9,'Eye Exams','\r\nAppointments\r\n573-884-EYES (3937)\r\n\r\nFind Care\r\nIN THIS SECTION\r\nEye Exams\r\nMeet the Team\r\nMany eye and vision problems don’t have symptoms, but specialized testing can help discover eye health problems early to help prevent vision loss','2021-10-12',1,210,190,'Biomicroscopic imaging exams provide 3-D pictures of your cornea (the clear, outer covering of your eye), iris (colored part of your eye), lens, and the fluid in the middle of your eye (vitreous gel). Your doctor can use special lenses to examine deeper structures in your eye. Biomicroscopic imaging helps diagnose many problems, including diseases, infections or foreign objects in your eye.',4,57),(16,'Low Vision','If you wear glasses or contacts and you still have difficulty reading the newspaper or directions on the side of a box, you have low vision','2020-10-12',1,180,150,'When you choose MU Health Care, you work with the most experienced eye care team in central Missouri. Our low vision specialists work closely with our ophthalmologists and optometrists to understand your eye health condition. This close collaboration means you get expert advice and solutions to help you maintain your independence.\r\n\r\nHere’s how we can help.',2,123),(17,'Foot and Ankle Pain','Foot pain and ankle pain can keep you out of step with your life, preventing you from enjoying the activities you love.','2021-01-10',3,350,250,'At Missouri Orthopaedic Institute (MOI), we offer complete care in one location, making your treatment easy and convenient. We can diagnose your condition through physical exams or advanced medical imaging. Treatments, including inpatient and outpatient surgery, are deliver using the latest physical therapy techniques to build strength, relieve pain and increase range of motion.\r\n\r\nAs a patient in an academic health center, you have access to the latest orthopaedic treatments. Our physicians use the most up-to-date recommendations and research to guide your care and help you heal.\r\n\r\nYou’ll also receive care from a multidisciplinary team of specialists, including orthopaedic surgeons, podiatrists, radiologists, physical therapists and other health professionals. Our teams work with you to find the best treatment for your condition, age and fitness level.',4,142),(18,'Pediatric Orthopaedics','Our pediatric orthopaedics team provides a multidisciplinary approach for medical, social, emotional and physical needs related to orthopaedic conditions that affect children.','2020-02-10',3,350,250,'Pediatric orthopaedic care is offered in a nurturing environment with knowledgeable physicians and the latest technology. Within our clinic, we have multiple providers, including surgeons, sports medicine doctors and nurse practitioners available to treat your child Monday through Friday.\r\n\r\nOur surgeons, Daniel Hoernschemeyer, MD, and Sumit Gupta, MD, specialize in many conditions, including scoliosis and cerebral palsy. Our sports medicine doctors, Aaron Gray, MD, and Tiffany Bohon, MD, evaluate and treat a variety of sports-related injuries, including concussions.\r\n\r\nWorking alongside our surgeons, our nurse practitioners are available to help manage our non-surgical conditions, as well as assisting with post-operative care. Our nurse practitioners help to provide additional clinics, which allows for your child to be seen in a timely manner.\r\n\r\nWe are committed to helping your child manage his or her condition and live life to the fullest.',5,26),(19,'Knee Pain\r\n\r\n','As an active, weight-bearing joint, the knee is a source of pain and problems for many people. ','2021-03-07',3,100,80,'Knee pain is common and might be acute or chronic and could result from injury, overuse or growth. It can stem from the tendons, ligaments, bones, cartilage or any other structure within the knee. Arthritis is one of the most common and crippling conditions to affect the knee joint.\r\n\r\nOur compassionate team provides complete care for your knee pain. At MU Health Care’s Missouri Orthopaedic Institute, we offer all the orthopaedic services you need under one roof — from diagnosis to surgery to physical therapy. Our facility is specially designed to make your care easy and comfortable.',5,62),(20,'Hip Pain\r\n\r\n','Appointments\r\n573-882-BONE\r\n\r\n\r\nREFERRALS: CALL 888-884-6836\r\nFind Care\r\nIN THIS SECTION\r\nHip Pain\r\nMeet the Team\r\nHip Replacement Surgery\r\nWhen you have hip pain, walking is often difficult and painful.','2021-08-09',3,120,110,'When your hip cartilage is damaged, you might need hip replacement surgery to relieve your pain. During this surgery, your damaged joint is replaced with an artificial joint.\r\n\r\nThere are multiple hip surgery techniques, and your doctor will talk to you about the best approach.',4,75),(25,'Allergy, Sinus and Nose','If you have allergies, you know they can affect nearly every aspect of your daily life.','2021-08-09',4,120,80,'Our ear, nose and throat (ENT) doctors offer comprehensive diagnoses and treatment of nasal and sinus disorders.\r\n\r\nNasal conditions can stem from something temporary, such as a cold, or something longer lasting, such as a deviated septum. Identifying the root cause allows our team to fix or remove it and lower the chance of future blockages.',3,24),(28,'Ear Surgery','Find Care\r\nIN THIS SECTION\r\nEar Surgery\r\nMeet the Team\r\nCochlear Implants\r\nDo you need surgery to correct an ear-related condition, deformity, disorder or injury?','2022-01-01',4,150,120,'We offer the following surgical procedures: \r\n\r\nBone-anchored hearing aids. Also called Baha implants, these hearing aids are surgically implanted to allow sound to be conducted through the bone instead of the middle ear. They are designed for individuals with conductive or mixed loss, or for single-sided deafness. Services include a candidacy evaluation, programming of the processor and follow-up care. \r\nCanaloplasty of the ear. This procedure widens the external auditory canal to alleviate a blockage, hearing loss or infection. \r\nCochlear implants. These devices can restore hearing in persons who are deaf or have severe hearing loss. Learn more about our cochlear implant program.',1,87),(29,'Voice and Swallow Care','If you have difficulty speaking or swallowing related to an injury or medical condition, you’ll find the care and support you need at University of Missouri Health Care.','2021-05-09',4,110,90,'We offer multiple tailored surgeries and interventions to help improve your swallowing.\r\n\r\nBotox therapy. Your doctor may inject Botox into your upper esophagus to stop or slow esophageal squeezing that causes some swallowing disorders. \r\nDilation. During dilation, your doctor will insert a tube with a light and a balloon at the end into your throat. He or she will guide the tube into your esophagus and expand the balloon to reduce narrowing in the esophagus. \r\nMedications. Certain medicines can help relax the esophagus muscle to decrease swallowing issues. \r\nSurgery. When less invasive treatment options do not help, surgery may be your best option for restored or improved voice or swallowing function. Surgery can:\r\nMake adjustments to the esophagus or other organs whose dysfunction is causing voice and swallowing problems \r\nReduce narrowing in the throat that leads to swallowing problems \r\nRemove cancerous tumors\r\nRemove vocal cord nodules or polyps ',5,43),(30,'Hearing and Balance (Audiology)','The ability to hear well allows you to communicate effectively','2020-01-09',4,65,50,'These include: \r\n\r\nComprehensive audiology testing. These tests help determine your hearing and balance skills. \r\nCustom-made earplugs. Our team can create custom-made earplugs for a variety of needs, including: \r\nHearing protection. These protect ears from excessive levels of noise with custom-made ear molds.\r\nMusician monitors. In-ear monitors and filters to preserve sound quality with protection for musicians. \r\nSwim molds. These molds prevent water from getting into the ears with custom-made earplugs.\r\nHearing aid fitting and follow-up. Our audiologists work with you to determine the best hearing aids for your needs, and then ensure it fits and works correctly. Once fit, we will continue to follow up with you to ensure your hearing aids continue to improve your quality of life. ',4,86),(31,'Pediatric ENT (Ear, Nose and Throat)','When your child is experiencing health problems related to their ears, nose, throat, head or neck, it can affect their entire life.','2020-01-01',4,70,65,'Depending on your child\'s age, noisy breathing can be caused by issues in the voice box (larynx), breathing tube (trachea), or lungs.\r\n\r\nStertor, stridor and wheezing. These terms refer to different sounds that are often described as \"noisy breathing\" depending on where in the respiratory tract the problem is occurring.\r\n\r\nStertor is a noise from the back of the nose or throat that sounds like nasal congestion.\r\nStridor is a high pitch, sometimes \"sqeaky\" sound, and often is caused by issues with or near the voice box. It can be heard when your child breaths in or out — or both.\r\nStridor can be a sign of subglottic stenosis, which involves narrowing of the airway just below the vocal cords, or tracheal stenosis, narrowing of the windpipe (trachea). These conditions can be present at birth (genetic) or can develop in response to infection, irritation, or injury (acquired).\r\nStridor might also be a symptom of vocal cord dysfunction or paralysis. This might be treated with voice therapy, injections, surgery or a mix of the three. If vocal cord dysfunction is present, this stridor is often heard during exercise.\r\nWheezing is a persistent sound that often is related to problems in the lungs. It usually only happens when your child is breathing out.\r\nLaryngomalacia, tracheomalacia and bronchomalacia. These conditions refer to abnormalities with the voice box (laryngomalacia), trachea (tracheomalacia) and lungs (bronchomalacia) that can cause noisy breathing. Symptoms can include irritability, difficulty breathing, poor eating and poor weight gain (or weight loss). ',4,41),(32,'Lung Cancer','If you\'ve been diagnosed with lung cancer, you want a team of specialists that has the resources you need to overcome cancer.','2020-05-06',5,500,400,'Your MU Health Care cancer care team has access to the very latest treatments for lung, esophageal and other chest cancers as well as innovative lung cancer treatments through national clinical trials. As an academic health system, we use the most advanced medical and surgical treatments available and will work with you to create a personalized treatment plan that matches your diagnosis and needs.',3,89),(33,'Cardiothoracic Surgery','If you have a heart or lung condition that requires surgery, turn to MU Health Care. Our expert cardiothoracic surgeons provide personalized care and advanced surgical options to help improve your health.','2020-09-10',5,1000,900,'MU Health Care cardiothoracic surgeons performed the first open-heart procedure in mid-Missouri in 1958. Since then, we have continued to provide advanced care, becoming well-known as one of Missouri’s most active and respected cardiothoracic referral centers. Every year, our cardiothoracic surgeons perform more than 750 cardiothoracic procedures, offering experience you can trust.',4,32),(34,'Pneumonia','Lobar pneumonia: This is an inflammation of the lung parenchyma, inflammation of the alveolar ducts, alveolar sacs, and terminal bronchitis. The disease often occurs in children with low resistance','2021-09-04',5,800,700,'When it is determined that children have pneumonia, depending on the stage and cause of the disease, the doctor has different treatment directions:\r\n\r\nPneumonia in children caused by bacteria and mycoplasma: treat with antibiotics as directed by the doctor.\r\nViral pneumonia in children: treatment with rest and plenty of fluids\r\nFungal pneumonia in children: treatment with antifungal agents.',5,123),(35,'\r\nHepatitis A Test','Hepatitis A test is a blood test','2020-01-09',5,750,650,'Hepatitis A test is a blood test, hepatitis A is mainly transmitted through the digestive tract, food, sharing personal items with infected people.\r\nPatients should be tested for hepatitis A as soon as they have symptoms: body fatigue, nausea, right upper abdominal pain, loss of appetite, fever, pain, itching, yellow skin, yellow eyes, ... Usually after infection Hepatitis A takes about 2 to 3 weeks, the patient will have the above symptoms. Therefore, as soon as an infection is suspected, the patient should be tested promptly to receive early treatment.\r\nViet Han General Clinic - is a prestigious medical examination and treatment unit in Hanoi, with a full range of modern equipment and machines, to meet all the medical examination and treatment needs of customers.',4,127),(36,'General Liver Function Test Package','General Liver Function Test Package','2019-07-09',5,400,300,'General Liver Function Test Package',4,173),(37,'Package for children under 8 ','Package for children under 8 years old advanced','2019-09-08',6,400,399,'Advanced testing package for children under 8 years old at CCARE Health Care Center, including the following test items:\r\n1. General index test\r\n- Blood test 32 indicators - Nutrition test.\r\n- Test liver function, kidney, diabetes\r\n- Check blood fat function\r\n- Check for liver diseases\r\n- Check for cerebrovascular diseases\r\n2. Diagnostic imaging\r\n- Doppler ultrasound of the vertebral artery\r\n- ECG\r\n- General ultrasound, thyroid\r\n- Full vitamin D test\r\n- Full body bacteria check\r\n\r\nGeneral testing for children is important, helping to monitor the child\'s current health status and should be performed periodically.\r\nBlood tests should be done in the morning and children should fast for 6 to 8 hours, for accurate results.\r\nAt CCARE Health Care Center, the examination and testing processes are guaranteed to be disinfected and fast and convenient, helping customers save maximum waiting time and receive results.',5,184),(38,'Intensive package for kids under 8 years old','\r\nAdvanced testing package for children under 8 years old','2020-10-10',6,350,300,'Advanced testing package for children under 8 years old at CCARE Health Care Center, including the following test items:\r\n1. General index test\r\n- Blood test 32 indicators\r\n- Test liver function, kidney, diabetes\r\n- Check blood fat function\r\n- Check for liver diseases\r\n- Check for cerebrovascular diseases\r\n2. Diagnostic imaging\r\n- Doppler ultrasound of the vertebral artery\r\n- ECG\r\n- General ultrasound, thyroid\r\n- Full vitamin D test\r\n- Full body bacteria check\r\n- Abdominal ultrasound - pleural ultrasound\r\nGeneral testing for children is important, helping to monitor the child\'s current health status and should be performed periodically.\r\nBlood tests should be done in the morning and children should fast for 6 to 8 hours, for accurate results.\r\nAt CCARE Health Care Center, the examination and testing processes are guaranteed to be disinfected and fast and convenient, helping customers save maximum waiting time and receive results.',5,144),(39,'\r\nBasic test package for children under 15','\r\nBasic test package for children under 15 years old','2021-10-11',6,500,499,'\r\nThe basic test package for children under 15 years old at CCARE Health Care Center, includes the following test items:\r\n1. General index test\r\n- Blood test 32 indicators\r\n- Test liver function, kidney, diabetes\r\n- Check blood fat function\r\n- Check for liver diseases\r\n- Check for cerebrovascular diseases\r\n2. Diagnostic imaging\r\n- Doppler ultrasound of the vertebral artery\r\n\r\nGeneral testing for children is important, helping to monitor the child\'s current health status and should be performed periodically.\r\nBlood tests should be done in the morning and the child should fast for 6 to 8 hours.\r\nAt CCARE Health Care Center, the examination and testing processes are guaranteed to be disinfected and fast and convenient, helping customers save maximum waiting time and receive results.',4,52),(40,'Tests Complete blood count','Tests Complete blood count','2020-11-12',6,10,9,'\r\nTest A complete blood count is a test that is usually done in cases where\r\n- General health check\r\n- Diagnosis of blood diseases, when there are abnormal symptoms: fatigue, fever, inflammation, bruising, bleeding...\r\n- Monitor the medical condition related to blood cells\r\n\r\nPatients should have blood tests periodically or as soon as there are abnormal symptoms, in order to detect diseases early.\r\n\r\nViet Han General Clinic - is a prestigious medical examination and treatment unit in Hanoi, with a full range of modern equipment and machines, to meet all the medical examination and treatment needs of customers.',4,62),(41,'Endoscopy of esophagus, stomach, duodenum','\r\nNBI technology helps to magnify 100 times, Deep and sharp view under the mucosa helps Detect cancer at an early or very early stage.','2021-05-09',6,500,498,'Book an appointment quickly, reduce waiting time, and the procedure is extremely fast:\r\n- Patients make an appointment at least 1 day in advance to receive priority on time, reducing queuing and waiting time.\r\n- Public and transparent examination prices, the prices on the website are the same as those at the Hospital\r\n- Examination services include doctors consulting, reading results and giving treatment directions, excluding paraclinical services and drugs. The doctor will examine and advise the patient to perform testing and scanning services to clarify the diagnosis if necessary.\r\n- Patients can choose the required doctors, leave a note in the description\r\n- Patients who register for the service will receive a successful appointment message via their phone number to confirm the appointment\r\n- Select the offer or enter the promotion code (if any) to receive a discount when booking',5,64),(42,'foot head add','Get suggestions from Grammarly while you write in desktop ','2022-07-10',1,249,199,'Get suggestions from Grammarly while you write in desktop Get suggestions from Grammarly while you write in desktop ',0,0),(43,'rangggggggggg','ggggggggggggg','2022-07-10',2,249,199,'ggggggggggg',0,0),(44,'them moi 1','aaaaaaaaaaaaaaaaaaaaaaaa','2022-07-10',2,249,199,'aaaaaaaaaaaaaaaaaaaaaaaaaa',0,0),(45,'hong rang ham','cccccccccccccccccccc','2022-07-10',2,249,199,'cccdddddddddddddd',0,0);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_image`
--

DROP TABLE IF EXISTS `service_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `service_id` int DEFAULT NULL,
  `image_link` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`image_id`),
  KEY `FK__service_i__servi__6FE99F9F` (`service_id`),
  CONSTRAINT `FK__service_i__servi__6EF57B66` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`),
  CONSTRAINT `FK__service_i__servi__6FE99F9F` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_image`
--

LOCK TABLES `service_image` WRITE;
/*!40000 ALTER TABLE `service_image` DISABLE KEYS */;
INSERT INTO `service_image` VALUES (2,2,'eye5.jpg'),(4,4,'mouth4.jpg'),(5,5,'mouth5.jpg'),(6,6,'foot5.jpg'),(7,7,'eye5.jpg'),(8,8,'eye3.jpg'),(9,9,'eye4.jpg'),(10,16,'eye5.jpg'),(11,17,'foot1.jpg'),(12,18,'foot2.jpg'),(13,19,'foot3.jpg'),(14,20,'foot4.jpg'),(15,25,'nose5.jpg'),(16,28,'nose2.jpg'),(17,29,'nose3.jpg'),(18,30,'nose4.jpg'),(19,31,'nose5.jpg'),(20,32,'lung1.jpg'),(21,33,'lung2.jpg'),(22,34,'lung3.jpg'),(23,35,'lung4.jpg'),(24,36,'nose2.jpg'),(25,37,'body1.jpg'),(26,38,'body2.jpg'),(27,39,'body3.jpg'),(28,40,'body4.jpg'),(29,41,'body5.jpg'),(30,42,'body2.jpg'),(31,43,'body1.jpg'),(32,44,'foot2.jpg'),(33,45,'nose1.jpg');
/*!40000 ALTER TABLE `service_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_status`
--

DROP TABLE IF EXISTS `service_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_status` (
  `status_id` int NOT NULL,
  `service_id` int NOT NULL,
  `service_status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`status_id`,`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_status`
--

LOCK TABLES `service_status` WRITE;
/*!40000 ALTER TABLE `service_status` DISABLE KEYS */;
INSERT INTO `service_status` VALUES (2,2,1),(4,4,0),(5,5,0),(6,6,0),(7,7,1),(8,8,1),(9,9,1),(10,10,1),(11,11,1),(12,12,1),(13,13,1),(14,14,1),(15,15,1),(16,16,1),(17,17,1),(18,18,1),(19,19,1),(20,20,1),(21,21,1),(22,22,1),(23,23,1),(24,24,1),(25,25,1),(26,26,1),(27,27,1),(28,28,1),(29,29,1),(30,30,1),(31,31,1),(32,32,1),(33,33,1),(34,34,1),(35,35,1),(36,36,1),(37,37,1),(38,38,1),(39,39,1),(40,40,0),(41,41,1),(42,42,0),(43,43,1),(44,44,0),(45,45,0);
/*!40000 ALTER TABLE `service_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setting`
--

DROP TABLE IF EXISTS `setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `setting` (
  `setting_id` int NOT NULL AUTO_INCREMENT,
  `setting_name` text COLLATE utf8mb3_bin,
  `setting_value` int DEFAULT NULL,
  `setting_description` text COLLATE utf8mb3_bin,
  `setting_status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`setting_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setting`
--

LOCK TABLES `setting` WRITE;
/*!40000 ALTER TABLE `setting` DISABLE KEYS */;
INSERT INTO `setting` VALUES (1,'About',29,'Show information about web designer',1),(2,'Service List',12,'Show list of service',1),(3,'Hot Service',1,'Show top 4 hot services',1),(4,'Blog list',4,'Show list of blog ',1),(5,'Doctor',5,'Show list of doctor',1),(6,'Feedback',10,'Show list of feedback',1),(8,'User list',12,'Show list of user',1),(9,'Service managerment',17,'Show list of service ',1),(10,'Manager account',20,'Show list of account',1),(11,'Manager Blog',12,'Show list of Blog',1),(12,'Manager Reservation',17,'Show list of Reservation',1),(13,'Manager Slide',20,'Show list of slide',1),(14,'Manger Feedback',11,'Show list of feedback',1),(15,'Nguyen Ngoc Hoan',23,'test',1),(16,'Nguyen Ngoc Khoa',12,'test 2',1),(17,'test final',12,'test 2',1),(18,'Nguyen Ngoc Khoa',13,'test final',0),(19,'Setting test',12,'Setting test',0);
/*!40000 ALTER TABLE `setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slider` (
  `slider_id` int NOT NULL AUTO_INCREMENT,
  `slider_title` text COLLATE utf8mb3_bin,
  `category_id` int DEFAULT NULL,
  `slider_status` tinyint(1) DEFAULT NULL,
  `service_id` int DEFAULT NULL,
  `notes` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`slider_id`),
  KEY `FK__slider__category__5FB337D6` (`category_id`),
  CONSTRAINT `FK__slider__category__5EBF139D` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FK__slider__category__5FB337D6` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES (1,'Compose bold, clear, mistake-free writing with Grammarly new AI-powered desktop',1,1,1,'test1'),(2,'Compose bold, clear, mistake-free writing with Grammarly new AI-powered desktop',2,0,2,'test1'),(3,'test3',3,0,3,'test1'),(4,'test4',4,0,4,'test1'),(5,'test5',5,0,5,'test1'),(6,'test7',6,0,6,'test1'),(7,'test7',6,1,7,'test1'),(8,'test8',4,0,8,'test1'),(9,'test9',4,0,9,'Our Intensive English Program is your chance to improve your English skills.'),(16,'test16',4,1,16,'Our Intensive English Program is your chance to improve your English skills.'),(17,'test17',4,1,17,'Our Intensive English Program is your chance to improve your English skills.'),(18,'test18',5,0,18,'Our Intensive English Program is your chance to improve your English skills.'),(19,'test19',4,1,19,'Our Intensive English Program is your chance to improve your English skills.'),(20,'test20',4,1,20,'Our Intensive English Program is your chance to improve your English skills.'),(25,'test25',2,0,25,'Our Intensive English Program is your chance to improve your English skills.'),(28,'test27',3,0,28,'Our Intensive English Program is your chance to improve your English skills.'),(29,'test28',2,0,29,'Our Intensive English Program is your chance to improve your English skills.'),(30,'test29',2,0,30,'Our Intensive English Program is your chance to improve your English skills.'),(31,'test30',4,0,31,'Our Intensive English Program is your chance to improve your English skills.'),(32,'test31',5,0,32,'Our Intensive English Program is your chance to improve your English skills.'),(33,'test32',5,0,33,'Our Intensive English Program is your chance to improve your English skills.'),(34,'test33',3,0,34,'Our Intensive English Program is your chance to improve your English skills.'),(35,'test34',6,0,35,'Our Intensive English Program is your chance to improve your English skills.'),(36,'test35',3,0,36,'Our Intensive English Program is your chance to improve your English skills.');
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider_services`
--

DROP TABLE IF EXISTS `slider_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slider_services` (
  `slider_id` int NOT NULL,
  `service_id` int NOT NULL,
  PRIMARY KEY (`slider_id`,`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider_services`
--

LOCK TABLES `slider_services` WRITE;
/*!40000 ALTER TABLE `slider_services` DISABLE KEYS */;
INSERT INTO `slider_services` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15),(16,16),(17,17),(18,18),(19,19),(20,20),(21,21),(22,22),(23,23),(24,24),(25,25),(26,26),(27,27),(28,28),(29,29),(30,30),(31,31),(32,32),(33,33),(34,34),(35,35),(36,36),(37,37),(38,38),(39,39),(40,40),(41,41);
/*!40000 ALTER TABLE `slider_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_fullname` text COLLATE utf8mb3_bin,
  `user_gender` tinyint(1) DEFAULT NULL,
  `user_address` text COLLATE utf8mb3_bin,
  `user_password` text COLLATE utf8mb3_bin,
  `user_email` text COLLATE utf8mb3_bin,
  `user_phone` text COLLATE utf8mb3_bin,
  `role_id` int DEFAULT NULL,
  `user_status` tinyint(1) DEFAULT NULL,
  `user_image` text COLLATE utf8mb3_bin,
  PRIMARY KEY (`user_id`),
  KEY `FK__user__role_id__73BA3083` (`role_id`),
  CONSTRAINT `FK__user__role_id__72C60C4A` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  CONSTRAINT `FK__user__role_id__73BA3083` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (13,'Nguyen Ngoc Hoan',1,'Ha Noi','HYCWSXM','datkmhe150913@fpt.edu.vn','0869510920',1,1,'z4119333173751_578ff1417c2fad0e4873b5b56ad7a107.jpg'),(16,'Allistir Marzello',1,'5 Graceland Court','BWfaZBabf','amarzello3@merriam-webster.com','558 530 3549',4,1,'captain1.jpg'),(17,'Alma Gecks',0,'071 Del Sol Hill','BWfaZBabf','agecks4@yale.edu','0337472684',2,0,'scarletwitch.jpg'),(18,'Mohandis Raun',1,'7133 Dapin Drive','suEOVB','mraun5@about.com','386 286 5839',3,0,'hao.jpg'),(19,'Mohandis Raunis',0,'74 Meadow Valley Lane','Fk8bitn6P9','gbidmead6@amazon.co.jp','896 768 5609',4,0,'rocket.jpg'),(20,'Lilyan Norwell',1,'8 Utah Court','UTUwSE5','lnorwell7@wired.com','204 590 8203',2,0,'wintersoldier.jpg'),(21,'Simone Renyard',0,'97838 4th Court','JUJc8wlq','srenyard8@studiopress.com','570 151 8768',3,0,'hulk.jpg'),(22,'Morena Opdenort',1,'07930 Shopko Park','2FDgPJnUeth2','mopdenort9@istockphoto.com','462 547 8132',4,1,'blackpanther.jpg'),(23,'Terrance Greyes',0,'251 Steensland Junction','a5nDdPkKlbM','tgreyesa@redcross.org','265 670 0071',2,0,'scarletwitch1.jpg'),(24,'Darius Castilla',1,'54455 Manitowish Terrace','UbWzOElDwn','dcastillab@acquirethisname.com','794 537 1812',3,1,'hawkeye.jpg'),(25,'Roi Bowbrick',0,'4 Caliangt Avenue','ZMhzbS2iMqT','ckarlmannc@qq.com','164 790 7825',4,0,'blackwidow.jpg'),(26,'Mikkel Ricson',1,'6016 Bellgrove Circle','8xmzBv','rbowbrickd@mit.edu','632 511 0253',2,0,'captain1.jpg'),(32,'Nguyễn Ngọc Khoa',1,'123','123','khoa@gmail.com','123',2,1,'hoanonfire.jpg'),(33,'Nguyen Ngoc Hoan',1,'Ha noi','matma123','hoannnhe151308@fpt.edu.vn','0869510920',5,1,'hoanonfire.jpg'),(35,'Nguyen Ngoc Hoan',1,'Ha noi','khoadeptrai','khoannhe153156@fpt.edu.vn','0869511920',1,1,'hao.jpg'),(38,'Nguyễn Ngọc Hoàn',1,'3123','12312','Hoan@gmail.com','123',1,1,'hoanonfire.jpg'),(40,'Linh Ngu',1,'Hanoi','CENPLTI','sktn@gmail.com','0869510920',1,1,'hoanonfire.jpg'),(47,'Nguyen Phong Hao',1,'Hanoi','12345','hao@gmail.com','0879650910',4,1,'hoanonfire.jpg'),(48,'Nguyen Huu Quyet',1,'Hanoi','12345','quyet@gmail.com','0896570921',4,1,NULL),(49,'Tran Van Tung',0,'Thanh Hoa','123','trantungmr11@gmail.com','0337472684',1,1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'childrencare'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-21 12:08:25
