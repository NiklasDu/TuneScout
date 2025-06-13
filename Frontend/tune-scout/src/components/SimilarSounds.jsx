import { useEffect, useState } from "react";

function SimilarSounds() {
  const [selectedArtist, setSelectedArtist] = useState("");
  const [similarArtists, setSimilarArtists] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);

    const fetchSimilarArtists = async () => {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${selectedArtist}&limit=20&api_key=${apiKey}&format=json`
      );
      const data = await res.json();
      setSimilarArtists(data.similarartists.artist);
    };

    fetchSimilarArtists();
  };

  function NumberIcon({ number }) {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ display: "block" }}
      >
        <rect
          x="0"
          y="0"
          width="120"
          height="120"
          rx="16"
          fill="#06b6d4"
          stroke="#0891b2"
          strokeWidth="4"
        />
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="4em"
          fill="#fff"
          fontWeight="bold"
        >
          {number}
        </text>
      </svg>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 min-h-[75vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl tracking-tight dark:text-white">
          Find Similar Artists
        </h1>
        <p className="text-lg font-normal pb-8 text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          to the once you already know!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              onChange={(e) => setSelectedArtist(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              placeholder="Search for similar Artists..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto max-w-screen-xl px-8">
        {!hasSearched && (
          <p className="text-center text-gray-500 text-lg py-8 dark:text-gray-400">
            Enter a artist name to find similar artists!
          </p>
        )}
        {hasSearched && (
          <>
            <div className="">
              <h1 className="text-3xl font-bold pb-4">Results: </h1>
              {similarArtists.map((artist, index) => (
                <div
                  key={artist.mbid || index}
                  className="w-full flex items-center mb-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 min-h-[120px] h-[120px]"
                >
                  <div className="flex items-center justify-center h-full w-[120px]">
                    <NumberIcon number={index + 1} />
                  </div>
                  <div className="flex flex-col justify-center w-4/5 pl-4 overflow-hidden">
                    <h1 className="mb-2 mt-2 text-2xl font-medium text-gray-800 truncate">
                      {artist.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default SimilarSounds;
