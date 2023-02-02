import { useState } from "react";
import "../App.css";

interface Post {
	id: number;
	title: string;
	body: string;
}

export default function Question1() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [title, setTitle] = useState<string>("");
	const [body, setBody] = useState<string>("");

	const handleFetch = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		setPosts(data);
	};

	const handleCreate = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!title || !body) {
			alert("Title and body cannot be empty");
			return;
		}
		const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
			},
			body: JSON.stringify({
				title,
				body,
			}),
		});
		const newPost = await response.json();
		setPosts([...posts, newPost]);
	};

	return (
		<div className="wrap">
			<h2>Question 1: Posts</h2>
			<button onClick={handleFetch}>Fetch</button>
			<div className="content">
				<form onSubmit={handleCreate}>
					<div>
						<label>Title:</label>
						<input
							type="text"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div>
						<label>Body:</label>
						<textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
					</div>
					<button type="submit">Create</button>
				</form>
				<ul className="list-group">
					{posts.map((post) => (
						<li key={post.id} className="list-group-item">
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
