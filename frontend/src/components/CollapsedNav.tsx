import { Grid2, IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export default function CollapsedNav() {
  return (
    <Grid2
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: '108px',
        height: '200vh',
        borderRadius: '4px 0 0 4px',
        borderRight: '1px',
        padding: '40px 30px',
        gap: '40px',
      }}
    >
      <img src="" alt="logo" width="45px" height="45px" />
      <Grid2
        sx={{ display: 'grid', width: '48px', height: '304px', gap: '24px' }}
      >
        <IconButton
          sx={{
            backgroundColor: '#003FAD',
            width: '48px',
            height: '48px',
            padding: '12px',
            gap: '8px',
            borderRadius: '16px',
          }}
        >
          <GridViewIcon
            sx={{ color: '#FFFFFF', width: '24px', height: '24px' }}
          />
        </IconButton>
        <IconButton
          sx={{
            width: '48px',
            height: '48px',
            padding: '8px 12px',
            gap: '8px',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '10px',
              height: '12px',
            }}
          >
            <DataSaverOffIcon sx={{ color: '#737791' }} />
            <div
              style={{
                content: '""',
                position: 'absolute',
                backgroundColor: '#737791',
                width: '2px',
                height: '100%',
                left: '135%',
                top: '3px',
                transform: 'translateX(-50%)',
              }}
            ></div>
            <div
              style={{
                content: '""',
                position: 'absolute',
                backgroundColor: '#737791',
                width: '62%',
                height: '2px',
                top: '125%',
                left: '13px',
                transform: 'translateY(-50%)',
              }}
            ></div>
          </div>
        </IconButton>
        <IconButton
          sx={{
            width: '48px',
            height: '48px',
            padding: '8px 12px',
            gap: '8px',
          }}
        >
          <DescriptionOutlinedIcon sx={{ color: '#737791' }} />
        </IconButton>
        <IconButton
          sx={{
            width: '48px',
            height: '48px',
            padding: '8px 12px',
            gap: '8px',
          }}
        >
          <PeopleAltOutlinedIcon sx={{ color: '#737791' }} />
        </IconButton>
        <IconButton
          sx={{
            width: '48px',
            height: '48px',
            padding: '8px 12px',
            gap: '8px',
          }}
        >
          <ViewInArIcon sx={{ color: '#737791' }} />
        </IconButton>
      </Grid2>
    </Grid2>
  );
}
