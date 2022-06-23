import { writable } from "svelte/store";

export const answers = writable(
    {
        daily: 0,
        gaming: 0,
        anonimity: 0,
        server: 0,
        isolating: 0,
        liveMode: 0,
        knowledgeRequired: 0,
        installationCustomization: 0,
        cpu: 0,
        hardware: 0,
        userbase: 0,
        price: 0,
        defaultApps: 0,
        installApps: 0,
        updates: 0,
    }
)