export interface ILink {
    name: string,
    code: number,
    url: string,
}

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