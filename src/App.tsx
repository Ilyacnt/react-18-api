import './App.css';
import { useGetPostsQuery } from './api/rootApi';

function App() {
	const { data, isLoading } = useGetPostsQuery();

	if (isLoading) {
		return <div>Loading</div>;
	}

	console.log(import.meta.env);

	return (
		<div>
			{data?.map(post => (
				<div key={post.id}>{post.title}</div>
			))}
		</div>
	);
}

export default App;
