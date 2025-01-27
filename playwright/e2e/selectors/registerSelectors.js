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
    shopAll : 'div[data-editor-name=“Button”] a',
    wishedProduct : '[data-wished-item-target="add"]',
    priceContainer : '[data-plp-variant-picker-target="priceContainer]'
}