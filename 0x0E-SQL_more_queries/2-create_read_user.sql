--creates the database hbtn_0d_2 and the user user_0d_2
CREATE DATABASE IF NOT EXIST hbtn_0d_2;
CREATE USER IF NOT EXIST 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d_2_pwd';
GRANT SELECTION ON 'hbtn_0d_2' .* TO 'user_0d_2'@'localhost';
FLUSH PRIVILEGES;
