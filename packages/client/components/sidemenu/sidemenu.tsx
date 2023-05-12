import styles from './sidemenu.module.scss';

/* eslint-disable-next-line */
export interface SidemenuProps {}

export function Sidemenu(props: SidemenuProps) {
  return (
    <div className="flex flex-col gap-2 p-4 border-r border-gray-200 w-[15rem] h-full">
      <a className="p-2 py-1 text-sm cursor-pointer transition-all hover:bg-gray-100 hover:text-gray-800 rounded">
        전체 (10)
      </a>
      <a className="p-2 py-1 text-sm cursor-pointer transition-all hover:bg-gray-100 hover:text-gray-800 rounded">
        카테고리 1(5)
      </a>
    </div>
  );
}

export default Sidemenu;
