import { Dates } from "@/components/Dates";
import { Times } from "@/components/Times";
import { Calendar } from "@/components/Calendar";

export default function Home() {
  return (
    <main className="flex w-screen snap-x overflow-auto no-scrollbar">
      <Times />
      {Array.from({ length: 3 }).map(() => {
        return (
          <div className="min-h-[calc(100vh+8rem)] min-w-[100vw]">
            <Dates />
            <Calendar />
          </div>
        );
      })}
    </main>
  );
}
