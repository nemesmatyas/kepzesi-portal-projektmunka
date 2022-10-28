import classes from "./KorabbiNegyedevek.module.css";

const KorabbiNegyedevek = () => {
  return (
    <>
      <h2>Korábbi negyedéves értékelések:</h2>
      <table>
        <thead>
          <tr>
            <th>Periódus</th>
            <th>Állapot</th>
            <th>Elért eredmény</th>
            <th>Mozgóbér mértéke</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022 Q1</td>
            <td>Lezárt</td>
            <td>102.3%</td>
            <td>150 000 HUF</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default KorabbiNegyedevek;
