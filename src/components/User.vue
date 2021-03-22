<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <p>{{getDateAndTime(createdAt)}}</p>
    <v-btn @click="changeName()">이름변경</v-btn>
<!--    <button @click="changeName()">이름변경</button>-->
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
            :nameProps="name"
            :address="address"
            :phone="phone"
            :hasCat="hasCat"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
            :nameProps="name"
            :address="address"
            :phone="phone"
            :hasCat="hasCat"
            @child="parents"

        >
<!-- 만약에 child라는 emit 신호가 오면 parents라는 함수를 실행해줘-->

        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
<!--  <SlotComponent>-->
<!--    <p>slot title</p>-->
<!--    <p>slot paragraph</p>-->
<!--  </SlotComponent>-->
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
// import SlotComponent from "./Slot.vue"
import {dateFormat} from "@/mixins/dataFormat"

export default {
  components: {
    UserDetail,
    UserEdit,
    SlotComponent

  },
  data(){
    return{
      name : 'bonnie',
      address : 'Seoul',
      phone : '9500 4758',
      hasCat : true,
      createdAt : null,
    }
  },
  created() {
    this.createdAt = new Date()
  },
  methods: {
    changeName () {
      this.name = "ryuwisdom"
    },
    parents (user){
      // user = {name, address, phone, hasCat}
      this.name = user.nameProps,
      this.address = user.address,
      this.phone = user.phone,
      this.hasCat = user.hasCat,
      console.log("emit 받았어!!")
    },


  },
  // mixins 는 배열로!
  mixins : [dateFormat]


}
</script>