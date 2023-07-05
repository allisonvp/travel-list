import Item from './Item';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: false }
];

function PackingList() {
  return (
    <div className="packing">
      <ul className="list-items">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
      <div>
        <select className="">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="clear">Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
