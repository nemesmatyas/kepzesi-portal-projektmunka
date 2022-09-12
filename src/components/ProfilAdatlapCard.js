import classes from "./ProfilAdatlapCard.module.css";

const ProfilAdatlapCard = () => {
  return (
    <div className={classes["profile-data"]}>
      <div className={classes["profile-data-card"]}>
        <div className={classes["profile-data-card_row"]}>
          <p>
            <strong>Név:</strong>
          </p>
          <p>Gipsz Jakab</p>
        </div>
        <div className={classes["profile-data-card_row"]}>
          <p>
            <strong>Törzsszám:</strong>
          </p>
          <p>16336</p>
        </div>
        <div className={classes["profile-data-card_row"]}>
          <p>
            <strong>Beosztás:</strong>
          </p>
          <p>Szoftverfejlesztő</p>
        </div>
        <div className={classes["profile-data-card_row"]}>
          <p>
            <strong>Munkaviszony kezdete:</strong>
          </p>
          <p>2019.09.09.</p>
        </div>
      </div>
      <div className="profile-pic">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80"
          alt="Profilkép"
        />
      </div>
    </div>
  );
};
export default ProfilAdatlapCard;
