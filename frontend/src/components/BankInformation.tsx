import { Box, Button, Grid2, TextField, Typography } from '@mui/material';

export default function BankInformation() {
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
          Bank Information
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
            Bank Name
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="CIB"
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
            IBAN
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="12346546413216446"
          />
        </Box>
      </Grid2>
    </Grid2>
  );
}
