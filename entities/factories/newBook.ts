import { DeepNew, FactoryOpts, newTestInstance, testIndex } from "joist-orm";
import { Book } from "../entities";
import type { EntityManager } from "../entities";

export function newBook(
  em: EntityManager,
  opts: FactoryOpts<Book> = {},
): DeepNew<Book> {
  return newTestInstance(em, Book, opts, {
    title: `Book ${testIndex}`,
    foreword: `a long sentence ${testIndex}`,
  });
}
