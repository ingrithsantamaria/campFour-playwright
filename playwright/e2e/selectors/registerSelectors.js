export const selectors = {
    hamburgerMenu : 'button[data-toggle-menu-target="button"]',
    iconUserMobile : 'button#mobile-menu',
    iconUser : 'button[data-action="click->slideover-account#toggle click@window->slideover-account#hide click->toggle-menu#hide touch->toggle-menu#hide"]',
    emailInput : "input#user_email",
    passwordInput : "input#user_password",
    repeatPassword : "input#user_password_confirmation",
    signUpButton : 'div a[href="/user/sign_up"]',
    submit : 'input[type="submit"]',
    errorExplanation : 'div#errorExplanation',
    shopAll : 'a[href="/en/products"]',
    wishedProduct : 'button[data-action="wished-item#add"]',
    priceContainer : 'div[data-plp-variant-picker-target="priceContainer"] p',
    productList : 'div#products'
}