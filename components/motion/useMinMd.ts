"use client";

import { useEffect, useState } from "react";

/** True when viewport is md+; use to skip hover motion on phones. */
export function useMinMd() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return matches;
}
