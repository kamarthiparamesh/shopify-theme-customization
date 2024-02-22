Theme : Kala AllinOne 

https://rozhub.com/

Modified theme.liquid 
and added below code 

```
{{ 'affinidi-login.css' | asset_url | stylesheet_tag }}
<script src="{{ 'affinidi-login.js' | asset_url }}" defer="defer"></script>
```

Note: miniOrange, if its for development store, add the above in password.liquid theme also, otherwise it asks for store password hash. 

<p style="margin:2rem;font-size:20px;text-align:center;">
   <b id="subtextArea">Or</b>
</p>
