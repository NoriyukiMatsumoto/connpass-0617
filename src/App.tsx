import React, { useRef, useState } from "react";
import ClickJacking from "./ClickJacking";
import Button from "./Button";
import ClickJacking2 from "./ClickJacking2";
import { useEffect } from "react";

const ClickJacking01 = () => {
  return (
    <ClickJacking url={"https://example.com"}>
      <Button
        onClick={() => {
          window.open("https://google.co.jp");
        }}
      >
        go to google!
      </Button>
    </ClickJacking>
  );
};

const ClickJacking02 = () => {
  return (
    <div>
      <ClickJacking url={"https://example.com"}>
        <span>Hello</span>
      </ClickJacking>
      <span>World</span>
    </div>
  );
};

const Span = () => {
  return (
    <div
      style={{
        marginTop: "8px",
        marginBottom: "8px",
        height: "4px",
        backgroundColor: "#E0E0E0",
      }}
    />
  );
};

const ClickJacking03 = () => {
  const [cnt, setCnt] = useState<number>(0);
  return (
    <div
      style={{ padding: "24px", backgroundColor: "#888" }}
      onClick={() => {
        setCnt((cnt) => {
          return cnt + 1;
        });
      }}
    >
      クリック数：{cnt}
      <ClickJacking url={"https://example.com"}>
        <Button
          onClick={() => {
            window.open("https://google.co.jp");
          }}
        >
          go to google!
        </Button>
      </ClickJacking>
    </div>
  );
};

const ClickJacking04 = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button
        ref={buttonRef}
        onClick={() => {
          window.open("https://google.co.jp");
        }}
      >
        go to google!
      </Button>
      <ClickJacking2 target={buttonRef} urls={["https://example.com"]} />
    </div>
  );
};

const ClickJacking05 = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [cnt, setCnt] = useState<number>(0);
  return (
    <div
      style={{ padding: "24px", backgroundColor: "#888" }}
      onClick={() => {
        setCnt((cnt) => {
          return cnt + 1;
        });
      }}
    >
      クリック数：{cnt}
      <Button
        ref={buttonRef}
        onClick={() => {
          window.open("https://google.co.jp");
        }}
      >
        go to google!
      </Button>
      <ClickJacking2 target={buttonRef} urls={["https://example.com"]} />
    </div>
  );
};

const ClickJacking06 = () => {
  const spanRef = useRef<HTMLSpanElement>(null);
  return (
    <div>
      <span ref={spanRef}>Hello</span>
      <span>World</span>
      <ClickJacking2 target={spanRef} urls={["https://example.com"]} />
    </div>
  );
};

const ClickJacking07 = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [show, setShow] = useState<boolean>(true);
  const [buttonText, setButtonText] = useState<string>("go to google!");

  return (
    <div style={{ padding: "24px", backgroundColor: "#888" }}>
      <div></div>
      <Button
        ref={buttonRef}
        onClick={() => {
          setShow((show) => !show);
        }}
      >
        show：{show ? "show" : "none"}
      </Button>
      <Button
        ref={buttonRef}
        onClick={() => {
          window.open("https://google.co.jp");
        }}
      >
        {buttonText}
      </Button>
      <ClickJacking2
        target={buttonRef}
        urls={["https://example.com", "https://ja.reactjs.org/"]}
        show={show}
        onClick={() => {
          setButtonText("ha ha ha!");
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div style={{ margin: "16px" }}>
      <ClickJacking01 />
      <Span />
      <ClickJacking02 />
      <Span />
      <ClickJacking03 />
      <Span />
      <ClickJacking04 />
      <Span />
      <ClickJacking05 />
      <Span />
      <ClickJacking06 />
      <Span />
      <ClickJacking07 />
    </div>
  );
}

export default App;
