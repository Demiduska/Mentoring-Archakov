import * as React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Comment from "./components/Comment";

const useStyles = makeStyles((theme) => ({
  lightGray: {
    backgroundColor: "#FBFBFB",
  },
  customBorder: {
    borderRadius: 5,
    border: `1px solid #e7e7e7`,
  },
  input: {
    width: "100%",
  },
  inputWrap: {
    marginBottom: "20px",
  },
}));

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

function App() {
  const classes = useStyles();
  const [comments, setComments] = React.useState([]);
  const commentRef = React.useRef({
    fullName: "",
    email: "",
    text: "",
    createdAt: new Date().toLocaleDateString("en", options),
  });

  React.useEffect(() => {
    let initialComments = JSON.parse(localStorage.getItem("comments"));
    if (initialComments) {
      setComments([...initialComments]);
    }
  }, []);

  React.useEffect(() => {
    if (comments) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, commentRef.current]);
    event.target.reset();
  };

  const handleOnChangeInput = (event) => {
    let { name, value } = event.target;
    commentRef.current = {
      ...commentRef.current,
      [name]: value,
    };
  };

  const removeComment = (index) => {
    let newArr = comments.filter((comment, i) => i !== index);
    setComments([...newArr]);
  };
  console.log(comments);
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      flexDirection="column"
      p={1}
      className={classes.lightGray}
    >
      <List
        className={classes.customBorder}
        sx={{
          width: "400px",
          bgcolor: "background.paper",
          justifyContent: "center",
        }}
      >
        {!comments.length ? (
          "Пока пусто:("
        ) : (
          <div>
            {comments.map((comment, index) => (
              <Comment
                key={index}
                comment={comment}
                index={index}
                removeComment={removeComment}
              />
            ))}
          </div>
        )}
      </List>
      <form onSubmit={handleSubmit}>
        <Box
          className={classes.customBorder}
          p={2}
          sx={{
            width: "400px",
            bgcolor: "background.paper",
            justifyContent: "center",
            marginTop: "20px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h5" gutterBottom component="h4">
            Обратная связь
          </Typography>
          <Box className={classes.inputWrap}>
            <TextField
              className={classes.input}
              label="Имя"
              type="text"
              name="fullName"
              required
              helperText="Incorrect entry."
              onChange={handleOnChangeInput}
            />
          </Box>
          <Box className={classes.inputWrap}>
            <TextField
              className={classes.input}
              label="Почта"
              type="email"
              name="email"
              required
              onChange={handleOnChangeInput}
            />
          </Box>
          <Box className={classes.inputWrap}>
            <TextField
              className={classes.input}
              label="Текст"
              multiline
              rows={4}
              required
              name="text"
              onChange={handleOnChangeInput}
            />
          </Box>
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Отправить
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default App;
