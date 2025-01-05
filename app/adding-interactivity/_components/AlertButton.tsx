import { Button } from "@/components/ui/button";

export default function AlertButton({ message, children }: { message: string; children: React.ReactNode }) {
  return (
    <Button variant={"destructive"} onClick={() => alert(message)}>
      {children}
    </Button>
  );
}
