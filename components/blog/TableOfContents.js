import { useEffect, useState } from "react";
import { Tag } from "lucide-react";

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Extract headings from markdown content
    const extractHeadings = (markdownContent) => {
      const headingRegex = /^(#{2,3})\s+(.+)$/gm;
      const extractedHeadings = [];
      let match;

      while ((match = headingRegex.exec(markdownContent)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        // Create ID same way rehype-slug does it
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/-+/g, "-") // Replace multiple hyphens with single
          .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

        extractedHeadings.push({ level, text, id });
      }

      return extractedHeadings;
    };

    const extractedHeadings = extractHeadings(content);
    setHeadings(extractedHeadings);
  }, [content]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Tag className="w-5 h-5" />
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index} className={heading.level === 3 ? "ml-4" : ""}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-left w-full"
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
