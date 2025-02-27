const userResolver = {
  Query: {
    user: async (_, { id }) => {
      return {
        firstName: 'Zaria',
        fatherName: 'Edward',
        grandfatherName: 'Ernest',
        familyName: 'Willie',
        localizedName: {
          firstName: 'صفوان',
          fatherName: 'حمدان',
          grandfatherName: 'هشام',
          familyName: 'عباس',
        },
        nationalId: {
          idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
          expiryDate: '2024-07-24T22:45:29.864Z',
        },
        nationalities: [
          { country: { id: 1016, name: 'Bolivia' }, countryId: 1016 },
          { country: { id: 1117, name: 'Latvia' }, countryId: 1117 },
          {
            country: { id: 1225, name: 'Virgin Islands, U.S.' },
            countryId: 1225,
          },
        ],
        maritalStatus: {
          id: 27,
          name: 'Divorced',
        },
        dependants: 60,
      };
    },
  },

  Mutation: {
    updateUser: async (
      _,
      {
        id,
        firstName,
        fatherName,
        grandfatherName,
        familyName,
        localizedName,
        nationalId,
        nationalities,
        maritalStatus,
        dependants,
      }
    ) => {
      return {
        id,
        firstName,
        fatherName,
        grandfatherName,
        familyName,
        localizedName,
        nationalId,
        nationalities,
        maritalStatus,
        dependants,
      };
    },
  },
};

module.exports = userResolver;
