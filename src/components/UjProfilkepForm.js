import classes from "./UjProfilkepForm.module.css";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { UserAuth } from "./AuthContext";

const UjProfilkepForm = ({ setPhotoURL }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const { uploadProfilePicture } = UserAuth();

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {   
      await uploadProfilePicture(photo, user, setLoading);  
      setPhotoURL(user.photoURL);
    } catch (error) {
      console.log(error.message);
    }
  };

  

  console.log(user);

  return (
    <div className={classes["uj-profilkep-container"]}>
      <h3 className={classes["profilkep-szoveg"]}>
        Profilkép megváltoztatása:
      </h3>
      <form>
        <label htmlFor="uj-profilkep">Új profilkép feltöltése:</label>
        <input
          className={classes["uj-profilkep"]}
          onChange={handleChange}
          type="file"
          accept="image"
        />
        <button
          disabled={loading || !photo}
          className={classes["profilkep-button"]}
          onClick={handleSubmit}
          type="submit"
        >
          Feltöltés
        </button>
      </form>
    </div>
  );
};
export default UjProfilkepForm;
