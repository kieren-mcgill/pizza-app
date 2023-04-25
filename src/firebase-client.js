import axios from "axios";

export const baseUrl = 'https://pizzaordering-b87fd-default-rtdb.europe-west1.firebasedatabase.app/';

const transformFirebaseData = (data) => data
  ? Object.keys(data).map((key) => ({ ...data[key], id: key }))
  : [];

export const getOrdersApi = () => new Promise((resolve, reject) => {
  axios({
    url: `${baseUrl}/orders.json`,
    method: 'get',
  })
    .then(({ data }) => resolve(transformFirebaseData(data)))
    .catch((error) => reject(error))
});

export const postOrderApi = (order) => axios({
  method: 'post',
  url: `${baseUrl}/orders.json`,
  data: order,
});


