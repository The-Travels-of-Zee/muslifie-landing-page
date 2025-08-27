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
      name: "lastModified",
      title: "Last Modified",
      type: "datetime",
      description: "Automatically updated when content changes (for SEO freshness signals)",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Brief summary of the post (used for previews and meta descriptions if not specified)",
      validation: (Rule) => Rule.max(300).warning("Excerpts should be under 300 characters for best results"),
    }),
    defineField({
      name: "seo",
      title: "SEO & Social Media",
      type: "object",
      fields: [
        // Basic Meta Tags
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "Custom title for search engines (if different from post title)",
          validation: (Rule) => [
            Rule.max(60).warning("Meta titles should be under 60 characters for Google"),
            Rule.min(30).warning("Meta titles should be at least 30 characters"),
          ],
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          description: "Description shown in search results (will use excerpt if empty)",
          validation: (Rule) => [
            Rule.max(160).warning("Meta descriptions should be under 160 characters"),
            Rule.min(120).warning("Meta descriptions should be at least 120 characters for best results"),
          ],
        },

        // Focus Keywords
        {
          name: "focusKeyword",
          title: "Focus Keyword",
          type: "string",
          description: "Primary keyword you want to rank for",
        },
        {
          name: "secondaryKeywords",
          title: "Secondary Keywords",
          type: "array",
          of: [{ type: "string" }],
          description: "Additional keywords to target (LSI keywords)",
          options: {
            layout: "tags",
          },
        },

        // Open Graph (Facebook, LinkedIn, etc.)
        {
          name: "ogTitle",
          title: "Social Media Title",
          type: "string",
          description: "Title for social media sharing (defaults to meta title or post title)",
          validation: (Rule) => Rule.max(95).warning("Social media titles should be under 95 characters"),
        },
        {
          name: "ogDescription",
          title: "Social Media Description",
          type: "text",
          rows: 2,
          description: "Description for social media sharing (defaults to meta description or excerpt)",
          validation: (Rule) => Rule.max(300).warning("Social media descriptions should be under 300 characters"),
        },
        {
          name: "ogImage",
          title: "Social Media Image",
          type: "image",
          description: "Custom image for social media sharing (recommended: 1200x630px)",
          options: {
            hotspot: true,
          },
        },
        {
          name: "ogType",
          title: "Open Graph Type",
          type: "string",
          options: {
            list: [
              { title: "Article", value: "article" },
              { title: "Website", value: "website" },
              { title: "Blog", value: "blog" },
            ],
          },
          initialValue: "article",
        },

        // Twitter Card
        {
          name: "twitterCard",
          title: "Twitter Card Type",
          type: "string",
          options: {
            list: [
              { title: "Summary", value: "summary" },
              { title: "Summary Large Image", value: "summary_large_image" },
            ],
          },
          initialValue: "summary_large_image",
        },
        {
          name: "twitterTitle",
          title: "Twitter Title",
          type: "string",
          description: "Custom title for Twitter (defaults to social media title)",
          validation: (Rule) => Rule.max(70).warning("Twitter titles should be under 70 characters"),
        },
        {
          name: "twitterDescription",
          title: "Twitter Description",
          type: "text",
          rows: 2,
          description: "Custom description for Twitter (defaults to social media description)",
          validation: (Rule) => Rule.max(200).warning("Twitter descriptions should be under 200 characters"),
        },
        {
          name: "twitterImage",
          title: "Twitter Image",
          type: "image",
          description: "Custom image for Twitter (defaults to social media image)",
          options: {
            hotspot: true,
          },
        },

        // Advanced SEO
        {
          name: "canonicalUrl",
          title: "Canonical URL",
          type: "url",
          description: "Canonical URL if this content exists elsewhere",
        },
        {
          name: "noIndex",
          title: "Hide from Search Engines",
          type: "boolean",
          initialValue: false,
          description: "Prevent search engines from indexing this page",
        },
        {
          name: "noFollow",
          title: "No Follow Links",
          type: "boolean",
          initialValue: false,
          description: "Tell search engines not to follow links on this page",
        },
        {
          name: "priority",
          title: "Sitemap Priority",
          type: "number",
          validation: (Rule) => Rule.min(0.0).max(1.0),
          initialValue: 0.5,
          description: "Priority in sitemap (0.0 to 1.0)",
        },

        // Schema.org Structured Data
        {
          name: "schemaType",
          title: "Schema Type",
          type: "string",
          options: {
            list: [
              { title: "Article", value: "Article" },
              { title: "BlogPosting", value: "BlogPosting" },
              { title: "NewsArticle", value: "NewsArticle" },
              { title: "TravelGuide", value: "TravelGuide" },
              { title: "Review", value: "Review" },
              { title: "HowTo", value: "HowTo" },
            ],
          },
          initialValue: "BlogPosting",
          description: "Schema.org type for structured data",
        },

        // Readability and Content Analysis
        {
          name: "readabilityScore",
          title: "Readability Score",
          type: "number",
          description: "Flesch Reading Ease score (higher is better, 60+ is good)",
          validation: (Rule) => Rule.min(0).max(100),
        },
        {
          name: "wordCount",
          title: "Word Count",
          type: "number",
          description: "Approximate word count (auto-calculated recommended)",
        },

        // Internal Linking
        {
          name: "relatedPosts",
          title: "Related Posts",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "blog" }],
            },
          ],
          description: "Manually select related posts for internal linking",
        },

        // Performance and Core Web Vitals
        {
          name: "preloadImage",
          title: "Preload Featured Image",
          type: "boolean",
          initialValue: false,
          description: "Preload featured image for better LCP scores",
        },

        // Localization
        {
          name: "language",
          title: "Content Language",
          type: "string",
          options: {
            list: [
              { title: "English", value: "en" },
              { title: "Spanish", value: "es" },
              { title: "French", value: "fr" },
              { title: "German", value: "de" },
              { title: "Arabic", value: "ar" },
              { title: "Urdu", value: "ur" },
            ],
          },
          initialValue: "en",
          description: "Content language for hreflang tags",
        },

        // Additional Meta Tags
        {
          name: "additionalMetaTags",
          title: "Additional Meta Tags",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Meta Name/Property",
                  type: "string",
                },
                {
                  name: "content",
                  title: "Content",
                  type: "string",
                },
              ],
            },
          ],
          description: "Custom meta tags for specific needs",
        },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
      description: "Mark as featured to highlight in special sections",
    }),
    defineField({
      name: "status",
      title: "Publication Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
          { title: "Scheduled", value: "scheduled" },
        ],
      },
      initialValue: "draft",
      description: "Current publication status",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image",
      date: "date",
      category: "category",
      status: "status",
    },
    prepare(selection) {
      const { title, author, media, date, category, status } = selection;
      const formattedDate = date ? new Date(date).toLocaleDateString() : "No date";
      const statusEmoji = {
        draft: "📝",
        published: "✅",
        archived: "📦",
        scheduled: "⏰",
      };

      return {
        title: `${statusEmoji[status] || ""} ${title}`,
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
    {
      title: "SEO Priority",
      name: "priorityDesc",
      by: [{ field: "seo.priority", direction: "desc" }],
    },
  ],
});
