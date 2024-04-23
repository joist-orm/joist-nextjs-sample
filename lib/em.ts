import { EntityManager } from "@/entities/index";
import { cache } from "react";
import { newPgConnectionConfig, PostgresDriver } from "joist-orm";
import { JsonAggregatePreloader } from "joist-plugin-join-preloading";
import { knex as createKnex } from "knex";

declare global {
  var globalDriver: undefined | PostgresDriver;
}

// Use prisma's approach to keep `yarn dev` from using all the local db connections
const driver = globalThis.globalDriver ?? newDriver();
if (process.env.NODE_ENV !== "production") globalThis.globalDriver = driver;

/** Returns this request's `EntityManager` instance. */
export const getEm = cache(() => {
  const preloadPlugin = new JsonAggregatePreloader();
  return new EntityManager({}, { driver, preloadPlugin });
});

function newDriver() {
  const knex = createKnex({
    client: "pg",
    connection: newPgConnectionConfig() as any,
    // print out queries to stdout for demo purposes
    debug: true,
    asyncStackTraces: true,
  });
  return new PostgresDriver(knex);
}
