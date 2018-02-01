<template>
  <div class="card">
      <img class="card-img-top"
          :src="user.avatar_url"
          alt="avatar"
          height="230" />
      <div class="card-body">
          <h5 class="card-title">
              {{user.name}}
          </h5>
          <h6 class="card-subtitle">
              <a class="card-link"
                  :href="user.html_url"
                  target="_blank">
                  {{user.login}}
              </a>
          </h6>
          <hr />
          <p class="card-text mt-3">
              Repositories: <span class="badge badge-pill badge-secondary">{{user.public_repos}}</span><br />
              Followers: <span class="badge badge-pill badge-secondary">{{user.followers}}</span><br />
              Following: <span class="badge badge-pill badge-secondary">{{user.following}}</span>
          </p>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
};
</script>

<style scoped>

</style>


