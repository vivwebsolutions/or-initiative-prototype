// Fixed-height teaser so cards stay a consistent size regardless of how long a
// tool's overview text is — always fades into a gradient rather than growing the card.
// The "View lesson details" link below the card is the only call to action here.
export function CardExcerpt({ text }: { text: string }) {
  return (
    <div className="relative h-16 overflow-hidden">
      <p className="text-sm text-stone-600">{text}</p>
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
