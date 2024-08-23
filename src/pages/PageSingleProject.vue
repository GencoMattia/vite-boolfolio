<script>
import axios from "axios";
import SingleProjectCard from '@/components/SingleProjectCard.vue';

export default {
    components: {
        SingleProjectCard,
    },

    data() {
        return {
            project: null
        };
    },

    methods: {
        fetchProject(id){
            axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
                params: {

                }
            }).then((response) => {
                console.log(response.data.results);
    
                this.project = response.data.results;
            }).catch((error) => {
                this.$router.push({name: "404-not-found"});
                console.log(error);
            })
        },

        changePage(routeName){
            this.$router.push({name: routeName});
        },

    },

    created() {
    this.fetchProject(this.$route.params.id);
    },

    props: {
        project: {
            type: Object,
            required: true,
        }
    }
};
</script>

<template>
    <div class="card project-card">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">Open Project</a>
        </div>
    </div>
</template>

<style scoped>

</style>