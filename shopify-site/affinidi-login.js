
function InitAffinidiLoginUI() {
  var html = `<div class="MOheader" id="MOmyHeader">
    <div class="affinidi-login-div">
      <button class="affinidi-login" onclick="Login_Click()">
          Affinidi Login
      </button>
    </div>
  </div>`;

  // html += `<p style="margin:2rem;font-size:20px;text-align:center;">
  //   <b id="subtextArea">Or</b>
  // </p>`

  var blocks = document.querySelectorAll('#password-modal-heading,.account-register-title,#customer_login_box,#customer_login,#customer_loginlogin-sidebar,#customer_createlogin-sidebar,#create_customer');
  console.log('blocks length', blocks.length);

  //if no login form elements found yet 
  if (blocks.length == 0) {
    // atleast try adding login button on click of the account menu icon 
    var acc_icon = document.querySelector('[href="/account"]')
    if (acc_icon) {
      acc_icon.addEventListener("click", function (event) {
        console.log('blocks clicked');
        InitAffinidiLoginUI();
      }, {
        once: true
      });
    }
  } else {
    // login elements found so inject login button
    blocks.forEach(block => {
      var div = document.createElement('div');
      div.innerHTML = html;
      block.prepend(div);
    });
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

  var cartValue = getCookie("cart");
  if (typeof cartValue !== 'undefined') {
    createCookie("cart", cartValue, 15);
  }

  location.href = "https://store.xecurify.com/moas/broker/login/shopify/" + shop_name + "/account?redirect_endpoint=" + checkout_url;

}

document.addEventListener("DOMContentLoaded", function (event) {
  InitAffinidiLoginUI();
});


function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}