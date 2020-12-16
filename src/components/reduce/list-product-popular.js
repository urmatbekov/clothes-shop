const initialState = {
    data: {
        results:[]
    },
    loading: true
}
const REQUEST_PRODUCT = "FETCH_REQUEST_PRODUCT"
const ADD_PRODUCT = "FETCH_ADD_PRODUCT"


const ListProductPopular = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCT:
            return {...state, loading: true}
        case ADD_PRODUCT:
            return {data: action.payload, loading: false}
        default:
            return state
    }
}

const requestProduct = () => {
    return {type: REQUEST_PRODUCT}
}

const addProduct = (data) => {
    return {type: ADD_PRODUCT, payload: data}
}

export const getProduct = (service, dispatch) => {
    dispatch(requestProduct())
    service.getProduct().then((data) => {
        dispatch(addProduct(data))
    })
}

export default ListProductPopular;