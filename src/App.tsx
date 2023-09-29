import useFetchData from "./hooks/useFetchData";
import { Data } from "./types";
import { Link } from "react-router-dom";
function App() {
  const { data, error, loading }: Data = useFetchData();
  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <section className="grid place-items-center w-[500px] h-[300px] grid-cols-12 ">
        {Object.keys(data).map((key) => (
          <div className="" key={key}>
            <Link to={`/grupa/${key}`}>{key}</Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
