import React from 'react'
import styles from './RecipeItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/favorites/favorites.slice'
const RecipeItem = ({ recipe }) => {
    const { favorites } = useSelector(state => state)

    const dispatch = useDispatch()

    return (
        <div className={styles.item} >
            <h3>{recipe.name}</h3>
            <button onClick={() => dispatch(actions.toggleFavorites(recipe))} >Добавить в избранное</button>
        </div>
    )
}

export default RecipeItem