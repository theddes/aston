const PREVIEW_TOKEN = '36rgAXex788nHZqar8KPmQtt'
const PUBLIC_TOKEN = 'WQJlrFnkaCjvDVZ8gaUj2wtt'

process.env.VUE_APP_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE ? PREVIEW_TOKEN : PUBLIC_TOKEN
process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE

module.exports = {
  pwa: {
    name: 'Aston'
  }
}
