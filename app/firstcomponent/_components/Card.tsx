export default function Card({ children }: { children: React.ReactNode }) {
  return <div className={"max-w-xl rounded-lg border p-5 shadow-lg"}>{children}</div>;
}
