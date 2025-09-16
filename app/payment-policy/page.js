import Markdown from "react-markdown";
import { paymentPolicy } from "@/constants";

function PaymentPolicy() {
  return (
    <main className="bg-gradient-to-b from-0% to-5% from-secondary/60 to-accent/50 min-h-screen pt-32 pb-20">
      <section className="max-w-screen-lg mx-auto px-4">
        <article
          className="
            prose prose-lg md:prose-xl 
            prose-headings:font-bold prose-headings:text-gray-900 
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:text-center prose-h1:text-gradient 
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-purple-700 
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-blue-700 
            prose-p:text-gray-700 prose-p:leading-relaxed 
            prose-strong:text-gray-900 
            prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 
            prose-ul:list-disc prose-ul:pl-6 
            prose-ol:list-decimal prose-ol:pl-6 
            prose-li:marker:text-purple-500
            prose-blockquote:border-l-4 prose-blockquote:border-purple-400 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
            prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            max-w-none
          "
        >
          <Markdown>{paymentPolicy.content}</Markdown>
        </article>
      </section>
    </main>
  );
}

export default PaymentPolicy;
