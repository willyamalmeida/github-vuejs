<template>
  <div class="card mt-3">
      <div class="card-body">
          <h6 class="card-subtitle">
              <a class="card-link"
                  :href="repository.html_url"
                  target="_blank">
                  {{repository.name}}
              </a>
          </h6>
          <p class="card-text mt-3">
              {{repository.description}}
          </p>
          <hr />
          <div class="row align-items-center mt-3">
              <div class="col-8">
                  <span class="badge badge-pill badge-info">{{repository.language}}</span>
              </div>
              <div class="col">
                  Stars <span class="badge badge-pill badge-secondary">{{repository.stargazers_count}}</span>

              </div>
              <div class="col">
                  <a class="card-link"
                      :href="repository.html_url + '/issues'"
                      target="_blank">
                      Issues <span class="badge badge-pill badge-secondary">{{repository.open_issues}}</span>
                  </a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['repository']  
};
</script>