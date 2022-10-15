// const initState = {
//       search: "",
//       status: "All",
//       priority: []
// }
//   const FiltersReducer = (state = initState, action) => {
//     switch (action.type) {
//       case "filters/searchFilterChange":
//           return {
//                 ...state, 
//                 search: action.payload
//             }
//       case "filters/statusFilterChange":
//         return {
//           ...state,
//           status: action.payload
//         }
//       case "filters/priorityFilterChange":
//         console.log(action)
//         return {
//           ...state,
//           priority: action.payload
//         }
//       default:
//         return state;
//     }
//   };
//   export default FiltersReducer;
  
import { createSlice} from '@reduxjs/toolkit'; 
export default  createSlice({
  name: 'filters',
  initialState : {
          search: "",
          status: "All",
          priority: [],
    },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    },// => { type: 'filters/searchFilterChange'}
    statusFilterChange: (state, action) =>{
      state.status = action.payload
    },
    prioritiesFilterChange: (state, action) => { 
      state.priority = action.payload
    }
  }
})