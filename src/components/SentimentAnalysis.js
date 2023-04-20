const SentimentAnalysis = () => {
    return (
        <div className="sentiment-analysis">

            {/* <img src="../Images/grinning-face_1f600.gif" alt="grinning face" />
            <img src="../Images/expressionless-face_1f611.gif" alt="expressionless face" />
            <img src="../Images/pounting-face.gif" alt="grinning face" /> */}

            <header>
                Sentiment Analysis
            </header>
            <div className="body">
                <div>
                    <p>
                        <span className="emoji positive">😃</span>  989423
                    </p>
                </div>

                <div>
                    <p>
                        <span className="emoji neutral">😑</span>  2898
                    </p>
                </div>

                <div>
                    <p>
                        <span className="emoji angry">😠</span>  347
                    </p>
                </div>
            </div>

        </div>
    );
}

export default SentimentAnalysis;