function TagList({ tags }) {
  return (
    <div className="mb-4 w-72 rounded-2xl border-2 border-[#3b4252] bg-[#2e3440] p-2 sm:w-80 lg:w-96">
      <h2 className="p-2 text-2xl">Tags</h2>
      <div className="flex-center my-3 flex-wrap gap-4">
        {tags.map((tag, i) => (
          <button
            className="cursor-pointer rounded-lg bg-[#B14853] px-4 py-2 drop-shadow-lg hover:bg-[#943D45]"
            onClick={() => console.log(`You clicked button ${i + 1}`)}
            key={i}
          >
            {tag} {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TagList;
