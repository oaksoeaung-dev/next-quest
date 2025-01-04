import Profile from "@/app/first-component/_components/Profile";
import Avatar from "@/app/first-component/_components/Avatar";

export default function Gallery() {
  return (
    <div className={"flex items-center gap-3"}>
      <Profile avatar={<Avatar person={{ name: "John", imageId: "1" }} size={100} />} />
      <Profile avatar={<Avatar person={{ name: "Jack", imageId: "12" }} size={100} />} />
      <Profile avatar={<Avatar person={{ name: "Joe", imageId: "32" }} size={100} />} />
    </div>
  );
}
