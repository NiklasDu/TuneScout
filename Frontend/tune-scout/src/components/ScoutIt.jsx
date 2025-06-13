import { useEffect, useState } from "react";

function ScoutIt() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topGenres, setTopGenres] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  //   const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY;

  useEffect(() => {
    const fetchTopTags = async () => {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=${apiKey}&format=json`
      );
      const data = await res.json();
      const formedData = data.toptags.tag;
      const genreNames = formedData.map((tag) => tag.name);
      setTopGenres(genreNames);
    };

    fetchTopTags();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);

    const fetchTopTracks = async () => {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${selectedGenre}&limit=20&api_key=${apiKey}&format=json`
      );
      const data = await res.json();
      setTopTracks(data.tracks.track);
    };

    fetchTopTracks();

    const fetchTopArtists = async () => {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${selectedGenre}&limit=20&api_key=${apiKey}&format=json`
      );
      const data = await res.json();
      setTopArtists(data.topartists.artist);
    };

    fetchTopArtists();
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
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl tracking-tight dark:text-white">
          Find Top Tracks and Artists
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          for each genre you can think of!
        </p>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto pt-8">
          <label className="mb-8 pt-8 pb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px48 dark:text-gray-400">
            Choose genre:
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-gray-50 border focus:outline-none w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
          >
            <option value="">-- Bitte wählen --</option>
            {topGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
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

      <div className="mx-auto max-w-screen-xl px-8 flex gap-8">
        {hasSearched && (
          <>
            <div className="flex-1">
              <h1 className="text-3xl font-bold pb-4">Top 20 Tracks: </h1>
              {topTracks.map((track, index) => (
                <div
                  key={track.mbid || index}
                  className="w-full flex items-center mb-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 min-h-[120px] h-[120px]"
                >
                  <div className="flex items-center justify-center h-full w-[120px]">
                    <NumberIcon number={index + 1} />
                  </div>
                  <div className="flex flex-col justify-center w-4/5 pl-4 overflow-hidden">
                    <h1 className="mb-2 mt-2 text-2xl font-medium text-gray-800 truncate">
                      {track.name}
                    </h1>
                    <h2 className="text-lg text-gray-600 truncate">
                      {track.artist.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold pb-4">Top 20 Artists: </h1>
              {topArtists.map((artist, index) => (
                <div
                  key={artist.mbid || index}
                  className="w-full flex items-center mb-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 min-h-[120px] h-[120px]"
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

export default ScoutIt;
