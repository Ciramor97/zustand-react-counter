import { useEffect } from 'react';
import './App.css';
import { useCounterStore } from './store';
function App() {
  const count = useCounterStore((state) => state.count);

  //This one will rerender the component each time one state variable change so preffered the first one
  // const { count } = useCounterStore((state) => state);

  return <OtherComponent count={count} />;
}

const logCount = () => {
  // const {count} = useCounterStore.getState();

  useCounterStore.setState({ count: 1 });
};

const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  useEffect(() => {
    logCount();
  }, []);

  return (
    <div>
      {count}
      <br />
      <br />
      <div>
        <button onClick={incrementAsync}>Increment</button>{' '}
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};
export default App;
