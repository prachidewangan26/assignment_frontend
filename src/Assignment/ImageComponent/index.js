import styles from './styles.module.css';
import everyoneImage from '../Images/everyone.png';
import groupBusinessImage from '../Images/group-business.png'
import dotImage from '../Images/dot.png'

const ImageComponent = ()=>{
    return (
        <div className={styles.image_container} 
        style={{
            backgroundImage: `url(${dotImage})`,
            backgroundRepeat: 'no-repeat',
            width: '575px',
            height:'400px',
          }}>
             <div className={styles.bottom_image}>
                    <img src={everyoneImage} 
                    alt="loading " 
                    style={{ width: '490px', height: '280px' }}/>
                </div>

                <div className={styles.upper_image}>
                    <img src={groupBusinessImage} 
                    alt="loading " 
                    style={{ width: '490px', height: '280px' }}/>
                </div>
        </div>
    )
}

export default ImageComponent