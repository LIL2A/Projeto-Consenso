INSERT INTO `Usuario` (`nome`,`sobrenome`,`email`,`senha`)
VALUES
  ("Nolan","de Morais","non.sapien@yahoo.couk",6763),
  ("Stella","Dutra","orci@outlook.edu",8121),
  ("Guy","Muniz","interdum@hotmail.net",4197),
  ("Tucker","da Silveira","lacus.varius@icloud.org",3894),
  ("Carter","Braga","orci.lacus@protonmail.org",6438),
  ("Camille","Santiago","libero.integer@aol.net",2635),
  ("Nero","Diniz","euismod@icloud.couk",8186),
  ("Carol","de Azevedo","ut.pharetra@yahoo.edu",7060),
  ("Gage","de Oliveira","bibendum.sed@outlook.org",4067),
  ("Jaime","Moura","cum@aol.com",3444),
  ("Tanya","dos Reis","mauris.vel@icloud.couk",1422);

-- DROP TABLE IF EXISTS `TipoUsuario`;

--  CREATE TABLE `tb_tipousuario` (
--   `id` mediumint(8) unsigned NOT NULL auto_increment,
--    `nome` varchar(255) default NULL,
--    PRIMARY KEY (`id`)
--  ) AUTO_INCREMENT=1;

INSERT INTO `tb_tipousuario` (`nome`)
VALUES
  ("cliente"),
  ("prestador");


INSERT INTO `tb_servico` (`nome`,`descricao`)
VALUES
  ("Troca de registro","augue malesuada malesuada. Integer"),
  ("Manutencao Registro","natoque penatibus et magnis dis parturient"),
  ("Releitura","amet, consectetuer");


-- DROP TABLE IF EXISTS `tb_agendamento`;

-- CREATE TABLE `tb_agendamento` (
--   `id` mediumint(8) unsigned NOT NULL auto_increment,
--   `data` varchar(255),
--   `hora` varchar(255),
--   PRIMARY KEY (`id`)
-- ) AUTO_INCREMENT=1;

INSERT INTO `tb_agendamento` (`data`,`hora`)
VALUES
 
 ("2023-07-30","16:27"),
 ("2023-04-15","11:25"),
 ("2023-02-24","12:42"),
 ("2023-01-29","11:17"),
 ("2023-09-12","17:47"),
 ("2023-05-26","16:12"),
 ("2023-02-27","16:27"),
 ("2023-06-12","16:27"),
 ("2023-04-22","16:27"),
 ("2023-01-16","16:27");


  -- ("04/12/2022","7:48"),
  -- ("11/08/2023","19:49"),
  -- ("15/08/2022","2:55"),
  -- ("04/10/2022","14:59"),
  -- ("24/08/2023","22:49"),
  -- ("25/07/2022","3:30"),
  -- ("01/10/2023","1:47"),
  -- ("07/12/2023","16:52"),
  -- ("29/11/2023","12:32"),
  -- ("03/08/2023","13:14"),
  -- ("01/08/2022","10:23"),
  -- ("10/03/2022","14:36"),
  -- ("10/03/2023","12:08"),
  -- ("01/08/2023","7:24"),
  -- ("10/12/2023","21:35"),
  -- ("03/08/2022","2:56")