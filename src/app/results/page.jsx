import Image from "next/image";
import styles from "./page.module.css";

const Results = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Результаты</h1>
            <div className={styles.winnerBlock}>
                <div className={styles.winnerBlockInner}>
                    <Image
                        className={styles.img}
                        src={"/vote2.png"}
                        alt=""
                        width={600}
                        height={700}
                    />
                    <p className={styles.name}>Хиневич Максим Дмитриевич</p>
                </div>
            </div>
            <div className={styles.winnerLine}>
                <p className={styles.win}>поздравляем</p>
                <p className={styles.win}>поздравляем</p>
                <p className={styles.win}>поздравляем</p>
                <p className={styles.win}>поздравляем</p>
                <p className={styles.win}>поздравляем</p>
            </div>
        </div>
    );
};

export default Results;
