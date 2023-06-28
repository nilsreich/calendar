import { Entries } from "./Entries";

export const Calendar = () => {
  return (
    <div className="grid grid-cols-7 grow snap-x">
      {Array.from({ length: 7 }).map((index) => {
        return (
          <div className="relative grid grid-cols-1 snap-center h-[42rem]">
            {Array.from({ length: 14 }).map(() => {
              return <div className="border-t border-r"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
