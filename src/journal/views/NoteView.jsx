import { Padding, SaveOutlined } from "@mui/icons-material";
import { Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
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
            <Typography fontSize={39} fontWeight="light">
            13 de enero
            </Typography>
        </Grid2>
        <Grid2>
            <button color="primary" sx={{ padding: 2 }}>
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
            />
            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió en el día de hoy?"
            minRows={5}
            />
        </Grid2>

        {/* Image Gallery */}
        <ImageGallery/>
    </Grid2>
  );
};
