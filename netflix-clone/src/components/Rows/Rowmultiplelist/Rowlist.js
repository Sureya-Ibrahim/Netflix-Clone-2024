import React from 'react'
import Row from '../Rowsingle/Row'
import requests from '../../../utils/requests'

const Rowlist = () => {
  return (
    <>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="AnimaionMovies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="AdventureMovies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="CrimeMovies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="DocumentaryMovies" fetchUrl={requests.fetchDocumentaryMovies}
      />
      <Row title="DramaMovies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="FamilyMovies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="FantasyMovies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="HistoryMovies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title=" MusicMovies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="MysteryMovies" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="ScienceFictionMovies" fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="TvMovieMovies" fetchUrl={requests.fetchTvMovieMovies} />
      <Row title="ThrillerMovies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="WarMovies" fetchUrl={requests.fetchWarMovies} />
      <Row title="WesternMovies" fetchUrl={requests.fetchWesternMovies} />
    </>
  );
}

export default Rowlist
