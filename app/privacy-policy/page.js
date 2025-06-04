"use client";

import Markdown from "react-markdown";
import { ConfigContext } from "@/utils/configContext";
import { useContext } from "react";

function PrivacyPolicy() {
  const {
    privacyPolicy: { content },
  } = useContext(ConfigContext);

  return (
    <main>
      <section className="max-w-screen-lg mx-auto px-4 my-24">
        <article className="prose prose-sm md:prose-lg">
          <Markdown>{content}</Markdown>
        </article>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
