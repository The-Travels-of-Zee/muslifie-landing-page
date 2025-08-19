"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import AnimatedText from "@/components/AnimatedText";

export default function HomeBlogSectionClient({ blogs = [] }) {
  const transformBlogData = (blog) => ({
    ...blog,
    slug: typeof blog.slug === "string" ? blog.slug : blog.slug?.current,
    image: blog.image?.asset?.url || blog.image,
    date: blog.date || blog.publishedAt || blog._createdAt,
  });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-teal-50/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-200/20 to-purple-200/20 rounded-full blur-3xl" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
      <div className="absolute bottom-40 right-40 w-4 h-4 bg-teal-400 rounded-full animate-pulse" />
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative inline-flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-teal-400/30 rounded-full blur-xl scale-150" />
              <div className="relative z-10 bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/50">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                <AnimatedText text="Most Popular Blog Posts" />
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our most-read Blogs on halal-friendly travel, destinations, and community insights that
            travelers love most.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"
          />
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <BlogCard
                  post={transformBlogData(blog)}
                  animationDelay={index * 0.1}
                  className="h-full hover:shadow-2xl hover:shadow-purple-100/50"
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No blog posts available at the moment.</p>
              <p className="text-gray-400 text-sm mt-2">Check back soon for new content!</p>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center"
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Ready for More?
                </h3>
                <Sparkles className="w-6 h-6 text-teal-500" />
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Explore our complete collection of halal-friendly travel guides, destination reviews, and community
                insights. Join thousands of Muslim travelers planning their next adventure.
              </p>
            </div>

            <Link href="/blog">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(139, 69, 193, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                <div className="relative z-10 flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  <span>Explore All Blogs</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Trusted Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                <span>Community Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-500" />
                <span>Travel Guides</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
