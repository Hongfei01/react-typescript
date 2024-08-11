import type { PropsWithChildren } from 'react';

// type HeaderProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };

type HeaderProps = PropsWithChildren<{ name: string; id: number }>;

function Header({ name, id, children }: HeaderProps) {
  return (
    <div>
      <h1>name:{name}</h1>
      <h1>id:{id}</h1>
      <span>{children}</span>
    </div>
  );
}
export default Header;
