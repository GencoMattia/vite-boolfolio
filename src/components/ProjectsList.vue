<script>
import axios from 'axios';
import SingleProjectCard from './SingleProjectCard.vue';

export default {
    components: {
        SingleProjectCard,
    }, 

    data() {
        return {
            projects: [
                // { id: 1, name: "Project One", description: "Description for project one." },
                // { id: 2, name: "Project Two", description: "Description for project two." },
                // { id: 3, name: "Project Three", description: "Description for project three." },
            ],
        };
    },

    methods: {
        fetchProjects(){
            axios.get("http://127.0.0.1:8000/api/projects", {
                params: {

                }
            }).then((response) => {
                console.log(response.data);
    
                this.projects = response.data.results.data;
            }).catch((err) => {
                console.error();
            })
        }
    },

    created() {
        this.fetchProjects();
    },
};
</script>

<template>
    <div class="container mt-4">
        <div class="row">
            <SingleProjectCard class="col-md-4" v-for="project in projects" :key="project.id" :project="project"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>