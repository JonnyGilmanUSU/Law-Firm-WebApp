import aboutImage from '../assets/images/thumb-up.jpg';
import axios from 'axios';
import {useState, useEffect} from 'react';
import AboutItem from '../components/About/AboutItem';

const AboutPage = () => {

	const [aboutItems, setAboutItems] = useState();

	const getItems = async () => {
		try {
			const result = await axios.get("http://localhost:5000/aboutItems");
			console.log("Data is: ", result.data);
			setAboutItems(result.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getItems();
	}, []);

    if(aboutItems){
		return(
			<>
			<h1>About Us</h1>
				<div className="frame2">
					<div className="box">
						<img src={aboutImage} alt="Img" height="298" width="924" />
					</div>
				</div>
				{aboutItems.map(item =>
					<AboutItem item={item} key={item.key} />
				)}
			</>
		);
	}

}

export default AboutPage;