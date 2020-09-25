<template>
  <div class="menu">
    <div class="menu__ctn">
      <ul class="menu__list">
        <li class="menu__item">
          <router-link to="/" class="menu__link">Home</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/acoes" class="menu__link">Ações</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/portfolio" class="menu__link"
            >Portfólio</router-link
          >
        </li>
      </ul>
      <div class="menu__wrap">
        <button class="menu__btn">Finalizar dia</button>
        <button class="menu__btn">Salvar e carregar</button>
        <strong class="menu__balance"> <span>Saldo: </span>R$ 0000 </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.menu {
    padding: 20px;
}

.menu__ctn {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.menu__list {
    list-style-type: none;
    display: flex;
    align-items: center;
    padding-left: 0;
}

.menu__item {
    &:not(llast-child) {
        margin-right: 20px;
    }
}

.menu__link {
    text-decoration: none;
    color: #2b2b2b;

    &:hover {
        text-decoration: underline;
    }

    &.router-link-exact-active {
        font-weight: 600;
        text-decoration: underline;
    }
}

.menu__btn {
  border-radius: 10px;
  padding: 6px 15px;
  background-color: #fff;
  color: #2b2b2b;
  border: 1px solid #2b2b2b;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #2b2b2b;
  }

  .menu__balance span {
    font-weight: 400;
  }
}
</style>
