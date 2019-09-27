<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <SharedComponent msg="Common component with slot:">
      <ul>
        <li>{{$store.state.fromLocalModule}}</li>
        <li>{{$store.state.sharedModule.fromSharedModule}}</li>
      </ul>
    </SharedComponent>
  </div>
</template>

<script>
import SharedComponent from '@cm/components/SharedComponent.vue'

export default {
  name: 'home',
  components: {
    SharedComponent
  }
}
</script>
