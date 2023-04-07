import styles from './WorkPlace.module.css'
import Boards from './Boards/Boards'

function WorkPlace(){
    return(
        <div className={styles.work_place}>
            <Boards />
        </div>
        
    )
}

export default WorkPlace