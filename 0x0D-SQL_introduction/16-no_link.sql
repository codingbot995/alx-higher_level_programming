-- Lists all records of the table second_table having  name value in my MySQL server.
-- Records  ordered by descending score.
SELECT `score`, `name`
FROM `second_table`
WHERE `name` != ""
ORDER BY `score` DESC
