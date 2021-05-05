import store from "../../../../../src/js/store/index";
import { setFilters } from "../../../../../src/js/actions/index";

    /**
* Create new filter and store it in redux
* @param {string}  searchValue filter to store
* @return {array} Array of all filters
* */
export const createFilter = searchValue => {
  var oldFilters = store.getState().filters;
  var colonFirst = searchValue.indexOf(':'); 

  //check if it's avg MoS - bug round up value
  //attrs.rtp-MOScqex-avg: [3 TO 4] to search for 3.x
  if (searchValue.includes("rtp-MOScqex-avg")) {
    let value = parseInt(searchValue.substr(colonFirst + 1));
    searchValue = [searchValue.substr(0, colonFirst + 1), "[", value, " TO ", value + 1, "]"].join('');
  }

  //add new filter to old ones
  var id = oldFilters.length > 0 ? oldFilters[oldFilters.length - 1].id + 1 : 1;
  var joined = oldFilters.concat({
    id: id,
    title: searchValue,
    state: 'enable',
    pinned: 'true'
  });

  //store in redux
  store.dispatch(setFilters(joined));
  return joined;
};