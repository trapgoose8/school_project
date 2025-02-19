"use client";

import { signIn } from "next-auth/react";
import styles from "./page.module.css";

const Login = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const fullname = String(event.target[0].value);
        const level = String(event.target[1].value);
        const password = String(event.target[2].value);
        const fullfind = (fullname.replaceAll(" ", "") + level).toLowerCase();

        signIn("credentials", { fullfind, password, callbackUrl: "/" });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <div className={styles.label}>ФИО полные</div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.field}>
                    <div className={styles.label}>Класс</div>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.field}>
                    <div className={styles.label}>Пароль</div>
                    <input className={styles.input} type="Password" />
                </div>
                <button className={styles.button}>Войти</button>
            </form>
        </div>
    );
};

export default Login;
