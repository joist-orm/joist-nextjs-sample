import { EntityManager } from "@/entities/index";
import { newPgConnectionConfig, PostgresDriver } from "joist-orm";
import { JsonAggregatePreloader } from "joist-plugin-join-preloading";
import { knex as createKnex } from "knex";
import { cache } from "react";

/** Cache each server-side request's `knex` instance. */
const getKnex = cache(() =>
  createKnex({
    client: "pg",
    connection: newPgConnectionConfig() as any,
    debug: true,
    asyncStackTraces: true,
  }),
);

/** Cache each server-side request's `EntityManager` instance. */
export const getEm = cache(() => {
  const driver = new PostgresDriver(getKnex());
  const preloadPlugin = new JsonAggregatePreloader();
  return new EntityManager({}, { driver, preloadPlugin });
});
