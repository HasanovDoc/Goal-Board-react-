import styles from './Boards.module.css'
import BoardsItem from './Boards-item/BoardsItem'

function Boards(){
    return(
        <div className={styles.boards}>
            <BoardsItem />
            <BoardsItem />
            <BoardsItem />
            <BoardsItem />
            <BoardsItem />
            <BoardsItem />
        </div>
    )
}

export default Boards