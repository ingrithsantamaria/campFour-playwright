import { faker } from "@faker-js/faker";
export const data = {
    email : faker.internet.email(),
    password : faker.internet.password(10, true)
}