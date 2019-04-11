var BASE_URL = "http://localhost:5001/infinity-g-dev/us-central1/v1/kkitodo";
var CANVAN_URL = "http://localhost:5001/infinity-g-dev/us-central1/v1/canvan";

export default {
    HELLO: BASE_URL,

    TODO_LIST: BASE_URL + '/list',
    TODO_DELETE: BASE_URL,
    TODO_ADD: BASE_URL,
    TODO_UPD: BASE_URL,
    CAVAN_LIST: CANVAN_URL + '/list',
    CAVAN_DELETE: CANVAN_URL,
    CAVAN_ADD: CANVAN_URL,
    CAVAN_UPD: CANVAN_URL
}