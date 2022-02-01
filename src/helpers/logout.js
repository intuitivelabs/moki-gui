const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

/**
* logout function - fake user login
* @return {} nothing
* */
export function logout() {
  try {
    fetch("/", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic nouser",
        "Access-Control-Allow-Credentials": "include"
      }
    });
    window.location.reload();
    deleteAllCookies();
  }
  catch (error) {
  }
}
