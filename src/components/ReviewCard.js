const ReviewCard = (props) => {
    return ( 
        <div className="review-card">
            <div>
                UserID: {props.userId}<br/>
                Rate: {props.rate}<br/>
                Review: {props.comment}
            </div>
        </div>

     );
}
 
export default ReviewCard;

