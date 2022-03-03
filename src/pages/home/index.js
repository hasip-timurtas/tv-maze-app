import { useState, useEffect } from 'react';
import apiClient from '../../api';
import ShowItem from '../../componenets/showItem';
import './home.scss';

const LOAD_AMOUNT = 12;

function Home() {
  const [allShows, setAllShows] = useState([]);
  const [loadedShows, setLoadedShows] = useState([]);

  useEffect(() => {
    apiClient.getTvShows().then(result => {
      setAllShows(result.data);
    });
  }, []);

  useEffect(() => {
    loadShows();
  }, [allShows]);

  const loadShows = () => {
    const loadedAmount = loadedShows.length;
    setLoadedShows(allShows.slice(0, loadedAmount + LOAD_AMOUNT));
  }

  return (
    <div className="Home">
      <p className="description">
        TV Show and web series database. <br />
        Create personalised schedules. Episode guide, cast, crew and character information.
      </p>

      <div className="show-content">
        <h2 className="list-header">Last Added Shows</h2>

        <div className="show-list">
          {
            loadedShows.length ?
              loadedShows.map(({ id, show }) =>
                <ShowItem
                  key={id}
                  id={show.id}
                  image={show.image.medium}
                  name={show.name}
                  rating={show.rating.average}
                />)
              : <div>There are no shows yet.</div>
          }

        </div>
        {loadedShows.length && loadedShows.length !== allShows.length &&
          < div className="load-more">
            <button onClick={loadShows}> Load More</button>
          </div>}
      </div>
    </div >
  );
}

export default Home;
