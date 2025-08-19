import { client } from "@/sanity/lib/client";
import { ALL_BLOGS_QUERY } from "@/sanity/lib/queries";
import HomeBlogSectionClient from "./HomeBlogSectionClient";

function getContentPreview(content, maxLength = 200) {
  if (!content || !Array.isArray(content)) return "";
  let preview = "";
  for (const block of content) {
    if (block._type === "block" && block.children) {
      for (const child of block.children) {
        if (child.text && preview.length < maxLength) {
          preview += child.text + " ";
        }
      }
    }
    if (preview.length >= maxLength) break;
  }
  return preview.length > maxLength
    ? preview.substring(0, maxLength).trim() + "..."
    : preview.trim();
}

export default async function HomeBlogSection() {
  const blogs = await client.fetch(
    ALL_BLOGS_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  const topBlogs = blogs
    .filter((blog) =>
      blog.publishedAt ? new Date(blog.publishedAt) <= new Date() : true
    )
    .map((blog) => ({
      _id: blog._id,
      title: blog.title,
      slug: typeof blog.slug === "string" ? blog.slug : blog.slug?.current,
      subtitle: blog.subtitle || getContentPreview(blog.content, 150),
      date: (blog.date || blog.publishedAt || blog._createdAt)?.toString(),
      image: blog.image?.asset?.url || blog.image,
      views: blog.views || 0,
      author: blog.author?.name || blog.author,
    }))
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 3);

  return <HomeBlogSectionClient blogs={topBlogs} />;
}
