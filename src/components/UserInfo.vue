<template>
  <div>
      <div v-if="!isUser">
        <h2>Using API GitHub with VueJs</h2>
      </div>
      <div v-else class="row">
          <div class="col-lg-3">
              <CardUser />
          </div>
          <div class="col">
              <UserRepository />
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardUser from './CardUser';
import UserRepository from './UserRepository';

export default {
  components: {
    CardUser,
    UserRepository
  },

  computed: {
    ...mapGetters({
      isUser: 'isUser'
    })
  }
};
</script>

<style scoped>

</style>


