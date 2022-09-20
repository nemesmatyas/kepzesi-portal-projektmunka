import { Link } from "react-router-dom";

const KepzesekList = (props) => {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Képzés azonosító</th>
            <th>Képzés neve</th>
            <th>Dátum</th>
            <th>Kategória</th>
            <th>Létszám</th>
          </tr>
        </thead>
        <tbody>
          {
            props.kepzesek.map(kepzes => <tr key={Math.random()}>
                <td><Link to={`/kepzesek/${kepzes.kepzesId}`}>{kepzes.kepzesId}</Link></td>
                <td>{kepzes.kepzesNev}</td>
                <td>{kepzes.kepzesDatum}</td>
                <td>{kepzes.kepzesKat}</td>
                <td>{kepzes.kepzesAktLetsz + '/' + kepzes.kepzesMaxLetsz}</td>
                <button>Jelentkezem</button>
            </tr>)
          }
        </tbody>
      </table>
    </>
  );
};
export default KepzesekList;