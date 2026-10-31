// The reader shows the counter from the context
import { useCounterContext } from "./CounterContext";
export default function ContextCounterRead() {
  const { count } = useCounterContext();
  return (
    <div id="wd-context-counter-read">
      <h3>Reader: {count}</h3>
    </div>
  );
}
