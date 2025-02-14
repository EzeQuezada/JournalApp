import { TurnedInNot } from "@mui/icons-material"
import {  Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { useDispatch } from "react-redux"



export const SideBarItem = ({title= " ", body, id, date, imageUrls = []}) => {

  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }))
  }

    const newTitle = useMemo( () => {
        return title.lenght > 17
        ? title.substring(0,17) + "..."
        : title;
    }, [ title ])  

  return (
    <ListItem disablePadding>
                <ListItemButton onClick={ onClickNote }>
                    <ListItemIcon>
                       <TurnedInNot/>
                    </ListItemIcon>
                    <Grid2 container>
                        <ListItemText primary={ title } />
                        <ListItemText secondary={ body } />
                    </Grid2>
                </ListItemButton>

              </ListItem>
  )
}
