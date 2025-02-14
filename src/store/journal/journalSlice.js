import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: " ",
    notes: [],
    active: null,
    // active: {
    //   id: "ABC123",
    //   title:"",
    //   body: "",
    //   date: 1234567,
    //   imageUrls: [],
    // }
  },
  reducers: {

    savingNewNote: (state) => {
      state.isSaving  = true
    },
    addNewEmptyNote:( state, action ) => {
      state.notes.push(action.payload)
      state.isSaving = false;
    },

    setActiveNote: (state, action) => {
        state.active = action.payload
    },

    setNotes: (state, action) => {
        state.notes = action.payload;
    },

    setSaving: (state) => {

    },
    UpdateNote: (state, action) => {

    },
    
    deleteNodeById: (state, action) =>{ 

    },
  }
});

export const {
  addNewEmptyNote,
  deleteNodeById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  UpdateNote,
} = journalSlice.actions

