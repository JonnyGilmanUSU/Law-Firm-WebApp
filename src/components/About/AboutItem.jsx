const AboutItem = (props) => {
    return(
        <>
        <h2>{props.item.header}</h2>
			<p>
				{props.item.text}
			</p>
        </>
    );
}

export default AboutItem;