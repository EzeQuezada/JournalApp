import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis
        dolorum beatae quos obcaecati ad adipisci necessitatibus sint, quaerat
        debitis deleniti, harum rem inventore eligendi? Perferendis earum sint
        accusantium expedita?
      </Typography> */}

      <NothingSelectedView/>
      {/* <NoteView/> */}

      <IconButton
      size="large"
      sx={{
        color:"white",
        backgroundColor:"error.main",
        ":hover":{backgroundColor:"error.main", opacity:0.9},
        position:"fixed",
        right:50,
        bottom:50
      }}>
        <AddOutlined/>
      </IconButton>
    </JournalLayout>
  );
};
