import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Comment({ comment, removeComment, index }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={comment.fullName} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={comment.fullName}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "block" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {comment.createdAt}
            </Typography>
            {comment.text}
          </React.Fragment>
        }
      />
      <IconButton
        sx={{ color: "red" }}
        aria-label="delete"
        onClick={() => removeComment(index)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default Comment;
