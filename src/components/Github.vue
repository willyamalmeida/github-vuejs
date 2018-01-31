<template>
    <div>
        <header>
            <div class="row bg-dark text-light">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-3">
                            <h2>GitHub</h2>
                        </div>
                        <div class="col-5">
                            <!-- <SearchUser updateUser={this.updateUser} updateRepository={this.updateRepository} /> -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="container mt-3">
            <!-- <UserInfo user={this.state.user} repositories={this.state.repositories} /> -->
        </main>
        <footer class="footer mt-3">
            <div class="container">
                <span class="text-muted">{{msg}}</span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Github',
    data() {
        return { 
            msg: 'Github with VueJs'
        }
    }
};
</script>

<style>
.footer {
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}
</style>