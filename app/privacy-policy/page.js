import Markdown from "react-markdown";
import { privacyPolicy } from "@/constants";

function PrivacyPolicy() {
  return (
    <main className="bg-gradient-to-b from-0% to-5% from-secondary/60 to-accent/50 min-h-screen pt-32 pb-20">
      <section className="max-w-screen-lg mx-auto px-4">
        <article className="prose prose-sm md:prose-lg">
          <Markdown>{privacyPolicy.content}</Markdown>
        </article>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
export const dynamic = "force-dynamic";
