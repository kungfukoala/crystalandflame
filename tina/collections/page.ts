import { Collection } from "tinacms";

const Page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/pages",
  defaultItem: () => {
    return {
      layout: '../layouts/Layout.astro'
    }
  },
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
  ui: {
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `${values?.title
          ?.toLowerCase()
          .replace(/ /g, '-')}`
      },
    },
  },
};

export default Page;
