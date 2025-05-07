import User from './User'

export default function Users({ users }) {
    // console.log(users);

    return (
        <>
            <h3>Here is some Information of users  <br />
                Length of all users {users.length}</h3>
            <p>
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </p>



        </>
    )
}