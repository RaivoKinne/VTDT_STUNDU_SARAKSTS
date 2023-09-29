import { dayOfWeek } from "../../utils";

export default function DayOfWeek({ index }: { index: number }) {
  return (
    <>
      <thead>
        <tr>
          <th className="p-3  bg-gray-200 text-center">{dayOfWeek(index)}</th>
        </tr>
      </thead>
    </>
  );
}
