import { ColorType, Types } from '../style/ColorType';
import storePersistent from "../../../../../src/js/store/indexPersistent";


export function getExceededTypes() {
  return storePersistent.types["exceeded"];;
}

/*
return color based on exceeded name
*/
export function getExceededColor(name) {
  return ColorType[name];
}

/*
return human-readable name based on id
*/
export function getExceededName(id) {
  return Types[id];
}

