"use client";

import { signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const router = useRouter();
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        setActive(false);
    }, [pathname]);

    return (
        <header className={styles.container}>
            <div className={styles.navbar}>
                <Image
                    onClick={() => {
                        router.push("/");
                    }}
                    src={"/logo.jpg"}
                    alt="School2098"
                    className={styles.logo}
                    width={50}
                    height={50}
                />
                <div className={styles.links}>
                    <Link className={styles.link} href={"/"}>
                        Главная
                    </Link>
                    <Link className={styles.link} href={"/candidates"}>
                        Кандидаты
                    </Link>
                    <Link className={styles.link} href={"/vote"}>
                        Голосование
                    </Link>
                    <Link className={styles.link} href={"/survey"}>
                        Опросы
                    </Link>
                </div>
                {status === "unauthenticated" || status === "loading" ? (
                    <div className={styles.authLinks}>
                        <Link className={styles.regLink} href={"/login"}>
                            Войти
                        </Link>
                        <Link className={styles.regLink} href={"/registration"}>
                            Зарегистрироваться
                        </Link>
                    </div>
                ) : (
                    <div className={styles.authLinks}>
                        <div className={styles.firstname}>
                            {session.user?.fullname}
                        </div>
                        <button
                            className={styles.signout}
                            onClick={() => signOut()}
                        >
                            Выйти
                        </button>
                    </div>
                )}
                <div
                    className={styles.burgerLinksAll}
                    style={{
                        display: isActive ? "flex" : "none",
                    }}
                >
                    <div className={styles.linksBurger} id="linksBurger">
                        <Link className={styles.link} href={"/"}>
                            Главная
                        </Link>
                        <Link className={styles.link} href={"/candidates"}>
                            Кандидаты
                        </Link>
                        <Link className={styles.link} href={"/vote"}>
                            Голосование
                        </Link>
                        <Link className={styles.link} href={"/survey"}>
                            Опросы
                        </Link>
                    </div>
                    {status === "unauthenticated" || status === "loading" ? (
                        <div
                            className={styles.authLinksBurger}
                            id="authLinksBurger"
                        >
                            <Link className={styles.regLink} href={"/login"}>
                                Войти
                            </Link>
                            <Link
                                className={styles.regLink}
                                href={"/registration"}
                            >
                                Зарегистрироваться
                            </Link>
                        </div>
                    ) : (
                        <div className={styles.authLinksBurger}>
                            <div className={styles.fullname}>
                                {session.user?.fullname}
                            </div>
                            <button
                                className={styles.signout}
                                onClick={() => signOut()}
                            >
                                Выйти
                            </button>
                        </div>
                    )}
                </div>
                <div
                    id="burger"
                    onClick={() => {
                        setActive((prev) => !prev);
                    }}
                    className={styles.burger}
                >
                    <div className={styles.burgerInner}></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
