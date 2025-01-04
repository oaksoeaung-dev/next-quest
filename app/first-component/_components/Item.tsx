export default function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  return (
    <li>
      {isPacked ? (
        <span className={"font-semibold text-green-500"}>{name}</span>
      ) : (
        <span className={"font-semibold text-rose-500"}>{name}</span>
      )}
    </li>
  );
}
