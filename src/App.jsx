import React from 'react'
import RecipeItem from './components/RecipeItem/RecipeItem'

const App = () => {
    return (
        <div>
            <RecipeItem recipe={{
                id: 1,
                name: 'Лазунья'
            }} />
            <RecipeItem recipe={{
                id: 2,
                name: 'Пюре'
            }} />
            <RecipeItem recipe={{
                id: 3,
                name: 'Каша'
            }} />
        </div>
    )
}

export default App