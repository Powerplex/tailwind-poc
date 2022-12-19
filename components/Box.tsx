import { sprinkles, system, SystemProps } from "@theme";
import classnames from "classnames";

interface Props {
  sx?: SystemProps;
}

export const Box = ({ sx }: Props) => {
  return <div className={classnames(!!sx && system(sx))}>Box</div>;
};
