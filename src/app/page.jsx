import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.intro}>
                <h1 className={styles.title}>
                    ВЫБОРЫ РУКОВОДИТЕЛЯ ПАРЛАМЕНТА ШКОЛЫ
                </h1>
                <Image
                    className={styles.mainImg}
                    src={"/main.jpg"}
                    alt=""
                    width={1800}
                    height={600}
                />
            </div>
            <div className={styles.reasons}>
                <div className={styles.reasonsTitle}>
                    Выборы президента школы являются важными по нескольким
                    причинам:
                </div>

                <div className={styles.reason}>
                    <div className={styles.reasonSubtitle}>
                        Демократия и участие:
                    </div>
                    <div className={styles.reasonInfo}>
                        Выборы президента школы позволяют ученикам принять
                        участие в демократическом процессе и выразить свою волю.
                        Это учит детей основам гражданского участия и
                        формированию собственного мнения.
                    </div>
                    <div className={styles.reasonNumber}>01</div>
                </div>

                <div className={styles.reason}>
                    <div className={styles.reasonSubtitle}>
                        Представительство и лидерство:
                    </div>
                    <div className={styles.reasonInfo}>
                        Президент школы играет роль голоса ученического
                        сообщества. Он представляет интересы учащихся перед
                        администрацией школы и помогает решать проблемы и
                        вопросы, которые волнуют студентов. Выборы позволяют
                        определить лидеров, которые способны эффективно
                        представлять интересы студентов.
                    </div>
                    <div className={styles.reasonNumber}>02</div>
                </div>

                <div className={styles.reasonsImages}>
                    <Image className={styles.reasonImageFirst} src={"/main1.png"} alt="" width={800} height={250}/>
                    <Image className={styles.reasonImageSecond} src={"/main2.png"} alt="" width={400} height={250}/>
                </div>

                <div className={styles.reason}>
                    <div className={styles.reasonSubtitle}>
                        Развитие навыков:
                    </div>
                    <div className={styles.reasonInfo}>
                        Участие в выборах президента школы помогает развить
                        ученикам навыки коммуникации, лидерства, организации и
                        принятия решений. Они могут научиться работать в
                        команде, управлять проектами и решать конфликты.
                    </div>
                    <div className={styles.reasonNumber}>03</div>
                </div>

                <div className={styles.reason}>
                    <div className={styles.reasonSubtitle}>
                        Вовлечение и чувство принадлежности:
                    </div>
                    <div className={styles.reasonInfo}>
                        Выборы президента школы могут стимулировать учеников к
                        активному участию в жизни школы. Они могут чувствовать
                        себя важными членами сообщества и иметь возможность
                        внести вклад в улучшение школьной среды и условий
                        обучения.
                    </div>
                    <div className={styles.reasonNumber}>04</div>
                </div>
                <div className={styles.reason}>
                    <div className={styles.reasonSubtitle}>Учебная среда:</div>
                    <div className={styles.reasonInfo}>
                        Президент школы может повлиять на учебную среду и
                        условия обучения, например, организовать мероприятия,
                        клубы или улучшение школьной инфраструктуры. Выборы
                        позволяют выбрать лидера, который будет активно работать
                        над улучшением учебной среды для всех учащихся.
                    </div>
                    <div className={styles.reasonNumber}>05</div>
                </div>
            </div>

            <div className={styles.conclusion}>
                <Image className={styles.conclusionImage} src={"/main3.png"} alt="" width={1400} height={500} />
                <div className={styles.conclusionInfo}>
                    <div className={styles.conclusionTitle}>
                        Таким образом
                    </div>
                    <div className={styles.conclusionUtils}>
                        <p className={styles.conclusionText}>
                        выборы президента школы имеют большое значение, поскольку они способствуют развитию демократических ценностей, формируют лидерские навыки и вовлекают учеников в активную жизнь школы.
                        </p>
                        <Image className={styles.conclusionImageLast} src={"/main4.png"} alt="" width={400} height={250}/>
                    </div>
                </div>
            </div>
        </main>
    );
}
