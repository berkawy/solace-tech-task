import { Grid2 } from '@mui/material';
import Header from '../components/Header';
import CollapsedNav from '../components/CollapsedNav';
import BasicInfo from '../components/BasicInfo';
import UserInfo from '../components/UserInfo';
import { useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import EmergencyContacts from '../components/EmergencyContacts';
import AddressDetails from '../components/AddressDetails';
import MilitaryStatus from '../components/MilitaryStatus';
import BankInformation from '../components/BankInformation';
import { useEffect } from 'react';
import client from '../Api/apollo';
import { GET_USER_QUERY } from '../queries/userQueries';
import { UserData } from '../interface/UserData';
import DrivingLicense from '../components/DrivingLicense';

export default function Home() {
  const [personalInfo, setPersonalInfo] = useState(true);
  const [financialInfo, setFinancialInfo] = useState(false);
  const [data, setData] = useState<UserData | null>(null);

  const getData = async () => {
    try {
      const { data: response } = await client.query({
        query: GET_USER_QUERY,
        variables: { userId: 1 },
      });
      setData(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid2
      container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        backgroundColor: '#FAFAFA',
      }}
    >
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CollapsedNav />
      </Grid2>
      <Grid2
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {data && <Header data={data} />}
        <Grid2
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
          }}
        >
          {data && (
            <BasicInfo
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              financialInfo={financialInfo}
              setFinancialInfo={setFinancialInfo}
              data={data}
            />
          )}
          <Grid2 sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {personalInfo && (
              <>
                {data && <UserInfo data={data} />}
                <ContactInfo />
                <EmergencyContacts />
                <AddressDetails />
                <DrivingLicense />
                <MilitaryStatus />
              </>
            )}
            {financialInfo && (
              <>
                <BankInformation />
              </>
            )}
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
