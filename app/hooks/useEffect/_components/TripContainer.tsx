"use client"
import { H2 } from "@/components/H2";
import React, { useEffect, useState } from "react";
import Trip from "./Trip";
import { TripType } from "../_type/TripType";
import { Button } from "@/components/ui/button";

const TripContainer = () => {
  const [trips, setTrips] = useState<TripType[]>([]);
  const [url, setUrl] = useState("https://67665e96410f849996577919.mockapi.io/trips");

  useEffect( () => {
    const getTrips = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if(data) {
        setTrips(data);
      }
    }
    getTrips();
  }, [url]);

  const handleSortByPrice = () => {
    setUrl("https://67665e96410f849996577919.mockapi.io/trips?sortBy=price&order=desc");
  }
  const handleDefault = () => {
    setUrl("https://67665e96410f849996577919.mockapi.io/trips");
  }

  return (
    <div className="p-5">
      <H2>Trip List</H2>
      <div>
        <Button onClick={handleSortByPrice}>Sort By Price</Button>
        <Button onClick={handleDefault}>Default</Button>
      </div>
      <div className="mt-5">
        <ul className="grid grid-cols-4 gap-5">
          {trips.map( trip => (
            <Trip key={trip.id} trip={trip} />
          ) )}
        </ul>
      </div>
    </div>
  );
};

export default TripContainer;
