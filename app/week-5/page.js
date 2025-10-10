import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
        Week 5 Assignment
      </h1>

      <NewItem />
    </main>
  );
}
