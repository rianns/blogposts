"use client";

const HandlingEvents = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>Post 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          delectus odit cum rerum facere nobis corrupti molestiae voluptatum
          quia, labore aspernatur commodi unde tempore hic iure earum doloribus
          totam. Possimus.
        </p>
        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
      </form>
      <form className="post">
        <h1>Post 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          delectus odit cum rerum facere nobis corrupti molestiae voluptatum
          quia, labore aspernatur commodi unde tempore hic iure earum doloribus
          totam. Possimus.
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  );
};
export default HandlingEvents;
