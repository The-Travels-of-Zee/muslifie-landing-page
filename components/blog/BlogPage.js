"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Eye,
  Copy,
  Check,
  BookOpen,
  Quote,
  Code,
  AlertCircle,
  Lightbulb,
  Info,
} from "lucide-react";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CopyLinkButton from "./CopyLinkButton";
import TableOfContents from "./TableOfContents";
import ScrollToTop from "./ScrollToTop";
import RelatedPosts from "./RelatedPosts";

// Enhanced Code Block Component
const CodeBlock = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-8">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={copyCode}
          className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 text-sm rounded-md transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto border border-gray-700/50 shadow-2xl">
        <code className="text-sm font-mono leading-relaxed">{children}</code>
      </pre>
    </div>
  );
};

// Enhanced Callout Component
const Callout = ({ type = "info", children }) => {
  const variants = {
    info: {
      bg: "bg-gradient-to-r from-blue-50 to-indigo-50",
      border: "border-blue-200",
      icon: Info,
      iconColor: "text-blue-600",
      textColor: "text-blue-900",
    },
    warning: {
      bg: "bg-gradient-to-r from-amber-50 to-yellow-50",
      border: "border-amber-200",
      icon: AlertCircle,
      iconColor: "text-amber-600",
      textColor: "text-amber-900",
    },
    tip: {
      bg: "bg-gradient-to-r from-green-50 to-emerald-50",
      border: "border-green-200",
      icon: Lightbulb,
      iconColor: "text-green-600",
      textColor: "text-green-900",
    },
  };

  const variant = variants[type] || variants.info;
  const Icon = variant.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${variant.bg} ${variant.border} ${variant.textColor} border-l-4 rounded-r-xl p-6 my-8 shadow-lg`}
    >
      <div className="flex items-start gap-4">
        <Icon className={`w-6 h-6 ${variant.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 prose-callout">{children}</div>
      </div>
    </motion.div>
  );
};

// Enhanced Quote Component
const EnhancedQuote = ({ children, author }) => (
  <motion.blockquote
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="relative my-8 p-8 bg-gradient-to-r from-purple-50 via-white to-blue-50 border-l-4 border-gradient-to-b rounded-r-2xl shadow-xl"
  >
    <Quote className="absolute top-4 left-4 w-8 h-8 text-purple-300" />
    <div className="mx-auto">
      <div className="text-lg text-gray-800 italic font-medium leading-relaxed mb-4">{children}</div>
      {author && <cite className="text-sm font-semibold text-purple-600 not-italic">— {author}</cite>}
    </div>
  </motion.blockquote>
);

// Reading Progress Indicator
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Main component
const BlogPage = ({ blogData, relatedPosts }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 min-h-screen">
      <ReadingProgress />

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img src={blogData.image.asset.url} alt={blogData.image.alt} className="w-full h-full object-cover" />

        {/* Overlays */}
        <div className="absolute inset-0">
          {/* Top navbar area overlay */}
          <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm z-10" />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      </div>

      {/* Header Content */}
      <div className="relative max-w-5xl mx-auto px-6 -mt-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-md p-8 md:p-10 border border-white/20"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mb-6 shadow-lg">
            <Tag className="w-4 h-4 mr-2" />
            {blogData.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
            {blogData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">{blogData.subtitle}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            {[
              { icon: User, text: blogData.author?.name },
              {
                icon: Calendar,
                text: new Date(blogData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
              },
              { icon: Clock, text: blogData.readTime + " mins read" },
              { icon: Eye, text: blogData.views + "k views" },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full"
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {blogData.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 hover:from-gray-200 hover:to-gray-100 transition-all cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* Navigation */}
        <div className="absolute top-5 left-8 right-8 flex justify-between">
          <Link href="/blog">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 bg-white/90 backdrop-blur-md text-gray-900 px-5 py-3 rounded-full hover:bg-white hover:shadow-lg transition-all shadow-md cursor-pointer font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </motion.button>
          </Link>

          <CopyLinkButton />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-7 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">Table of Contents</h3>
                </div>
                <TableOfContents content={blogData.content} />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <article className="prose prose-lg max-w-none">
              <Markdown
                rehypePlugins={[rehypeSlug]}
                components={{
                  h1: ({ children, id }) => (
                    <h1
                      id={id}
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8 mt-12 scroll-mt-24 leading-tight"
                    >
                      {children}
                    </h1>
                  ),
                  h2: ({ children, id }) => (
                    <h2
                      id={id}
                      className="relative text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-24 pb-2"
                    >
                      {children}
                      <span className="absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-200 to-purple-200"></span>
                    </h2>
                  ),
                  h3: ({ children, id }) => (
                    <h3 id={id} className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10 scroll-mt-24">
                      {children}
                    </h3>
                  ),
                  p: ({ children, ...props }) => {
                    // Check if children contains block elements
                    const hasBlockElements = React.Children.toArray(children).some((child) => {
                      if (typeof child === "object" && child.type) {
                        const blockElements = [
                          "ul",
                          "ol",
                          "div",
                          "blockquote",
                          "pre",
                          "h1",
                          "h2",
                          "h3",
                          "h4",
                          "h5",
                          "h6",
                        ];
                        return blockElements.includes(child.type);
                      }
                      return false;
                    });

                    // If it contains block elements, render as div instead of p
                    if (hasBlockElements) {
                      return (
                        <div className="mb-6 text-gray-700 leading-8 text-lg tracking-wide" {...props}>
                          {children}
                        </div>
                      );
                    }

                    return (
                      <p className="mb-6 text-gray-700 leading-8 text-lg tracking-wide" {...props}>
                        {children}
                      </p>
                    );
                  },
                  strong: ({ children }) => (
                    <strong className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {children}
                    </strong>
                  ),
                  hr: () => (
                    <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  ),
                  ul: ({ children, ...props }) => (
                    <ul className="space-y-3 my-8 text-gray-700" {...props}>
                      {children}
                    </ul>
                  ),
                  ol: ({ children, ...props }) => (
                    <ol className="space-y-3 my-8 text-gray-700" {...props}>
                      {children}
                    </ol>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="flex items-start gap-3 text-lg leading-relaxed" {...props}>
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>{children}</span>
                    </li>
                  ),
                  blockquote: ({ children }) => <EnhancedQuote>{children}</EnhancedQuote>,
                  code: ({ children }) => (
                    <code className="px-2 py-1 rounded-md text-sm font-mono bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border border-purple-200">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
                  // Custom components for callouts (you can use them in MDX)
                  Callout: ({ type, children }) => <Callout type={type}>{children}</Callout>,
                }}
              >
                {blogData.content}
              </Markdown>
            </article>
          </motion.div>
        </div>

        {/* Related Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/20 shadow-xl">
            <RelatedPosts relatedPosts={relatedPosts} />
          </div>
        </motion.div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default BlogPage;
