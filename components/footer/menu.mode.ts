export type Submenu = {
  id: number;
  title: string;
  path: string;
};

export type Menu = {
  id: number;
  title: string;
  submenu: Submenu[];
};

export const FooterMenu: Menu[] = [
  {
    id: 1,
    title: "با ما",
    submenu: [
      {
        id: 11,
        title: "درباره واچ استور",
        path: "/about-us",
      },
      {
        id: 12,
        title: "تماس با ما",
        path: "/contact-us",
      },
      {
        id: 13,
        title: "فرصت های شغلی",
        path: "/jobs",
      },
    ],
  },
  {
    id: 2,
    title: "راهنمای خرید",
    submenu: [
      {
        id: 21,
        title: "روش های پرداخت",
        path: "/",
      },
      {
        id: 22,
        title: "روش های ارسال کالا",
        path: "/",
      },
      {
        id: 23,
        title: "لغو و بازگشت کالا",
        path: "/",
      },
      {
        id: 24,
        title: "ضمانت اصالت کالا",
        path: "/",
      },
    ],
  },
  {
    id: 3,
    title: "خدمات مشتریان",
    submenu: [
      {
        id: 31,
        title: "راهنمای جامع",
        path: "/",
      },
      {
        id: 32,
        title: "شرایط و قوانین",
        path: "/",
      },
      {
        id: 33,
        title: "سوالات متداول",
        path: "/",
      },
      {
        id: 34,
        title: "حریم خصوصی",
        path: "/",
      },
    ],
  },
  {
    id: 4,
    title: "عمومی",
    submenu: [
      {
        id: 41,
        title: "صفحه ی اصلی",
        path: "/",
      },
      {
        id: 42,
        title: "جست و جو",
        path: "/",
      },
      {
        id: 43,
        title: "برترین برند ها",
        path: "/",
      },
    ],
  },
];
