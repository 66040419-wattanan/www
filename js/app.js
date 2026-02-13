document.addEventListener("DOMContentLoaded", () => {

const grid = document.getElementById("productGrid");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

if(!grid || typeof products === "undefined"){
  console.error("Products not found");
  return;
}

/* PAGINATION */
let filteredProducts=[...products];
let currentPage=1;
const perPage=12;

/* CART */
let cart=[];

/* ===== CART DISPLAY ===== */
function updateCartDisplay(){

  if(!cartItems) return;

  cartItems.innerHTML="";
  let total=0;

  cart.forEach((item,i)=>{
    total+=item.price;

    cartItems.innerHTML+=`
      <div class="cart-item">
        ${item.name} ฿${item.price}
        <button onclick="removeFromCart(${i})">ลบ</button>
      </div>
    `;
  });

  if(cartTotal) cartTotal.textContent="฿"+total;
}

/* ADD TO CART */
window.addToCart=function(p){
  cart.push(p);

  if(cartCount)
    cartCount.textContent=cart.length;

  updateCartDisplay();
};

/* REMOVE CART */
window.removeFromCart=function(i){
  cart.splice(i,1);

  if(cartCount)
    cartCount.textContent=cart.length;

  updateCartDisplay();
};

/* RENDER PRODUCT */
window.render=function(){

  grid.innerHTML="";

  const start=(currentPage-1)*perPage;
  const pageItems=filteredProducts.slice(start,start+perPage);

  pageItems.forEach(p=>{

    const card=document.createElement("div");
    card.className="card";

    card.innerHTML=`
      <img src="${p.img}">
      <div class="card-body">
        <b>${p.name}</b>
        <div>฿${p.price}</div>

        <div class="rating" data-id="${p.id}">
          ${(p.rating||0)>=1?'★':'☆'}
          ${(p.rating||0)>=2?'★':'☆'}
          ${(p.rating||0)>=3?'★':'☆'}
          ${(p.rating||0)>=4?'★':'☆'}
          ${(p.rating||0)>=5?'★':'☆'}
        </div>

        <button onclick='addToCart(${JSON.stringify(p)})'>
          ใส่ตะกร้า
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  pageInfo.textContent=
    `หน้า ${currentPage} / ${Math.ceil(filteredProducts.length/perPage)}`;
};

/* SEARCH */
searchInput?.addEventListener("input", e=>{
  const val=e.target.value.toLowerCase();
  filteredProducts=products.filter(p=>
    p.name.toLowerCase().includes(val)
  );
  currentPage=1;
  render();
});

/* FILTER REGION */
window.filterRegion=function(region){

  document.querySelectorAll(".region-filter button")
    .forEach(btn=>btn.classList.remove("active"));

  const btn=document.querySelector(
    `.region-filter button[onclick*="${region}"]`
  );

  if(btn) btn.classList.add("active");

  if(region==="all"){
    filteredProducts=[...products];
  }else{
    filteredProducts=products.filter(p=>p.region===region);
  }

  currentPage=1;
  render();
};


/* RATING CLICK */
document.addEventListener("click",e=>{

  if(!e.target.closest(".rating")) return;

  const box=e.target.closest(".rating");
  const id=box.dataset.id;
  const stars=[...box.children];
  const index=stars.indexOf(e.target)+1;

  const product=products.find(p=>p.id==id);
  if(product){
    product.rating=index;
    render();
  }
});

/* PAGINATION */
prevBtn.onclick=()=>{
  if(currentPage>1){
    currentPage--;
    render();
  }
};

nextBtn.onclick=()=>{
  if(currentPage<Math.ceil(filteredProducts.length/perPage)){
    currentPage++;
    render();
  }
};

render();

});

/* NAV */
window.goHome=()=>window.scrollTo({top:0,behavior:"smooth"});

/* LOGIN MODAL */
window.openAuth=()=>{
  const modal=document.getElementById("authModal");
  if(modal) modal.style.display="flex";
};

window.closeAuth=()=>{
  const modal=document.getElementById("authModal");
  if(modal) modal.style.display="none";
};

function togglePassword(){
  const p=document.getElementById("authPass");
  if(p) p.type=p.type==="password"?"text":"password";
}

function submitAuth(){
  alert("Demo Login สำเร็จ");
  closeAuth();
}

/* CART MODAL */
window.openCart=()=>{
  const m=document.getElementById("cartModal");
  if(m) m.style.display="flex";
};

window.closeCart=()=>{
  const m=document.getElementById("cartModal");
  if(m) m.style.display="none";
};
function openRegister(){
  document.getElementById("registerModal").style.display="flex";
}

function closeRegister(){
  document.getElementById("registerModal").style.display="none";
}

function switchToLogin(){
  closeRegister();
  openAuth();
}

function submitRegister(){

  const name=regName.value.trim();
  const email=regEmail.value.trim();
  const pass=regPass.value;
  const pass2=regPass2.value;
  const error=regError;

  if(!name||!email||!pass||!pass2){
    error.textContent="กรอกข้อมูลให้ครบ";
    return;
  }

  if(!email.includes("@")){
    error.textContent="Email ไม่ถูกต้อง";
    return;
  }

  if(pass!==pass2){
    error.textContent="Password ไม่ตรงกัน";
    return;
  }

  const users=JSON.parse(localStorage.getItem("users")||"[]");
  users.push({name,email,pass});
  localStorage.setItem("users",JSON.stringify(users));

  alert("สมัครสมาชิกสำเร็จ");
  closeRegister();
}
/* HERO IMAGE AUTO SLIDE */

const heroImages=[
  "images/hero/hero1.jpg",
  "images/hero/hero2.jpg",
  "images/hero/hero3.jpg",
  "images/hero/hero4.jpg"
];

let heroIndex=0;

setInterval(()=>{
  heroIndex=(heroIndex+1)%heroImages.length;
  document.getElementById("heroSlide").src=heroImages[heroIndex];
},3000); // เปลี่ยนทุก 3 วิ
function scrollToProducts(){
  document.getElementById("productGrid")
    .scrollIntoView({behavior:"smooth"});
}
