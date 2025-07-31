// app/blog/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogsPageClient from "./BlogsPageClient";

// Get all blog posts
async function getAllBlogs() {
  const blogsDirectory = path.join(process.cwd(), "content/blogs");

  // Check if directory exists
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(blogsDirectory);

  const blogs = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(blogsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...data,
        slug: filename.replace(".mdx", ""),
        content: content.substring(0, 200) + "...", // Preview content
      };
    });

  // Sort by date (newest first)
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogs();

  return <BlogsPageClient blogPosts={blogPosts} />;
}

// Add metadata
export const metadata = {
  title: "Our Blog - Halal-Friendly Travel Guides | The Travels of Zee",
  description:
    "Discover halal-friendly spots, connect with the community, and travel with peace of mind. Read our latest travel guides and tips.",
  openGraph: {
    title: "Travel Blog - Halal-Friendly Destinations",
    description: "Discover the best halal-friendly destinations, accommodations, and travel tips.",
    type: "website",
  },
};
