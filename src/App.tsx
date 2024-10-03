import { FormEventHandler, MouseEventHandler, useState } from "react";
import Input from "./components/Input";
export default function App() {
  const [alarms, setAlarms] = useState(Array<IalarmInfo>);
  const [newAlarmTime, setNewAlarmTime] = useState("");
  const [newALarmTitle, setNewAlarmTitle] = useState("");
  const [newALarmDescription, setNewAlarmDescription] = useState("");

  const handleSetAlarm: React.FormEventHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const newAlarm: IalarmInfo = {
      id: alarms.length + 1,
      time: newAlarmTime,
      title: newALarmTitle,
      description: newALarmDescription,
    };
    setAlarms([...alarms, newAlarm]);
    setNewAlarmTime("");
    setNewAlarmTitle("");
    setNewAlarmDescription("");
    console.log(newAlarm);
  };

  const checkForAlarms = () => {
    const now = new Date();
    alarms.forEach((alarm) => {
      const alarmTime = new Date(alarm.time);
      if (alarmTime <= now) {
        console.log("RINGGGGG");
      }
    });
  };

  setInterval(checkForAlarms, 70000);

  return (
    <div className="p-20 bg-slate-100 border-2 rounded-xl">
      <h6 className="text-center mx-auto text-4xl font-bold">SET ALARM</h6>
      <form id="alarm-form" action="submit" onSubmit={handleSetAlarm}>
        <Input
          {...{
            label: "Title",
            id: "title",
            type: "text",
            placeHolder: "ALARM 1",
          }}
        />
        <Input
          {...{
            label: "Time",
            id: "time",
            type: "text",
            placeHolder: "00:00:00",
          }}
        />
        <Input
          {...{
            label: "Description",
            id: "description",
            type: "text",
            placeHolder: "DESCRIPTION 1",
          }}
        />
        <button
          id="submit-alarm"
          type="submit"
          className="w-full bg-slate-600 text-white font-semibold text-center py-3 rounded-md shadow-md"
        >
          SET
        </button>
      </form>
    </div>
  );
}
