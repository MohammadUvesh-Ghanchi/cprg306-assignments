
export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 p-4 mb-4 rounded-lg shadow-md w-full hover:bg-slate-700 transition">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-md text-slate-300">Quantity: {quantity}</p>
      <p className="text-md text-slate-300">Category: {category}</p>
    </li>
  );
}