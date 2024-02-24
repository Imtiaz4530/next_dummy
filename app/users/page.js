import Link from "next/link"

const getUsers = async () => {
    const data = await fetch(`http://localhost:3000/api/users`)
    const users = await data.json()

    return users
}

const page = async () => {
    const users = await getUsers()
    return (
        <div>
            {users.map((user) => (
                <Link href={`/users/${user.id}`} key={user.id}><h4>{user.name}</h4></Link>
            ))}
        </div>
    )
}

export default page