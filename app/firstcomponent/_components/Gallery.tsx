import Profile from "@/app/firstcomponent/_components/Profile";

export default function Gallery() {
  return (
    <div className={"flex gap-3 items-center"}>
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
  )
}