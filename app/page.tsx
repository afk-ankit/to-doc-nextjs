"use client";
import Image from "next/image";
import noTask from "/public/no-tasks.png";

export default function Page() {
  const data = [];
  return (
    <div className="p-8">
      <h1 className="text-3xl text-center">Welcome to To-Do app</h1>
      <div>
        {data.length ? (
          <h2>Some Tasks</h2>
        ) : (
          <div className="m-auto mt-8 lg:p-8  sm:[width:600px] ">
            <div className="m-auto ">
              <Image
                src={noTask}
                alt="no-tasks"
                className="m-auto"
                width={400}
              />
            </div>
            <h2 className="text-2xl text-center mt-8 opacity-50">
              No tasks added
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
