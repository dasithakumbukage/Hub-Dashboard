import React from "react";
import styles from "./index.module.css";
import { FaUsersGear } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { MenuOptions } from "./menuOption";

export const Menu = () => {
  return (
    <div className={styles.main}>
      <MenuOptions />
    </div>
  );
};
