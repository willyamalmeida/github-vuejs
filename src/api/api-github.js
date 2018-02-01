import Axios from 'axios';

const apiGithub = {
  getUser: user => Axios.get(`https://api.github.com/users/${user}`),
  getRepos: user => Axios.get(`https://api.github.com/users/${user}/repos`)
};

export default apiGithub;
