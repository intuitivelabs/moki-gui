import { getTypes } from "../../../../../src/js/helpers/getTypes.js";
import { getFilters } from "../filter/getFilters.js";
import store from "../../../../../src/js/store/index";
/**
*ES request API
* @param {query}  string request path
* @return {json} data from ES
* */

export async function elasticsearchConnection(query) {
  var pathname = window.location.pathname;
  pathname = pathname.substr(1);

  if (pathname.substring(pathname.length - 1) === "/") {
    pathname = pathname.substring(0, pathname.length - 1);
  }

  if (query.includes(pathname)) {
    var filters = getFilters();
    var types = getTypes();
    console.info("MOKI: send fetch: " + query);
    console.info("MOKI: send fetch with filters: " + JSON.stringify(filters));
    console.info("MOKI: send fetch with types: " + JSON.stringify(types));
    console.info("MOKI: send fetch with timerange: " + store.getState().timerange[0] + " - " + store.getState().timerange[1]);
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    var data;
    var response;

    try {
      response = await fetch("/api/" + query, {
        method: "POST",
        timeout: 60000,
        credentials: 'include',
        body: JSON.stringify({
          filters: filters,
          types: types,
          timerange_gte: store.getState().timerange[0],
          timerange_lte: store.getState().timerange[1],
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "include"
        }
      });
    } catch (error) {
      return "ERROR: " + error;
    }

    if (!response.ok) {
      // response
      var error = await response.json();

      if (error.error) {
        return "ERROR: Problem to connect to ES: " + error.error;
      } else {
        return "ERROR: Problem with ES: " + JSON.stringify(error);
      }
    }

    data = await response.json();
    console.info(new Date() + " MOKI: got elastic data"); //my own error 

    if (data.msg) {
      //  store.dispatch(setError(data.msg.message));
      return "ERROR: " + data.msg;
    }

    return data;
  } //return "";

}