// "use client";
import Image from "next/image";
import noTask from "/public/no-tasks.png";

export default async function Page() {
  const getPosts = async () => {
    try {
      const data = await fetch("http://localhost:3000/posts");
      const posts = await data.json();
      return posts;
    } catch (error: any) {
      console.log(error.message);
    }
  };
  type toDo =
    | Array<{
        _id: String;
        topic: String;
        description: String;
        tags: Array<String>;
      }>
    | [];
  const data: toDo = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl text-center">Welcome to To-Do app</h1>
      <div>
        {data.length ? (
          data.map((item, key) => (
            <div key={key}>
              <p>{item.topic}</p>
              <p>{item.description}</p>
              <p>{item.tags}</p>
            </div>
          ))
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
