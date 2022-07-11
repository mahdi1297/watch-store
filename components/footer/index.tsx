import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "react-feather";
import { FooterMenu, Menu, Submenu } from "./menu.mode";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="title">
            <h2>
              <Link href="/">
                <a>واچ استور</a>
              </Link>
            </h2>
          </div>
          <div className="body">
            <div className="socials">
              <span>ما را در دنیای مجازی دنبال کنید</span>
              <ul>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Send />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Youtube />
                </li>
                <li>
                  <Facebook />
                </li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>
                  <div>
                    <Phone />
                  </div>
                  <div>09199784100</div>
                </li>
                <li>
                  <div>
                    <Mail />
                  </div>
                  <div>watch_store@contact.com</div>
                </li>
              </ul>
            </div>

            <div className="content">
              <div className="menu">
                {FooterMenu?.map((menu: Menu) => (
                  <ul key={menu.id}>
                    <li className="menu_title">{menu.title}</li>
                    {menu.submenu?.map((subMenu: Submenu) => (
                      <li key={subMenu.id}>
                        <Link href={subMenu.path}>
                          <a>{subMenu.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div className="email_box">
                <div className="email_box-title">
                  از آخرین تخفیف ها با خبر شوید
                </div>
                <form>
                  <input placeholder="ایمیل خود را وارد کنید" />
                  <button>ثبت</button>
                </form>
              </div>
            </div>

            <div className="developer">طراحی و توسعه توسط مهدی علی پور</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
