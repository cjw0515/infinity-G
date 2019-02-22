// state의 상태를 변경하는 역할을 한다. vuex에서 store의 상태를 변경하는 방법은 mutation을 커밋하는 방법밖에 없다.
 
import {
     GET_TESTDATA 
} from './mutation-types'

export default {
    [GET_TESTDATA](state, testData) {
      state.testData = testData
    }
  }