import styles from './styles.module.css';


const AboutTheCourse=()=>{
    return (
        <div className={styles.container}>
           <div className={styles.header}>
                About the course
           </div>

           <div className={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno
           </div>

           <div className={styles.explore_now_button}>
               Explore Now
            </div> 

        </div>
    )
}

export default AboutTheCourse