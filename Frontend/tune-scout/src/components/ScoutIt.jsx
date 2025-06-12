import { useEffect, useState } from "react";

function ScoutIt() {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl tracking-tight dark:text-white">
          Find Top Artist and Tracks
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          for each genre you can think of!
        </p>
        <form onSubmit={handleSumbit} className="max-w-sm mx-auto pt-8">
          <label className="mb-8 pt-8 pb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px48 dark:text-gray-400">
            Choose genre:
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-gray-50 border focus:outline-none w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
          >
            <option value="">-- Bitte wählen --</option>
            <option key="Metal" value="Metal">
              Metal
            </option>
            <option key="Rock" value="Rock">
              Rock
            </option>
            <option key="Pop" value="Pop">
              Pop
            </option>
          </select>
          <div className="pt-4">
            <button
              type="submit"
              className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
            >
              Suche starten
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ScoutIt;
