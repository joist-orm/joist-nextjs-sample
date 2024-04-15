
# joist-nextjs-sample

This is a fork of a [Vercel Postgres](https://vercel.com/postgres) that uses [Joist](https://joist-orm.io/) as the ORM.

Disclaimer: I've not actually deployed this to Vercel, I just added a local `docker-compose` setup to test it locally.

# Commands

* `yarn db` will start a local Postgres instance in docker
  * The `db.dockerfile` and `db-schema.sql` have an extremely small/naive test schema setup
  * Each invocation of `yarn db` will recreate the database with `db-schema.sql`
* `yarn joist-codegen` will regenerate the codegen files after each schema change
* `yarn seed` will load the `./seeds/authorWithSomeBooks.ts` file into the local database
* `yarn dev` will start the Next.js server as usual

# File Layout

* `./entities/` has the Joist entities
    * `./entities/codegen/AuthorCodegen.ts` will be overwritten on every change to the db
    * `./entities/Author.ts` is where you can add custom methods
* `./lib/em.ts` exports a `getEm` function for server-side code to get an `EntityManager` instance
* `.env` is a (for demo only) checked-in with the test `DATABASE_URL` for local development
* `./components/table.tsx` shows doing an `em.find` in a Next.js page

