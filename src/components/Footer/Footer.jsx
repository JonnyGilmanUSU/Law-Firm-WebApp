import './Footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <div className="clearfix">
                <div className="section">
                    <h4>Latest News</h4>
                    <p>
                        This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link.
                    </p>
                </div>
                <div className="section contact">
                    <h4>Contact Us</h4>
                    <p>
                        <span>Address:</span> the address city, state 1111
                    </p>
                    <p>
                        <span>Phone:</span> (+20) 000 222 999
                    </p>
                    <p>
                        <span>Email:</span> info@freewebsitetemplates.com
                    </p>
                </div>
                <div className="section">
                    <h4>SEND US A MESSAGE</h4>
                    <p>
                        If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
                    </p>
                    <a href="http://www.freewebsitetemplates.com/misc/contact/" className="subscribe">Click to send us an email</a>
                </div>
            </div>
            <div id="footnote">
                <div className="clearfix">
                    <div className="connect">
                        <a href="http://freewebsitetemplates.com/go/facebook/" className="facebook"></a><a href="http://freewebsitetemplates.com/go/twitter/" className="twitter"></a><a href="http://freewebsitetemplates.com/go/googleplus/" className="googleplus"></a><a href="http://pinterest.com/fwtemplates/" className="pinterest"></a>
                    </div>
                    <p>
                        © Copyright 2023 Manes Winchester. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>);
}

export default Footer;