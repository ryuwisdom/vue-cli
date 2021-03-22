<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{nameProps}}</p>
    <p>{{address}}</p>
    <p>{{phone}}</p>
    <p>{{hasCat}}</p>
    <p>{{getDateAndTime(editedDate)}}</p>
<!--    <p>{{sayHello}}</p>-->
<!--    <v-btn @click="changeName()">-->
<!--      이름변경-->
<!--    </v-btn>-->

  </div>
</template>

<script>
import {eventBus} from "@/main";
import {dateFormat} from "@/mixins/dataFormat"

export default {
  // props: ['nameProps'],
  props: {
    nameProps: {

    type : String,

      // 꼭 필요한 props
      // 부모컴포넌트에서 사용하지 않으면 props가 missing되었다고 콘솔에러
      required : true,
      // props 전달값이 없을때 default
      // default : '+_+'
    },
    address: {
    type : String,
    },
    phone: {
    type : String,
    },
    hasCat: {
    type : Boolean,
    },

  },
  computed : {
    //  props로 가져온 값을 아래처럼 this를 붙여 데이터 동일하게 사용할 수 있따.
    sayHello () {
      return this.nameProps + '안녕 안녕 ~ '
    }
  },
  methods: {

  },
data()
{
  return {
    editedDate : null
  }

},
  created() {
    // 콜백함수는 arrow function을 써야 vue instance를 가르침
    // 가상의 부모컴포넌트 역할
    eventBus.$on('userWasEdited', date=> {
      this.editedDate = date
    })
  },
  mixins : [dateFormat]
}
</script>

