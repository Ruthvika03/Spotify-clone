export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQDEPwAEp4bjFa__Ua9O9kPzvt8jo3Xc0BdU7p6jqGUQszPc2AqAfmaoIOjjawCSOukitY0c6YXcanWqUcNu8rA5w7aDb-02uq7qCIO8XuPfCmxIb2sg9SpweyEIefPZjhN3XHRtbhYLr-zXjjoZHpkw1T__IBfmUSp3sUOFn3b6uwlTl3eKM7JSu_rO2WHS9DmG700AOkXDSxXn',
};

const reducer = (state, action) => {
console.log(action);
//Action -> type, [payload]
  switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user,
        } 
        case 'SET_TOKEN' :
          return {
            ...state,
            token: action.token,
          };
          case 'SET_PLAYLISTS':
            return{
              ...state,
                playlists: action.playlists,
            };
        default:
            return state;
  }
}

export default reducer;