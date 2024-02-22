
function InitAffinidiLoginUI() {
  
  var html = `<div class="MOheader" id="MOmyHeader">
    <div class="affinidi-login-div">
      <button class="affinidi-login" onclick="Login_Click()">
          Affinidi Login
      </button>
    </div>
  </div>`;

   html += `<p style="margin:2rem;font-size:20px;text-align:center;">
   <b id="subtextArea">Or Login Via</b>
 </p>`

  var blocks = document.querySelectorAll('#password-modal-heading,.account-register-title,#customer_login_box,#customer_login,#customer_loginlogin-sidebar,#customer_createlogin-sidebar,#create_customer');

  blocks.forEach(block => {
    var div = document.createElement('div');
    div.innerHTML = html;
    block.prepend(div);
  });

  var Hash_String = window.location.search;
  var Hash_Param = new URLSearchParams(Hash_String);
  if(Hash_Param.has('hash')){
    console.log('In setting hash');
    document.cookie = "storefront_digest=" + Hash_Param.get('hash') +"; path=/";
    var shop_name = window.location.hostname;
    var url = "https://"+shop_name ;
    if( Hash_Param.has('redirect_endpoint')) {
      url += Hash_Param.get('redirect_endpoint');
    }
    window.location.href = url;
  }
}

function Login_Click() {
  event.preventDefault();
  var shop_name = window.location.hostname;
  var queryString = window.location.search;
  console.log(queryString);
  var checkout_url;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('checkout_url')) {
    checkout_url = "/checkout";
  }
  else {
    checkout_url = "/account";
  }
  location.href = "https://store.xecurify.com/moas/broker/login/shopify/" + shop_name + "/account?redirect_endpoint=" + checkout_url;
}

document.addEventListener("DOMContentLoaded", function (event) {
  InitAffinidiLoginUI();
});