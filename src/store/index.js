import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addcart(state, iid) {
      //便利cart,cart必须有东西;
      //目的:看看cart里的每一个对象里有没有新传进去的iid,有的话只在它的page上加1；如果都没有那才新加进去这样一个新的iid
      state.cart.map(item=>{
        if (item.iid == iid) {
          item.page++
        }
      })
      if(state.cart.filter(item => item.iid == iid).length == 0) {
        state.cart.push({iid,page:1,check:true})
      }
      if(state.cart.length==0) {
        state.cart.push({iid,page:1,check:true})
      }
    },
    mutatecheck(state,index) {
      state.cart[index].check=! state.cart[index].check
    },
    allcheckclick(state,bool) {
      console.log(66);
      state.cart.map(item=>item.check=bool)
    }
  },
  getters:{
    getpage(state) {
      return function(index) {
        return state.cart[index].page
      }
    },
    getlength(state) {
      console.log(999);
      return state.cart.length
    },
    getcartindex(state) {
      return function (index) {
        return state.cart[index].check
      }
    },
    getcart(state) {
      return function (){
        return state.cart
      }

    }
  }
})
export default store
