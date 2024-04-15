import { EntityManager, newAuthor } from "@/entities/index";
import { newPgConnectionConfig, PostgresDriver } from "joist-orm";
import { knex as createKnex } from "knex";
import "dotenv/config";

const knex = createKnex({ client: "pg", connection: newPgConnectionConfig() });
const driver = new PostgresDriver(knex);
const em = new EntityManager({}, { driver });

async function seed() {
  await knex.select(knex.raw("flush_database()"));
  newAuthor(em, { firstName: "a1", books: [{}, {}, {}] });
  newAuthor(em, { firstName: "a2", books: [{}, {}] });
  await em.flush();
}

seed().then(() => {
  console.log("Seeded!");
  return knex.destroy();
});
