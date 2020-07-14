<template>
    <div class="blue">
        <p>
            <slot name="content"></slot>
            <strong>
                <slot name="strong"></slot>
            </strong>
        </p>
    </div>
</template>

<script>
export default {
    activated() {
        console.log('ativou azul');
    },
    deactivated() {
        console.log('desativou azul');
    },
}
</script>

<style scoped>
    .blue {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        color: #fff;
        background: #00f;
    }
</style>
