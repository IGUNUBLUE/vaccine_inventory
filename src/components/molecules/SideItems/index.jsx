import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';

export default function SideItems() {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Tooltip title="Edit employee" placement="top-end">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Tooltip title="Add employee" placement="top-end">
            <IconButton>
              <PersonAddAlt1Icon />
            </IconButton>
          </Tooltip>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Tooltip title="Remove employee" placement="top-end">
            <IconButton>
              <PersonRemoveIcon />
            </IconButton>
          </Tooltip>
        </ListItemIcon>
      </ListItem>
    </>
  );
}
