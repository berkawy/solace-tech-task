import { Box, Button, Grid2, TextField, Typography } from '@mui/material';

export default function AddressDetails() {
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
          Address Details
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
            Country
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="Egypt"
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
            City
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="Cairo"
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
            Postal Code
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="11728"
          />
        </Box>
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
            Building
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="7"
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
            Street
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="Street 127"
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
            Floor No.
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="7"
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
            Apartment
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="72"
          />
        </Box>
      </Grid2>
    </Grid2>
  );
}
