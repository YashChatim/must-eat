const Actions = (props) => {
    return (
        <div className={props.outerClass}>
            <button className={props.leftButtonClass} onClick={props.onLeftButton}>{props.leftButtonText}</button>
            <button className={props.rightButtonClass} onClick={props.onRightButton} style={{display: props.onDisplayButton}}>{props.rightButtonText}</button>
        </div>
    );
}

export default Actions;