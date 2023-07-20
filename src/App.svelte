<Head>
  <title>My personal website</title>
  <meta name="description" content="This is my personal website." />
</Head>

<script>
  import Layout from './routes/+layout.svelte';
  import { Router, Route } from 'svelte-routing';
  import Intro from './routes/Intro.svelte';
  import Bio from './routes/Bio.svelte';
  import Portfolio from './routes/Portfolio.svelte';

  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'Bio', href: '/Bio' },
    { text: 'Portfolio', href: '/Portfolio' }
  ];
</script>

<Layout {navigationLinks}>
  <Router>
    <Route path="/" component={Intro} />
    <Route path="/bio" component={Bio} />
    <Route path="/portfolio" component={Portfolio} />
  </Router>
</Layout>
