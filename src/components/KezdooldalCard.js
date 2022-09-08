import classes from "./KezdooldalCard.module.css";

const KezdooldalCard = props => {

    return <div className={classes["kezdooldal-card"]}>{props.children}</div>
}
export default KezdooldalCard;