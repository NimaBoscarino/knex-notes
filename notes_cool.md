# KNEX + DATABASE MIGRATIONS

Benefits of query builders compared to raw SQL
Introduction to Knex
Migrations: why they exist and their benefits

## SQL 🤮

Node -> Postgres

- pg module
  - pg.runQuery('SELECT * FROM .....')

## Have a thing wrap around common SQL stuff

```js
thing.select('*').from('table')
```

Layer of Abstraction

- dealing with queries
- dealing with databases in general


Social media platform

  - profile
    - name, picture, email address, home address, blood type....

  - friends
  - payments

SQL: ALTER TABLE (add columns, remove column)
SQL: CREATE TABLE, DROP TABLE

Version control with git helps us keep track of our project's growth.

Databases can have version control too!

The whole DB is in this script

```sql
 CREATE TABLE....
```


Folder (database stuff), and in there have lots of little files

January7th2019-ADDUSERSTODATABASE.sql
January10th2019-ADDFRIENDSTODATABASE.sql
...

## Migration




