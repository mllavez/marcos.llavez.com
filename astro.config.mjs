import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: true,
        }),
    ],
    site: "https://malexanderlvz.github.io",
    image: {
        service: passthroughImageService(),
    },
});
