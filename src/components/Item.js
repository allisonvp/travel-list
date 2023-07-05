import { useState } from 'react';

function Item({ item }) {
  const [packed, setPacked] = useState(item.packed);

  return (
    <li className="item">
      <input type="checkbox" name="" id="" onClick={() => setPacked(!packed)} />
      <span className={packed ? 'line-through' : ''}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
