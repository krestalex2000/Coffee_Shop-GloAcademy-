<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      
      <nav-item-component 
        :link="links.header.link"
        classLink="header__item"
      >
        <img 
          :src="require(`@/assets/logo/${links.header.icon}`)" 
          :alt="links.header.icon" 
        />
      </nav-item-component>

      <nav-item-component
        v-for="link in links.other"
        :key="link.id"
        classLink="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import NavItemComponent from "./NavItemComponent.vue";

export default {
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        other: [
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
      },
    };
  },
  components: { NavItemComponent },
};
</script>