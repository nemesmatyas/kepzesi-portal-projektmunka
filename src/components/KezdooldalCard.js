import { Link } from "react-router-dom";

import classes from "./KezdooldalCard.module.css";

const KezdooldalCard = ({ linkToPage, cardDisplayText, imgRoute }) => {
  // A dinamikus backgroundImage link miatt inline styles-t kell használni
  const kezdooldalStyles = {
    width: "350px",
    height: "450px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${imgRoute})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    boxShadow:
      "rgba(60, 66, 87, 0.12) 10px 7px 14px 0px, rgba(0, 0, 0, 0.12) 10px 3px 6px 0px",
  };

  return (
    <div className={classes["kezdooldal-card-container"]}>
      <div style={kezdooldalStyles}>
        {console.log(`link to page: ${linkToPage}`)}
        <div className={classes["kezdooldal-card-link-wrapper"]}>
          <Link to={linkToPage} className={classes["kezdooldal-card-link"]}>
            {cardDisplayText}
            <span></span>
            {/* A <span> kell ahhoz, hogy az egész kártya kattintható legyen */}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default KezdooldalCard;
