import { useEffect, useState } from 'react';
import { ButtonGroup, Button, Row, Col, CardGroup, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=dfbf3be53c5b4002a87b59600fce1d38')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div>
      {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(NW => <News NW={NW}></News>)
            }
          </Row>
      }

    </div>
  );
}

export default App;
