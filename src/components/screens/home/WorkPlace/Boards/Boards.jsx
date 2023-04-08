import styles from './Boards.module.css'
import BoardsItem from './Boards-item/BoardsItem'
import { useState } from 'react'
import { motion } from "framer-motion"

const variants = {
    hide: { x: "-96%" },
    show: { x: "0" },
  }

function Boards(){
    const [isHide, setHide] = useState(false);
    
    return(
        <motion.div className={styles.boards}
        animate={isHide ? "hide": "show"}
        variants={variants}>
            <div className={styles.item_container}>
                <BoardsItem />
                <BoardsItem />
            </div>
            <motion.div className={styles.hide_container} onClick={()=>setHide(!isHide)}
            whileHover={{ scaleX: 1.3 }}>

            </motion.div>
        </motion.div>
    )
}

export default Boards