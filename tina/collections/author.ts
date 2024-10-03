import { Collection } from "tinacms";

const Author: Collection = {
  name: "author",
  label: "Authors",
  path: "content/authors",
  fields: [
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true,
    },
    {
      type: "rich-text",
      name: "bio",
      label: "Bio",
      isBody: true,
    },
  ],
};

export default Author;
