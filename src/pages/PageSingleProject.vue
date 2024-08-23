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
        fetchProject(){
            axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
                params: {

                }
            }).then((response) => {
                console.log(response.data);
    
                this.project = response.data;
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
    this.fetchProject();
    },
};
</script>

<template>
    <SingleProjectCard v-if="project !== null"/>
</template>

<style scoped>

</style>