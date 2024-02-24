import Link from "next/link"

const getUser = async (id) => {
    const data = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await data.json()

    return user
}

const page = async ({params}) => {
    const id = params?.userId
    const {result} = await getUser(id)

    const {name, age, email} = result[0]

    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: 15}}>
            <h1>{name}</h1>  <h1>{age}</h1> <h1>{email}</h1> 
        </div>
    )
}

export default page