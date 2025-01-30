import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

export default function MilitaryStatus() {
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
          Military Status
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
            Require Travel Permit
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="Yes"
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
            Military Status
          </Typography>
          <TextField
            variant="standard"
            slotProps={{ input: { disableUnderline: true, readOnly: true } }}
            value="Exempted"
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
            Document
          </Typography>
          <TextField
            variant="standard"
            slotProps={{
              input: {
                disableUnderline: true,
                readOnly: true,
                startAdornment: <AttachFileOutlinedIcon />,
              },
            }}
            sx={{
              backgroundColor: '#ECECEC',
              fontFamily: 'Roboto',
              fontWeight: '400',
              fontSize: '14px',
              color: '#051D49',
              lineHeight: '22px',
            }}
            value="filename1.docx"
          />
        </Box>
      </Grid2>
    </Grid2>
  );
}
