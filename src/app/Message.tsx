export default function Message({ text, color }: { text: string; color: string }) {
  return (
    <div style={{ color }} className="pt-16 text-center text-3xl text-wrap">{text}</div>
  );
}
  