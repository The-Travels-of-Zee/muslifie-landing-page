import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";

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
            {post.image && (
              <img src={post.image.asset.url} alt={post.title} className="w-full h-64 md:h-32 object-cover" />
            )}
            <div className="p-4">
              <Link href={`/blog/${post.slug.current}`}>
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

export default RelatedPosts;
