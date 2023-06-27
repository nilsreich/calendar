import { Entries } from "./Entries";

export const Calendar = () => {
  return (
    <div className="grid grid-cols-7 grow">
      {Array.from({ length: 7 }).map(() => {
        return (
          <div className="relative grid grid-cols-1 h-[42rem]">
            {Array.from({ length: 14 }).map(() => {
              return <div className="border-t border-r"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
