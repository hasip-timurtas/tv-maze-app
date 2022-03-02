import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import apiClient from '../../api';

function Show() {
  const [show, setShow] = useState({});
  const [error, setError] = useState('');
  let { id: showId } = useParams();

  useEffect(() => {
    apiClient.getShowDetail(showId).then(result => {
      setShow(result.data);
    });
  }, []);

  return (
    <div className="Show">
      Show
    </div>
  );
}

export default Show;
