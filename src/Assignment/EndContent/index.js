import styles from './styles.module.css';

const EndContent =()=>{
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Choose your plan
            </div>

            <div className={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's 
            </div>
           
           <div className={styles.card_container}>
                <div className={styles.single_card}>
                    <div className={styles.card_header}>
                        Basic Plan
                    </div>

                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                    </div>
                    
                </div>
           </div>
        </div>
    )
}

export default EndContent