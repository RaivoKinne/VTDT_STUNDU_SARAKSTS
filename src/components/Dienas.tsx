import { info } from "../types";
import Stundas from "./Stundas";

export default function Diena({ info }: { info: info }) {
  const { classes, teachers } = info;
  return (
    <>
      <Stundas classes={classes} teacher={teachers} />
    </>
  );
}
