import { createVercelEdgeHandler } from '@analogjs/platform/vercel';

export default createVercelEdgeHandler({
  onError(error) {
    console.error('SSR error:', error);
    return new Response('SSR Error: ' + (error?.message || error), { status: 500 });
  },
  async onRequest(context) {
    console.log('SSR: Edge handler running!');
    // return new Response('OK', { status: 200 }); // décommente pour voir une page "OK"
  }
});
