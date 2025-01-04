import Gallery from "@/app/firstcomponent/_components/Gallery";
import Card from "@/app/firstcomponent/_components/Card";
import { H2 } from "@/components/H2";
import PackagingList from "@/app/firstcomponent/_components/PackagingList";

export default function FirstComponentPage() {
  return (
    <div className={"space-y-5"}>
      <div>
        <H2>First Component</H2>
        <Card>
          <Gallery />
        </Card>
      </div>
      <div>
        <H2>Conditional Rendering</H2>
        <PackagingList />
      </div>
    </div>
  );
}
