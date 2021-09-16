<template>
    <ul>
        <li><router-link to="/404">404</router-link></li>
        <li><router-link to="/index">About</router-link></li>
    </ul>
    <!-- vue-router 的容器组件 -->
    <router-view />
</template>

<script>
export default {
    name: "App"
};
</script>
