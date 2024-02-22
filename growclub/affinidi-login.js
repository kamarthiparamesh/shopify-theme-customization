
function InitAffinidiLoginUI() {
  var html = `<div class="MOheader" id="MOmyHeader">
    <div class="affinidi-login-div">
      <button class="affinidi-login" onclick="Login_Click()">
          Affinidi Login
      </button>
    </div>
  </div>`;

//   html += `<p style="margin:2rem;font-size:20px;text-align:center;">
//   <b id="subtextArea">Or</b>
// </p>`

  var blocks = document.querySelectorAll('#password-modal-heading,.account-register-title,#customer_login_box,#customer_login,#customer_loginlogin-sidebar,#customer_createlogin-sidebar,#create_customer');

  blocks.forEach(block => {
    var div = document.createElement('div');
    div.innerHTML = html;
    block.prepend(div);
  });


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