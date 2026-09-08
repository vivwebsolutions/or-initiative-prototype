"use client";

import { useState } from "react";

export function CardActionBar({ onCopyLink }: { onCopyLink?: () => void }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const vote = (dir: "up" | "down", e: React.MouseEvent) => {
    stop(e);
    if (voted === dir) {
      setVotes((v) => v + (dir === "up" ? -1 : 1));
      setVoted(null);
      return;
    }
    setVotes((v) => v + (dir === "up" ? 1 : -1) - (voted === "up" ? 1 : voted === "down" ? -1 : 0));
    setVoted(dir);
  };

  const copyLink = (e: React.MouseEvent) => {
    stop(e);
    onCopyLink?.();
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex items-center gap-2" onClick={stop}>
      <div className="flex items-center overflow-hidden rounded-full border border-stone-200 text-stone-500">
        <button
          type="button"
          onClick={(e) => vote("up", e)}
          aria-label="Upvote"
          className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium hover:bg-stone-50 ${
            voted === "up" ? "text-brand-teal-dark" : ""
          }`}
        >
          <ArrowIcon direction="up" />
          {votes}
        </button>
        <span className="h-4 w-px bg-stone-200" />
        <button
          type="button"
          onClick={stop}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium hover:bg-stone-50"
        >
          <ReviewIcon />
          Ask
        </button>
        <span className="h-4 w-px bg-stone-200" />
        <button
          type="button"
          onClick={(e) => vote("down", e)}
          aria-label="Downvote"
          className={`px-2.5 py-1.5 hover:bg-stone-50 ${voted === "down" ? "text-brand-teal-dark" : ""}`}
        >
          <ArrowIcon direction="down" />
        </button>
      </div>

      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="rounded-full border border-stone-200 p-2 text-stone-500 hover:bg-stone-50"
      >
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>

      <button
        type="button"
        onClick={(e) => {
          stop(e);
          setBookmarked((b) => !b);
        }}
        aria-label="Bookmark"
        aria-pressed={bookmarked}
        className={`rounded-full border p-2 transition ${
          bookmarked
            ? "border-stone-900 bg-stone-900 text-white"
            : "border-stone-200 text-stone-500 hover:bg-stone-50"
        }`}
      >
        <BookmarkIcon filled={bookmarked} />
      </button>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={direction === "down" ? "rotate-180" : ""}
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function BookmarkIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
