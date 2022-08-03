<script lang="ts">
    import "../app.css"
    import Navbar from "../components/Navbar.svelte"
    import Footer from "../components/Footer.svelte"
    

</script>
<div >
    <Navbar/>
    <div class="">
<slot />
<Footer />
 </div>
</div>


