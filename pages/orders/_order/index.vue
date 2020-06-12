<!-- Displays the details of a given order -->
<template>
    <div class="order">
        <h1>
            {{this.$route.params.order}}
        </h1>
    </div>
</template>

<script>
export default {
    layout: "loggedInLayout"
}
</script>