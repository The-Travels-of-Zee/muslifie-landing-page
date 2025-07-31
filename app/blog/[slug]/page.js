// app/blog/[slug]/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import BlogPage from "@/components/blog/BlogPage";

// Get single blog post
async function getBlogPost(slug) {
  try {
    const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...data,
      content,
      slug,
    };
  } catch (error) {
    return null;
  }
}

// Get all blog posts for related posts
async function getAllBlogs() {
  const blogsDirectory = path.join(process.cwd(), "content/blogs");
  const filenames = fs.readdirSync(blogsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(".mdx", ""),
    };
  });
}

export default async function BlogPostPage({ params }) {
  const blogData = await getBlogPost(params.slug);

  if (!blogData) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const allBlogs = await getAllBlogs();
  const relatedPosts = allBlogs
    .filter((blog) => blog.category === blogData.category && blog.slug !== blogData.slug)
    .slice(0, 3);

  return <BlogPage blogData={blogData} relatedPosts={relatedPosts} />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogsDirectory = path.join(process.cwd(), "content/blogs");
  const filenames = fs.readdirSync(blogsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const blogData = await getBlogPost(params.slug);

  if (!blogData) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blogData.title,
    description: blogData.subtitle,
    authors: [{ name: blogData.author }],
    openGraph: {
      title: blogData.title,
      description: blogData.subtitle,
      images: [blogData.image],
      type: "article",
      publishedTime: blogData.date,
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.title,
      description: blogData.subtitle,
      images: [blogData.image],
    },
  };
}
