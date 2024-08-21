<script>
export default {
    data() {
        return {
            projects: [
                { id: 1, name: "Project One", description: "Description for project one." },
                { id: 2, name: "Project Two", description: "Description for project two." },
                { id: 3, name: "Project Three", description: "Description for project three." },
            ],
        };
    }
};
</script>

<template>
    <main>
        <div class="container mt-4">
            <div class="row">
                <div 
                    class="col-md-4" v-for="project in projects" :key="project.id">
                    <div class="card project-card">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <a href="#" class="btn btn-primary">Open Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .project-card {
        margin-bottom: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: translateY(-5px);
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .card-text {
            font-size: 0.9rem;
            color: #6c757d;
        }

        .btn-primary {
            background-color: #2ea44f;
            border-color: #2ea44f;

            &:hover {
            background-color: #2c974b;
            border-color: #298f46;
            }
        }
    }
</style>