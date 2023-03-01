import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/AlertContext';
import { UsersContext } from '../context/UsersContext';
const Search = () => {
    const [keyword, setKeyword] = useState("");
    const { searchUsers, users, clearUsers } = useContext(UsersContext)
    const { displayAlert } = useContext(AlertContext)
    const onChange = (e) => {
        setKeyword(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (keyword === "") {
            displayAlert("Please enter word", "danger");
        } else {
            searchUsers(keyword);
            setKeyword("");
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='Keyword' />
                    <button className="btn btn-primary" type='submit'>Search</button>
                </div>
            </form>
            {
                users.length > 0 && <button className="btn btn-outline-danger my-3 btn-block w-100" onClick={clearUsers} >Clear Results</button>
            }

        </div >
    )
}
export default Search





// Class
// import React, { Component } from 'react'
// export class Search extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             keyword: ""
//         }
//     }
//     onChange = (e) => {
//         this.setState({
//             keyword: e.target.value
//         })
//     }
//     onSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.keyword === "") {
//             this.props.displayAlert("Please enter word", "danger");
//         } else {
//             this.props.searchUsers(this.state.keyword)
//             this.setState({ keyword: "" })
//         }
//     }
//     render() {
//         return (
//             <div className="container my-3">
//                 <form onSubmit={this.onSubmit}>
//                     <div className="input-group">
//                         <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control' placeholder='Keyword' />
//                         <button className="btn btn-primary" type='submit'>Search</button>
//                     </div>
//                 </form>
//                 {
//                     this.props.showClearButton && <button className="btn btn-outline-danger my-3 btn-block w-100" onClick={this.props.clearResults} >Clear Results</button>
//                 }

//             </div >
//         )
//     }
// }

// export default Search