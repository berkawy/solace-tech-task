import { Avatar, Badge, Grid2, IconButton, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { UserData } from '../interface/UserData';

interface HeaderProps {
  data: UserData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <Grid2
      container
      sx={{
        justifyContent: 'space-between',
        width: '1400px',
        height: '113px',
        left: '108px',
        padding: '24px 40px',
      }}
    >
      <Grid2 sx={{ gap: '8px', width: '460px', height: '65px' }}>
        <Typography
          sx={{
            fontFamily: 'poppins',
            fontSize: '26px',
            fontWeight: '600',
            lineHeight: '39px',
            letterSpacing: '0.5px',
          }}
        >
          {data?.firstName || 'N/A'} {data?.familyName} Profile
        </Typography>

        <Grid2
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '18px',
            width: '402px',
            height: '18px',
          }}
        >
          <Typography
            color="#959FB0"
            sx={{
              fontFamily: 'poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            Dashboard{' '}
          </Typography>
          <Typography
            color="#959FB0"
            sx={{
              fontFamily: 'poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            {' '}
            {'>'}{' '}
          </Typography>
          <Typography
            color="#959FB0"
            sx={{
              fontFamily: 'poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            HR manage
          </Typography>
          <Typography
            color="#959FB0"
            sx={{
              fontFamily: 'poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            {' '}
            {'>'}{' '}
          </Typography>
          <Typography
            color="#959FB0"
            sx={{
              fontFamily: 'poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            Employees
          </Typography>
          <Typography
            color="#959FB0"
            sx={{
              fontFamily: 'poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            {' '}
            {'>'}{' '}
          </Typography>
          <Typography
            color="#003FAD"
            sx={{
              fontFamily: 'poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            {' '}
            {data?.firstName || 'N/A'} {data?.familyName} Profile
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          width: '50px',
          height: '40px',
          alignItems: 'center',
          marginRight: '200px',
        }}
      >
        <IconButton sx={{ width: '48px', height: '40px', padding: '8px 12px' }}>
          <Badge
            variant="dot"
            color="error"
            sx={{
              '.MuiBadge-dot': {
                top: 7,
                right: 7,
              },
            }}
          >
            <NotificationsNoneIcon sx={{ color: 'black' }} />
          </Badge>
        </IconButton>
        <IconButton sx={{ width: '48px', height: '40px', padding: '8px 12px' }}>
          <MailOutlineIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton sx={{ width: '48px', height: '40px', padding: '8px 12px' }}>
          <SettingsIcon sx={{ color: 'black' }} />
        </IconButton>
        <Avatar
          src=""
          alt={data?.firstName || 'N/A'}
          sx={{ width: '40px', height: '40px' }}
        />
      </Grid2>
    </Grid2>
  );
};

export default Header;
