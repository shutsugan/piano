import React, { FunctionComponent } from "react";

import "./index.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return <footer className="footer">Piano {currentYear}</footer>;
};
