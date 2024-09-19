import React from "react";
import { Blocks } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <Blocks height="90" width="90" color="#ffffff" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
