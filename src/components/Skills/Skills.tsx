import skills from "./data";

export default function Skills() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {skills.map(({ icon: Icon, key, description }) => (
        <div
          key={key}
          className="flex w-80 items-center justify-between rounded-sm border-2 border-purple p-2"
        >
          <p className="text-white">{description}</p>
          <Icon className="h-8 w-8 text-purple" />
        </div>
      ))}
    </div>
  );
}
