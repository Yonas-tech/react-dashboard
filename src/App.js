import AverageRating from "./components/AverageRating";
import Reviews from "./components/Reviews";
import SentimentAnalysis from "./components/SentimentAnalysis";
import Sidebar from "./components/Sidebar";
import WebsiteVisitors from "./components/WebsiteVisitors";

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <main>
        <WebsiteVisitors/>
        <AverageRating/>
        <SentimentAnalysis/>
        <Reviews/>
        </main>
    </div>
  );
}

export default App;
