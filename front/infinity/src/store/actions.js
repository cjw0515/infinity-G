// 컴포넌트에서 상태변경을 일으키는 이벤트를 생성
// state의 변경은 action에서 일어나는 것이 아니라 mutation에 커밋될 때 일어난다. 임의의 비동기 처리를 포함할 수 있다.

import {
    GET_TESTDATA
  } from './mutation-types'

  export default {
    [GET_TESTDATA] ({commit}) {
      async function fetch_api(){
        const response = await fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels')
        const json = await response.json()        
        commit(GET_TESTDATA, json.channels)
      }
      fetch_api()
    }    
  }
  
  