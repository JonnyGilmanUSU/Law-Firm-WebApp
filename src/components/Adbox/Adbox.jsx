import './Adbox.css';
import familyImage from '../../assets/images/family-large.jpg';
import react from 'react';

const Adbox = (props) => {

    // console.log('ADBOX RUNNING...');

    return (
        <div id="adbox">
            <div className="clearfix">
                <img src={familyImage} alt="Img" height="382" width="594" />
                    <div className="detail">
                        <h1>It’s never easy...<br /> When it comes to family.</h1>
                        <p>
                            But we can set<br /> everything straight.
                        </p>
                        <p onClick={props.onToggle}>Hide/show our promise</p>
                    </div>
            </div>
        </div>);
}

export default react.memo(Adbox);