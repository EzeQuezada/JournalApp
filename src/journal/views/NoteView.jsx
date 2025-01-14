import { Padding, SaveOutlined } from "@mui/icons-material"
import { Grid2, TextField, Typography } from "@mui/material"


export const NoteView = () => {
  return (
    <Grid2 container 
    direction="row" 
    justifyContent="space-between"
    alignItems="center"
    sx={{mb:1}}
    >
        <Grid2 item="true">
            <Typography fontSize={39} fontWeight="light">13 de enero</Typography>
        </Grid2>
        <Grid2>
            <button color="primary" sx={{Padding:2}}>
                <SaveOutlined sx={{ fontSize:30, mr:1 }}/>
                Guardar
            </button>
        </Grid2>
        <Grid2 container>
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{border:"none", mb:1}}
            
            />
        </Grid2>
    </Grid2>
  )
}
