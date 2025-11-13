<script>
  import { page } from "$app/state";

  

  const href = page.url.href;
  

  // jy kan later jou Google Play skakel hier invoeg
  const playLink = "https://play.google.com/store/apps/details?id=doenit.app";
  const redditLink = "https://www.reddit.com/r/Doenit";
  const githubLink = "https://github.com/tertius4/doenit";
</script>

<svelte:head>
  <title>Doenit – Afrikaanse ToDo/Taaklys App | Organiseer jou lewe eenvoudig</title>
  <meta
    name="description"
    content="Doenit is die eerste Afrikaanse ToDo/Taaklys toepassing. Organiseer jou lewe vanlyn, veilig en in jou moedertaal. Geen internet nodig, geen geraas – net jy en jou take."
  />
  <meta
    name="keywords"
    content="Doenit, Afrikaans, app, toep, toepassing, taaklys, todo, vanlyn, herhalende take, Suid-Afrika, produktiwiteit"
  />
  <meta property="og:title" content="Doenit – Afrikaanse ToDo/Taaklys App" />
  <meta
    property="og:description"
    content="Organiseer jou lewe vanlyn, veilig en in jou moedertaal. Geen internet nodig, geen geraas – net jy en jou take."
  />
  <meta property="og:image" content="{href}/../doenit-logo.webp" />
  <meta property="og:url" content={href} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Doenit – Afrikaanse ToDo/Taaklys Toepassing" />
  <meta
    name="twitter:description"
    content="Organiseer jou lewe vanlyn, veilig en in jou moedertaal. Geen internet nodig, geen geraas – net jy en jou take."
  />
  <meta name="twitter:image" content="{href}/../doenit-logo.webp" />
  <link rel="canonical" {href} />
</svelte:head>

<main class="min-h-screen bg-page text-normal font-sans">
  <!-- Hero -->
  <section class="text-center py-16 px-4">
    <img src="/../doenit-logo.webp" alt="Doenit logo" class="mx-auto mb-6 w-24 h-24" />
    <h1 class="text-4xl font-bold mb-2">Doenit – Die Afrikaanse ToDo/Taaklys toepassing</h1>
    <p class="text-lg mb-6">
      Organiseer jou lewe eenvoudig, in jou eie taal. Geen internet nodig, geen geraas — net jy en jou take.
    </p>
    <a
      href={playLink}
      target="_blank"
      rel="noopener noreferrer"
      class="bg-primary hover:bg-primary/70 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
    >
      📲 Kry dit op Google Play
    </a>
  </section>

  <!-- Features -->
  <section class="bg-surface py-12 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-2xl font-semibold mb-8">Hoekom Doenit?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <div>
          <h3 class="font-bold text-lg mb-2">🕒 Herhalende take</h3>
          <p>Stel herinnerings op vir enige tydsinterval — daagliks, weekliks of elke paar maande.</p>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">🔒 Vanlyn & veilig</h3>
          <p>Jou data bly op jou toestel, geënkripteer. Niks word aanlyn gestoor nie, tensy jy dit kies.</p>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">🧩 Maklike kategorieë</h3>
          <p>Hou werk, huis en familie take apart met eenvoudige groepering en duidelike etikette.</p>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">🎨 Lig of donker tema</h3>
          <p>Pas Doenit aan by jou styl — kies lig of donker in Instellings → Voorkoms.</p>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">👥 Binnekort</h3>
          <p>Deel take met vriende en familie. Bou saam aan doelwitte en roetines.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshots -->
  <section class="py-16 px-6 text-center">
    <h2 class="text-2xl font-semibold mb-6">Kyk hoe eenvoudig dit is</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <img src="tuisblad.webp" alt="Doenit tuisblad " loading="lazy" class="rounded-xl shadow-md w-72" />
      <img src="wysig-taak.webp" alt="Wysig taak skerm" loading="lazy" class="rounded-xl shadow-md w-72" />
      <img src="instellings.webp" alt="Doenit instellings skerm" loading="lazy" class="rounded-xl shadow-md w-72" />
    </div>
  </section>

  <!-- Open Source & Trust -->
  <section class="bg-page py-12 px-6 text-center">
    <h2 class="text-2xl font-semibold mb-4">Betroubaar en oopbron</h2>
    <p class="max-w-2xl mx-auto mb-6">
      Doenit is volledig oopbron — jy kan self die kode sien op
      <a href={githubLink} class="text-primary hover:underline">GitHub</a>. Geen data word aanlyn gestoor nie, tensy jy
      rugsteun aktiveer.
    </p>
  </section>

  <!-- Community -->
  <section class="py-12 px-6 text-center">
    <h2 class="text-2xl font-semibold mb-4">Word deel van die Doenit gemeenskap</h2>
    <p class="max-w-2xl mx-auto mb-6">
      Gesels saam oor voorstelle, nuwe idees en verbeterings by
      <a href={redditLink} class="text-primary hover:underline">r/Doenit</a>.
    </p>
  </section>

  <!-- Footer -->
  <footer class="text-center py-8 text-sm text-muted">
    © 2025 Doenit • Ontwerp deur Tertius • Gebou met liefde in Suid-Afrika 🇿🇦
  </footer>
</main>
