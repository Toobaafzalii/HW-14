import React from "react";
import AlarmCard from "./AlarmCard";

export default function AlarmContainer(props: IcontainerProps) {
  const alarmsArray = props.alarms;

  return (
    <div className="grid grid-cols-3">
      {alarmsArray?.map((alarm) => {
        return <AlarmCard key={alarm.id} alarm={alarm} />;
      })}
    </div>
  );
}
