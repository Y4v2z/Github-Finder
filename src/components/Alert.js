import React, { useContext } from 'react'
import { AlertContext } from '../context/AlertContext';
const Alert = () => {
    const { error } = useContext(AlertContext)
    return (
        error !== null && (
            <div className="container">
                <div className={`alert alert-${error.type}`} >
                    {error.msg}
                </div>
            </div>
        )
    )
}
export default Alert;


// import React, { Component } from 'react'
// export class Alert extends Component {
//     render() {
//         return (
//             this.props.error !== null && (
//                 <div className="container">
//                     <div className={`alert alert-${this.props.error.type}`} >
//                         {this.props.error.msg}
//                     </div>
//                 </div>
//             )
//         )
//     }
// }

// export default Alert;

