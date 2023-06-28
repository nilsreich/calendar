import { Fragment } from "react";

type EntriesProp = {
  startTime: number;
  endTime: number;
  klasse: string;
  room?: string;
};

export const Entries = ({ startTime, endTime, klasse, room }: EntriesProp) => {
  const top = () => {
    return (startTime - 800) * 0.0197368 + 15+'rem';
  };

  return (
    <Fragment>
      <div className={`absolute  h-[4.5rem] bg-pink-400 p-2 text-sm font-medium text-white opacity-50`} style={{top:top()}}>
        {klasse} <div className="text-xs">{room}</div>
      </div>
    </Fragment>
  );
};
