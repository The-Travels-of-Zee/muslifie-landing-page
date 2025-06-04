"use client";
import { useState } from "react";

const InputEmail = ({ title = "Subscribe", apiUrl = "/api/newsletter", type }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const [successMessage, setSuccessMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    if (!email) {
      setError("Email is required");
      setStatus("error");
      return;
    }

    try {
      // console.log("Submitting to:", apiUrl);
      // console.log("Email:", email);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, type }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      // console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setSuccessMessage(data.message || "Successfully submitted!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setError(error.message || "An error occurred. Please try again.");
      console.error("Subscription error:", error);
    }
  };
  return (
    <form onSubmit={subscribe} className="relative">
      <label className="block">
        <span className="block text-gray-300 text-lg font-semibold mb-2">Join the Waitlist</span>
        <div className="relative">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-full pr-32 pl-5 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-gray-400 text-gray-800 bg-white transition"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="absolute right-1 top-1 bottom-1 my-auto h-[calc(100%-8px)] px-4 bg-secondary text-white font-semibold text-sm rounded-full transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : title}
          </button>
        </div>
        <p className="text-sm text-gray-300 mt-2">We’ll email you when we launch. No spam.</p>
      </label>
      {status === "error" && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      {status === "success" && <p className="text-green-500 mt-2 text-sm">{successMessage}</p>}
    </form>
  );
};

export default InputEmail;
