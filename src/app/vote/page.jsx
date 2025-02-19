"use client";

import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";

const Vote = () => {
    const { data: session, status } = useSession();
    const [totalCount, setTotalCount] = useState(0);
    const [votedCount, setVotedCount] = useState({
        count1: 0,
        count2: 0,
        count3: 0,
    });
    const router = useRouter();

    useEffect(() => {
        async function fetchUsersAll() {
            const res = await fetch("/api/users/allVoted", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.status === 200) {
                const data = await res.json();
                setTotalCount(data.count);
            }
        }

        async function fetchUsersVoted() {
            const res = await fetch("/api/users/vote", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.status === 200) {
                const data = await res.json();
                setVotedCount(data);
            }
        }

        fetchUsersAll();
        fetchUsersVoted();
    }, []);
    console.log(totalCount);
    console.log(votedCount);
    const handleVote = async (id, name) => {
        const agree = confirm(
            `Вы уверены, что хотите проголосовать за ${name}? У вас есть только 1 голос, изменить его будет невозможно.`
        );

        if (agree) {
            const fullname = session.user.fullname;
            const level = session.user.level;
            const password = session.user.password;
            const fullfind = (
                fullname.replaceAll(" ", "") + level
            ).toLowerCase();

            try {
                const res = await fetch("/api/vote", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullfind,
                        id,
                    }),
                });

                if (res.status === 200) {
                    alert("Ваш голос принят");
                    location.reload();
                }
            } catch (error) {
                throw new Error(error);
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Голосование</div>
            <div className={styles.candidates}>
                <div className={styles.candidate}>
                    <Image
                        className={styles.img}
                        src={"/vote1.png"}
                        alt="Березкин Дмитрий Петрович"
                        width={500}
                        height={650}
                    />
                    <div className={styles.nameBlock}>
                        <h4 className={styles.name}>
                            Березкин Дмитрий Петрович
                        </h4>
                        <div className={styles.number}>01</div>
                    </div>
                    {status === "unauthenticated" || status === "loading" ? (
                        <div className={styles.needLogin}>
                            Зарегистрируйтесь или войдите, чтобы проголосовать
                        </div>
                    ) : (
                        <>
                            {session.user.votedFor === 0 ? (
                                <button
                                    className={styles.vote}
                                    onClick={() =>
                                        handleVote(
                                            1,
                                            "Березкина Дмитрия Петровича"
                                        )
                                    }
                                >
                                    Голосовать
                                </button>
                            ) : (
                                <>
                                    <div className={styles.alreadyVoted}>
                                        Вы уже проголосовали за кандидата номер{" "}
                                        {session.user.votedFor}
                                    </div>
                                    <div
                                        className={styles.progressBarVote}
                                        style={{
                                            width:
                                                totalCount > 0
                                                    ? `${
                                                          (votedCount.count1 /
                                                              totalCount) *
                                                          100
                                                      }%`
                                                    : "0%",
                                        }}
                                    ></div>
                                    <div>
                                        {Math.round(
                                            (votedCount.count1 / totalCount) *
                                                100
                                        )}
                                        %
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className={styles.candidate}>
                    <Image
                        className={styles.img}
                        src={"/vote2.png"}
                        alt="Хиневич Максим Дмитриевич"
                        width={500}
                        height={650}
                    />
                    <div className={styles.nameBlock}>
                        <h4 className={styles.name}>
                            Хиневич Максим Дмитриевич
                        </h4>
                        <div className={styles.number}>02</div>
                    </div>
                    {status === "unauthenticated" || status === "loading" ? (
                        <div className={styles.needLogin}>
                            Зарегистрируйтесь или войдите, чтобы проголосовать
                        </div>
                    ) : (
                        <>
                            {session.user.votedFor === 0 ? (
                                <button
                                    className={styles.vote}
                                    onClick={() =>
                                        handleVote(
                                            2,
                                            "Хиневича Максима Дмитриевича"
                                        )
                                    }
                                >
                                    Голосовать
                                </button>
                            ) : (
                                <>
                                    <div className={styles.alreadyVoted}>
                                        Вы уже проголосовали за кандидата номер{" "}
                                        {session.user.votedFor}
                                    </div>
                                    <div
                                        className={styles.progressBarVote}
                                        style={{
                                            width:
                                                totalCount > 0
                                                    ? `${
                                                          (votedCount.count2 /
                                                              totalCount) *
                                                          100
                                                      }%`
                                                    : "0%",
                                        }}
                                    ></div>
                                    <div>
                                        {Math.round(
                                            (votedCount.count2 / totalCount) *
                                                100
                                        )}
                                        %
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className={styles.candidate}>
                    <Image
                        className={styles.img}
                        src={"/vote3.png"}
                        alt="Касесалу Герман Янович"
                        width={500}
                        height={650}
                    />
                    <div className={styles.nameBlock}>
                        <h4 className={styles.name}>Касесалу Герман Янович</h4>
                        <div className={styles.number}>03</div>
                    </div>
                    {status === "unauthenticated" || status === "loading" ? (
                        <div className={styles.needLogin}>
                            Зарегистрируйтесь или войдите, чтобы проголосовать
                        </div>
                    ) : (
                        <>
                            {session.user.votedFor === 0 ? (
                                <button
                                    className={styles.vote}
                                    onClick={() =>
                                        handleVote(
                                            3,
                                            "Касесалу Германа Яновича"
                                        )
                                    }
                                >
                                    Голосовать
                                </button>
                            ) : (
                                <>
                                    <div className={styles.alreadyVoted}>
                                        Вы уже проголосовали за кандидата номер{" "}
                                        {session.user.votedFor}
                                    </div>
                                    <div
                                        className={styles.progressBarVote}
                                        style={{
                                            width:
                                                totalCount > 0
                                                    ? `${
                                                          (votedCount.count3 /
                                                              totalCount) *
                                                          100
                                                      }%`
                                                    : "0%",
                                        }}
                                    ></div>
                                    <div>
                                        {Math.round(
                                            (votedCount.count3 / totalCount) *
                                                100
                                        )}
                                        %
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Vote;
