import { useTheme, styled } from "@mui/material/styles";

import React, {
  Avatar,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

import User1 from "../../../../assets/images/users/user-round.svg";

const ListItemWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  padding: 16,
  "&:hover": {
    background: theme.palette.primary.light,
  },
  "& .MuiListItem-root": {
    padding: 0,
  },
}));

const NotificationList = () => {
  const theme = useTheme();

  const chipSX = {
    height: 24,
    padding: "0 6px",
  };

  const chipErrorSX = {
    ...chipSX,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
    marginRight: "5px",
  };

  const chipWarningSX = {
    ...chipSX,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light,
  };

  const chipSuccessSX = {
    ...chipSX,
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light,
    height: 28,
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 330,
        py: 0,
        borderRadius: "10px",
        [theme.breakpoints.down("md")]: {
          maxWidth: 300,
        },
        "& .MuiListItemSecondaryAction-root": {
          top: 22,
        },
        "& .MuiDivider-root": {
          my: 0,
        },
        "& .list-container": {
          pl: 7,
        },
      }}
    >
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="John Doe" src={User1} />
          </ListItemAvatar>
          <ListItemText primary="John Doe" />
          <ListItemSecondaryAction>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" gutterBottom>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle2">
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Chip label="Unread" sx={chipErrorSX} />
              </Grid>
              <Grid item>
                <Chip label="New" sx={chipWarningSX} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="John Doe" src={User1} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="subtitle1">John Doe</Typography>}
          ></ListItemText>
          <ListItemSecondaryAction>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" gutterBottom>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2}}>
            <Typography variant="subtitle2">
              It is a long established fact that a reader will be distracted
            </Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							<Grid item>
								<Chip label="Confirmation of Account." sx={chipSuccessSX} />
							</Grid>
						</Grid>
					</Grid>
        </Grid>
      </ListItemWrapper>
    </List>
  );
};

export default NotificationList;
