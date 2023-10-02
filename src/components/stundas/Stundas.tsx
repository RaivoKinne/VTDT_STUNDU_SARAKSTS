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
        <td className="grid w-full md:flex border-2 border-black">
          <div className="p-3 flex border-b-2 border-black md:border-none md:justify-normal justify-center w-full h-[60px] items-center text-left">
            {index + 1 + ". " + klase}
          </div>

          <div className="p-3  md:border-l-4 md:border-black flex flex-wrap justify-center w-full md:w-[300px] h-[60px] items-center ">
            {teacher[index]}
          </div>
        </td>
      </tr>
    </>
  );
}
