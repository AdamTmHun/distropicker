export enum Community {
    VERY_GOOD = "Very Good",
    GOOD = "Good",
    FINE = "Fine",
    POOR = "Poor"
}

export default [
    {
        info: {
            name: "Arch Linux",
            logoURL: "/img/distros/archlinux.png",
            description: "A lightweight and flexible Linux distribution that tries to Keep It Simple.",
            website: "https://archlinux.org/",
        },
        preferences: {
            community: Community.VERY_GOOD,
            
        }
    }
]