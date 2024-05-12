export default{
  //在install方法中可以定义：mixnin组件，方法，Vue的原型上添加方法和数据，filter过滤器，directive指令第三方库，
  install(Vue){
    console.log('install');
    Vue.prototype.hello=()=>{
      console.log("hello");
    }
  }
}