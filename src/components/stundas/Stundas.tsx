export default function Stundas({
  index,
  teacher,
  klase,
}: {
  index: number;
  teacher: string[];
  klase: string;
}) {
  return (
    <>
      <tr key={index}>
        <td className="grid md:flex w-full">
          <p className="p-3 border border-gray-300 flex md:justify-normal justify-center w-full h-[50px] items-center text-left">
            {index + 1 + ". " + klase}
          </p>

          <p className="p-3 border border-gray-300 flex justify-center w-full md:w-[300px] items-center h-[50px]">
            {teacher[index]}
          </p>
        </td>
      </tr>
    </>
  );
}
