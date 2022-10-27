import classes from "./AktualisNegyedev.module.css";

const AktualisNegyedev = () => {
  return (
    <div>
      <h2>Aktuális negyedév:</h2>
      <table>
        <thead>
          <tr>
            <th>Periódus</th>
            <th>Alap mozgóbér</th>
            <th>Állapot</th>
            <th>Eddigi eredmény</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022 Q4</td>
            <td>150 000 HUF</td>
            <td>Folyamatban</td>
            <td>60%</td>
          </tr>
        </tbody>
      </table>
      <h3>Kitűzött célok:</h3>
      <table>
        <thead>
          <tr className={classes["kituzott-ertekek"]}>
            <th>Név</th>
            <th>Súly</th>
            <th>Leírás</th>
            <th>Felhasználói megjegyzés</th>
            <th>Jóváhagyói megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          <tr className={classes["kituzott-ertekek"]}>
            <td>Visszajelzés az ügyféltől</td>
            <td>0,2</td>
            <td>Kötelező KPI</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AktualisNegyedev;
