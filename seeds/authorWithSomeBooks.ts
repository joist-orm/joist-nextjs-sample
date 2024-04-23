import { EntityManager, newAuthor } from "@/entities/index";
import { seed } from "joist-test-utils";

seed<EntityManager>(async (em) => {
  newAuthor(em, { firstName: "Bob", books: [{}, {}, {}] });
  newAuthor(em, { firstName: "Fred", books: [{}] });
  newAuthor(em, { firstName: "Mary", books: [{}, {}] });
});
