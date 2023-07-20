<script>
  export let projects = [
    {
      title: "School project that helps students in choosing a profession",
      link: "http://schooleduguide.tilda.ws/"
    },
    {
      title: "InnoBookingBot",
      link: "https://example.com/inno-booking-bot"
    },
    {
      title: "Design for a web-app",
      link: "https://example.com/web-app-design"
    }
  ];
</script>

<Head>
  <title>My Portfolio Page</title>
  <meta name="description" content="This is the portfolio page of my personal website." />
</Head>

<section id="portfolio">
    
    <div id="portText">
        <h1>Portfolio</h1>
        <ul>
        {#each projects as project}
            <li class="project1">{project.title} - <a href="{project.link}">Visit project</a></li>
        {/each}
        </ul>
    </div>
 
</section>
