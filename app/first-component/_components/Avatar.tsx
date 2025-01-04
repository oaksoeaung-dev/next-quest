import Image from "next/image";
import { getImageUrl } from "@/app/first-component/_utils/utils";

export default function Avatar({ person, size }: { person: { name: string; imageId: string }; size: number }) {
  return <Image src={getImageUrl(person)} alt={"man"} width={size} height={size} className={"rounded-lg"} />;
}
