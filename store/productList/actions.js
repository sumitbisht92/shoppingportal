export default {
    catName({commit,state},x){ 
        commit("SetcatName", x)
        console.log(x)
        console.log(state.catName)
    }
    
  };
  