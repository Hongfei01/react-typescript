type Component1 = {
  type: 'basic';
  name: string;
};
type Component2 = {
  type: 'advanced';
  name: string;
  email: string;
};

type ComponentProps = Component1 | Component2;

function ComponentChallenger(props: ComponentProps): JSX.Element {
  if (props.type === 'basic')
    return (
      <div>
        <p>{props.name}</p>
      </div>
    );
  return (
    <div>
      <p>
        <span>{props.name}</span> <span>{props.email}</span>
      </p>
    </div>
  );
}
export default ComponentChallenger;
