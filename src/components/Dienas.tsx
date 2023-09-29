import { info } from "../types";
import Diena from "./stundas/Diena";

export default function Dienas({ info, index }: { info: info; index: number }) {
  const { classes, teachers } = info;
  return (
    <>
      <Diena classes={classes} teacher={teachers} index={index} />
    </>
  );
}
