import store from "../../../../../src/js/store/index";
/**
*Get filters from redux store and return only enable ones
* @return {array} array of filter object
* */

export const getFilters = () => {
  var filt = store.getState().filters;
  var filters = JSON.parse(JSON.stringify(filt));
  var filtersResult = [];

  for (var i = 0; i < filters.length; i++) {
    if (filters[i].state !== 'disable') {
      filtersResult.push(filters[i]);
    }
  }

  return filtersResult;
};