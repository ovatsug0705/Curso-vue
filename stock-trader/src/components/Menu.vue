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
        <div class="menu__submenu">
          <button class="menu__btn" @click="isOpen = !isOpen">
            Salvar e carregar
          </button>
          <ul class="menu__submenu-list" :class="{ active: isOpen }">
            <li class="menu__submenu-item">Salvar dados</li>
            <li class="menu__submenu-item">Carregar dados</li>
          </ul>
        </div>

        <strong class="menu__balance">
          <span>Saldo: </span>R$ {{ balance }}
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    ...mapGetters({
      balance: "getBalance"
    })
  },
  methods: {}
};
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
  &:not(:last-child) {
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

.menu__wrap {
  display: flex;
  align-items: center;
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

.menu__submenu {
  position: relative;
}

.menu__submenu-list {
  display: none;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  border: 1px solid #2b2b2b;
  border-radius: 5px;
  background-color: #fff;
  width: 100%;
  top: calc(100% + 10px);

  &.active {
    display: flex;
    flex-direction: column;
  }
}

.menu__submenu-item {
  font-size: 16px;
  padding: 8px;
  color: #2b2b2b;
  width: 100%;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #2b2b2b;
  }

  &:hover {
    background-color: #2b2b2b;
    color: #fff;
  }
}
</style>
