import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  url: string;
};

const ClickJacking = ({ children, url }: Props) => {
  const [cnt, setCnt] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (cnt === 0) {
      window.open(url, "_blank");
      e.stopPropagation();
    }
    setCnt((cnt) => {
      return cnt + 1;
    });
  };

  return <div onClickCapture={handleClick}>{children}</div>;
};

export default ClickJacking;
