<script context="module" lang="ts">
    //@ts-ignore
  export function load({ error, status }) {
      return {
          props: {
              message: error.message,
              status, // same as status: status
            error,
            }
      };
  }
</script>

<script lang="ts">
  import ErrorScreen from '../components/screens/Error.svelte'; // your own Error screen component
  import NotFoundScreen from '../components/screens/404.svelte'; // your own 404 screen component

  export let message: string;
  export let status: number;
</script>

{#if status == 404} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <NotFoundScreen />
{:else}
  <ErrorScreen {message} {status}/>
{/if}