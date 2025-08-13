// components/TypingText.tsx
import { ReactTyped } from "react-typed";

interface TypingTextProps {
  text: string;
}

export default function TypingText({ text }: TypingTextProps) {
  return (
    <ReactTyped
      strings={[text]}
      typeSpeed={50} // typing speed in ms per character
      backSpeed={30} // delete speed in ms per character
      loop // repeat forever
      backDelay={1500} // pause before deleting (ms)
      className="h-24 text-muted-foreground uppercase line-clamp-4"
    />
  );
}
