import "./Highlight.css";
import {useContext} from 'react';
import SampleContext from "../../store/contexts";

const Highlight = (props) => {
  const ctxSample = useContext(SampleContext);
  
  // console.log('HIGHLIGHT RUNNING...');
  return (

    
    <div className="highlight">
      <p>Here is the context title: {ctxSample.title}</p>
      <div className="clearfix">
        <div className={props.showPromise ? 'promiseShow' : 'promiseHide'}>
        <div className="testimonial">
          <h2>Testimonials</h2>
          <p>
            &ldquo;Aenean ullamcorper purus vitae nisl tristique sollicitudin.
            Quisque vestibulum, erat ornare.&rdquo;
          </p>
          <span>-John Doe and Jane Doe-</span>
        </div>
        <h1>The Manes Winchester Promise</h1>
        <p>
          This website template has been designed by{" "}
          <a href="http://www.freewebsitetemplates.com/">
            Free Website Templates
          </a>{" "}
          for you, for free. You can replace all this text with your own text.
          You can remove any link to our website from this website template,
          you're free to use this website template without linking back to us.
          If you're having problems editing this website template, then don't
          hesitate to ask for help on the{" "}
          <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
        </p>
        </div>
      </div>
    </div>
  );
};
export default Highlight;
