// app/blog/BlogsPageClient.js
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, Tag, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";

const categories = [
  "All",
  "Travel Tips",
  "Destinations",
  "Travel",
  "Halal Food",
  "Hotels",
  "Prayer & Mosques",
  "Cultural Etiquette",
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "title", label: "Title A-Z" },
  { value: "readTime", label: "Read Time" },
];

// AnimatedText component
const AnimatedText = ({ text, className = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

// BlogCard component
const BlogCard = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image || "https://via.placeholder.com/400x200?text=Blog+Image"}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </span>
        </div>

        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title and Subtitle */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-base text-gray-600 mb-4 flex-1 line-clamp-3">{post.subtitle}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <Link href={`/blog/${post.slug}`}>
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 cursor-pointer mt-auto"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </Link>
      </div>
    </motion.article>
  );
};

// Main BlogsPageClient component
const BlogsPage = ({ blogPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Filter and sort posts
  useEffect(() => {
    let filtered = [...blogPosts];

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "title":
          return a.title?.localeCompare(b.title) || 0;
        case "readTime":
          return parseInt(a.readTime) - parseInt(b.readTime);
        case "newest":
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, sortBy, blogPosts]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 min-h-screen">
      {/* Header Section */}
      <section className="relative pt-24 pb-8 px-4 bg-gradient-to-b from-secondary/60 to-accent/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="pt-12 text-4xl md:text-6xl font-bold text-white">
                <AnimatedText text="Our Blog" />
              </h1>

              <motion.div
                className="mx-auto h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "180px" }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
              >
                Discover halal-friendly spots, connect with the community, and travel with peace of mind all in just a
                few steps.
              </motion.p>
            </motion.div>
          </div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col gap-6 w-full">
              {/* Search Bar */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              {/* Filter + Sort */}
              <div className="flex flex-col justify-end md:flex-row md:items-center md:justify-between gap-4 w-full">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700 whitespace-nowrap">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 cursor-pointer"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug || index} post={post} />
              ))}
            </div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
