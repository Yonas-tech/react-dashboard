import { useState, useEffect } from "react";

const WebsiteVisitors = () => {
    let visitCount = localStorage.getItem('page_view')
    localStorage.setItem("page_view", 19803);

    const [count, setCount] = useState(localStorage.page_view);

    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
    
    const incrementVisits =() => {
        let newVisitCount = Number(visitCount) + 1;
        // setCount(newVisitCount)
    }
    incrementVisits()

    
    return (
        <div className="website-visitors">
            <header>
                Website Visitors Today
            </header>
            <div className="body">
                {count}
            </div>
        </div>
    );
}

export default WebsiteVisitors;