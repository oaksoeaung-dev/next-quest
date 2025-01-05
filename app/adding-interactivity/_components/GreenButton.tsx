export default function GreenButton({ playNow, children }: { playNow: () => void; children: React.ReactNode }) {
  return (
    <button onClick={playNow} className={"rounded-lg bg-green-500 px-4 py-1.5 text-white"}>
      {children}
    </button>
  );
}
