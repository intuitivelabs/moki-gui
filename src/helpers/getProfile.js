import storePersistent from "../../../../../src/js/store/indexPersistent";
import { setProfile } from "../../../../../src/js/actions/index";


/**
*Get profile from ES and store it in redux
* @return {string}  error or "ok"
* */
export async function getProfile() {
  try {
    var response = await fetch("api/profile", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "include"
      }
    });

    if (!response.ok) {
      return "No elasticsearch connection.";
    }

    var profile = await response.json();
    storePersistent.dispatch(setProfile(profile));
  } catch (error) {
    return error;
  }

  return "ok";
}