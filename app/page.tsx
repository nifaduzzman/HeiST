import Image from "next/image";
import AvailableWorks from "./components/AvailableWorks";

export default function Home() {
  return (
    <main className="md:w-[70%] w-full dark:bg-slate-900 bg-slate-100 min-h-[90vh] mx-auto">
      <AvailableWorks/>
    </main>
  );
}
