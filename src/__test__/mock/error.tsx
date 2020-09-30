import React, { useEffect } from "react";

const CrashingComponent = () => {
  useEffect(() => {
    throw new Error("Testing error");
  }, []);

  return <div>I will crash after render</div>;
};

export default CrashingComponent;
