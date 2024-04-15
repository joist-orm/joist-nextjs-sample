import { EntityManager, newAuthor } from "@/entities/index";
import { seed } from "joist-test-utils";

seed<EntityManager>(async (em) => {
  newAuthor(em, { firstName: "a1", books: [{}, {}, {}] });
  newAuthor(em, { firstName: "a3", books: [{}, {}] });
});
