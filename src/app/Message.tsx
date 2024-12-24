export default function Message({ text, color }: { text: string; color: string }) {
  return (
    <div style={{ color }} className="pt-20 text-center">{text}</div>
  );
}
  