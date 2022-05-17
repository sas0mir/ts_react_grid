import { get } from 'lodash';
import Navigation from "../components/navigation";
import SubNavigation from "../components/subnavigation";
import Catalog from '../routes/Catalog';
import CatalogGrid from '../routes/CatalogGrid';
import CatalogItemCard from '../routes/CatalogItemCard';
import CatalogItemCreate from '../routes/CatalogItemCreate';
import CatalogPrices from '../routes/CatalogPrices';
import ClientCard from '../routes/ClientCard';
import ClientCreate from '../routes/ClientCreate';
import ClientList from '../routes/ClientList';
import ClientsGrid from '../routes/ClientsGrid';
import Contacts from '../routes/Contacts';
import OrdersGrid from '../routes/OrdersGrid';

export interface ILink {
    name: string,
    code: number,
    url: string,
    sublinks?: ILink[],
}

export interface IRoute {
  path: string,
  element: string,
  subroutes?: IRoute[], 
}

export const navigationRoutes: IRoute[] = [
  {
    path: '/',
    element: 'App'
  },
  {
    path: '/cl',
    element: 'ClientList',
    subroutes: [
      {
        path: ':clintId',
        element: 'ClientCard',
      },
      {
        path: 'new',
        element: 'ClientCreate',
      },
      {
        path: 'clients',
        element: 'ClientsGrid',
      },
      {
        path: 'orders',
        element: 'OrdersGrid',
      },
    ]
  },
  {
    path: '/cat',
    element: 'Catalog',
    subroutes: [
      {
        path: ':itemId',
        element: 'CatalogItemCard',
      },
      {
        path: 'new',
        element: 'CatalogItemCreate',
      },
      {
        path: 'goods',
        element: 'CatalogGrid',
      },
      {
        path: 'prices',
        element: 'CatalogPrices',
      },
    ]
  },
  {
    path: '/con',
    element: 'Contacts'
  },
  {
    path: '*',
    element: 'shrug'
  }
]

export const navigationLinks: ILink[] = [
  {
    name: 'Main Page',
    code: 1,
    url: '/',
  },
  {
    name: 'Clients list',
    code: 2,
    url: '/cl',
    sublinks: [
      {
        name: "Clients",
        code: 2.1,
        url: '/cl/clients',
      },
      {
        name: "Orders",
        code: 2.2,
        url: '/cl/orders',
      },
    ]
  },
  {
    name: 'Catalog',
    code: 3,
    url: '/cat',
    sublinks: [
      {
        name: "Goods",
        code: 3.1,
        url: '/cat/goods',
      },
      {
        name: "Prices",
        code: 3.2,
        url: '/cat/prices',
      },
    ]
  },
  {
    name: 'Contacts',
    code: 4,
    url: '/con'
  }
]

let clientListSubMenu: ILink[] = [
    {
      name: "Clients",
      code: 1,
      url: '/clientlist/clients',
    },
    {
      name: "Orders",
      code: 2,
      url: 'orders',
    },
    {
      name: "Goods",
      code: 3,
      url: '/clientlist/goods',
    },
    {
      name: "Prices",
      code: 4,
      url: '/clientlist/prices',
    },
  ];
  
  export function getSubLinks(name:string) {
      if(name === 'clientlist') return clientListSubMenu
    return clientListSubMenu;
  }

  const Components:object = {
    'Navigation': Navigation,
    'SubNavigation': SubNavigation,
    'Catalog': Catalog,
    'CatalogGrid': CatalogGrid,
    'CatalogItemCard': CatalogItemCard,
    'CatalogItemCreate': CatalogItemCreate,
    'CatalogPrices': CatalogPrices,
    'ClientCard': ClientCard,
    'ClientCreate': ClientCreate,
    'ClientList': ClientList,
    'ClientsGrid': ClientsGrid,
    'Contacts': Contacts,
    'OrdersGrid': OrdersGrid,
  }

export const getComponent: (component_name:string)=>React.ReactComponentElement<any> | null = (component_name)=> {
    const Component = get(Components,component_name,null);
    return <Component/>
}
  // export function getElement(name:string) {
  //   if (name) {
  //     // const component = name === 'App' ? require('../App') : require('../routes/' + name);
  //     // const element = component.default;
  //     // console.log('GETELEMENT->', typeof element, element);
  //     import ['name'] as element from `../routes/${name}`;
  //     return element
  //   }
  // }