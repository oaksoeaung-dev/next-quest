import {Badge} from "@/components/ui/badge";
import {type TripType} from "@/app/hooks/_types/TripType";

export default function Trip(props: TripType){
    return (
        <div className={"p-5 rounded-lg border shadow-lg space-y-5"}>
            <h1 className={"text-lg text-zinc-700 font-semibold"}>{props.name}</h1>
            <div className={"space-x-3"}>
                <Badge>{props.location}</Badge>
                <Badge variant={"destructive"}>{props.price}</Badge>
            </div>
        </div>
    )
}