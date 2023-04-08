import styles from './Boards.module.css'
import BoardsItem from './Boards-item/BoardsItem'
import { useState } from 'react'
import { motion } from "framer-motion"

const boardsAnim = {
    hide: { x: "-97%" },
    show: { x: "0" },
  };

function Boards(){
    const [isHide, setHide] = useState(false);
    
    return(
        <>

        <motion.div className={styles.boards}
        animate={isHide ? "hide": "show"}
        variants={boardsAnim}>
            <div className={styles.boards_container}>
                <div className={styles.boards_header}>
                    <h1>My boards</h1>
                    <motion.button className={styles.header__btn}>+</motion.button>
                </div>
                <div className={styles.item_container}>
                    <BoardsItem />
                    <BoardsItem />
                </div>
            </div>
            <motion.div className={styles.hide_container} onClick={()=>setHide(!isHide)}
            whileHover={{ scaleX: 1.3 }}>
                
            </motion.div>
        </motion.div>
        
        </>
    )
}

export default Boards