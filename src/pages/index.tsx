import HomePage from "@/components/HomePage/HomePage";
import { useEffect, useState } from "react";

export default function Home() {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <main>
        <HomePage />
      </main>
    );
  }
}
