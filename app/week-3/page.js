import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main className="bg-slate-950 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
