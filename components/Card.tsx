import classnames from "classnames";
import { sprinkles, Sprinkles } from "@theme";

import { container, disabled } from "./Card.css";
import { useState } from "react";

export const runtimeStyles: Sprinkles = {
  display: "flex",
  padding: "medium",

  // Conditional sprinkles:
  flexDirection: {
    mobile: "column",
    desktop: "row",
  },
};

interface Props {
  sx?: Sprinkles;
}

export const Card = ({ sx }: Props) => {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <div
      onClick={() => setDisabled(!isDisabled)}
      className={classnames(container, !!sx && sprinkles(sx), {
        [disabled]: isDisabled,
      })}
    >
      <p>My card</p>
      <p>...</p>
    </div>
  );
};
