export default function Card({ day, date, taskTitle, description }) {
   
   
    
  return (
    <div className="w-full mb-4 mt-4">
      <div className="bg-yellow-200 h-32 rounded-md px-4 py-5 flex justify-between ">
        <div className="flex gap-4 ">
          <div className="bg-white w-[89px] flex flex-col items-center justify-center rounded-md">
            <span className="text-red-500 text-md">{day}</span>
            <span className="text-3xl text-slate-800">{date}</span>
          </div>
          <div className="self-center">
            <h3 className="font-semibold text-lg mb-2">{taskTitle}</h3>
            <p className="text-slate-700 text-sm font-thin">{description}</p>
          </div>
        </div>
        <div className="self-end">
          <a className="px-10 py-2 font-semibold text-xs rounded-md bg-white text-slate-800 capitalize">
            Todo
          </a>
        </div>
      </div>
    </div>
  );
}
