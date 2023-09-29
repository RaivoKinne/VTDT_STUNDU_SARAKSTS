import DayOfWeek from "./DayOfWeek";
import Stundas from "./Stundas";
import Week from "./Week";

export default function Diena({
  classes,
  teacher,
  index,
}: {
  classes: string[];
  teacher: string[];
  index: number;
}) {
  return (
    <>
      <Week index={index} />
      <section className="flex justify-center items-center w-full my-8">
        <table className="w-[450px]  border-collapse border border-gray-300 shadow-md table-fixed md:w-[600px] lg:w-[900px] xl:w-[1200px]">
          <DayOfWeek index={index} />
          <tbody className="">
            {classes.map((klase, index) => (
              <Stundas teacher={teacher} klase={klase} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
