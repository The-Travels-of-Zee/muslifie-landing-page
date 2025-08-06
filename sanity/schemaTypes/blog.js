import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Optional subtitle for the blog post",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required().error("Author is required"),
    }),
    defineField({
      name: "date",
      title: "Publication Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error("Publication date is required"),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      placeholder: "e.g., 6 min read",
      description: "Estimated reading time",
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
      description: "Number of views (can be updated automatically)",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "All", value: "All" },
          { title: "Travel Tips", value: "Travel Tips" },
          { title: "Destinations", value: "Destinations" },
          { title: "Guides", value: "Guides" },
          { title: "Halal Food", value: "Halal Food" },
          { title: "Hotels", value: "Hotels" },
          { title: "Culture", value: "Culture" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("Category is required"),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add relevant tags for better discoverability",
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Featured image is required"),
    }),
    defineField({
      name: "content",
      type: "markdown",
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule) => Rule.max(60).warning("Meta titles should be under 60 characters"),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          validation: (Rule) => Rule.max(160).warning("Meta descriptions should be under 160 characters"),
        },
        {
          name: "ogImage",
          title: "Social Media Image",
          type: "image",
          description: "Image for social media sharing (recommended: 1200x630px)",
        },
        {
          name: "noIndex",
          title: "Hide from search engines",
          type: "boolean",
          initialValue: false,
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
      description: "Mark as featured to highlight in special sections",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image",
      date: "date",
      category: "category",
    },
    prepare(selection) {
      const { title, author, media, date, category } = selection;
      const formattedDate = date ? new Date(date).toLocaleDateString() : "No date";

      return {
        title,
        subtitle: `${category} • ${author} • ${formattedDate}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date, New",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Date, Old",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
