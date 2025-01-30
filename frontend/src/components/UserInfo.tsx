import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { UserData } from '../interface/UserData';
import { UPDATE_USER } from '../mutations/UPDATE_USER';
import client from '../Api/apollo';

interface UserInfoProps {
  data: UserData;
}

const UserInfo: React.FC<UserInfoProps> = ({ data }) => {
  const [nationalID, setNationalID] = useState(data?.nationalId?.idNumber);
  const [nationalIDExpiryDate, setNationalIDExpiryDate] = useState(
    data?.nationalId?.expiryDate
  );
  const [title, setTitle] = useState('-');
  const [firstName, setFirstName] = useState(data?.firstName);
  const [fatherName, setFatherName] = useState(data?.fatherName);
  const [grandfatherName, setGrandfatherName] = useState(data?.grandfatherName);
  const [familyName, setFamilyName] = useState(data?.familyName);
  const [firstNameArabic, setFirstNameArabic] = useState(
    data?.localizedName?.firstName
  );
  const [fatherNameArabic, setFatherNameArabic] = useState(
    data?.localizedName?.fatherName
  );
  const [grandfatherNameArabic, setGrandfatherNameArabic] = useState(
    data?.localizedName?.grandfatherName
  );
  const [familyNameArabic, setFamilyNameArabic] = useState(
    data?.localizedName?.familyName
  );
  const [dateOfBirth, setDateOfBirth] = useState('-');
  const [gender, setGender] = useState('-');
  const [nationality, setNationality] = useState(data?.nationalities[0]);
  const [additionalNationality, setAdditionalNationality] = useState(
    data?.nationalities?.slice(1) || [
      { country: { id: '', name: '' }, countryId: '' },
    ]
  );

  const [passportNo, setPassportNo] = useState('-');
  const [passportIssueDate, setPassportIssueDate] = useState('-');
  const [passportExpiryDate, setPassportExpiryDate] = useState('-');
  const [maritalStatus, setMaritalStatus] = useState(data?.maritalStatus?.name);
  const [dependencies, setDependencies] = useState<number>(
    data?.dependants || 0
  );

  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = async () => {
    const updatedData = {
      nationalId: {
        idNumber: nationalID,
        expiryDate: nationalIDExpiryDate,
      },
      firstName,
      fatherName,
      grandfatherName: grandfatherName,
      familyName,
      localizedName: {
        firstName: firstNameArabic,
        fatherName: fatherNameArabic,
        grandfatherName: grandfatherNameArabic,
        familyName: familyNameArabic,
      },
      nationalities: [
        {
          countryId: nationality.countryId,
        },
        ...additionalNationality.map((nat) => ({
          countryId: nat.countryId,
        })),
      ],

      maritalStatus: {
        id: 1,
        name: maritalStatus,
      },
      dependants: dependencies,
    };
    try {
      const response = await client.mutate({
        mutation: UPDATE_USER,
        variables: { id: 1, ...updatedData },
      });
      console.log('Data:', updatedData);
      console.log('response:', response.data.updateUser);
      setEditable(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid2
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: '950px',
        height: '548px',
        top: '137px',
        left: '132px',
        borderRadius: '24px',
        padding: '24px',
        gap: '16px',
        marginTop: '30px',
      }}
    >
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#151D48',
          }}
        >
          Basic Information
        </Typography>
        <Grid2 sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Button
            variant="contained"
            sx={{
              width: '104px',
              height: '36px',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: 'Poppins',
              color: '#FFFFFF',
            }}
            onClick={handleEdit}
            disabled={editable}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '104px',
              height: '36px',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: 'Poppins',
              color: '#FFFFFF',
            }}
            onClick={handleSave}
            disabled={!editable}
          >
            Save
          </Button>
        </Grid2>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            National ID Number
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            National ID Expiring Date
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={nationalIDExpiryDate}
            onChange={(e) => setNationalIDExpiryDate(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Title
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            First Name
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Father Name
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Grand Father Name
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={grandfatherName}
            onChange={(e) => setGrandfatherName(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Family Name
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />
        </Box>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            الأسم الأول
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={firstNameArabic}
            onChange={(e) => setFirstNameArabic(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            اسم الأب
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={fatherNameArabic}
            onChange={(e) => setFatherNameArabic(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            اسم الجد
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={grandfatherNameArabic}
            onChange={(e) => setGrandfatherNameArabic(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            اللقب / اسم العائلة
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={familyNameArabic}
            onChange={(e) => setFamilyNameArabic(e.target.value)}
          />
        </Box>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Date of birth
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Gender
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Nationality
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={nationality.country.name}
            onChange={(e) =>
              setNationality({
                country: { id: nationality.country.id, name: e.target.value },
                countryId: nationality.countryId,
              })
            }
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Additional Nationality
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={additionalNationality
              .map((nat) => nat.country.name)
              .join(', ')}
            onChange={(e) =>
              setAdditionalNationality(
                additionalNationality.map((nat) => ({
                  ...nat,
                  country: { ...nat.country, name: e.target.value },
                }))
              )
            }
          />
        </Box>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Passport No.
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={passportNo}
            onChange={(e) => setPassportNo(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Passport Issue Date
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={passportIssueDate}
            onChange={(e) => setPassportIssueDate(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Passport Expiry Date
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={passportExpiryDate}
            onChange={(e) => setPassportExpiryDate(e.target.value)}
          />
        </Box>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Marital Status
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              color: '#737791',
            }}
          >
            Dependencies
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: { disableUnderline: true, readOnly: !editable },
            }}
            value={dependencies}
            onChange={(e) => setDependencies(Number(e.target.value))}
          />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default UserInfo;
