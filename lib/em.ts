import { EntityManager } from "@/entities/index";
import { newPgConnectionConfig, PostgresDriver } from "joist-orm";
import { JsonAggregatePreloader } from "joist-plugin-join-preloading";
import { knex as createKnex } from "knex";

const knex = createKnex({
  client: "pg",
  connection: newPgConnectionConfig() as any,
  debug: true,
  asyncStackTraces: true,
});

export function newEm(): EntityManager {
  const driver = new PostgresDriver(knex);
  const preloadPlugin = new JsonAggregatePreloader();
  return new EntityManager({}, { driver, preloadPlugin });
}
