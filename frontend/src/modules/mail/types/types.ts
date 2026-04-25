export interface SubMenu {
  id: number;
  name: string;
}

export interface Menu {
  id: number;
  name: string;
  subMenus: SubMenu[];
}

export interface SubMenuItem {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

export interface MenuItems {
  id: number;
  subMenuItems: SubMenuItem[];
}
