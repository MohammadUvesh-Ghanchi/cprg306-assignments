
export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 p-4 mb-4 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <h3 className="text-md text-slate-300">Quantity: {quantity}</h3>
      <h3 className="text-md text-slate-300">Category: {category}</h3>
    </li>
  );
}