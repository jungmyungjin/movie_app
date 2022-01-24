import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

// useParms :  URL에 대한 정보를 가져온다
function Detail() {
  const { helloMyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${helloMyId}`
      )
    ).json();
    setDetail(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  function veiwDetail(data) {
    console.log(data);
    return (
      <div>
        <h1>{data.title}</h1>
        <img src={data.medium_cover_image} alt={data.title} />
        <div className="detailInfo">
          <span>years : {data.year}</span>
          <br />
          <span>rating : {data.rating}</span>
          <br />
          <div className="genres">
            <span> genres</span>
            <ul>
              {data.genres.map((g) => (
                <li> {g}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="detailDescription">{data.description_full}</div>
      </div>
    );
  }

  return loading ? <h1>Loading...</h1> : veiwDetail(detail.data.movie);
}

export default Detail;
