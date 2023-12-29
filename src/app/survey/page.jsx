"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const Quiz = () => {
    const [survey, setSurvey] = useState(["", "", "", ""]);

    const handleSurvey = async () => {
        const fullname = session.user.fullname;
        const level = session.user.level;
        const password = session.user.password;
        const fullfind = (fullname.replaceAll(" ", "") + level).toLowerCase();

        try {
            const res = await fetch("/api/survey", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullfind,
                    survey,
                }),
            });
            if (res.status === 200) {
                alert("Вы успешно проголосовали");
                location.reload();
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    const { data: session, status } = useSession();

    return (
        <div className={styles.container}>
            <div className={styles.title}>Опросы</div>

            <form
                className={styles.containerInner}
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSurvey();
                }}
            >
                <div className={styles.surveyCard}>
                    <Image
                        className={styles.img}
                        src={"/quiz1.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <div className={styles.nameBlock}>
                        <h2 className={styles.name}>Литературная гостиная</h2>
                        <div className={styles.number}>01</div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[0] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz1"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[0] = "12.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz1"
                            />
                            <label>12.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[0] = "19.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz1"
                            />
                            <label>19.01.2024</label>
                        </div>
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[0] != [] ? (
                                <div>
                                    Вы выбрали дату: {session.user.survey[0]}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className={styles.surveyCard}>
                    <Image
                        className={styles.img}
                        src={"/quiz2.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <div className={styles.nameBlock}>
                        <h2 className={styles.name}>Музыкальные перемены</h2>
                        <div className={styles.number}>02</div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz2"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "12.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz2"
                            />
                            <label>12.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "19.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz2"
                            />
                            <label>19.01.2024</label>
                        </div>
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[1] != [] ? (
                                <div>
                                    Вы выбрали дату: {session.user.survey[1]}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className={styles.surveyCard}>
                    <Image
                        className={styles.img}
                        src={"/quiz3.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <div className={styles.nameBlock}>
                        <h2 className={styles.name}>День самоуправления</h2>
                        <div className={styles.number}>03</div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz3"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "12.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz3"
                            />
                            <label>12.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "19.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz3"
                            />
                            <label>19.01.2024</label>
                        </div>
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[2] != [] ? (
                                <div>
                                    Вы выбрали дату: {session.user.survey[2]}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={styles.surveyCard}>
                    <Image
                        className={styles.img}
                        src={"/quiz4.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <div className={styles.nameBlock}>
                        <h2 className={styles.name}>Тематические недели</h2>
                        <div className={styles.number}>04</div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz4"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "12.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz4"
                            />
                            <label>12.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "19.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz4"
                            />
                            <label>19.01.2024</label>
                        </div>
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[3] != [] ? (
                                <div>
                                    Вы выбрали дату: {session.user.survey[3]}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                {status === "authenticated" ? (
                    <button className={styles.button}>голосовать</button>
                ) : (
                    <div>
                        Зарегистрируйтесь или войдите, чтобы проголосовать
                    </div>
                )}
            </form>
        </div>
    );
};

export default Quiz;
