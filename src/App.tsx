import { ChangeEvent, useState, useEffect } from "react";
import Input from "./components/Input";
import AlarmModal from "./components/AlarmModal";
import AlarmContainer from "./components/AlarmContainer";
export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [triggeredAlarm, setTriggeredAlarm] = useState<IalarmInfo>();
  const [alarms, setAlarms] = useState<IalarmInfo[]>([]);
  const [newAlarm, setNewAlarm] = useState<IalarmInfo>({
    id: 0,
    title: "",
    time: "",
    description: "No Description",
  });

  useEffect(() => {
    const storedAlarms = JSON.parse(localStorage.getItem("alarms") || "[]");
    setAlarms(storedAlarms);
  }, []);

  useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }, [alarms]);

  const handleSetAlarm: React.FormEventHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setAlarms((prevValue) => {
      return [...prevValue, newAlarm];
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewAlarm((prevState) => ({
      ...prevState,
      id: alarms.length + 1,
      [name]: value,
    }));
  };

  function checkTime(i: number) {
    let value = "";
    if (i < 10) {
      value = "0" + String(i);
    } else {
      value = String(i);
    }
    return value;
  }

  const checkForAlarms = () => {
    try {
      const now = new Date();
      let h = checkTime(now.getHours());
      let m = checkTime(now.getMinutes());
      let s = checkTime(now.getSeconds());
      const currentTime = `${h}:${m}:${s}`;

      alarms.forEach((alarm) => {
        if (alarm.time === currentTime) {
          setOpenModal(true);
          setTriggeredAlarm(alarm);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  setInterval(checkForAlarms, 1000);

  return (
    <div className="w-full flex flex-col items-center mx-auto container gap-10">
      <form
        id="alarm-form"
        action="submit"
        onSubmit={handleSetAlarm}
        className="w-full p-20 mx-10 bg-slate-100 border-2 rounded-xl"
      >
        <h6 className="text-center mx-auto text-4xl font-bold">SET ALARM</h6>
        <Input
          label="Title"
          name="title"
          type="text"
          placeHolder="ALARM 1"
          value={newAlarm.title}
          onValueChange={handleInputChange}
          validation={{ required: true }}
        />
        <Input
          label="Time"
          name="time"
          type="text"
          placeHolder="00:00:00"
          value={newAlarm.time}
          validation={{ required: true, regex: true }}
          onValueChange={handleInputChange}
        />
        <Input
          label="Description"
          name="description"
          type="text"
          placeHolder="DESCRIPTION 1"
          value={newAlarm.description}
          onValueChange={handleInputChange}
          validation={{ required: true }}
        />
        <button
          id="submit-alarm"
          type="submit"
          className="w-full bg-slate-600 mt-10 text-white font-semibold text-center py-3 rounded-md shadow-md hover:shadow-xl"
        >
          SET
        </button>
      </form>
      <AlarmContainer alarms={alarms} />
      {openModal && <AlarmModal alarm={triggeredAlarm} />}
    </div>
  );
}
