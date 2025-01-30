import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: Int!
    $firstName: String
    $fatherName: String
    $grandfatherName: String
    $familyName: String
    $localizedName: LocalizedNameInput
    $nationalId: NationalIdInput
    $nationalities: [NationalityInput]
    $maritalStatus: MaritalStatusInput
    $dependants: Int
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      fatherName: $fatherName
      grandfatherName: $grandfatherName
      familyName: $familyName
      localizedName: $localizedName
      nationalId: $nationalId
      nationalities: $nationalities
      maritalStatus: $maritalStatus
      dependants: $dependants
    ) {
      id
      firstName
      fatherName
      familyName
      id
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;
