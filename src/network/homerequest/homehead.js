import {requestone} from "../axios";
export function homeheadone() {
  return requestone({
    url:'home/multidata'
  })
}
export function goods(params) {
  return requestone({
    url:'home/data',
    params,
  })
}
