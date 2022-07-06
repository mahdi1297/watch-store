export enum TabsEnum {
  LAST_PRODUCTS = "آخرین محصولات",
  DISCOUNTS = "تخفیف دار ها",
  BEST_SELLINGS = "پرفروش ترین ها",
}

export type Tab = {
  id: number;
  title: string;
};

export const tabsModel: Tab[] = [
  { id: 1, title: TabsEnum.LAST_PRODUCTS },
  { id: 2, title: TabsEnum.DISCOUNTS },
  { id: 3, title: TabsEnum.BEST_SELLINGS },
];
