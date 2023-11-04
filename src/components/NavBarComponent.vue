<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <router-link :to="links[0].link">
          <img :src="require(`@/assets/logo/${links[0].icon}`)" alt="logo" />
        </router-link>
      </li>
      <li class="header__item">
        <nav-link-component 
          :link="links[1].link" 
          :text="links[1].text" 
        />
      </li>
      <li class="header__item">
        <nav-link-component 
          :link="links[2].link" 
          :text="links[2].text" 
        />
      </li>
      <li class="header__item">
        <nav-link-component 
          :link="links[3].link" 
          :text="links[3].text" 
        />
      </li>
    </ul>
  </header>
</template>

<script>
import NavLinkComponent from "./NavLinkComponent.vue";

export default {
  data() {
    return {
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: 1,
          text: "Our coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/goodspage",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contacts",
        },
      ],
    };
  },
  components: { NavLinkComponent },
};
</script>