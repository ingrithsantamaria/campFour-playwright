import { faker} from "@faker-js/faker";
const email = faker.internet.email(); 
const invalidEmail = email.replace('@', '');
export const data = {
    newEmail : email,
    invalidEmail : invalidEmail,
    password : faker.internet.password(10, true)
}