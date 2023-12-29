"use client"

import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "./page.module.css"
const Registartion = () => {
    
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const fullname = event.target[0].value;
        const level = event.target[1].value;
        const password = event.target[2].value;
        const fullfind = (fullname.replaceAll(" ", "") + level).toLowerCase();
        const votedFor = 0;
        const survey = ["", "", "", ""]

        try {
            const res = await fetch("/api/auth/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    level,
                    password,
                    fullfind,
                    votedFor,
                    survey
                }),
            })

            res.status === 201;
            signIn("credentials", {fullfind, password, callbackUrl:"/"})

        } catch (error) {
            
                throw new Error(error);
            
        }
    }
    
    return ( 
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <div className={styles.label}>ФИО полные</div>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.field}>
                    <div className={styles.label}>Класс</div>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.field}>
                    <div className={styles.label}>Пароль</div>
                    <input className={styles.input} type="Password"/>
                </div>
                <button className={styles.button}>Зарегистрироваться</button>
            </form>
        </div>
     );
}
 
export default Registartion;