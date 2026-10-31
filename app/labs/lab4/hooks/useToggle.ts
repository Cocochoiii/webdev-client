// My hook keeps a boolean and a function that flips it
import { useState } from "react";
export default function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn(!on);
  return [on, toggle] as const;
}
