"use client";
import TripList from "@/app/hooks/_components/TripList";
import { useEffect, useState } from "react";
import Trip from "@/app/hooks/_components/Trip";
import { TripType } from "@/app/hooks/_types/TripType";
import { Button } from "@/components/ui/button";

export default function Page() {
  /*
    const [trips, setTrips] = useState([]);

    fetch("http://localhost:3001/trips")
        .then(res => res.json())
        .then(data => {
            setTrips(data);
            console.log(data);
        })
    */

  const [trips, setTrips] = useState<TripType[]>([]);
  const [url, setUrl] = useState("https://67665e96410f849996577919.mockapi.io/trips");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, [url]);

  const filterByLocation = (location: string) => {
    setUrl(`https://67665e96410f849996577919.mockapi.io/trips?location=${location}`);
  };

  return (
    <TripList>
      <div className={"col-span-4 flex justify-end gap-5"}>
        <Button onClick={() => filterByLocation("")}>Remove Filter</Button>
        <Button onClick={() => filterByLocation("Buckinghamshire")}>Filter by Buckinghamshire</Button>
      </div>
      {trips.map((trip) => {
        return <Trip key={trip.id} name={trip.name} price={trip.price} location={trip.location} />;
      })}
    </TripList>
  );
}

/*
 * Without using useEffect()
 * - Component ကို render ချတယ်အဲ့ချိန်မှာ fetch တယ်ရလာတဲ့ result ကို useState က setTrips နဲ့ trips ထဲကို data ထည့်တယ်အဲ့ချိန်မှာ component က re-render ဖြစ်တယ် useState က value update လုပ်လိုက်တာနဲ့ component ကို re-render ပြန်လုပ်ပေးတယ် ကြောင့်
 * - re-render ဖြစ်ပြီး အစကပြန်လုပ်တယ် အဲ့တာနဲ့ Infinite looping ဖြစ်ပြီး performance ကျတယ်
 *
 * With using useEffect()
 * - component render စလုပ်တဲ့အချိန်မှာတစ်ခါပဲ run တယ်
 * - Dependency array ထဲမှာ url ထည့်ထားတယ် setUrl နဲ့ value ပြောင်းလိုက်တာနဲ့ url state က ပြောင်းသွားတယ်။
 * - Dependency array ထဲမှာ url ထည့်ထားတာကြောင့် url state ပြောင်းတာနဲ့ useEffect က callback function ထဲက code တွေကိုပြန် run တယ်
 * - setTrips() နဲ့ trip ရဲ့ state ကပြောင်းသွားပြီး component ကို re-render ပြန်လုပ်တယ်
 */
