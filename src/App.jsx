import { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import { posts } from "./data/posts";
import { tags } from "./data/tags";
import PostList from "./components/postlist/PostList";
import TagList from "./components/taglist/TagList";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Setting mediaQuery eventlistener after first render, to
  // set isMobile state dynamically, in addition to media query in css file
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 540px)");
    const setMode = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", setMode);

    setMode(mediaQuery);
    return () => mediaQuery.removeEventListener("change", setMode);
  }, []);

  return (
    <>
      <NavBar isMobile={isMobile} />
      <SideBar isMobile={isMobile} />
      <div className="content">
        <Header />
        <div className="flex-center flex-wrap gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <PostList posts={posts} />
          <TagList tags={tags} />
        </div>
      </div>
    </>
  );
}

export default App;
