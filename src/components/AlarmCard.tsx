export default function AlarmCard(props: IcardProps) {
  console.log("ok");
  console.log(props.alarm);

  return (
    <div className="rounded-xl border-2 border-gray-500 py-6 px-10">
      <h2 className="">{props.alarm.time}</h2>
      <p>{props.alarm.time}</p>
      <p>{props.alarm.description}</p>
    </div>
  );
}
