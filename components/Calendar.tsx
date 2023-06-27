import { Entries } from "./Entries";

export const Calendar = () => {
  return (
    <div className="grid grid-cols-6 grow">
      {Array.from({ length: 6 }).map(() => {
        return (
          <div className="relative grid grid-cols-1 h-[45rem]">
            {Array.from({ length: 15 }).map(() => {
              return <div className="border-t border-r"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
