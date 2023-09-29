import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { Data } from "../types";

export default function Navbar() {
  const { data }: Data = useFetchData();
  return (
    <nav className="flex justify-center items-center flex-wrap gap-4 w-[300px] md:w-[500px] lg:w-[700px]">
      {Object.keys(data).map((key) => (
        <div className="" key={key}>
          <Link to={`/grupa/${key}`} className="text-blue-600">
            {key}
          </Link>
        </div>
      ))}
    </nav>
  );
}
