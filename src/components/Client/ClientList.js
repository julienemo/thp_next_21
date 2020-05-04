import faker from "faker";

export const allClients = () => {
  let clientList = [];
  for (let i = 0; i < 10; i++) {
    let client = {
      lastName: faker.name.firstName(),
      firstName: faker.name.firstName(),
      phoneNumber: faker.phone.phoneNumber(),
      profession: faker.name.jobTitle(),
      photo_id: Math.floor(Math.random() * 3),
    };
    client.email = `${client.lastName}.${client.firstName}@gmail.com`;
    clientList.push(client);
  }
  return clientList;
};
