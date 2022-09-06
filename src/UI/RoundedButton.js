import classes from "./RoundedButton.module.css";

const RoundedButton = props => {
    return <button className={classes["rounded-button"]} type={props.type}>{props.label}</button>
}
export default RoundedButton;