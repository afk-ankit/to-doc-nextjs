import { addProduct } from "../actions";

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      next: {
        tags: ["users"],
      },
    });
    return response.json();
  } catch (e: any) {
    throw e.message;
  }
};
const page = async () => {
  const data = await fetchData();
  console.log(data);
  return (
    <div className="px-4">
      <form
        action={addProduct}
        className="flex-col flex gap-2 mt-4 [max-width:600px] m-auto"
      >
        <label htmlFor="name">Name of the Product</label>
        <input type="text" name="name" id="name" className="text-black" />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" className="text-black" />
        <button
          type="submit"
          className="border w-fit m-auto px-2 active:text-red-400 active:border-red-400"
        >
          Submit
        </button>
      </form>
      <div className="flex gap-4 flex-wrap mt-5">
        {data.length > 0 ? (
          data?.map((item: { name: string; price: string }, index: number) => {
            return (
              <div key={index} className="border p-2">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            );
          })
        ) : (
          <h1>No users found</h1>
        )}
      </div>
    </div>
  );
};

export default page;
