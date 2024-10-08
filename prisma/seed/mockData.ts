import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('b4659b44-596b-4fee-b332-ddfa695ee01b', '1Emmanuel_Hand73@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'mno345pqr678', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c18f6aef-619a-4c53-bc5f-7502924345af', '10Leila_Koch52@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=12', 'stu901vwx234', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4a48557a-ecd8-4cd0-a861-3524be3bf14c', '19Rolando90@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=21', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('3dc4159a-60c8-427f-891d-2e3d29bdbd58', '37Tate82@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=39', 'stu901vwx234', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('641cd272-e446-4922-afd3-bfc0821d6351', '46Isabelle.Howell-Treutel@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('dfc37f17-3f93-4d93-a07a-4debe835dcfc', '55Earnestine_Gibson19@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=57', 'ghi789jkl012', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('89185cbb-cfc3-467e-be52-f409bf873c1f', '64Tony.Hagenes@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=66', 'stu901vwx234', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('79c1d408-6cb3-4bb2-8c1b-9b1da5610b06', '73Bruce_Schuster@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=75', 'ghi789jkl012', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9abbf7a4-2af4-4363-97bb-d29883d2039b', '82Demario.Hermiston-Cruickshank@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=84', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('ba53e387-b763-4436-990f-cc4d264cd0ae', 'httpsexample.comendpoint2', 'subscription_key_4', '4a48557a-ecd8-4cd0-a861-3524be3bf14c');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('a81b41d4-2648-49b8-b719-989b2c582d47', 'httpsexample.comendpoint4', 'subscription_key_3', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('d663a71e-bbe2-4987-8650-3971fc0166f6', 'httpsexample.comendpoint2', 'subscription_key_5', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('9783e50c-10ba-4ce0-a09f-6e6446b5af7e', 'httpsexample.comendpoint3', 'subscription_key_1', '3dc4159a-60c8-427f-891d-2e3d29bdbd58');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('e74f40e3-6e1d-4e48-ab2c-97991eca44ae', 'httpsexample.comendpoint3', 'subscription_key_3', '3dc4159a-60c8-427f-891d-2e3d29bdbd58');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('b7655aa1-0a9c-42fb-85ed-5f58a5c880b2', 'httpsexample.comendpoint5', 'subscription_key_1', '9abbf7a4-2af4-4363-97bb-d29883d2039b');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('58208725-8ba6-4869-84d7-1cf1502957a8', 'httpsexample.comendpoint5', 'subscription_key_5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('a5bcac38-b6ca-402f-8c09-0ebf2f81a0a5', 'httpsexample.comendpoint3', 'subscription_key_3', 'b4659b44-596b-4fee-b332-ddfa695ee01b');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('4bf39247-b511-4aff-91ea-eb42b3383f76', 'httpsexample.comendpoint3', 'subscription_key_1', '4a48557a-ecd8-4cd0-a861-3524be3bf14c');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('d9bc0a92-e070-4ecf-b1fa-8e20b3cc41a6', 'httpsexample.comendpoint2', 'subscription_key_3', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06');

INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('96560d2a-ca91-416b-aa98-c9366acd60d5', 'Ethereum', 'BTC', '');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('96aeadfb-eb66-43a5-a164-af921d2a422b', 'Bitcoin', 'BTC', '');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('c4d54b1c-3b03-417b-a3d1-b1fda5e90344', 'Ripple', 'XRP', 'XRP');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('0e989dde-b0d5-484b-ae77-5fe38009ca75', 'Ripple', 'ADA', '');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('13e1c821-bd96-4139-8cb1-1bf07a474674', 'Ripple', 'ETH', '');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('71282632-298d-4845-ae15-f76ceece0422', 'Bitcoin', 'XRP', '');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('5fd40dcb-ed17-4328-a6a0-406339e47a71', 'Litecoin', 'ADA', '');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('183c30c0-4125-401b-b428-1d96a1a82fb5', 'Litecoin', 'XRP', '');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('3660f185-abbb-4c55-91da-8ad09dfc71ce', 'Ethereum', 'XRP', 'XRP');
INSERT INTO "Currency" ("id", "name", "code", "symbol") VALUES ('fae397cb-c8f9-445d-9b22-7e0a21136fa8', 'Cardano', 'ETH', '');

INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('8d67dd4a-d48a-4ae6-bbc7-283e8f6bc11a', 674, '2023-12-16T12:27:41.112Z', '183c30c0-4125-401b-b428-1d96a1a82fb5', '3660f185-abbb-4c55-91da-8ad09dfc71ce');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('5eae9dd2-2987-4cac-aab6-783a4da2a5c7', 65, '2024-04-27T06:43:28.227Z', '96aeadfb-eb66-43a5-a164-af921d2a422b', '71282632-298d-4845-ae15-f76ceece0422');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('604c2b2f-7a78-4e0b-96d7-504eccaeb4db', 558, '2025-06-07T05:58:13.532Z', '183c30c0-4125-401b-b428-1d96a1a82fb5', '96560d2a-ca91-416b-aa98-c9366acd60d5');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('7c24309f-7791-4559-8dbe-c1d539a55a96', 193, '2025-03-11T11:10:55.051Z', 'fae397cb-c8f9-445d-9b22-7e0a21136fa8', '183c30c0-4125-401b-b428-1d96a1a82fb5');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('efa71b46-4119-4d19-afae-12f86f6deb68', 29, '2025-04-18T16:45:02.422Z', '183c30c0-4125-401b-b428-1d96a1a82fb5', '3660f185-abbb-4c55-91da-8ad09dfc71ce');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('c3a3809b-7fdd-4a1a-8baf-500b2f0d2835', 712, '2024-01-01T02:47:56.610Z', '0e989dde-b0d5-484b-ae77-5fe38009ca75', '71282632-298d-4845-ae15-f76ceece0422');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('18876e0f-b15b-4932-a204-7f20c608c8d7', 674, '2025-06-12T23:24:51.399Z', 'c4d54b1c-3b03-417b-a3d1-b1fda5e90344', '3660f185-abbb-4c55-91da-8ad09dfc71ce');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('b8dea82c-40eb-4a71-b3ef-e5d387f079a3', 92, '2024-03-27T11:51:05.778Z', 'fae397cb-c8f9-445d-9b22-7e0a21136fa8', '3660f185-abbb-4c55-91da-8ad09dfc71ce');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('2eabd7de-d864-43b0-9d61-65fceb7c2287', 376, '2025-08-19T12:58:47.832Z', '3660f185-abbb-4c55-91da-8ad09dfc71ce', '71282632-298d-4845-ae15-f76ceece0422');
INSERT INTO "ExchangeRate" ("id", "rate", "timestamp", "baseCurrencyId", "targetCurrencyId") VALUES ('04539827-0c03-4e94-a6bf-436c160924ae', 904, '2025-01-18T14:16:21.520Z', '71282632-298d-4845-ae15-f76ceece0422', '0e989dde-b0d5-484b-ae77-5fe38009ca75');

INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('aaf40187-3b85-4736-8c46-bc58a47a8170', 68, '5fd40dcb-ed17-4328-a6a0-406339e47a71');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('44a8ecdd-770c-40fe-b63d-de4271e1d1a7', 918, '0e989dde-b0d5-484b-ae77-5fe38009ca75');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('3b918b1f-43be-4375-ac8b-94754cb12168', 516, '96560d2a-ca91-416b-aa98-c9366acd60d5');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('2170cdfd-f038-4ce0-9411-bd79ce3cf3aa', 392, '3660f185-abbb-4c55-91da-8ad09dfc71ce');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('3bf6bc2d-8ad1-4439-859c-38ee24f1a4f8', 104, '3660f185-abbb-4c55-91da-8ad09dfc71ce');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('cc232c58-23f9-4e28-91be-a47fcb6e2fb9', 209, '96560d2a-ca91-416b-aa98-c9366acd60d5');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('8fca8e3e-62c3-4686-ac7b-62149d042369', 718, '3660f185-abbb-4c55-91da-8ad09dfc71ce');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('3ef3f7b8-b517-43e7-adba-73f05d063623', 61, '5fd40dcb-ed17-4328-a6a0-406339e47a71');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('c358f0f8-89ed-429b-a75d-857cf1914f09', 46, '71282632-298d-4845-ae15-f76ceece0422');
INSERT INTO "Reserve" ("id", "amount", "currencyId") VALUES ('5bffe8f3-7085-46f6-9063-17e593d3ab63', 285, '3660f185-abbb-4c55-91da-8ad09dfc71ce');

INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('957968a3-8375-4b0f-963d-25c2f2bc510d', 749, 765, 'in progress', '2024-05-27T06:32:37.703Z', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06', '96560d2a-ca91-416b-aa98-c9366acd60d5', '183c30c0-4125-401b-b428-1d96a1a82fb5', '04539827-0c03-4e94-a6bf-436c160924ae');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('3d384e72-27fa-45e4-94ab-c88c26708efd', 825, 495, 'failed', '2024-05-04T13:44:50.470Z', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06', '3660f185-abbb-4c55-91da-8ad09dfc71ce', 'fae397cb-c8f9-445d-9b22-7e0a21136fa8', '2eabd7de-d864-43b0-9d61-65fceb7c2287');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('00d526e5-5ec5-4a4c-a9ed-f1eb7f7f2390', 326, 329, 'in progress', '2025-04-10T17:48:47.725Z', 'dfc37f17-3f93-4d93-a07a-4debe835dcfc', '183c30c0-4125-401b-b428-1d96a1a82fb5', '96560d2a-ca91-416b-aa98-c9366acd60d5', '5eae9dd2-2987-4cac-aab6-783a4da2a5c7');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('b3d1d8ad-20b5-4006-aecd-24c6ec5a6518', 505, 477, 'in progress', '2024-09-10T02:38:23.078Z', '641cd272-e446-4922-afd3-bfc0821d6351', '13e1c821-bd96-4139-8cb1-1bf07a474674', '5fd40dcb-ed17-4328-a6a0-406339e47a71', 'c3a3809b-7fdd-4a1a-8baf-500b2f0d2835');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('5cd92d59-d2df-4772-97c2-cff061bba380', 917, 484, 'pending', '2023-10-14T12:20:16.202Z', '3dc4159a-60c8-427f-891d-2e3d29bdbd58', '96aeadfb-eb66-43a5-a164-af921d2a422b', '71282632-298d-4845-ae15-f76ceece0422', '8d67dd4a-d48a-4ae6-bbc7-283e8f6bc11a');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('91d869de-4f50-4c43-b5ff-37bcddfc509c', 513, 84, 'completed', '2024-06-03T15:54:08.278Z', '4a48557a-ecd8-4cd0-a861-3524be3bf14c', '3660f185-abbb-4c55-91da-8ad09dfc71ce', '71282632-298d-4845-ae15-f76ceece0422', 'c3a3809b-7fdd-4a1a-8baf-500b2f0d2835');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('6a89076d-ad4c-4497-83c4-25cf58b1998d', 663, 688, 'in progress', '2023-11-03T10:11:51.625Z', '9abbf7a4-2af4-4363-97bb-d29883d2039b', '71282632-298d-4845-ae15-f76ceece0422', '13e1c821-bd96-4139-8cb1-1bf07a474674', '04539827-0c03-4e94-a6bf-436c160924ae');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('2982896b-defa-480b-b9b3-0b662be15940', 607, 932, 'completed', '2024-03-21T20:09:09.374Z', '3dc4159a-60c8-427f-891d-2e3d29bdbd58', 'c4d54b1c-3b03-417b-a3d1-b1fda5e90344', '13e1c821-bd96-4139-8cb1-1bf07a474674', 'c3a3809b-7fdd-4a1a-8baf-500b2f0d2835');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('4516cd05-2742-4fbc-adce-378395df2341', 596, 2, 'completed', '2023-12-17T17:55:00.962Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '183c30c0-4125-401b-b428-1d96a1a82fb5', '3660f185-abbb-4c55-91da-8ad09dfc71ce', 'b8dea82c-40eb-4a71-b3ef-e5d387f079a3');
INSERT INTO "ExchangeOrder" ("id", "amountFrom", "amountTo", "status", "timestamp", "userId", "fromCurrencyId", "toCurrencyId", "exchangeRateId") VALUES ('ee9da029-7a2a-4ee7-93d3-bf09bb715d8f', 212, 987, 'completed', '2023-11-26T06:12:19.244Z', '3dc4159a-60c8-427f-891d-2e3d29bdbd58', '0e989dde-b0d5-484b-ae77-5fe38009ca75', '3660f185-abbb-4c55-91da-8ad09dfc71ce', '5eae9dd2-2987-4cac-aab6-783a4da2a5c7');

INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('72a98c37-e840-48b2-8c4c-6cfe57ac0830', 'Could you provide more details on how to set up an account', false, '2024-10-24T03:44:03.837Z', '9abbf7a4-2af4-4363-97bb-d29883d2039b', '3dc4159a-60c8-427f-891d-2e3d29bdbd58');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('422b7cad-a6d0-4b10-bed9-5dc0087e78b8', 'Is there a way to track my transaction history on your platform', true, '2024-04-01T00:40:24.521Z', '9abbf7a4-2af4-4363-97bb-d29883d2039b', '641cd272-e446-4922-afd3-bfc0821d6351');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('9c6da453-341a-488d-8143-bf3081e817e9', 'Could you provide more details on how to set up an account', false, '2024-01-19T15:54:43.828Z', 'dfc37f17-3f93-4d93-a07a-4debe835dcfc', 'b4659b44-596b-4fee-b332-ddfa695ee01b');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('75338dde-653b-47ff-a1ff-220d6bd69f4a', 'I am interested in buying USDT what are the current rates', true, '2024-02-08T19:30:25.862Z', 'dfc37f17-3f93-4d93-a07a-4debe835dcfc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('75a95e3f-2941-4d2a-8794-3f32f407713f', 'Hello I would like to know more about your exchange rates.', true, '2025-03-09T05:26:20.668Z', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06', '641cd272-e446-4922-afd3-bfc0821d6351');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('8a2798a6-9220-4420-8e7a-5fc45b1916a1', 'I am interested in buying USDT what are the current rates', true, '2024-01-31T19:59:32.518Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'dfc37f17-3f93-4d93-a07a-4debe835dcfc');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('5d9e3aad-f08d-4b9a-ae0a-e9e2710cf0c2', 'Hello I would like to know more about your exchange rates.', false, '2024-03-25T20:48:51.894Z', 'dfc37f17-3f93-4d93-a07a-4debe835dcfc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('bc1c66fa-e0b9-47e6-8712-0c8e2972e134', 'Could you provide more details on how to set up an account', false, '2025-05-15T19:52:08.963Z', 'b4659b44-596b-4fee-b332-ddfa695ee01b', 'b4659b44-596b-4fee-b332-ddfa695ee01b');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('02370efb-32b3-4bfa-88f8-0920400eac80', 'Hello I would like to know more about your exchange rates.', true, '2025-02-10T01:17:58.350Z', '641cd272-e446-4922-afd3-bfc0821d6351', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "readStatus", "timestamp", "senderId", "receiverId") VALUES ('1f0023ea-01ef-471c-b94b-0213c9fff206', 'Can you help me with a transaction issue I encountered', false, '2024-02-10T23:41:24.845Z', '3dc4159a-60c8-427f-891d-2e3d29bdbd58', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06');

INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('79c2eb3e-809e-4ec2-831e-bd521c5c5467', 373, 'Not satisfied with the exchange rates.', '2024-06-21T06:35:51.445Z', '641cd272-e446-4922-afd3-bfc0821d6351', '4a48557a-ecd8-4cd0-a861-3524be3bf14c');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('c61f61de-8ebb-4492-bfe4-f9249c5ed3d8', 500, 'Had some issues with the transaction but support was helpful.', '2024-12-12T13:40:08.676Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b4659b44-596b-4fee-b332-ddfa695ee01b');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('23f51bb6-fd88-459a-a12d-f3d4bdaa1360', 536, 'Average experience could be better.', '2025-01-09T08:29:30.271Z', '89185cbb-cfc3-467e-be52-f409bf873c1f', '3dc4159a-60c8-427f-891d-2e3d29bdbd58');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('efd489d2-85fe-44e6-98e7-bbd7733856f6', 78, 'Excellent platform highly recommend', '2025-03-21T02:30:16.093Z', 'c18f6aef-619a-4c53-bc5f-7502924345af', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('23326e9a-11ef-42d8-a33b-7d586cae1fbc', 407, 'Great service very fast and reliable', '2024-01-05T00:03:03.084Z', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06', '9abbf7a4-2af4-4363-97bb-d29883d2039b');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('792e326c-6ef5-453b-9106-35b0ace31ffe', 402, 'Had some issues with the transaction but support was helpful.', '2025-09-12T01:31:53.189Z', '641cd272-e446-4922-afd3-bfc0821d6351', '4a48557a-ecd8-4cd0-a861-3524be3bf14c');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('1c85e688-5eeb-4d1b-9a0f-c0fcdd97a34c', 105, 'Average experience could be better.', '2025-07-10T09:32:35.478Z', 'c18f6aef-619a-4c53-bc5f-7502924345af', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('c42137e6-2d0b-4c0a-9094-d969cc430427', 835, 'Had some issues with the transaction but support was helpful.', '2024-03-31T20:49:25.201Z', 'c18f6aef-619a-4c53-bc5f-7502924345af', 'b4659b44-596b-4fee-b332-ddfa695ee01b');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('8fa5275a-4e37-41fe-8c8c-51e96ea8f762', 362, 'Excellent platform highly recommend', '2024-05-17T19:07:56.884Z', '4a48557a-ecd8-4cd0-a861-3524be3bf14c', '89185cbb-cfc3-467e-be52-f409bf873c1f');
INSERT INTO "Review" ("id", "rating", "comment", "timestamp", "userId", "reviewerId") VALUES ('2adc798e-a4af-4580-820c-67e9103f560e', 214, 'Great service very fast and reliable', '2025-02-16T10:53:21.993Z', 'c18f6aef-619a-4c53-bc5f-7502924345af', 'b4659b44-596b-4fee-b332-ddfa695ee01b');

INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('bee03691-7f38-4bc8-9536-bb0fe5393880', 'Top 5 Cryptocurrencies to Watch in 2023', 'As the crypto market continues to grow these five cryptocurrencies are gaining attention for their potential in 2023.', 'https://i.imgur.com/YfJQV5z.png?id=343', '2025-08-20T17:51:12.077Z', '89185cbb-cfc3-467e-be52-f409bf873c1f');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('6e3fac0b-1469-4ed6-b18b-6346517a8eb4', 'The Future of Digital Currency', 'Cryptocurrency exchanges are platforms that facilitate the trading of digital currencies for other assets including digital and fiat currencies.', 'https://i.imgur.com/YfJQV5z.png?id=348', '2025-02-02T15:05:53.851Z', '641cd272-e446-4922-afd3-bfc0821d6351');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('844f82a1-c740-4c98-885a-c0c0dd55cb19', 'How to Secure Your Crypto Wallet', 'As the crypto market continues to grow these five cryptocurrencies are gaining attention for their potential in 2023.', 'https://i.imgur.com/YfJQV5z.png?id=353', '2024-06-10T23:21:52.915Z', '9abbf7a4-2af4-4363-97bb-d29883d2039b');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('319c7dfa-7d48-41e4-8c94-fd879f213ed1', 'Understanding Cryptocurrency Exchanges', 'Digital currencies are rapidly evolving offering new opportunities and challenges for investors and regulators alike.', 'https://i.imgur.com/YfJQV5z.png?id=358', '2023-12-23T07:07:43.397Z', '89185cbb-cfc3-467e-be52-f409bf873c1f');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('cb57836c-43a6-4659-89fc-291e4280a514', 'Understanding Cryptocurrency Exchanges', 'Blockchain technology is the backbone of cryptocurrencies providing a decentralized and secure way to record transactions.', 'https://i.imgur.com/YfJQV5z.png?id=363', '2025-08-21T23:58:23.804Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('a6410648-f08e-49b4-980f-101db8194179', 'The Future of Digital Currency', 'Blockchain technology is the backbone of cryptocurrencies providing a decentralized and secure way to record transactions.', 'https://i.imgur.com/YfJQV5z.png?id=368', '2024-07-31T08:20:39.006Z', '641cd272-e446-4922-afd3-bfc0821d6351');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('ba7a91f9-d9e8-4ecd-8678-005d91d11b88', 'A Beginners Guide to Blockchain Technology', 'Digital currencies are rapidly evolving offering new opportunities and challenges for investors and regulators alike.', 'https://i.imgur.com/YfJQV5z.png?id=373', '2024-10-11T17:56:40.056Z', 'b4659b44-596b-4fee-b332-ddfa695ee01b');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('a7d328a2-a64e-4185-a36c-fe2a7b1b321d', 'Understanding Cryptocurrency Exchanges', 'As the crypto market continues to grow these five cryptocurrencies are gaining attention for their potential in 2023.', 'https://i.imgur.com/YfJQV5z.png?id=378', '2025-10-04T17:46:28.641Z', '79c1d408-6cb3-4bb2-8c1b-9b1da5610b06');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('12fdcf04-2825-4936-9089-50916eead457', 'Top 5 Cryptocurrencies to Watch in 2023', 'Digital currencies are rapidly evolving offering new opportunities and challenges for investors and regulators alike.', 'https://i.imgur.com/YfJQV5z.png?id=383', '2023-12-21T06:03:31.875Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "BlogPost" ("id", "title", "content", "imageUrl", "timestamp", "authorId") VALUES ('402bde07-92a2-4cba-a2e8-0c043f4189b7', 'Understanding Cryptocurrency Exchanges', 'Digital currencies are rapidly evolving offering new opportunities and challenges for investors and regulators alike.', 'https://i.imgur.com/YfJQV5z.png?id=388', '2024-10-19T00:16:33.894Z', '4a48557a-ecd8-4cd0-a861-3524be3bf14c');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
