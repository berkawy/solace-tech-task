const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    id: Int!
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    localizedName: LocalizedName
    nationalId: NationalId
    nationalities: [Nationality]
    maritalStatus: MaritalStatus
    dependants: Int
  }

  type LocalizedName {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }

  type NationalId {
    idNumber: String
    expiryDate: String
  }

  type Nationality {
    country: Country
    countryId: Int
  }

  type Country {
    id: Int
    name: String
  }

  type MaritalStatus {
    id: Int
    name: String
  }

  type Query {
    user(id: Int!): User
  }

  type Mutation {
    updateUser(
      id: Int!
      firstName: String
      fatherName: String
      grandfatherName: String
      familyName: String
      localizedName: LocalizedNameInput
      nationalId: NationalIdInput
      nationalities: [NationalityInput]
      maritalStatus: MaritalStatusInput
      dependants: Int
    ): User
  }

  input LocalizedNameInput {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }

  input NationalIdInput {
    idNumber: String
    expiryDate: String
  }

  input NationalityInput {
    countryId: Int
  }

  input MaritalStatusInput {
    id: Int
    name: String
  }
`;

module.exports = userSchema;
