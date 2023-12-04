const NameDisplay = (props) => {
    return (
        <>
            <p>Please enter your name:</p>
            <input type="text" onBlur={props.onEntry} onCopy={props.onCopy} />
            <p>Welcome, {props.name} </p>
            <p>Name was copied? {props.theNameCopied.toString()}</p>
        </>
    );
}

export default NameDisplay;