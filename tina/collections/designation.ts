import { Collection } from "tinacms";

const Designation: Collection = {
  name: "designation",
  label: "Designations",
  path: "src/content/designations",
  fields: [
    {
      type: "string",
      name: "designation",
      label: "Designation",
      required: true,
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",
      isBody: true,
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
};

export default Designation;
