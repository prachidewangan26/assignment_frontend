import styles from './styles.module.css';

const HeaderContent = ()=>{
    return (
        <div>
            <div className={styles.header}>
                Learn how to launch a successful podcast
             </div>

             <div className={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>

            <div className={styles.sign_up_button}>
                    Sign up Now
            </div>  
        </div>
    )
}

export default HeaderContent