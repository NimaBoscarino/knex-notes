## Knex

This breakout is pretty packed! Here we introduce Knex, an SQL query builder for Node. As always, let's start off by listing out some links to documenation:

1. [Knex Docs](https://knexjs.org/)
2. [Knex Migrations](http://perkframework.com/v1/guides/database-migrations-knex.html)
3. Vaz has [GREAT notes](https://github.com/vaz/knex-demo/) on Knex + Migrations

The main goals for the breakout were...

1. Understanting the benefits of Query Building vs. Raw SQL
2. An intro to Knex
3. Migrations:
    - Why do migrations exist?
    - Actually, what are they even?

### Knex Intro
First, let's start by installing Knex. You should install Knex globally (`npm i --global knex`) to get access to the command-line tools. You should also install knex locally (`npm i knex --save`) to use Knex in your app. In your main folder for your app, run `knex init`. This generates a configuration file

Some people don't like writing straight SQL queries. If you're one of these people, you're in luck! Knex gives us a greaet abstraction away from having to write SQL queries. The cost is that the syntax is a *little* weird. 

```js
knex.select('title', 'author', 'year').from('books')
```

Generally, pretty much anything that you can do in SQL, you can do with Knex. This includes (but is not limited to):

1. Joins
2. Selects with WHERE clauses
3. Inserts, Updates, Deletes
4. Really any CRUD actions
5. Creating tables
6. Creating foreign keys
7. ... the list goes on!

I **highly** suggest getting really familiar with both "straight" SQL (i.e. working in the PSQL shell) and with Knex. You'll find that using Knex is much simpler if you have a good grasp of the SQL that runs underneath.

When you look in the Knex documentation, you'll see that Knex offers both a "Promise" interface, and a "Callback" interface. We haven't discussed Promises yet, so stick with the "Callback" interface by throwing `.asCallback()` at the end of your queries. Take a look in `knex_demo` for examples of this.

In the `kanye` folder, you'll see that the `kanye` example has been modified a bit from what it originally was from the ["SQL from our Apps"](https://github.com/NimaBoscarino/pg-node-notes) lecture. One of the changes is that the `data/data-songs.js` file now uses `knex` for one of the functions, instead of `pg`.


### Migrations
Another change in this new `kanye` project is that we defined the schema for the app using **migrations**. Simply put, migrations are "version control" for your database schema. In Knex, we initialize a new migration with

```
knex migrate:make <name>
```

in the command line. This will generate a file with the skeleton of a migration:

```js
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
```

You can then edit this file to define the changes that migration will make. For example, in this migration I create a table called 'artists', with 4 columns: id, created_at, updated_at, and name. We also have to define the "down" action, which is the reveral of the change. In this case, the "down" action drops the 'artists' table.

```js
exports.up = function(knex) {
    return knex.schema.createTable('artists', (table) => {
        table.increments(); // Creates an auto-incrementing primary key called id
        table.timestamps(); // Creates created_at and updated_at datetimes.
        table.string('name').unique().notNullable(); // string is varchar(255)
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('artists');
};
```

There are many different things we can do in a migration. Take a look in the `migrations` folder in the `kanye` project to see some examples. To all the migrations (up to the most recent), we hop into the command line and run `knex migrate:latest`. We can always roll backwards one version by running `knex migrate:rollback`.

### Seeding

It's convenient to define a set of data to populate our database. This is called **seed** data. With Knex, we can create a "seed file" by running `knex seed:make <name>` in the command line. This generates a skeleton file where we can define the data we'd like to put into our database.

```js
// kanye/seeds/seeds.js
// My example of a seed file
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        { name: 'Nas'},
        { name: 'Biggie Smalls'},
        { name: 'Tupac'}
      ]);
    });
};
```

In the example above, notice that the first thing that happens is `knex('artists').del()`. This command deletes all the entries in the 'artists' table without dropping the table. Then we proceed with a bulk insert objects.

This seed file is just a specification, however. To actually *run* the seeds and populate the database, we use the command-line tool.

```
knex seed:run
```

I really suggest taking a look at the other lecture notes in Compass (e.g. Karl, Joel), and taking a look at [Vaz's demo](https://github.com/vaz/knex-demo/).

Enjoy!

~ Nima Boscarino 🤖