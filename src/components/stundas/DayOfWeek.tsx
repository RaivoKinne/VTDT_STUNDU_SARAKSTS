import { dayOfWeek } from "../../utils";

export default function DayOfWeek({ index }: { index: number }) {
  return (
    <>
      <thead>
        <tr>
          <th className="p-3 bg-black text-white text-center">{dayOfWeek(index)}</th>
        </tr>
      </thead>
    </>
  );
}
