export interface UserData {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
  };
  nationalId: {
    idNumber: string;
    expiryDate: string;
  };
  nationalities: {
    country: {
      id: number;
      name: string;
    };
    countryId: number;
  }[];
  maritalStatus: {
    id: number;
    name: string;
  };
  dependants: number;
}
