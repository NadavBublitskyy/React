import { useState } from 'react';

function Foo() {
  const [count, setCount] = useState(0);
  
  return (
    <div 
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        margin: '5px'
      }}
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </div>
  );
}

export default Foo;
