import React from 'react'
const User = (props) => {
    const { avatar_url, login, html_url } = props.user;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3">
                    <img className='img-fluid rounded-start avatar' src={avatar_url} alt={login} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h3 className="card-title"> {login}</h3>
                        <hr />
                        <a target="_blank" rel="noreferrer" href={html_url} className="btn btn-primary">Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User





// Class
// import React, { Component } from 'react'
// export class User extends Component {
//     render() {
//         const { avatar_url, login, html_url } = this.props.user; //User Sayfasında yer alan "user" tanımlamasının içinden gelen bilgi. Ör: aşağıda this.props.user.name yazmak yerine burada tanımlanır ve işlemler yapılır.
//         return (
//             <div className="card mb-3">
//                 <div className="row g-0">
//                     <div className="col-md-3">
//                         <img className='img-fluid rounded-start avatar' src={avatar_url} alt={login} />
//                     </div>
//                     <div className="col-md-9">
//                         <div className="card-body">
//                             <h3 className="card-title"> {login}</h3>
//                             <hr />
//                             <a target="_blank" rel="noreferrer" href={html_url} className="btn btn-primary">Github Profile</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default User