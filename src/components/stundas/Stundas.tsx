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
        <td className="grid w-full md:flex">
          <div className="p-3 border border-black flex md:justify-normal justify-center w-full h-[60px] items-center text-left">
            {index + 1 + ". " + klase}
          </div>

          <div className="p-3 border border-black flex flex-wrap justify-center w-full md:w-[300px] h-[60px] items-center ">
            {teacher[index]}
          </div>
        </td>
      </tr>
    </>
  );
}
