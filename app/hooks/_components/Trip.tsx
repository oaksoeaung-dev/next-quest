import { Badge } from "@/components/ui/badge";
import { type TripType } from "@/app/hooks/_types/TripType";

export default function Trip(props: TripType) {
  return (
    <div className={"space-y-5 rounded-lg border p-5 shadow-lg"}>
      <h1 className={"text-lg font-semibold text-zinc-700"}>{props.name}</h1>
      <div className={"space-x-3"}>
        <Badge>{props.location}</Badge>
        <Badge variant={"destructive"}>{props.price}</Badge>
      </div>
    </div>
  );
}
