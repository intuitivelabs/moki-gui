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
  }
  catch (error) {
  }
}
