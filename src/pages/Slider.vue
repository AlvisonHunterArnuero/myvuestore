import { VueFlux, Transitions } from 'vue-flux';
import "vue-flux/dist/vue-flux.css";

<script>
export default {
   components: {
      'vue-flux': VueFlux
   },

   data: () => ({
      fluxOptions: {
         autoplay: true
      },
      fluxImages: [
         '../assets/bk_homepage.jpg',
         '../assets/bk_homepage.jpg',
         '../assets/bk_homepage.jpg'
      ],
      fluxTransitions: {
         transitionTurn3d: Transitions.transitionTurn3d
      }
   })
}
</script>