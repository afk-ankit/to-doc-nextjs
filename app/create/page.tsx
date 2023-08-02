import { addPost } from "../actions";
const page = () => {
  return (
    <div className="px-1">
      <h1 className="text-3xl text-center mt-7">Enter your work</h1>
      <form
        className=" p-4 mt-4 flex flex-col gap-4 [max-width:600px] m-auto"
        action={addPost}
      >
        <label htmlFor="topic">Enter the topic</label>
        <input
          type="text"
          id="topic"
          className="block w-full  bg-gray-900 p-2 rounded-md"
          name="topic"
        />
        <label htmlFor="description">Enter the description</label>
        <textarea
          name="description"
          id="description"
          className="block w-full  bg-gray-900 p-2 rounded-md [min-height:200px] text-white"
        ></textarea>
        <label htmlFor="tag">Enter the tag</label>
        <input
          type="text"
          id="tag"
          className="block w-full  bg-gray-900 p-2 rounded-md"
          name="tag"
        />
        <button
          type="submit"
          className="outline outline-white outline-1 w-full p-2 rounded-md px-4 hover:text-black hover:bg-white transition-colors bg-transparent text-white mt-4"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default page;
