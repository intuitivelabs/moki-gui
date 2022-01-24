import { ColorType } from '../style/ColorType';
import { Types } from '../style/Types';
import storePersistent from "../../../../../src/js/store/indexPersistent";


export function getExceededTypes() {
  return storePersistent.getState().layout.types.exceeded;
}

/*
return color based on exceeded name
*/
export function getExceededColor(name) {
  if( ColorType[name]) return ColorType[name];
  return name;
}

/*
return human-readable name based on id
*/
export function getExceededName(id) {
  if (Types[id]) return Types[id];
  return id;
}

