<template>
    <span @click="toNext">index</span>
</template>
<script>
import { useRouter } from "vue-router";
export default {
    setup() {
        const router = useRouter();
        function toNext() {
            router.push("/aaa");
        }
        return {
            toNext
        };
    }
};
</script>
