"use client";
import Diena from "./Dienas";
import useFetchData from "../hooks/useFetchData";
import { Data, info } from "../types";
import { useParams } from "react-router-dom";

export default function Grupas() {
  const { error, loading, data }: Data = useFetchData();
  const { id } = useParams();
  const grupasInfo: info[] = data[id as string];
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      {grupasInfo.map((info, index) => (
        <Diena key={index} info={info} index={index} />
      ))}
    </main>
  );
}
