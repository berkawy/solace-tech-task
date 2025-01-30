import {
  Avatar,
  Box,
  Divider,
  Grid2,
  IconButton,
  Typography,
} from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { UserData } from '../interface/UserData';
import React from 'react';

interface BasicInfoProps {
  personalInfo: boolean;
  setPersonalInfo: (value: boolean) => void;
  financialInfo: boolean;
  setFinancialInfo: (value: boolean) => void;
  data: UserData;
}

const BasicInfo: React.FC<BasicInfoProps> = ({
  personalInfo,
  setPersonalInfo,
  financialInfo,
  setFinancialInfo,
  data,
}) => {
  return (
    <Grid2
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: '393px',
        height: '464px',
        top: '137px',
        left: '132px',
        borderRadius: '24px',
        padding: '24px',
        gap: '16px',
        marginLeft: '30px',
        marginTop: '30px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: '120px',
          height: '120px',
        }}
      >
        <Avatar
          src=""
          alt="John Smith"
          sx={{ width: '120px', height: '120px', borderRadius: '39px' }}
        />
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            boxShadow: 2,
          }}
        >
          <CameraAltOutlinedIcon />
        </IconButton>
      </Box>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '30px',
          color: '#051D49',
        }}
      >
        {data?.firstName || 'N/A'} {data?.familyName || ''}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '20px',
          color: '#737791',
        }}
      >
        Senior Product Manager
      </Typography>
      <Divider sx={{ width: '345px' }} />
      <Box
        sx={{
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: personalInfo ? '#F4F8FE' : '#FFFFFF',
          cursor: 'pointer',
        }}
        onClick={() => {
          setPersonalInfo(true);
          setFinancialInfo(false);
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '27px',
            color: personalInfo ? '#0F6CBD' : '#051D49',
          }}
        >
          {' '}
          Personal Information
        </Typography>
      </Box>
      <Box
        sx={{
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: financialInfo ? '#F4F8FE' : '#FFFFFF',
          cursor: 'pointer',
        }}
        onClick={() => {
          setPersonalInfo(false);
          setFinancialInfo(true);
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '27px',
            color: financialInfo ? '#0F6CBD' : '#051D49',
          }}
        >
          Financial Information
        </Typography>
      </Box>
    </Grid2>
  );
};

export default BasicInfo;
