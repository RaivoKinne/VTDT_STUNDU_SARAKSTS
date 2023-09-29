function Stundas({
  classes,
  teacher,
}: {
  classes: string[];
  teacher: string[];
}) {
  if (!classes) {
    return <p>Nav stundas</p>;
  }
  return (
    <table className="w-full border-collapse border border-gray-300 shadow-md table-fixed">
      <thead>
        <tr>
          <th className="p-3 text-left bg-gray-200">Stundas</th>
        </tr>
      </thead>
      <tbody className="">
        {classes.map((klase, index) => (
          <tr key={index}>
            <td className="p-3 border border-gray-300 flex justify-between w-full items-center">
              <p>{klase}</p>
              <p>{teacher[index]}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Stundas;
