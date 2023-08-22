import { PostCard } from "./post-card";
import { type Post } from "@/app/types/posts";

export function PostList({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {posts?.map((post) => {
        const { id, users, content } = post;

        const {
          user_name: userName,
          name: userFullname,
          avatar_url: avatarUrl,
        } = users;
        return (
          <PostCard
            key={post.id}
            userFullname={userFullname}
            userName={userName}
            avatarUrl={avatarUrl}
            content={content}
          />
        );
      })}
    </>
  );
}
