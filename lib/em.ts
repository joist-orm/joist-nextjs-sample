import { EntityManager } from "@/entities/index";
import { newPgConnectionConfig, PostgresDriver } from "joist-orm";
import { JsonAggregatePreloader } from "joist-plugin-join-preloading";
import { knex as createKnex } from "knex";
import { cache } from "react";

function newDriver() {
  const knex = createKnex({
    client: "pg",
    connection: newPgConnectionConfig() as any,
    debug: true,
    asyncStackTraces: true,
  });
  return new PostgresDriver(knex);
}

declare global {
  var globalDriver: undefined | PostgresDriver;
}

const driver = globalThis.globalDriver ?? newDriver();
if (process.env.NODE_ENV !== "production") globalThis.globalDriver = driver;

// This will be cached pre-request I guess?
const preloadPlugin = new JsonAggregatePreloader();
const em = new EntityManager({}, { driver, preloadPlugin });

/** Cache each server-side request's `EntityManager` instance. */
export function getEm() {
  return em;
}
