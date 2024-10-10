import { Collection } from "tinacms";

const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "src/content/posts",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "reference",
      name: "author",
      label: "Author",
      collections: ['author'],
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default Post;
