import Image from "next/image";
import styles from "./page.module.css";

const Candidates = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Кандидаты</h1>
            <div className={styles.candidates}>
                <div className={styles.candidate}>
                    <Image
                        className={styles.img}
                        src={"/1.png"}
                        alt="Березкин Дмитрий Петрович"
                        width={700}
                        height={500}
                    />
                    <div className={styles.nameBlock}>
                        <h1 className={styles.name}>
                            Березкин Дмитрий Петрович
                        </h1>
                        <div className={styles.number}>01</div>
                    </div>
                </div>

                <div className={styles.candidate}>
                    <Image
                        className={styles.img}
                        src={"/2.png"}
                        alt="Хиневич Максим Дмитриевич"
                        width={700}
                        height={500}
                    />
                    <div className={styles.nameBlock}>
                        <div className={styles.number}>02</div>
                        <h1 className={styles.name}>
                            Хиневич максим дмитриевич
                        </h1>
                    </div>
                </div>

                <div className={styles.candidate}>
                    <Image
                        className={styles.img}
                        src={"/3.png"}
                        alt="Касесалу Герман Янович"
                        width={700}
                        height={500}
                    />
                    <div className={styles.nameBlock}>
                        <h1 className={styles.name}>Касесалу герман янович</h1>
                        <div className={styles.number}>03</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Candidates;
