"use client";
/*import {Button} from "@/components/ui/button";

export default function Page() {

    let name = "Oak Soe Aung";

    const changeName = () => {
        name = "Aung Aung";
        console.log("Name", name);
    }

    return (
        <div className={"space-y-5 mt-10"}>
            <h1 className={"text-2xl text-zinc-700 font-semibold"}>Hello! My name is {name}</h1>
            <Button onClick={changeName}>Click Here To Change Name</Button>
        </div>
    )
}*/

/*
 * Without use state hook
 * - button မှာ click လုပ်လိုက်ပြီး name change လိုက်ပေမယ့် tsx template ထဲက name မှာ update ဖြစ်မသွားဘူး
 * - ဘာလို့မဖြစ်လည်းဆိုတော့ component က re-render မဖြစ်သွားလို့
 */

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("Oak Soe Aung");
  const [posts, setPosts] = useState([
    {
      id: 1,
      post: "Post one",
    },
    {
      id: 2,
      post: "Post two",
    },
    {
      id: 3,
      post: "Post three",
    },
  ]);

  const changeName = () => {
    setName("Htet Hnin Oo");
  };

  const deletePost = (id: number) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div>
      <div className={"mt-10 space-y-5"}>
        <h1 className={"text-2xl font-semibold text-zinc-700"}>Hello! My name is {name}</h1>
        <Button onClick={changeName}>Click Here To Change Name</Button>
      </div>

      <hr className={"my-5"} />

      <h1 className={"text-2xl font-semibold text-zinc-700"}>Posts</h1>
      <ul className={"mt-10 max-w-sm space-y-5"}>
        {posts.map((post) => (
          <li key={post.id} className={"flex items-center justify-between rounded-lg bg-zinc-100 p-5 text-zinc-700"}>
            <span>{post.post}</span>
            <Button variant={"destructive"} onClick={() => deletePost(post.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
 * useState ထဲက setter က async function ဖြစ်တယ်
 * setter function ထဲ မှာ callback function တစ်ခုထည့်ပြီး အဲ့ callback function ထဲမှာ parameter က previous state ရဲ့ value ကိုရတယ်
 * အဲ့တကြောင့် data ကို update လုပ်နေတဲ့ကာလမှာအချိန်နည်းနည်းကြာတယ် အဲ့တာကြောင့် မစောင့်ပဲ console.log ကို run တယ် အဲ့တာကြောင့် console.log ထဲမှာ value အဟောင်းပဲ ပေါ်နေတာဖြစ်တယ် update value တန်းမပေါ်ဘူး
 * */
