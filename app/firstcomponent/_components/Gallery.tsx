import Profile from "@/app/firstcomponent/_components/Profile";

export default function Gallery() {
  return (
    <div className={"flex items-center gap-3"}>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}
