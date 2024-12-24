export default function Message({ text, color }: { text: string; color: string }) {
  return (
    <div style={{ color }} className="pt-20 text-center">{text || "Click a button to begin!"}</div>
  );
}
  