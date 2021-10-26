import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "Javascript",
			body: "JavaScript — мультипарадигменный язык программирования. Поддерживает oбъектно-ориентированный, императивный и функциональный стили.Является реализацией спецификации ECMAScript .",
		},
		{
			id: 2,
			title: "Python",
			body: " В русском языке встречаются названия пито́н или па́йтон — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ.",
		},
		{
			id: 3,
			title: "Java",
			body: "Java— строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle). Разработка ведётся сообществом, организованным через Java Community Process; язык и основные реализующие его технологии распространяются по лицензии GPL. Права на торговую марку принадлежат корпорации Oracle.",
		},
	]);
	const [selectedSort, setSelectedSort] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	function getSortedPosts() {
		if (selectedSort) {
			return [...posts].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			);
		}
		return posts;
	}
	const sortedPosts = getSortedPosts();

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};
	const sortPosts = (sort) => {
		setSelectedSort(sort);
	};

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: "15px 0", width: "100%" }} />
			<div>
				<MyInput
					placeholder="Search..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Сортировка"
					options={[
						{ value: "title", name: "По названию" },
						{ value: "body", name: "По описанию" },
					]}
				/>
			</div>
			{posts.length ? (
				<PostList
					remove={removePost}
					posts={sortedPosts}
					title={"Список постов 1"}
				/>
			) : (
				<h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
			)}
		</div>
	);
}

export default App;
