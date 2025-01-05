import GreenButton from "@/app/adding-interactivity/_components/GreenButton";

export default function PlayButton({ movieName }: { movieName: string }) {
  const handlePlayClick = () => {
    alert(`Playing ${movieName}`);
  };
  return <GreenButton playNow={handlePlayClick}>Play {movieName}</GreenButton>;
}
