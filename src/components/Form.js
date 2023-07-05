import { useState } from 'react';

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    let descriptionTrim = description.trim();
    if (!descriptionTrim) return;
    const newItem = {
      descriptionTrim,
      quantity,
      packed: false,
      id: Date.now()
    };
    console.log(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="text-2xl mr-4">What do you need for your 😍 trip?</h3>
      <select
        className="select"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        className="input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button className="button">Add</button>
    </form>
  );
}

export default Form;
