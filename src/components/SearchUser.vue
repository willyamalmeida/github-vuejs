<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            id="inputGroupAddon"
            aria-describedby="btnGroupAddon"
            placeholder="Search users"
            ref="username"
            :value="username"
            @input="handleUsernameChange"
            @keyup.enter="search()" />

        <div class="input-group-append">
            <button
                type="button"
                class="btn btn-secondary"
                id="inputGroupAddon"
                @click="search()">
                Search
        </button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState("searchuser", {
      username: state => state.username
    })
  },

  methods: {
    handleUsernameChange(e) {
      this.updateUsername(e.target.value);
    },

    ...mapActions({
      search: "searchuser/search",
      updateUsername: "searchuser/updateUsername"
    })
  },

  mounted() {
    this.$refs.username.focus();
  }
};
</script>

<style scoped>

</style>
