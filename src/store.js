import { createStore } from 'redux'
import reducer from './reducers'
import { obtenerStageStorage, guardarStateStorage } from './localstorage'

const storageState = obtenerStageStorage()

export const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // desarrollo
)

store.subscribe( () => {
    guardarStateStorage({
        citas: store.getState().citas
    })
})

export default store