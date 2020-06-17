import axios from 'axios';
import * as moment from 'moment';
import 'moment/locale/pt-br';

export const getData = ({ time, number }) => async dispatch => {
    try {
        dispatch({
            type: "AWAITING_DATA"
        })

        const response = await axios.get("http://localhost:5000/data");
        
        const data = [];
        const labels = [];
        
        for (let i = 0; i < response.data.length; i++) {
            data.push(response.data[i].value);
            labels.push(moment(response.data[i].date).locale('pt-br').format("ll"));

            if( i === (number - 1)){
                break;
            }
        }

        dispatch({
            type: "SUCESS_DATA",
            payload: {
                data,
                labels
            }
        })
        
    } catch (e) {
        dispatch({
            type: "REJECTED_DATA",
            payload:{
                message:"Erro ao receber os dados"
            }
        })
    }
}