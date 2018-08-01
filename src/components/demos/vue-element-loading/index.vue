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
    <div class="my-sub-title pd-30px"># Cryptocurrencies</div>
    <infinite-slide-bar>
      <div class="columns">
        <div class="column" v-for="coin in coins" :key="coin.key">
          <div class="f-left pd-t-8px mg-r-10px">
            <img :src="`/static/vue-infinite-slide-bar/crypto/${coin.key}.png`">
          </div>
          <div class="f-left">
            <div class="f-w-bold">{{coin.name}}</div>
            <div>{{coin.price}}
              <span :class="{ 'cl-success': coin.change > 0, 'cl-danger': coin.change < 0 }">({{coin.change}}%)</span>
            </div>
          </div>
        </div>
      </div>
    </infinite-slide-bar>
    <div class="f-left w-100pct pd-30px">
      <highlight language="html" class="highlight">
      {{ templateCode.crypto.html }}
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
        },
        crypto: {
          html: `<infinite-slide-bar>
      <div class="columns">
        <div class="column" v-for="coin in coins" :key="coin.key">
          <div class="f-left pd-t-8px mg-r-10px">
            <img :src="'/static/vue-infinite-slide-bar/crypto/' + coin.key + '.png'">
          </div>
          <div class="f-left">
            <div class="f-w-bold">{{coin.name}}</div>
            <div>
              {{coin.price}}
              <span :class="{ 'cl-success': coin.change > 0, 'cl-danger': coin.change < 0 }">({{coin.change}}%)</span>
            </div>
          </div>
        </div>
      </div>
    </infinite-slide-bar>`
        }
      },
      coins: [
        {
          key: 'btc',
          name: 'Bitcoin',
          price: '$7,704',
          change: 1.29
        },
        {
          key: 'eth',
          name: 'Ethereum',
          price: '$612',
          change: 1.04
        },
        {
          key: 'xrp',
          name: 'Ripple',
          price: '$0.67',
          change: -0.24
        },
        {
          key: 'eos',
          name: 'EOS',
          price: '$13.91',
          change: -0.83
        },
        {
          key: 'ltc',
          name: 'Litecoin',
          price: '$122.31',
          change: 1.07
        }
      ]
    }
  },
  components: { InfiniteSlideBar }
}
</script>
