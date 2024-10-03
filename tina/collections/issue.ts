import { Collection } from "tinacms";

const Issue: Collection = {
  name: "issue",
  label: "Issues",
  path: "content/issues",
  fields: [
    {
      type: "string",
      name: "issue",
      label: "Issue",
      required: true,
    },
  ],
};

export default Issue;
