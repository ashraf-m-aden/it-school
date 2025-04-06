<template>
  <div>
    <!-- Start 404 Error Area -->
    <section class="error-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h3>404 - Page inexistante</h3>
          <p>
            La page que vous cherchez est soit inexistante soit temporairement
            indisponible.
          </p>
          <a href="/" class="btn btn-primary">Aller à l'acceuil</a>
        </div>
      </div>
    </section>
    <!-- End 404 Error Area -->
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: 'OOPS 404 - IT+ CODE LAB',
  meta: [
    { name: 'description', content: 'OOPS 404 | Code Lab | Cours et Formations en informatique à Djibouti' }
  ]
})
</script>
