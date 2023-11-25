import { PostProps } from "@/types/types";

const PostCard = (props: PostProps) => {
  return (
    <div className="postCard">
      <h1 className="postTitle">{props.title}</h1>
      <p className="postBody">{props.body}</p>
    </div>
  );
};
export default PostCard;
