import * as fs from "fs";
import * as path from "path";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import unified from "unified";
import { reporter } from "vfile-reporter";
import { remarkCard } from "./remark-card.mjs";

const doc = fs.readFileSync("./docs/postflop/postflop.mdx");

unified()
  .use(remarkParse)
  .use(remarkCard)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(doc, (err, file) => {
    console.error(reporter(err || file));

    console.log(file);
  });
