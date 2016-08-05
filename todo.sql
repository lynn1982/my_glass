SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for todo
-- ----------------------------
DROP TABLE IF EXISTS `bearcat_todo`;
CREATE TABLE `bearcat_todo` (
  `id` bigint(20) NOT NULL,
  `title` varchar(300) default NULL,
  `finished` int(11) default 0,
  `post_date` bigint(20) default 0,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table IDGenerator(
    name varchar(50) NOT NULL,
    id bigint(20) unsigned NOT NULL DEFAULT 0,
    
    PRIMARY KEY (name)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into IDGenerator (name, id) values ('bearcat_todo', 0);