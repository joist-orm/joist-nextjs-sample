import { EntityManager } from "@/entities/index";
import { newPgConnectionConfig, PostgresDriver } from "joist-orm";
import { knex as createKnex } from "knex";

const knex = createKnex({
  client: "pg",
  connection: newPgConnectionConfig() as any,
  debug: true,
  asyncStackTraces: true,
});

export function newEm(): EntityManager {
  const driver = new PostgresDriver(knex);
  return new EntityManager({}, driver);
}
