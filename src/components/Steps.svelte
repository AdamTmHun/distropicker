<script lang="ts">
    export let step: number;
    const notPassed = "step transition-300"
    const passed = "step step-primary duration-300"
</script>

<ul class="steps hidden lg:grid mt-4 durat">
        <li class={step >= 1 ? passed : notPassed}>Usecase</li>
        <li class={step >= 2 ? passed : notPassed}>Knowledge of Linux</li>
        <li class={step >= 3 ? passed : notPassed}>Installation Tweaks</li>
        <li class={step >= 4 ? passed : notPassed}>Hardware</li>
        <li class={step >= 5 ? passed : notPassed}>Community</li>
        <li class={step >= 6 ? passed : notPassed}>User Experience</li>
        <li class={step >= 7 ? passed : notPassed}>Costs</li>
        <li class={step >= 8 ? passed : notPassed}>Distro Scope</li>
        <li class={step >= 9 ? passed : notPassed}>Applications</li>
        <li class={step >= 10 ? passed : notPassed}>Software Update</li>
</ul>