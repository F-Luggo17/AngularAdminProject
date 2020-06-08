import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Gráficas', url: '/graficas' },
        { title: 'Promesas', url: '/promesas' },
        { title: 'RxJs', url: '/rxjs' }
      ]
    }
  ]

  constructor() { }
}