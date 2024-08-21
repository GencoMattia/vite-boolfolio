<script>
import axios from 'axios';

export default {
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
            <div class="col-md-4" v-for="project in projects" :key="project.id">
                <div class="card project-card">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Open Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    .project-card {
        margin-bottom: $card-margin-bottom;
        box-shadow: $card-box-shadow;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: $card-hover-transform;
        }

        .card-title {
            font-size: $card-title-font-size;
            font-weight: $card-title-font-weight;
        }

        .card-text {
            font-size: $card-text-font-size;
            color: $card-text-color;
        }

        .btn-primary {
            background-color: $btn-primary-bg;
            border-color: $btn-primary-border;

            &:hover {
            background-color: $btn-primary-hover-bg;
            border-color: $btn-primary-hover-border;
            }
        }
    }
</style>