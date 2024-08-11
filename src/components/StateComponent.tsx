import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

function StateComponent() {
  const [name, setName] = useState('');
  const [links, setLinks] = useState<Link[]>([]);
  return (
    <div>
      <h2>react & typescript {name}</h2>
      <button
        onClick={() => {
          setName('hi');
          setLinks([...links, { id: 4, url: 'hht', text: 'some value' }]);
        }}
      ></button>
      <ul>
        {links.map((link) => (
          <li>{link.url}</li>
        ))}
      </ul>
    </div>
  );
}
export default StateComponent;
