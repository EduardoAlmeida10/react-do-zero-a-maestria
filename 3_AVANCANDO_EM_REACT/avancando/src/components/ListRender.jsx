import { useState } from "react";


const ListRender = () => {

    const [list] = useState(["Matheus", "Carlos", "Eduardo"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Carlos", age: 35},
        {id: 2, name: "Eduardo", age: 48},
        {id: 3, name: "Matheus", age: 19}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((item) => (
                <li key={item.id}>{item.name} - {item.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete</button>
    </div>
  )
}

export default ListRender