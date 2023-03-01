import React, { useReducer } from "react";
import UsersReducer from "../reducers/UsersReducers";
export const UsersContext = React.createContext();
const UsersContextProvider = (props) => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(false);
    const initialState = {
        users: [],
        loading: false
    }
    const [state, dispatch] = useReducer(UsersReducer, initialState)
    const searchUsers = (keyword) => {
        setLoading();
        // setLoading(true);
        setTimeout(() => {
            fetch("https://api.github.com/search/users?q=" + keyword)
                .then(response => response.json())
                .then(data => {
                    // setUsers(data.items)
                    dispatch({
                        type: "SEARCH_USERS",
                        users: data.items
                    })
                    // setLoading(false)
                })
        }, 1000);
    };
    const setLoading = () => {
        dispatch({ type: "SET_LOADİNG" })
    }
    const clearUsers = () => {
        // setUsers([]);
        dispatch({ type: "CLEAR_USERS" })
    };
    return (
        <UsersContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers
        }} >
            {props.children}
        </UsersContext.Provider>
    )
}
export default UsersContextProvider;