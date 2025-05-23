import Post from "./Post";

function PostList({ posts }) {
  return (
    <div className="mb-4 w-72 rounded-2xl border-2 border-[#3b4252] bg-[#2e3440] p-2 sm:w-80 lg:w-96">
      <h2 className="p-2 text-2xl">Posts</h2>
      {posts.map((post, i) => (
        <Post title={post.title} body={post.body} key={i} />
      ))}
    </div>
  );
}

export default PostList;
