import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export default function UserView() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(fetchUsers()) }, [])

    return (
        <>
            <h2> List Of Users </h2>
            <div>
                {!!user && <div>Loading... </div>}
                {!user && user.error ? <p> Error {user.error}</p> : null}
                {!user && !!user.users
                    ?
                    <ul>
                        {
                            user.users.map(user => (
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ul>
                    : 'Liste Yüklenilemedi'
                }
            </div>
        </>
    )
}