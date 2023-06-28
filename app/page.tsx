'use client'
import { Dates } from "@/components/Dates";
import { Times } from "@/components/Times";
import { Calendar } from "@/components/Calendar";
import data from '@/lib/daVinciIS.json'
import { Entries } from "@/components/Entries";

export default function Home() {
  const firstItem = data.result.displaySchedule.lessonTimes.find(item=>item.teacherCodes && item.teacherCodes.includes('REIC'))

  console.log(firstItem)

  return (
    <main className="flex w-screen snap-x overflow-auto no-scrollbar">
      <Times />
      {Array.from({ length: 3 }).map(() => {
        return (
          <div className="min-h-screen min-w-[100vw]">
            <Dates />
            <Entries klasse={firstItem.classCodes[0]} startTime={firstItem.startTime} endTime={firstItem.endTime} room={firstItem.roomCodes[0]}/>
            <Calendar />
          </div>
        );
      })}
    </main>
  );
}
