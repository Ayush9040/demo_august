
const NextButton = ({ onClick, isLoad, text, value }) => {
    return (
        <>
            <button
                onClick={onClick}
                disabled={value?.trim() == ""}
                style={!value ?
                    { opacity: '60%', background: 'linear - gradient(90deg, #8063a0 0 %, #64149a 100 %) !important' } :
                    { opacity: '100%', background: 'linear - gradient(90deg, #8063a0 0 %, #64149a 100 %) !important' }}
                className={!isLoad ? 'next-btn btn-200' : 'next-btn '}>
                {
                    !isLoad ?
                        <>{text} </> :
                        <>
                            <span className="loader">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </span></>
                }
            </button ></>
    );
}
export default NextButton;