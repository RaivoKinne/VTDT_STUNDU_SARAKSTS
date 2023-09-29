import Navbar from "./components/Navbar";
import StunduSaraksts from "./components/StunduSaraksts";

function App() {
  return (
    <main className="flex justify-center items-center">
      <section className="flex justify-center items-center  flex-col">
        <p className="text-[30px] my-10">STUNDU SARAKSTS</p>
        <Navbar />
        <StunduSaraksts />
      </section>
    </main>
  );
}

export default App;
