-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: Ejercicio1GCBA
-- ------------------------------------------------------
-- Server version	8.0.36-1
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO,ANSI' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table "PRODUCTO"
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE "PRODUCTO" (
  "id" int unsigned NOT NULL AUTO_INCREMENT,
  "nombre" varchar(255) NOT NULL,
  "descripcion" varchar(255) NOT NULL,
  "precio" decimal(10,2) NOT NULL,
  "cantidad" int unsigned NOT NULL,
  "createdAt" datetime NOT NULL,
  "updatedAt" datetime NOT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "PRODUCTO"
--

INSERT INTO "PRODUCTO" VALUES (1,'Lápiz','Lápiz de grafito HB',0.50,100,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (2,'Cuaderno','Cuaderno de 100 hojas',1.25,50,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (3,'Borrador','Borrador blanco de goma',0.30,200,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (4,'Regla','Regla de 30 cm de plástico',0.75,80,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (5,'Mochila','Mochila escolar de colores',15.99,20,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (6,'Tijeras','Tijeras de seguridad para niños',2.50,60,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (7,'Calculadora','Calculadora científica',12.00,30,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (8,'Bolígrafo','Bolígrafo azul de tinta gel',0.70,150,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (9,'Marcador','Marcador permanente negro',1.00,100,'2024-07-04 16:00:35','2024-07-04 16:00:35');
INSERT INTO "PRODUCTO" VALUES (10,'Pegamento','Pegamento en barra',0.90,120,'2024-07-04 16:00:35','2024-07-04 16:00:35');

--
-- Dumping routines for database 'Ejercicio1GCBA'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-04 16:01:13
