<template>
    <div class="green">
        <h2> {{ title }}</h2>
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
    data() {
        return {
            title: 'Verde',
        };
    },
    activated() {
        this.title = 'Ativou';
        console.log('ativou verde');
    },
    deactivated() {
        this.title = 'Desativou';
        console.log('desativou verde');
    },
}
</script>

<style scoped>
    .green {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        color: #fff;
        background: #0f0;
    }
</style>
