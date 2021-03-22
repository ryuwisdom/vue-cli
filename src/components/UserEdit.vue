<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field
    label="Name"
    v-model="user.nameProps">
    </v-text-field>
    <v-text-field
    label="Address"
    v-model="user.address">
    </v-text-field>
    <v-text-field
    label="Phone"
    v-model="user.phone">
    </v-text-field>
 <v-radio-group v-model="user.hasCat">
 <v-radio
 label="고양이 있음"
 :value="true"
 >
 </v-radio><v-radio
 label="고양이 없음"
 :value="false"
 >
 </v-radio>
 </v-radio-group>

    <v-btn @click="changeUser()">
      수정완료
    </v-btn>

  </div>
</template>

<script>
// 사용할 eventBus import
import {eventBus} from "@/main";

// 자식 컴포넌트 변경할 때 한 번 가공해서 변
export default {
props: ["nameProps", "address", "phone", "hasCat"],
  data(){
  return {
    user: {}
  }
  },
  created() {
  this.user.nameProps = this.nameProps
  this.user.address = this.address
  this.user.phone = this.phone
  this.user.hasCat = this.hasCat
  },
  methods : {
    changeUser(){
      // console.log(this.user)
      // this.$emit('child',this.user를 함꼐 보내야)
      // child라는 함수를 실행하고 뒤의 값 this.user 등등을 인자로 넣어 컴포넌트로 보내줘
      this.$emit('child', this.user)
      // child(this.user) 라는 의미

      // eventBus가 새로운 부모역할을 한다는 것을 추론, eventBus가 보내주는 이벤트를 받고, 적어준 함수를 실행
      // eventBus.$emit("userWasEdited", new Date())
      eventBus.userWasEdited(new Date())
    }
  }
}
</script>
