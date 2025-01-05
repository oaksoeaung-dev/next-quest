"use client";
import Blog from "@/app/adding-interactivity/_components/Blog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);
  console.log("Component parent render");
  return (
    <div className={"grid grid-cols-2"}>
      <div>
        <Button onClick={() => setCount(count + 1)}>Increase {count}</Button>
      </div>
      <Blog />
      <Blog />
    </div>
  );
}
