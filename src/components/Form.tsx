import { ChangeEvent, FormEvent, useState } from 'react';

interface Person {
    name: string;
    age: number;
    city: string;
}

const initialValue: Person = {
    name: "",
    age: 0,
    city: ""
}

const Form = () => {
    const [user, setUser] = useState<Person>(initialValue);

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: name === 'age' ? Number(value) : value
        }));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleOnchange}
                value={user.name}
                type="text"
                name="name"
                placeholder="Enter name"
            />
            <input
                onChange={handleOnchange}
                value={user.age}
                type="number"
                name="age"
                placeholder="Enter age"
            />
            <input
                onChange={handleOnchange}
                value={user.city}
                type="text"
                name="city"
                placeholder="Enter city"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
