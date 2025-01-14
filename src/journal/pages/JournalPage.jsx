import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis
        dolorum beatae quos obcaecati ad adipisci necessitatibus sint, quaerat
        debitis deleniti, harum rem inventore eligendi? Perferendis earum sint
        accusantium expedita?
      </Typography> */}

      {/* <NothingSelectedView/> */}
      <NoteView/>
    </JournalLayout>
  );
};
