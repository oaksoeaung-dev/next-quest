"use client"
import TripList from "@/app/hooks/_components/TripList";
import {useEffect, useState} from "react";
import Trip from "@/app/hooks/_components/Trip";
import {TripType} from "@/app/hooks/_types/TripType";
import {Button} from "@/components/ui/button";

export default function Page() {
    const [trips, setTrips] = useState<TripType[]>([]);
    const [url, setUrl] = useState("https://67665e96410f849996577919.mockapi.io/trips");

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTrips(data);
            })
    }, [url]);

    const filterByLocation = (location: string) => {
        setUrl(`https://67665e96410f849996577919.mockapi.io/trips?location=${location}`);
    }

    return (
        <TripList>
            <div className={"col-span-4 flex justify-end gap-5"}>
                <Button onClick={() => filterByLocation("")}>Remove Filter</Button>
                <Button onClick={() => filterByLocation("Buckinghamshire")}>Filter by Buckinghamshire</Button>
            </div>
            {
                trips.map((trip) => {
                    return(
                        <Trip key={trip.id} name={trip.name} price={trip.price} location={trip.location}/>
                    )
                })
            }
        </TripList>
    )
}

/*
 * Function တွေကို useEffect ထဲမှာ dependenc array အနေနဲ့သုံးချင်ရင် useCallback ကိုသုံးတယ်
*/