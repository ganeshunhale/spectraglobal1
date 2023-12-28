import { createStore } from 'redux'
import { SpectraReducer } from '.';

const SpectraStore = createStore(SpectraReducer)

export default SpectraStore;