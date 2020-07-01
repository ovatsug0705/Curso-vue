<template>
    <div class="red">
        <p>
            <slot name="content"></slot>
            <slot name="strong"></slot>
        </p>
    </div>
</template>

<script>
export default {
    activated() {
        console.log('ativou vermelho');
    },
    deactivated() {
        console.log('desativou vermelho');
    },
}
</script>

<style scoped>
    .red {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        color: #fff;
        background: #f00;
    }
</style>
