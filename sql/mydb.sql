-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`entity_definition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`entity_definition` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`entity_value`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`entity_value` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `entity_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_entity_value_entity_definition_idx` (`entity_id` ASC),
  CONSTRAINT `fk_entity_value_entity_definition`
    FOREIGN KEY (`entity_id`)
    REFERENCES `mydb`.`entity_definition` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`property_definition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`property_definition` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `type` INT(11) NOT NULL,
  `entity_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_property_definition_entity_definition1_idx` (`entity_id` ASC),
  CONSTRAINT `fk_property_definition_entity_definition1`
    FOREIGN KEY (`entity_id`)
    REFERENCES `mydb`.`entity_definition` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`property_value`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`property_value` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NULL DEFAULT NULL,
  `property_id` INT(11) NOT NULL,
  `entity_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_property_value_property_definition1_idx` (`property_id` ASC),
  INDEX `fk_property_value_entity_value1_idx` (`entity_id` ASC),
  CONSTRAINT `fk_property_value_entity_value1`
    FOREIGN KEY (`entity_id`)
    REFERENCES `mydb`.`entity_value` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_property_value_property_definition1`
    FOREIGN KEY (`property_id`)
    REFERENCES `mydb`.`property_definition` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
