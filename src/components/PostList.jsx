import React from "react";
import PostItem from "./PostItem";
import "./PostList.css";

export default function PostList({ posts, title, remove }) {
	return (
		<div>
			<h1 className="post_title">{title}</h1>
			{posts.map((post, index) => (
				<PostItem
					remove={remove}
					number={index + 1}
					post={post}
					key={post.id}
				/>
			))}
		</div>
	);
}
