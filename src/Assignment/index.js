import AboutTheCourse from './AboutTheCourse';
import HeaderContent from './HeaderContent';
import ImageComponent from './ImageComponent';
import styles from './styles.module.css';
import pngwing from '../Assignment/Images/pngwing.png'
import BoxContent from './BoxContent';
import EndContent from './EndContent';

const MAPPING = ['About','Pricing','Review']

const Assignment = ()=>{

    return (
    <div className={styles.container}>
        <div className={ styles.upper_container}>
            <div className={styles.triangle}/>

            <div className={styles.box}>
                <div className={styles.logo}>
                Logo
                </div>
            </div>

            <div className={styles.header_content}>
                <HeaderContent/>
            </div>

            <div className={styles.obtuse_angle_triangle}>
                <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:30}}>
                    {MAPPING.map((element)=>(
                        <div className={styles.about}>
                            {element}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.image_content}>
                <ImageComponent/>
            </div>

            <div className={styles.background_image}>
                <img src={pngwing} 
                alt="loading "/>
            </div>

            <div className={styles.box_content}>
                <BoxContent/>
            </div>

            <div className={styles.about_the_course}>
                <AboutTheCourse/>
            </div>

            <div className={styles.end_content}>
                <EndContent/>
            </div>

        </div>

    </div>)
}

export default Assignment