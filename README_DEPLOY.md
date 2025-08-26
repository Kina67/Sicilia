# Deploy GitHub Pages — Sicilia

Questo repository è configurato per pubblicare automaticamente il sito su GitHub Pages.
**Non serve installare nulla sul PC.**

## Cosa fare
1. Copia questi file nel repository `Sicilia` (sovrascrivi se esistono):
   - `next.config.ts`
   - `.github/workflows/pages.yml`
2. Vai su **Settings → Pages** e imposta **Source: GitHub Actions**.
3. Fai una qualsiasi modifica e clicca **Commit changes**.
   - La Action esegue `npm ci` e `npm run build` (crea `out/`) e poi pubblica.
4. Apri `https://<TUO_UTENTE>.github.io/Sicilia/`.

> Se le immagini non si vedono, i percorsi devono essere coerenti con `basePath`.
> Con `basePath` attivo puoi usare `src="/isola-bella.jpg"` oppure senza slash `"isola-bella.jpg"`.
