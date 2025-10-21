export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 p-4 mb-4 rounded-xl shadow-lg w-full hover:bg-slate-700 transition-all duration-200 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-slate-400">Category: {category}</p>
      </div>
      <span className="text-indigo-400 font-bold text-lg">x{quantity}</span>
    </li>
  );
}
