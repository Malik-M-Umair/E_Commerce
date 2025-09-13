
let alertShown = false; 
let hamburger=document.getElementById('3dots');
let cross=document.getElementById('cross');
let hidden=document.getElementsByClassName('hidden')[0];
let show=document.getElementsByClassName('show')[0];
//..................
let aboutvar=document.getElementById('first');
let blog1=document.querySelectorAll('.heading2')[0];
let blog2=document.querySelectorAll('.heading2')[1];
let blog3=document.querySelectorAll('.heading2')[2];
let blog4=document.querySelectorAll('.second')[0];
let blog5=document.querySelectorAll('.second')[1];
let blog6=document.querySelectorAll('.second')[2];
//.........................
let aboutcont=document.getElementById('aboutcont');
//..............................
let connectvar=document.getElementById('Connect');
//..............................
// modal1
let modal=document.getElementById('myModal');
let openbtn=document.getElementById('openModal');
let closebtn=document.getElementById('closeModal');
// model2
let modal2=document.getElementById('myModal2');
// modal3
// add to cart
let addcart=document.getElementById('infocon');
addcart.style.display="none"
let cartclass=document.getElementsByClassName('infocont')[0];

let closebtn2=document.getElementById('closeModal2');
const form = document.getElementById("contactForm");

closebtn.addEventListener("click",()=>{
     modal.close();
    });
    

    
    function changer(){
      
        hamburger.style.display="none";
        cross.style.display="block";
        hidden.style.display="block"
        show.style.display="block"
      }
      function changer2(){
    hamburger.style.display="block";
    cross.style.display="none";
    hidden.style.display="none"
    show.style.display="none"
  }
function color(event) {
  
    event.target.classList.toggle('active');
    if(event.target.classList.contains('active')){
      modal.showModal();
    }
    else{
      modal.close();
    }
    if (!alertShown) { 
      
      alertShown = true;
      
    }
    
    
    
 
  }
  
  function shope(){
    
    addcart.style.display="none";
    hamburger.style.display="none";
    hidden.style.display="none"
   hamburger.style.display="block"
    connectvar.style.display="none"
    aboutvar.style.display="none"
       blog4.style.display="none"
      blog5.style.display="block"
    //   about.style.display="block"
      blog1.style.display="block"
      blog2.style.display="block"
      blog3.style.display="block"
      blog6.style.removeProperty('display');
      blog4.style.removeProperty('display');
      blog5.style.removeProperty('display');
      aboutcont.style.display="none"
}
function blog(){
  addcart.style.display="none";
  hamburger.style.display="none";
  hidden.style.display="none"
   hamburger.style.display="block"
      connectvar.style.display="none"
      aboutvar.style.display="none"
      //   sh.style.display="none"
      //   show.style.display="none"
      
      blog1.style.display="none"
      blog2.style.display="none"
      blog3.style.display="block"
      //   blog6.style.display="inline-block"
      blog6.style.removeProperty('display');
      blog4.style.display="none"
      blog5.style.display="none"
      //   blog6.style.display="block"
      aboutcont.style.display="none"
}
function about(){
  addcart.style.display="none";
  hamburger.style.display="none";
  hidden.style.display="none"
  hamburger.style.display="block"
  connectvar.style.display="none"
  aboutvar.style.display="none"
  aboutcont.style.display="block"
  blog1.style.display="none"
  blog2.style.display="none"
  blog3.style.display="none"
  blog6.style.display="none"
  
  blog4.style.display="none"
  blog5.style.display="none"
}
function contact(){
  addcart.style.display="none";
  hamburger.style.display="none";
  hidden.style.display="none"
   hamburger.style.display="block"
  connectvar.style.display="block"
  aboutvar.style.display="none"
  aboutcont.style.display="none"
  blog1.style.display="none"
  blog2.style.display="none"
  blog3.style.display="none"
  blog6.style.display="none"
  
  blog4.style.display="none"
  blog5.style.display="none"
}

form.addEventListener("submit",function(event){
  event.preventDefault();
  modal2.showModal();

  
});
closebtn2.addEventListener("click",()=>{
  modal2.close();
  window.location.reload();
});
// paymentMethod
paymentForm.addEventListener("submit",function(event){
  event.preventDefault();
  modal5.showModal();

  
});

closebtn2.addEventListener("click",()=>{
  modal2.close();
  window.location.reload();
});
// add to cart
function showimage(img){
  
window.scrollTo(0, 0);

  addcart.style.display="block";
  
 let newimage=document.getElementById('newimage');
 
 newimage.src=img.src;
 spin.hidden=true
 
 addcart.style.display="block";
 hamburger.style.display="none";
 hidden.style.display="none"
hamburger.style.display="block"
connectvar.style.display="none"
aboutvar.style.display="none"
aboutcont.style.display="none"
blog1.style.display="none"
blog2.style.display="none"
blog3.style.display="none"
blog6.style.display="none"

blog4.style.display="none"
blog5.style.display="none"
cartclass.style.display="flex"
}
function showimageFromButton(button) {
  let parentDiv = button.parentElement; // closet parent ko find kar
  let img = parentDiv.firstElementChild; 
  showimage(img); 
}
let modal3=document.getElementById('myModal3');
let openbtn3=document.getElementById('modal3');
let closebtn3=document.getElementById('closeModal3');
openbtn3.addEventListener("click",()=>{
  modal3.showModal();
});
closebtn3.addEventListener("click",()=>{
  modal3.close();
});
let modal4=document.getElementById('myModal4');
let openbtn4=document.getElementById('modal4');
let closebtn4=document.getElementById('closeModal4');
openbtn4.addEventListener("click",()=>{
  alert("Fill Each Field!")
  modal4.showModal();
});
closebtn4.addEventListener("click",()=>{
  modal4.close();
});

let modal5=document.getElementById('myModal5');
let openbtn5=document.getElementById('modal5');
let closebtn5=document.getElementById('closeModal5');
openbtn5.addEventListener("click",()=>{
  modal4.close();
  modal5.showModal();
});
closebtn5.addEventListener("click",()=>{
  modal5.close();
});



// spineer logic
let body=document.getElementById('bodyhider');
function showspinner(){
  document.getElementById('spin').classList.add('loader');
  body.style.display="none"
 
}
function hidespinner(){
  document.getElementById('spin').classList.remove('loader');
    body.style.display="block"
}
showspinner();
setTimeout(hidespinner,1000);




function goBack() {
  window.location.reload();
}

let modal6=document.getElementById('myModal6');
let openbtn6=document.getElementById('modal6');
let closebtn6=document.getElementById('closeModal6');
openbtn6.addEventListener("click",()=>{
  modal6.showModal();
});
closebtn6.addEventListener("click",()=>{
  modal6.close();
  setTimeout(()=>{

    window.location.reload();
  },1000)
});


let modal7=document.getElementById('myModal7');
let openbtn7=document.getElementById('modal7');
let closebtn7=document.getElementById('closeModal7');

form9.addEventListener("submit",function(event){
  event.preventDefault();
  modal7.showModal();
  

  
});
closebtn7.addEventListener("click",()=>{
  modal7.close();
});
