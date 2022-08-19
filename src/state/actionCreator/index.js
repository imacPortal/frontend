export const setUser = (userId, uName, email) => {
    return dispatch => {
        dispatch({
            type: "set_user",
            payload: {
                userId,
                uName,
                email
            }
        })
    }
}