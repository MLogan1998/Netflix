import './App.css';
import Row from './Components/Row/Row';
import Banner from './Components/Banner/Banner';
import requests from './Data/request';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="Netflx Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
