<script>
export default {
    data() {
        return {
        
        };
    }
};
</script>

<template>
    <header class="header">
        <div class="logo">MyGitHub</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    // Header
    .header {
        background-color: $secondary-color;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            
            li {
            margin-left: 20px;

            a {
                color: #fff;
                text-decoration: none;
                font-size: 0.9rem;
                
                &:hover {
                color: $primary-color;
                }
            }
            }
        }
    }
</style>