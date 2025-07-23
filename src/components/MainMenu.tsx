
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];
 
const items: MenuItem[] = [
  {
    key: '/page1',
    icon: <PieChartOutlined />,
    label: 'Page 1',
  },
  {
    key: '/page2',
    icon: <DesktopOutlined />,
    label: 'Page 2',
  },
  {
    key: '/page3',
    icon: <UserOutlined />,
    label: 'User',
    children: [
      {
        key: '/page3/page301',
        label: 'Tom',
      },
      {
        key: '/p4',
        label: 'Bill',
      },
      {
        key: '/p5',
        label: 'Alex',
      },
    ],
  },
  {
    key: 'page4',
    icon: <TeamOutlined />,
    label: 'Team',
    children: [
      {
        key: '/page4/page401',
        label: 'Team 1',
      },
      {
        key: '8',
        label: 'Team 2',
      },
    ],
  },
  {
    key: '9',
    icon: <FileOutlined />,
    label: 'Files',
  },
]

const MainMenu = () => {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  const menuClick: MenuProps['onClick'] = (e) => {
    navigateTo(e.key);
  };
  let firstOpenKey = '';
  for(let i = 0; i < items.length; i++) {
    const itemx = items[i];
    if (itemx && 
      typeof itemx === 'object' &&
      'children' in itemx &&
      Array.isArray(itemx.children) &&
      itemx.children.length > 1) {
        if(itemx.children.some(child => child!.key === currentRoute.pathname)) {
          firstOpenKey = itemx.key as string;
          break;
        }
     
    }
  }
  const [openKeys, setOpenKeys] = useState([firstOpenKey])
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys.slice(keys.length-1));
    console.log(keys)
  };
  
  return <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick} openKeys={openKeys} onOpenChange={onOpenChange} />
}

export default MainMenu;