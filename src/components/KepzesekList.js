import classes from "./KepzesekList.module.css";

import { Link } from "react-router-dom";

const KepzesekList = ({ kepzesek }) => {
  return (
    <>
      <table className={classes["kepzes-table"]}>
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
                <button className={classes["gomb"]}>Jelentkezem</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default KepzesekList;
