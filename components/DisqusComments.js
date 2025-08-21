"use client";
import React from "react";
import { CommentCount, DiscussionEmbed } from "disqus-react";
import { MessageSquare } from "lucide-react";

const DisqusComments = ({ shortname, identifier, title, url }) => {
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
    language: "en-US",
  };

  return (
    <div className="mt-16">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white border-opacity-20">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-6 h-6 text-blue-600" />
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Comments & Discussion
          </h3>
        </div>
        <CommentCount shortname={shortname} config={disqusConfig}>
          Comments
        </CommentCount>
        <DiscussionEmbed shortname={shortname} config={disqusConfig} />
      </div>
    </div>
  );
};

export default DisqusComments;
