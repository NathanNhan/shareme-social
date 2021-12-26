export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "destination",
      title: "Destination",
      type: "url",
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    },
    {
      name: "userId",
      title: "UserId",
      type: "string",
    },
    {
      name: "comment",
      title: "Commtent",
      type: "array",
      of: [{ type: "comment" }],
    },
    {
      name: "save",
      title: "Save",
      type: "array",
      of: [{ type: "save" }],
    },
  ],
};