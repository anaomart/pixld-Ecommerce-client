import React, { useEffect, useState } from "react";

export default function Loading() {
  const [displayText, setDisplayText] = useState(
    <div className="text-center">
      <span className="loading loading-infinity loading-lg m-auto bg-green-400 "></span>
    </div>
  );

  useEffect(() => {
    setTimeout(() => {
      setDisplayText(
        <div className="font-semibold text-red-400">
          Something went wrong ...
        </div>
      );
    }, 5000);
  }, []);

  return (
    <div className="text-center">
      <p>{displayText}</p>
    </div>
  );
}
