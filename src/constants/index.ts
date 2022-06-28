import { get } from 'lodash';
import React, { ReactElement, ReactFragment } from 'react';

export interface ILink {
    text: string,
    to: string,
    code: number
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
    text: 'Main Page',
    code: 1,
    to: '/main',
  },
  {
    text: 'Grid templates',
    code: 2,
    to: '/grids',
  },
  {
    text: 'API',
    code: 3,
    to: '/api',
  },
  {
    text: 'Test',
    code: 4,
    to: '/test'
  }
]