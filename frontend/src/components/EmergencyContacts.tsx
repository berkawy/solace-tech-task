import { Box, Button, Grid2, TextField, Typography } from '@mui/material';

export default function EmergencyContacts() {
  return (
    <Grid2
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: '950px',
        height: 'auto',
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
          Emergency Contacts
        </Typography>
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
        >
          Edit
        </Button>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
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
            Person Name
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="John John"
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
            Emergency Relation
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="Father"
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
            Emergency Phone
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="011224477885"
          />
        </Box>
      </Grid2>
    </Grid2>
  );
}
