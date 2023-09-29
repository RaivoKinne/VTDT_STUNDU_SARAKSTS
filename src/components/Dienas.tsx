import { info } from "../types";
import Stundas from "./Stundas";

export default function Diena({ info, index }: { info: info; index: number }) {
  const { classes, teachers } = info;
  return (
    <>
      <Stundas classes={classes} teacher={teachers} index={index} />
    </>
  );
}
