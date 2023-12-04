import { useContext } from 'react';
import Sidebar from '../UI/Sidebar/Sidebar';
import { PracticesContext } from '../../store/contexts';

const PracticesSidebar = () => {

	const {isLoading, error, practices} = useContext(PracticesContext);



	let content = "";

	if (practices.length > 0) {
		content =
			<ul>
				{practices.map(practice => 
				<li key={practice.id}>
					<a href={`/practices/${practice.id}`}>{practice.title}</a>
				</li>)}
			</ul>

	} else if (isLoading) {
		content = <p>Loading...</p>
	} else if (error) {
		content = <p>Oops, something went wrong: {error}</p>
	}

	return (
		<Sidebar>
			<div>
				<h2>Practices</h2>
				{content}
			</div>
			<div>
				<h2>Client Testimonials</h2>
				<p>
					&ldquo;The best family lawyers in the city so far. Me and my ex-wife didn’t have any<br /> problems settling the terms and agreement. Everything went so smoothly. We’re both very happy.&rdquo; <span>- Jared Greene</span>
				</p>
			</div>
		</Sidebar>
	);
}

export default PracticesSidebar;