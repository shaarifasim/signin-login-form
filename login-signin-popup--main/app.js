document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup1").classList.add("active");
});

document.querySelector(".popup1 .close-button").addEventListener("click",function(){
    document.querySelector(".popup1").classList.remove("active");
});

// popup2

document.querySelector("#show-signIn").addEventListener("click",function(){
    document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .close-button").addEventListener("click",function(){
    document.querySelector(".popup2").classList.remove("active");
});

// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "" || x == null) {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

//   form data on console





//

//   form data on console

// function handleSubmits(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   const value = data.get('emails') ;
//   const value01 = data.get('passs') ;
//   console.log({value,value01});
// }

// const form1 = document.querySelector('form');
// form1.addEventListener('submit', handleSubmits);



// function handleSubmit(e) {
//   e.preventDefault();

//   const data1 = new FormData(e.target);


//   const value1 = data1.get('name');
//   const value2 = data1.get('email');
//   const value3 = data1.get('pass');
//   const value4 = data1.get('cpass');
//   const value5 = data1.get('add');


//   console.log({value1,value2,value3,value4,value5});
//   // const myJSON = JSON.stringify(value1,value2,value3,value4,value5);
// }

// const form = document.querySelector('form');
// form.addEventListener("submit",handleSubmit);


// sir


function LogIn() {
  var email = document.getElementById("emailL").value;
  var psd = document.getElementById("passwordL").value;

  var data = localStorage.getItem("testings")
  data = JSON.parse(data)
  if (!data) {
    window.alert("User Not exsist");
} else {
    if (data && data.email === email && data.psd === psd) {
        console.log("data", data)
        return
    }
    if (data) {
      window.alert("Something went wrrong..!");
    }
}

console.log(data)
localStorage.getItem("testings", JSON.stringify(data))
}

function signIn() {
  var name = document.getElementById("Name").value;
  var Email = document.getElementById("email").value;
  var psw = document.getElementById("password").value;
  var Cpsd = document.getElementById("Cpassword").value;
  var add = document.getElementById("Address").value;

  var obj = {
      name,
      Email,
      psw,
      Cpsd,
      add,
  }

  console.log(obj)
  localStorage.setItem("testings", JSON.stringify(obj))
  // signInTab()
}



// sir











  //   form2





// var dat = JSON.stringify()
// window.localStorage.setItem("value","value01", dat)

// var mydata = window.localStorage.getItem("value","value01");
// var mdata = JSON.parse(mydata)


// window.localStorage.clear()


// modal

