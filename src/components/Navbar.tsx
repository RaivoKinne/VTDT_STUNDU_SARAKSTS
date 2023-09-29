import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { Data } from "../types";

export default function Navbar() {
  const { data }: Data = useFetchData();
  return (
    <nav className="flex justify-center items-center flex-wrap gap-4 w-[700px] h-[200px]">
      {Object.keys(data).map((key) => (
        <div className="" key={key}>
          <Link to={`/grupa/${key}`}>{key}</Link>
        </div>
      ))}
    </nav>
  );
}
