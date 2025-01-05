"use client";

import { Button } from "@/components/ui/button";
import AlertButton from "@/app/adding-interactivity/_components/AlertButton";
import { H2 } from "@/components/H2";
import PlayButton from "@/app/adding-interactivity/_components/PlayButton";

export default function RespondingToEventsPage() {
  const handleClick = () => {
    alert("You clicked me! 1");
  };
  return (
    <div className={"space-y-5"}>
      <div className={"flex gap-5"}>
        <H2>Adding event handlers</H2>
        <Button onClick={handleClick}>Click Me</Button>
        <Button
          onClick={() => {
            alert("You clicked me! 2");
          }}
        >
          Click Me
        </Button>
      </div>

      <div className={"flex gap-5"}>
        <H2>Reading props in event handlers</H2>
        <AlertButton message={"Movie is playing"}>Play Movie</AlertButton>
        <AlertButton message={"Uploading Image"}>Upload Image</AlertButton>
      </div>

      <div className={"flex gap-5"}>
        <H2>Passing event handlers as props</H2>
        <PlayButton movieName={"Weathering with you"} />
      </div>

      <div>
        <H2>Event Propagation</H2>
        <Button onClick={() => alert("You clicked the main button")} className={"p-10"}>
          <Button onClick={() => alert("You clicked the upload image.")} variant={"secondary"}>
            Upload Image
          </Button>
          <Button onClick={() => alert("You clicked the download image.")} variant={"secondary"}>
            Download Image
          </Button>
        </Button>
      </div>

      <div>
        <H2>Stop Propagation</H2>
        <Button onClick={() => alert("You clicked the main button")} className={"p-10"}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              alert("You clicked the upload image.");
            }}
            variant={"secondary"}
          >
            Upload Image
          </Button>
          <Button onClick={() => alert("You clicked the download image.")} variant={"secondary"}>
            Download Image
          </Button>
        </Button>
      </div>
    </div>
  );
}
