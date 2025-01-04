import Item from "@/app/firstcomponent/_components/Item";

export default function PackagingList() {
  return (
    <ul>
      <Item name={"Space suit"} isPacked={true} />
      <Item name={"Camera"} isPacked={false} />
      <Item name={"Power Bank"} isPacked={true} />
    </ul>
  );
}
