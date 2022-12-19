// index.jsx
import * as React from "react";
import * as _Popover from "@radix-ui/react-popover";

import { content } from "./Popover.css";

export const Popover = () => (
  <_Popover.Root>
    <_Popover.Trigger>Show info</_Popover.Trigger>
    <_Popover.Portal>
      <_Popover.Content sticky="always" side="top" className={content}>
        Some content
        <_Popover.Arrow />
      </_Popover.Content>
    </_Popover.Portal>
  </_Popover.Root>
);
