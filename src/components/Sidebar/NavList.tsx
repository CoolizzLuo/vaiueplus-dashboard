import { generateUUID } from '@/lib/utils';

interface Props {
  title: string;
  list: {
    label: string;
    icon: JSX.Element;
  }[];
}

const NavList = ({ title, list }: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="px-4 text-lg font-bold">{title}</h3>
      <ul className="">
        {list.map((item) => {
          return (
            <li key={generateUUID(6)} className="flex gap-2 px-6 py-4 hover:bg-[#DAE9FC] rounded-2xl cursor-pointer">
              {item.icon}
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
