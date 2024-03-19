
# Shopify Theme Customization for Adding "Affinidi Login" button

1. Edit the Theme Code by opening the store -> Online Store -> Theme -> Edit Code 

***Note***: Take backup of theme before making any changes to Theme

![theme-edit](./shopify-site/images/theme-edit.png)

2. Click on option `Add a new asset` under `Assets` menu

3. Create a new Blank file with `JS` as extension and file name as `affinidi-login` 
![create-asset-file](./shopify-site/images/create-asset-file.png)

4. Copy the code from file [affinidi-login.js](./shopify-site/affinidi-login.js) and paste in the above JS file just created and click on Save button
![affinidi-login-js](./shopify-site/images/affinidi-login-js.png)

5. Create a new Blank file with `CSS` as extension and file name as `affinidi-login` 

6. Copy the code from file [affinidi-login.css](./shopify-site/affinidi-login.css) and paste in the CSS file just created and click on Save button
![affinidi-login-css](./shopify-site/images/affinidi-login-css.png)

7. Open the file `theme.liquid` file under `Layout` menu 

8. Paste the below code at the end of the file
```
    {{ 'affinidi-login.css' | asset_url | stylesheet_tag }}
    <script src="{{ 'affinidi-login.js' | asset_url }}" defer="defer"></script>
```
![theme-liquid-update](./shopify-site/images/theme-liquid-update.png)

9. Preview the store and should the see the Login Button
![login-button](./shopify-site/images/login-button.png)

10. Switch off the `Display Widget` in miniOrange App, as we have added our own SSO button styling
![miniorange-toggle-off](./shopify-site/images/miniorange-toggle-off.png)

11. Uncheck the Captcha option for Login/Register page, to avoid users to select captcha while Login into store.
![disable-captcha](./shopify-site/images/disable-captcha.png)