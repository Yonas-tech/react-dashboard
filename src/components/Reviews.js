import { useState, useEffect } from 'react';
import reviewsArr from './data'
import ReviewCard from "./ReviewCard";

const Reviews = (props) => {


    const [sentiment, setSentiment] = useState(reviewsArr);
    const [currentText, setCurrentText] = useState("");
    const [currentRate, setCurrentRate] = useState(0);

    const reviewsEl = sentiment.map((review, index) => {
        return (
            <ReviewCard
                rate={review.rate}
                comment={review.comment}
                key={index}
                userId={index}
            />
        );
    })

    function handleRate(e){
        setCurrentRate(e.target.value)
    }
        const storeSentiment = (e) => {
            e.preventDefault();
            let NewSentiments = [...sentiment];
            NewSentiments.push({'rate':currentRate, 'comment':currentText})
            setSentiment(NewSentiments)
            console.log(NewSentiments)
        }

    const sentimentForm = () => {
        return (
            < form className="sentiment" onSubmit={storeSentiment}>
                <label htmlFor="rate">Rate Us:</label>
                <select className="rate" name="rate" id="rate" onChange={handleRate}>
                    {/* <option value="">--</option> */}
                    <option value="five">5</option>
                    <option value="four">4</option>
                    <option value="three">3</option>
                    <option value="two">2</option>
                    <option value="one">1</option>
                    <option defaultValue="zero">0</option>
                </select>
                <input
                    className="text"
                    type="text"
                    placeholder={'leave comment here'}
                    onChange={event => setCurrentText(event.target.value)}
                />

                <button type="submit" className="submit" >Submit</button>  
            </form >
        )
    }

    return (
        <div className="reviews">

            <header>
                Reviews
            </header>

            <div className="body">
                <div className="sentment">
                {sentimentForm()}
                </div>
                <br /><br />
                {reviewsEl}
            </div>

        </div>
    );
}

export default Reviews;