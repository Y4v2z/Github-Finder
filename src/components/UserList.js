import React, { Component } from 'react'
import User from './User'
export class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    id: "114256715",
                    name: "Yavuz AVCİ",
                    username: "Y4v2z",
                    avatar_url: "https://avatars.githubusercontent.com/u/114256715?v=4",
                    github_url: "https://github.com/Y4v2z",
                    website: "https://y4v2z.github.io/My-Projects/",
                    followers: 1
                },
                {
                    id: "3",
                    name: "pjhyett",
                    username: "pjhyett",
                    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
                    github_url: "https://github.com/pjhyett",
                    website: "https://y4v2z.github.io/My-Projects/",
                    followers: 1
                },
                {
                    id: "6",
                    name: "ivey",
                    username: "ivey",
                    avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
                    github_url: "https://api.github.com/users/ivey",
                    website: "https://y4v2z.github.io/My-Projects/",
                    followers: 1
                }
            ]
        }
    }
    render() {
        return (
            <div>{this.state.users.map(user => (
                <User user={user} key={user.id} />
            ))}</div>
        )
    }
}

export default UserList