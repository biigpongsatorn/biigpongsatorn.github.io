<template>
  <div class="f-left w-100pct">
    <div class="my-sub-title pd-hrzt-30px"># Simple</div>
    <infinite-slide-bar :barStyle="{ background: '#fff7cc', padding: '5px 0' }">
      <span style="color: #f60;">Your time is limited, so don't waste it living someone else's life.</span>
    </infinite-slide-bar>
    <div class="f-left w-100pct pd-hrzt-30px">
      <highlight language="html" class="highlight">
      {{ templateCode.simple.html }}
      </highlight>
    </div>
    <div class="my-sub-title pd-hrzt-30px"># Props usage</div>
    <infinite-slide-bar :barStyle="{ background: '#fff7cc', padding: '5px 0' }" duration="8s" direction="reverse" delay="5s">
      <span style="color: #f60;">Your time is limited, so don't waste it living someone else's life.</span>
    </infinite-slide-bar>
    <div class="f-left w-100pct pd-hrzt-30px">
      <highlight language="html" class="highlight">
      {{ templateCode.props.html }}
      </highlight>
    </div>
  </div>
</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'
export default {
  data () {
    return {
      templateCode: {
        simple: {
          html: `<infinite-slide-bar :barStyle="{ background: '#fff7cc', padding: '5px 0' }">
      <span style="color: #f60;">Your time is limited, so don't waste it living someone else's life.</span>
    </infinite-slide-bar>`
        },
        props: {
          html: `<infinite-slide-bar duration="8s" direction="reverse" delay="5s" :barStyle="{ background: '#fff7cc', padding: '5px 0' }">
      <span style="color: #f60;">Your time is limited, so don't waste it living someone else's life.</span>
    </infinite-slide-bar>`
        }
      }
    }
  },
  components: { InfiniteSlideBar }
}
</script>
