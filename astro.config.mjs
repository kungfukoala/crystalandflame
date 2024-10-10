import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind({
        applyBaseStyles: false
    }), mdx()],
    output: 'hybrid',
    adapter: netlify()
});