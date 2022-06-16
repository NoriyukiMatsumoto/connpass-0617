import React from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <button
        style={{
          width: "fit-content",
          padding: "8px",
          cursor: "pointer",
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Button;
