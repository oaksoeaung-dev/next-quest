import Image from "next/image";

export default function Profile() {
  return(
    <div>
      <Image src={"https://randomuser.me/api/portraits/men/36.jpg"} alt={"man"} width={100} height={100} className={"rounded-lg"} />
    </div>
  )
}