import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import BlogsPageClient from "./BlogsPageClient";
import { ALL_BLOGS_QUERY } from "@/sanity/lib/queries";

// Helper function to extract preview text from portable text content
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

  return preview.length > maxLength ? preview.substring(0, maxLength).trim() + "..." : preview.trim();
}

// Get all blog posts from Sanity
async function getAllBlogs() {
  try {
    const blogs = await client.fetch(ALL_BLOGS_QUERY);

    // Transform the data to match your existing BlogsPageClient expectations
    const transformedBlogs = blogs
      .filter((blog) => {
        // Only show published posts (if publishedAt is set, check if it's in the past)
        if (blog.publishedAt) {
          return new Date(blog.publishedAt) <= new Date();
        }
        return true; // Show posts without publishedAt
      })
      .map((blog) => ({
        ...blog,
        // Ensure compatibility with existing component
        author: blog.author?.name || blog.author,
        authorObject: blog.author,
        slug: blog.slug.current,
        // Create content preview from portable text
        content: getContentPreview(blog.content),
        // Use date field, fallback to _createdAt
        date: blog.date || blog._createdAt,
        // Transform image if it's a Sanity image object
        image: blog.image?.asset?.url || blog.image,
      }));

    return transformedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogPage({ searchParams }) {
  const blogPosts = await getAllBlogs();

  // Optional: Handle search/filtering if your BlogsPageClient supports it
  const search = searchParams?.search || "";

  // Filter posts based on search if needed
  const filteredPosts = search
    ? blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.category.toLowerCase().includes(search.toLowerCase()) ||
          post.author.toLowerCase().includes(search.toLowerCase()) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      )
    : blogPosts;

  return <BlogsPageClient blogPosts={filteredPosts} />;
}

// Enhanced metadata with dynamic content
export async function generateMetadata() {
  try {
    // Get featured posts count and latest post for dynamic description
    const featuredQuery = defineQuery(`
      *[_type == "blog" && featured == true] | order(date desc)[0...3] {
        title,
        category
      }
    `);

    const latestQuery = defineQuery(`
      *[_type == "blog"] | order(date desc)[0] {
        date,
        category
      }
    `);

    const [featuredPosts, latestPost] = await Promise.all([client.fetch(featuredQuery), client.fetch(latestQuery)]);

    const dynamicDescription =
      featuredPosts.length > 0
        ? `Discover halal-friendly travel guides and tips. Latest posts on ${featuredPosts.map((p) => p.category).join(", ")} and more. Updated ${latestPost?.date ? new Date(latestPost.date).toLocaleDateString() : "recently"}.`
        : "Discover halal-friendly spots, connect with the community, and travel with peace of mind. Read our latest travel guides and tips.";

    return {
      title: "Our Blog - Halal-Friendly Travel Guides | Muslifie",
      description: dynamicDescription,
      openGraph: {
        title: "Travel Blog - Halal-Friendly Destinations | Muslifie",
        description:
          "Discover the best halal-friendly destinations, accommodations, and travel tips from our expert travelers.",
        type: "website",
        url: "/blog",
        images: [
          {
            url: "/images/blog-og-image.jpg", // Add a default blog OG image
            width: 1200,
            height: 630,
            alt: "Muslifie Travel Blog",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Halal-Friendly Travel Blog | Muslifie",
        description: dynamicDescription,
      },
      alternates: {
        canonical: "/blog",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Fallback to static metadata
    return {
      title: "Our Blog - Halal-Friendly Travel Guides | Muslifie",
      description:
        "Discover halal-friendly spots, connect with the community, and travel with peace of mind. Read our latest travel guides and tips.",
      openGraph: {
        title: "Travel Blog - Halal-Friendly Destinatiominns",
        description: "Discover the best halal-friendly destinations, accommodations, and travel tips.",
        type: "website",
      },
    };
  }
}

// Optional: Add revalidation for ISR
export const revalidate = 1800; // Revalidate every 30 minutes

// Optional: Add runtime configuration
export const dynamic = "force-static";
export const runtime = "nodejs";
