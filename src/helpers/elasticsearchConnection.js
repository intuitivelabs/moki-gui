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
    //get all necessarily parameters (filters, types, timerange) 
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
      return error;
    }

    if (!response.ok) {
      // response
      var error = await response.json();

      if (error.error) {
        return "Problem to connect to elasticsearch. " + error.error;
      } else {
        return "Problem with elasticsearch. " + JSON.stringify(error);
      }
    }

    data = await response.json();
    console.info(new Date() + " MOKI: got elastic data");

    if (data.msg) {
      return data.msg;
    }

    return data;
  }
}