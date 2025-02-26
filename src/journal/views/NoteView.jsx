import { DeleteOutline, Padding, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: note, savedMessage, isSaving  } = useSelector( state => state.journal );

  const {body, title, onInputChange, formState, date} = useForm( note )

  const dateString = useMemo(()=>{
    const newDate = new Date( date );
    
    return newDate.toUTCString();
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState) )

  }, [formState])
  
  useEffect(() => {
    if (savedMessage.length > 0) {
      Swal.fire("Nota Actualizada", savedMessage, "succes");
    }
  }, [savedMessage])
  

  const onSaveNote = () =>{
    dispatch( startSaveNote() );
  }

  const onFileInputChange = ({ target }) =>{
    if(target.files === 0) return ;
     dispatch(startUploadingFiles(target.files) );
  }

  const fileInputRef = useRef()
  const onDelete = () =>{
    dispatch( startDeletingNote() );
  }

  return (
    <Grid2
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn anime__faster"
        >
        <Grid2 item="true">
            <Typography fontSize={39} fontWeight="light"> {dateString}</Typography>
        </Grid2>     
        <Grid2 item="true">
          <input 
            type="file" 
            multiple
            ref={ fileInputRef }
            onChange={ onFileInputChange }
            style={{ display: "none" }}
          />

          <IconButton 
            color="primary"
            disabled={isSaving} 
            onClick={()=> fileInputRef.current.click()}
          >
             <UploadOutlined />
          </IconButton>

            <button 
              disabled={isSaving} 
              onClick={onSaveNote} 
              color="primary" 
              sx={{ padding: 2 }}>
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
            </button>
        </Grid2>

        <Grid2 container width="100%">
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{ border: "none", mb: 1 }}
            name="title"
            value={title} 
            onChange={onInputChange}

            />
            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió en el día de hoy?"
            minRows={5}
            name="body"
            value={body} 
            onChange={onInputChange}
            />
        </Grid2>

        <Grid2 container justifyContent= "end" >
            <Button
              onClick={onDelete}
              sx={{mt:2}}
              color="error"
            >
              <DeleteOutline />
              Borrar
            </Button>
        </Grid2>

        {/* Image Gallery */}
        <ImageGallery images = {note.imageUrls}/>
    </Grid2>
  );
};
