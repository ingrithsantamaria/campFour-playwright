import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const invalidEmail = email.replace("@", "");
const password = faker.internet.password(10, true);

export const data = {
  newEmail: email,
  invalidEmail: invalidEmail,
  newPassword: password,
}

export const urls = { baseUrl: "https://demo.spreecommerce.org/" };
