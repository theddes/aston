import StoryblokClient from 'storyblok-js-client'

const api = new StoryblokClient({
  accessToken: process.env.VUE_APP_ACCESS_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

// If the Storyblok Bridge is enabled we
// override the `api.get()` method to always
// fetch the `draft` version from the API, we
// need this functionality for the Visual Editor.
if (process.env.VUE_APP_STORYBLOK_BRIDGE === 'true') {
  api.get = function get (slug, params) {
    return StoryblokClient.prototype.get.call(this, slug, { ...params, version: 'draft' })
  }
}

export default api
