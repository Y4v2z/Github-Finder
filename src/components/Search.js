import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ""
        }
    }
    onChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.keyword === "") {
            this.props.displayAlert("Please enter word", "danger");
        } else {
            this.props.searchUsers(this.state.keyword)
            this.setState({ keyword: "" })
        }
    }
    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control' placeholder='Keyword' />
                        <button className="btn btn-primary" type='submit'>Search</button>
                    </div>
                </form>
                {
                    this.props.showClearButton && <buton className="btn btn-outline-danger my-3 btn-block w-100" onClick={this.props.clearResults} >Clear Results</buton>
                }

            </div >
        )
    }
}

export default Search