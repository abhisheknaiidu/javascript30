<template>
    <div>
     <b-toast id="my-toast" :variant="type" solid>
         {{text}}
    </b-toast>
    </div>
</template>
<script>
export default {
    name: "Toast",
    props: ['text','type']
}
</script>