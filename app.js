const SearchForm=document.querySelector(".search-form");
const SearchBtn=document.querySelector("#search-btn");

const NavBar=document.querySelector(".navbar");
const MenuBtn=document.querySelector("#menu-btn");


const ShoppingCart=document.querySelector(".cart-items-container");
const ShoppingBtn=document.querySelector("#shoppingbtn");


SearchBtn.addEventListener("click" , function(){
  SearchForm.classList.toggle("active")
  document.addEventListener("click",function(e){
if(!e.composedPath().includes(SearchBtn)&&!e.composedPath().includes(SearchForm)){
  SearchForm.classList.remove("active");
}
  })
})

MenuBtn.addEventListener("click" , function(){
  NavBar.classList.toggle("active")
})

ShoppingBtn.addEventListener("click" , function(){
  ShoppingCart.classList.toggle("active")
})
