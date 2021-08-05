import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 2xl:mr-35 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-x-lg lg:max-w-xl xl:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
