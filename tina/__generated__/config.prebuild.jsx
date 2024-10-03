// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/post.ts
import "tinacms";
var Post = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "reference",
      name: "author",
      label: "Author",
      collections: ["author"]
    },
    {
      type: "datetime",
      label: "Date",
      name: "date"
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};
var post_default = Post;

// tina/collections/page.ts
import "tinacms";
var Page = {
  name: "page",
  label: "Pages",
  path: "src/pages",
  defaultItem: () => {
    return {
      layout: "../layouts/Layout.astro"
    };
  },
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout"
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ],
  ui: {
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      }
    }
  }
};
var page_default = Page;

// tina/collections/author.ts
import "tinacms";
var Author = {
  name: "author",
  label: "Authors",
  path: "content/authors",
  fields: [
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true
    },
    {
      type: "rich-text",
      name: "bio",
      label: "Bio",
      isBody: true
    }
  ]
};
var author_default = Author;

// tina/collections/issue.ts
import "tinacms";
var Issue = {
  name: "issue",
  label: "Issues",
  path: "content/issues",
  fields: [
    {
      type: "string",
      name: "issue",
      label: "Issue",
      required: true
    }
  ]
};
var issue_default = Issue;

// tina/collections/designation.ts
import "tinacms";
var Designation = {
  name: "designation",
  label: "Designations",
  path: "content/designations",
  fields: [
    {
      type: "string",
      name: "designation",
      label: "Designation",
      required: true
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",
      isBody: true
    }
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  }
};
var designation_default = Designation;

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [post_default, page_default, author_default, issue_default, designation_default]
  }
});
export {
  config_default as default
};
