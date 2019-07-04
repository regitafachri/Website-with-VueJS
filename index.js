var kepala = new Vue({
  el: '#kepala',
  data: {
    delivery: '1. Delivery',
    payment: '2. Payment',
    finish: '3. Finish'
  }
})


const coba = new Vue({
  el:'#coba',
  data:{
    errors:[],
    name:null,
    email:null,
    phone:null,
    address:null,
    dropPhone:null
  },
  methods:{
    checkForm:function(e) {
      if(this.name || this.email || this.phone || this.address || this.dropPhone) return true;
      document.getElementById("name").style.backgroundColor="#7CFC00";
      document.getElementById("email").style.backgroundColor="#7CFC00";
      document.getElementById("phone").style.backgroundColor="#7CFC00";
      document.getElementById("dropPhone").style.backgroundColor="#7CFC00";
      document.getElementById("address").style.backgroundColor="#7CFC00";
      if(this.name==null) document.getElementById("name").style.backgroundColor="#FF8C00";
      if(this.email==null) document.getElementById("email").style.backgroundColor="#FF8C00";
      if(this.phone==null) document.getElementById("phone").style.backgroundColor="#FF8C00";
      if(this.dropPhone==null) document.getElementById("dropPhone").style.backgroundColor="#FF8C00";
      if(this.address==null) document.getElementById("address").style.backgroundColor="#FF8C00";
      e.preventDefault();
    }
  }
})

// const page2 = new Vue({
//   el:'#page2',
//   data:{
//     gosend:null,
//     jne: null,
//     ewall:null,
//     pc: null,
//     bt:null,
//     va:null
//   },
//   methods:{
//     if(this.gosend.clicked)
//   }
// })
