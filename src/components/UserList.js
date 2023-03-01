import React, { useContext } from 'react'
import { UsersContext } from '../context/UsersContext'
import Loading from './Loading'
import User from './User'
const UserList = () => {
    const { loading, users } = useContext(UsersContext)
    if (loading) {
        return <Loading />;
    }
    return (
        <div className='container mt-3'>
            {users.map(user => (
                <User user={user} key={user.id} />))}
        </div>
    )
}
export default UserList


// Class
// import React, { Component } from 'react'
// import Loading from './Loading'
// import User from './User'
// export class UserList extends Component {
//     render() {
//         if (this.props.loading) {
//             return <Loading />;
//         }
//         return (
//             <div>
//                 {this.props.users.map(user => (
//                     <User user={user} key={user.id} />))}
//             </div>
//         )
//     }
// }

// export default UserList