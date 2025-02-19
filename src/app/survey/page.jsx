"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Quiz = () => {
    const [survey, setSurvey] = useState(["", "", "", ""]);

    const [eventStats, setEventStats] = useState([
        { total: 0, date1: 0, date2: 0, date3: 0 }, // Мероприятие 0
        { total: 0, date1: 0, date2: 0, date3: 0 }, // Мероприятие 1
        { total: 0, date1: 0, date2: 0, date3: 0 }, // Мероприятие 2
        { total: 0, date1: 0, date2: 0, date3: 0 }, // Мероприятие 3
    ]);

    const dates = ["25.12.2025", "01.01.2025", "10.01.2025"]; // Пример дат

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
    useEffect(() => {
        async function fetchSurveyData() {
            const newStats = [...eventStats];

            for (let eventIndex = 0; eventIndex < 4; eventIndex++) {
                const resTotal = await fetch(
                    `/api/users/survey?eventIndex=${eventIndex}`
                );
                if (resTotal.status === 200) {
                    const dataTotal = await resTotal.json();
                    newStats[eventIndex].total = dataTotal.count;
                }

                for (let date of dates) {
                    const resDate = await fetch(
                        `/api/users/survey?eventIndex=${eventIndex}&date=${date}`
                    );
                    if (resDate.status === 200) {
                        const dataDate = await resDate.json();
                        newStats[eventIndex][`date${dates.indexOf(date) + 1}`] =
                            dataDate.count;
                    }
                }
            }

            setEventStats(newStats);
        }

        fetchSurveyData();
    }, []);
    const { data: session, status } = useSession();
    console.log(eventStats);
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
                                        prev[0] = "25.12.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz1"
                            />
                            <label>25.12.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[0].date1 /
                                        eventStats[0].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[0] = "01.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz1"
                            />
                            <label>01.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[0].date2 /
                                        eventStats[0].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[0] = "10.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz1"
                            />
                            <label>10.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[0].date3 /
                                        eventStats[0].total) *
                                        100
                                )}
                                %
                            </div>
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
                                        prev[1] = "25.12.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz2"
                            />
                            <label>25.12.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[1].date1 /
                                        eventStats[1].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "01.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz2"
                            />
                            <label>01.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[1].date2 /
                                        eventStats[1].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "10.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz2"
                            />
                            <label>10.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[1].date3 /
                                        eventStats[1].total) *
                                        100
                                )}
                                %
                            </div>
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
                                        prev[2] = "25.12.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz3"
                            />
                            <label>25.12.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[2].date1 /
                                        eventStats[2].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "01.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz3"
                            />
                            <label>01.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[2].date2 /
                                        eventStats[2].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "10.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz3"
                            />
                            <label>10.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[2].date3 /
                                        eventStats[2].total) *
                                        100
                                )}
                                %
                            </div>
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
                                        prev[3] = "25.12.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz4"
                            />
                            <label>25.12.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[3].date1 /
                                        eventStats[3].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "01.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz4"
                            />
                            <label>01.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[3].date2 /
                                        eventStats[3].total) *
                                        100
                                )}
                                %
                            </div>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "10.01.2025";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz4"
                            />
                            <label>10.01.2025</label>
                            <div className={styles.percent}>
                                {Math.round(
                                    (eventStats[3].date3 /
                                        eventStats[3].total) *
                                        100
                                )}
                                %
                            </div>
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
