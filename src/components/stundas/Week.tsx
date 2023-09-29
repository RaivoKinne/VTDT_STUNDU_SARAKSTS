import { week } from "../../utils";

export default function Week({ index }: { index: number }) {
  return (
    <>
      <p className="flex justify-center items-center text-2xl">
        {" "}
        {week(index)}
      </p>
    </>
  );
}
