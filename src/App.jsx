import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from "react";

function App() {

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ]

  const handleSelectItem = (item) => {
    console.log(item)
  };

  const [display, setDisplay] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem} />
      {display && <Alert text='My Alert' onClose={() => setDisplay(false)} />}
      <Button color="secondary" label="Button" onClick={() => setDisplay(true)} />
    </div>
  )
}

export default App;