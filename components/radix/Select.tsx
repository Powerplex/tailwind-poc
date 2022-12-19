import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import cx from "classnames";
import React, { Children, ComponentProps, PropsWithChildren } from "react";
import Button from "./Button";

const SelectTrigger = ({
  ariaLabel,
}: ComponentProps<typeof SelectPrimitive["Trigger"]> & {
  ariaLabel?: string;
}) => {
  return (
    <SelectPrimitive.Trigger asChild aria-label={ariaLabel}>
      <Button>
        <Select.Value />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Button>
    </SelectPrimitive.Trigger>
  );
};

const SelectIcon = ({ children }: PropsWithChildren) => {
  return (
    <SelectPrimitive.Icon className="ml-2">{children}</SelectPrimitive.Icon>
  );
};

const SelectContent = ({
  children,
}: ComponentProps<typeof SelectPrimitive["Viewport"]>) => {
  return (
    <SelectPrimitive.Content>
      <SelectPrimitive.Viewport className="p-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  );
};

const SelectItem = ({
  children,
  disabled,
  key,
  value,
}: ComponentProps<typeof SelectPrimitive["Item"]>) => {
  return (
    <SelectPrimitive.Item
      disabled={disabled}
      key={key}
      value={value}
      className={cx(
        "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
        "disabled:opacity-0",
        "focus:outline-none select-none"
      )}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute inline-flex items-center left-2">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator = () => {
  return <SelectPrimitive.Separator className="h-px m-1 bg-slate-200" />;
};

export const Select = Object.assign(SelectPrimitive.Root, {
  displayName: "Select",
  // SubComponents:
  Content: SelectContent,
  Group: SelectPrimitive.Group,
  Icon: SelectIcon,
  Item: SelectItem,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectPrimitive.Value,
});
