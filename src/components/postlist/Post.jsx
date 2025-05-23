function Post({ title, body }) {
  return (
    <article className="my-3 rounded-lg bg-[#3b4252] p-2">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{body}</p>
    </article>
  );
}

export default Post;
