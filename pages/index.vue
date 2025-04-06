<template>
  <div>
    <BannerComponent />
    <BoxesArea />
    <ReseauxInformatiques />
    <Programmation />

  </div>
</template>

<script setup lang="ts">
import ReseauxInformatiques from "../components/ReseauxInformatiques.vue";
import Programmation from "../components/ProgrammationComponent.vue";
import BannerComponent from "../components/BannerComponent.vue";
import BoxesArea from "../components/BoxesArea.vue";

useHead({
  title: 'ACCUEIL - IT+ CODE LAB',
  meta: [
    { name: 'description', content: 'Bienvenue dans le meilleur centre de formation pratique en informatique à Djibouti. | Code Lab | Cours et Formations en informatique à Djibouti' }
    , { name: 'keywords', content: 'formation,Code Lab,formations,angular,vue, html, css,linux,sécurité,javascript, java, informatique,djibouti, Djibouti, programmation, réseaux, cours, Code Lab' }

  ]
})
</script>
