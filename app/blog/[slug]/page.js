import { notFound } from "next/navigation";
import BlogPage from "@/components/blog/BlogPage";
import { client } from "@/sanity/lib/client";
import { BLOG_POST_QUERY, RELATED_POSTS_QUERY, ALL_BLOG_SLUGS_QUERY } from "@/sanity/lib/queries";

// Fetch a single blog post by slug
async function getBlogPost(slug) {
  try {
    const blog = await client.fetch(BLOG_POST_QUERY, { slug });
    return blog;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Fetch related blog posts (same category, not the current post)
async function getRelatedPosts(category, slug) {
  try {
    const posts = await client.fetch(RELATED_POSTS_QUERY, { category, slug });
    return posts;
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blogData = await getBlogPost(slug);

  if (!blogData) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(blogData.category, slug);

  return <BlogPage blogData={blogData} relatedPosts={relatedPosts} slug={slug} />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await client.fetch(ALL_BLOG_SLUGS_QUERY);

  return slugs.map(({ slug }) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogData = await getBlogPost(slug);

  if (!blogData) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blogData.title,
    description: blogData.subtitle || blogData.description,
    author: blogData.author?.name ? [{ name: blogData.author.name }] : [],
    openGraph: {
      title: blogData.title,
      description: blogData.subtitle || blogData.description,
      images: [blogData.image.asset.url],
      type: "article",
      publishedTime: blogData.publishedAt || blogData._createdAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.title,
      description: blogData.subtitle || blogData.description,
      images: [blogData.image.asset.url],
    },
  };
}
