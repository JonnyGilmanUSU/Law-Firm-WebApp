import react, { useContext } from 'react';
import Main from '../UI/Main/Main';
import './Practices.css';

import { PracticesContext } from '../../store/contexts';

const Practices = () => {
  
    const {isLoading, error, practices} = useContext(PracticesContext);

    let content = "";

    if (practices.length > 0) {
        content =
            <ul className="practices">

                {practices.map((practice) => {

                    const imagePath = new URL(`../../assets/images/${practice.image}`, import.meta.url).href;
                    return <li className="frame5" key={practice.id}>
                        <a href={`/practices/${practice.id}`} className="box"><img src={imagePath} height="198" width="265" /><span>{practice.title}</span></a>
                    </li>
                })}
            </ul>
    } else if (isLoading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>Oops, something went wrong: {error}</p>
    }

    return (
        <Main>
            <h1>Practices</h1>
            <p>
                This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
            </p>
            {content}
        </Main>
    );
};

export default Practices;
