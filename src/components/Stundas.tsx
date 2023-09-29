import { dayOfWeek, week } from "../utils";

function Stundas({
  classes,
  teacher,
  index,
}: {
  classes: string[];
  teacher: string[];
  index: number;
}) {
  if (!classes) {
    return <p>Nav stundas</p>;
  }
  return (
    <main>
      <p className="flex justify-center items-center text-2xl">
        {" "}
        {week(index)}
      </p>
      <section className="flex justify-center items-center w-full my-8">
        <table className="w-[450px]  border-collapse border border-gray-300 shadow-md table-fixed md:w-[600px] lg:w-[900px] xl:w-[1200px]">
          <thead>
            <tr>
              <th className="p-3  bg-gray-200 text-center">
                {dayOfWeek(index)}
              </th>
            </tr>
          </thead>
          <tbody className="">
            {classes.map((klase, index) => (
              <tr key={index}>
                <td className="grid md:flex w-full">
                  <p className="p-3 border border-gray-300 flex md:justify-normal justify-center w-full items-center text-left">
                    {index + 1 + ". " + klase}
                  </p>

                  <p className="p-3 border border-gray-300 flex justify-center w-full md:w-[300px] items-center ">
                    {teacher[index]}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Stundas;
