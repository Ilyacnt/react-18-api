import { useGetPostsQuery } from './shared/api/rootApi';
import { Input } from './shared/ui/input';
import { ModeToggle } from './shared/ui/mode-toggle';

function App() {
	const { data, isLoading } = useGetPostsQuery();

	if (isLoading) {
		return <div>Loading</div>;
	}

	return (
		<div>
			{data?.map(post => (
				<div key={post.id}>{post.title}</div>
			))}
			<Input placeholder='Email' />

			<ModeToggle />
		</div>
	);
}

export default App;
