import React, { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";

type Props = {
  target?: React.RefObject<Element>;
  urls: string[];
  show?: boolean;
  onClick?: () => void;
};

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const ClickJacking2 = ({ target, urls, show = true, onClick }: Props) => {
  const [cnt, setCnt] = useState<number>(0);
  const [rect, setRect] = useState<Rect | null>(null);

  useEffect(() => {
    if (!target?.current) {
      return;
    }
    setRect(target.current.getBoundingClientRect());
  }, [target]);

  const scrollHandler = useCallback(() => {
    if (!target?.current) {
      return;
    }
    setRect(target.current.getBoundingClientRect());
  }, [target]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  const handleOnClick = () => {
    onClick && onClick();
    if (cnt < urls.length) {
      window.open(urls[cnt], "_blank");
    }
    setCnt((cnt) => cnt + 1);
  };

  const visible = useMemo(() => {
    return cnt < urls.length && show;
  }, [cnt, show, urls]);

  if (!rect || !visible) {
    return null;
  }
  return (
    <div
      onClick={handleOnClick}
      style={{
        zIndex: 100,
        backgroundColor: "#F00",
        position: "fixed",
        opacity: "0.5",
        top: rect.y,
        left: rect.x,
        width: rect.width,
        height: rect.height,
      }}
    ></div>
  );
};

export default ClickJacking2;
