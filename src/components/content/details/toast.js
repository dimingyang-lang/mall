import middleshow from "./middleshow";
import Vue  from 'vue'
export const $toast = {
  install() {
    const div=document.createElement('div')
    const app=Vue.extend(middleshow)
    const middle=new app()
    middle.$mount(div)
    document.body.append(middle.$el)
    Vue.prototype.$toast=middle
  }
}
