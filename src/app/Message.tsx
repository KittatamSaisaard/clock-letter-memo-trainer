export default function Message({ text }: { text: string }) {
    return (
      <div className="pt-20 text-center">{text || "Click a button to begin!"}</div>
    );
  }