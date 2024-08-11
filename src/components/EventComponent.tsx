import { useState } from 'react';

type Person = {
  name: string;
  email: string;
};

function EventComponent() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const text = formData.get('name') as string;
    const person: Person = { name: text, email: data.email as string };
    console.log(person);
  };
  return (
    <div>
      <h2>event example</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          name='name'
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='email'
          value={email}
          onChange={handleChange}
          name='email'
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}
export default EventComponent;
