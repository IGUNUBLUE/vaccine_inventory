import { useLocation } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import useNavigateTo from '../../../hooks/common/useNavigateTo';
import config from '../../../config';
import useDeleteEmployees from '../../../hooks/employee/useDeleteEmployees';
import useSetUserState from '../../../hooks/common/useSetUserState';
import constants from '../../../common/constants';

const progressSize = 24;

export default function Actions() {
  const location = useLocation();
  const { user } = useSetUserState();
  const { navigateTo } = useNavigateTo();
  const { startDeleteEmployees, isLoading: isLoadingDeletedEmployees } =
    useDeleteEmployees();

  const handleOnClick = (path) => () => navigateTo({ path });

  return (
    <>
      {location.pathname !== config.paths.dashboardAdmin &&
        user?.role === constants.roles.admin && (
          <ListItem divider>
            <ListItemIcon>
              <Tooltip title="Main dashboard" placement="right">
                <IconButton
                  onClick={handleOnClick(config.paths.dashboardAdmin)}
                >
                  <DashboardIcon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
        )}
      {location.pathname === config.paths.dashboardAdmin && (
        <>
          <ListItem>
            <ListItemIcon>
              <Tooltip title="Edit employee" placement="right">
                <IconButton
                  onClick={handleOnClick(config.paths.adminEditEmployees)}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Tooltip title="Add employee" placement="right">
                <IconButton
                  onClick={handleOnClick(config.paths.adminAddEmployees)}
                >
                  <PersonAddAlt1Icon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Tooltip title="Remove employees" placement="right">
                <IconButton
                  onClick={startDeleteEmployees}
                  disabled={isLoadingDeletedEmployees}
                >
                  {isLoadingDeletedEmployees ? (
                    <CircularProgress size={progressSize} />
                  ) : (
                    <PersonRemoveIcon />
                  )}
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
        </>
      )}
    </>
  );
}
