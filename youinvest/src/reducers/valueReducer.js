
const initialState = {
    loading: false,
    data: {
        labels: [],
        datasets: [{
        label: "Clique no período que deseja visualizar",
        data: [],
        backgroundColor: 'rgba(238, 175, 0, 0.4)',
        borderColor: 'rgba(238, 175, 0, 0.5)',
        pointerBorderColor: 'rgba(238, 175, 0, 0.7)',
        }]
    },
};

const valueReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "AWAITING_DATA":
            return{
                ...state,
                loading: true
            }
        case "REJECTED_DATA":
            return{
                ...state,
                loading: false,
                message: ""
            }
        case "SUCESS_DATA":
            return{
                ...state,
                loading: false,
                data: {
                    labels: payload.labels,
                    datasets: [{
                        label: "R$",
                        data: payload.data,
                        backgroundColor: 'rgba(253, 71, 109, 0.4)',
                        borderColor: 'rgba(253, 71, 109, 0.5)',
                    }]
                },
            }
    
        default:
            return state;
    }
}

export default valueReducer;