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

export const gridsLinks: ILink[] = [
  {
    text: 'Users',
    code: 5,
    to: 'users',
  },
  {
    text: 'Posts',
    code: 6,
    to: 'posts',
  },
  {
    text: 'Comments',
    code: 7,
    to: 'comments',
  },
  {
    text: 'Albums',
    code: 8,
    to: 'albums'
  },
  {
    text: 'Photos',
    code: 9,
    to: 'photos',
  },
  {
    text: 'Todos',
    code: 10,
    to: 'todos'
  }
]
// export const dataTemplate1: JSON[] = [
//   {
//     'id': 0,
//     'name': 'Robert',
//     'surname': 'Green'
//   }
// ]