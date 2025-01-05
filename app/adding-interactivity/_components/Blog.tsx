"use client";
import { useState } from "react";
import { sculptureList } from "@/app/adding-interactivity/_data/data";
import { H2 } from "@/components/H2";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Blog() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const sculpture = sculptureList[index];

  const handleShowDetails = () => {
    setShowDetails((prevState) => !prevState);
  };
  console.log("Component child render");

  return (
    <div className={"max-w-lg rounded-lg border p-5 shadow-xl"}>
      <div className={"h-[600px] space-y-5"}>
        <H2>
          {sculpture.name} by {sculpture.artist}
        </H2>
        <p>
          ({index + 1} of {sculptureList.length})
        </p>
        <Image src={sculpture.url} alt={sculpture.alt} width={200} height={200} className={"rounded-lg"} />
        <Button onClick={handleShowDetails}>{showDetails ? "Hide" : "Show"} details</Button>
        {showDetails && <p>{sculpture.description}</p>}
      </div>
      <div className={"mt-5 flex items-center justify-between"}>
        <Button onClick={() => setIndex(index - 1)} disabled={index == 0}>
          {<ArrowLeft />}
        </Button>
        <Button onClick={() => setIndex(index + 1)} disabled={index == sculptureList.length - 1}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
