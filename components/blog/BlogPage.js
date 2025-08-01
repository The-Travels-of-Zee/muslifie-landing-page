"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Tag, ArrowLeft, Eye } from "lucide-react";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import CopyLinkButton from "./CopyLinkButton";
import TableOfContents from "./TableOfContents";
import ScrollToTop from "./ScrollToTop";

// Related posts component
const RelatedPosts = ({ relatedPosts = [] }) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {post.image && <img src={post.image} alt={post.title} className="w-full h-64 md:h-32 object-cover" />}
            <div className="p-4">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
              </Link>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

// Main component
const BlogPage = ({ blogData, relatedPosts }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img src={blogData.image} alt={blogData.title} className="w-full h-full aspect-square object-cover" />

        {/* Overlays */}
        <div className="absolute inset-0">
          {/* Top navbar area overlay */}
          <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-secondary/80 to-accent/70 backdrop-blur-md z-10" />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Header Content */}
      <div className="relative max-w-4xl mx-auto px-4 -mt-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
            <Tag className="w-4 h-4 mr-1" />
            {blogData.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{blogData.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{blogData.subtitle}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            {[
              { icon: User, text: blogData.author },
              {
                icon: Calendar,
                text: new Date(blogData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
              },
              { icon: Clock, text: blogData.readTime },
              { icon: Eye, text: blogData.views },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blogData.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="absolute top-5 left-6 right-6 flex justify-between">
          <Link href="/blog">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full hover:bg-white transition-all shadow-lg cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </motion.button>
          </Link>

          <CopyLinkButton />
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 mb-8">
              <TableOfContents content={blogData.content} />
            </div>
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <article className="prose max-w-none">
              <Markdown
                rehypePlugins={[rehypeSlug]}
                components={{
                  h1: ({ children, id }) => (
                    <h1 id={id} className="text-3xl font-bold text-gray-900 mb-6 mt-8 scroll-mt-8">
                      {children}
                    </h1>
                  ),
                  h2: ({ children, id }) => (
                    <h2 id={id} className="text-2xl font-bold text-gray-900 mb-4 mt-8 scroll-mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children, id }) => (
                    <h3 id={id} className="text-xl font-bold text-gray-900 mb-3 mt-6 scroll-mt-8">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                  strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                  hr: () => <hr className="my-8 border-gray-200" />,
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 my-4 text-gray-700">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 my-4 text-gray-700">{children}</ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => <code className="px-2 py-1 rounded text-sm font-mono">{children}</code>,
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-6">{children}</pre>
                  ),
                }}
              >
                {blogData.content}
              </Markdown>
            </article>
          </motion.div>
        </div>
        <RelatedPosts relatedPosts={relatedPosts} />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default BlogPage;
