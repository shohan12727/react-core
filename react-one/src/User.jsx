export default function User(user) {
    console.log(user);

    return (
        <>
            <div style={{
                border: '2px solid black',
                margin: '10px'
            }}>
                <p>
                    Name: {user.user.name}
                </p>
                <p>
                    Email : {user.user.email}
                </p>
                <p>
                    Age: {user.user.age}
                </p>
            </div>

        </>
    )
}