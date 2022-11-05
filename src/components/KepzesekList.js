import classes from "./KepzesekList.module.css";

import { Link } from "react-router-dom";

const KepzesekList = ({ kepzesek }) => {
  return (
    <div className={classes["kepzesek-list"]}>
      <table className={classes["kepzesek-table"]}>
        <thead>
          <tr>
            <th>Képzés azonosító</th>
            <th>Képzés neve</th>
            <th>Dátum</th>
            <th>Kategória</th>
            <th>Létszám</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {kepzesek.map((kepzes) => (
            <tr key={Math.random()}>
              <td>
                <Link to={`/kepzesek/${kepzes.kepzesId}`}>
                  {kepzes.kepzesId}
                </Link>
              </td>
              <td>{kepzes.kepzesNev}</td>
              <td>{kepzes.kepzesDatum}</td>
              <td>{kepzes.kepzesKat}</td>
              <td>{kepzes.kepzesAktLetsz + "/" + kepzes.kepzesMaxLetsz}</td>
              <td>
                <button className={classes["jelentkezes"]}>Jelentkezem</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default KepzesekList;
