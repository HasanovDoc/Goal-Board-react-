import { useState } from 'react';
import styles from './BoardsItem.module.css';
import AnimateHeight from 'react-animate-height';
import { motion } from "framer-motion"

function BoardsItem(){
    return(
        <motion.div className={styles.boards_item} 
        whileHover={{ height: "auto" }}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                 <div className={styles.item__info}>Hello</div>

            
        </motion.div>
    )
}

export default BoardsItem