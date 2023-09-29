import {
  CeturtāParstunda,
  OtraParstunda,
  PiektāParstunda,
  PirmaParstunda,
  TrešaParstunda,
} from "./parsstundas";
import { MainTitle, SubTitle, Title } from "./parsstundas/titles";

export default function StunduSaraksts() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center my-[4rem] h-[300px] ">
      <MainTitle />
      <SubTitle />
      <PirmaParstunda />
      <OtraParstunda />
      <Title />
      <TrešaParstunda />
      <CeturtāParstunda />
      <PiektāParstunda />
    </section>
  );
}
