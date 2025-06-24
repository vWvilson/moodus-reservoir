import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"yn1x4ymu","dataset":"production","useCdn":false,"stega":{"studioUrl":"\u002Fadmin"}}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
