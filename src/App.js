import { ButtonGroup, Button } from 'react-bootstrap';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const items = [
    { name: 'sogir uddin', description: 'slkhf;klshflfks', img: 'https://www.collinsdictionary.com/images/full/park_523559155_1000.jpg' },
    { name: 'polash uddin', description: 'slkhf;klshflfks', img: 'https://www.collinsdictionary.com/images/full/park_523559155_1000.jpg' },
    { name: 'bahar uddin', description: 'slkhf;klshflfks', img: 'https://www.collinsdictionary.com/images/full/park_523559155_1000.jpg' },
    { name: 'jamil uddin', description: 'slkhf;klshflfks', img: 'https://www.collinsdictionary.com/images/full/park_523559155_1000.jpg' },
    { name: 'kabil uddin', description: 'slkhf;klshflfks', img: 'https://www.collinsdictionary.com/images/full/park_523559155_1000.jpg' },
  ]
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        items.map(item => <Card item={item}></Card>)
      }
    </div>
  );
}

export default App;
