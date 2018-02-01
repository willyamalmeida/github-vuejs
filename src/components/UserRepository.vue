<template>
  <div>
    <div v-if="isRepository">
      <div v-for="(repos, index) in repositories" :key="index">
        <CardRepository :repository="repos" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CardRepository from './CardRepository';

export default {
  components: {
    CardRepository
  },

  computed: {
    ...mapState({
      repositories: state => state.repositories
    }),

    ...mapGetters({
      isRepository: 'isRepository'
    })
  }
};
</script>

<style scoped>

</style>


