# rpa-workqueue-simulator

ITA: Simulazione di un processo RPA (Robotic Process Automation) sviluppato in ambito e-commerce/logistica per il portfolio. Il robot opera su un gestionale fittizio chiamato OrderDesk e automatizza la ricerca e l'estrazione di ordini da evadere.

ENG: Simulation of an RPA (Robotic Process Automation) process developed in an e-commerce/logistics context for portfolio purposes. The robot operates on a fictional management portal called OrderDesk and automates the search and extraction of pending orders.

---

## Origine / Origin

ITA: Il progetto originale e' stato sviluppato con NICE RPA (IDE enterprise) per un cliente bancario. Non e' possibile mostrarlo per vincoli di NDA. Questa simulazione replica lo stesso flusso logico in un contesto fittizio, senza alcun dato reale.

ENG: The original project was developed with NICE RPA (enterprise IDE) for a banking client. It cannot be shared due to NDA constraints. This simulation replicates the same logical flow in a fictional context, with no real data involved.

---

## Flusso simulato / Simulated workflow

ITA:
1. Login sul portale OrderDesk - il robot compila le credenziali e accede
2. Navigazione sidebar - il robot scorre i tab e seleziona "Ricerca ordini"
3. Inserimento date - il robot imposta l'intervallo di ricerca
4. Click "Cerca" - il robot avvia la ricerca e attende il caricamento della tabella
5. Scansione righe - il robot esamina ogni riga e applica un filtro a due livelli
6. Paginazione - il robot naviga alla pagina successiva e ripete la scansione
7. Export CSV - il robot esporta gli ordini estratti

ENG:
1. Login to the OrderDesk portal - the robot fills in credentials and logs in
2. Sidebar navigation - the robot scans tabs and selects "Ricerca ordini"
3. Date input - the robot sets the search date range
4. Click "Cerca" - the robot triggers the search and waits for the table to load
5. Row scanning - the robot examines each row and applies a two-level filter
6. Pagination - the robot navigates to the next page and repeats the scan
7. CSV export - the robot exports the extracted orders

---

## Logica di estrazione / Extraction logic

ITA: Il robot estrae solo gli ordini che soddisfano entrambe le condizioni:
- Stato ordine = "Da evadere"
- Disponibilita' magazzino = "Disponibile"

Le righe con stato "Spedito" o disponibilita' "Attesa fornitore" vengono scorse e ignorate.

ENG: The robot extracts only orders meeting both conditions:
- Order status = "Da evadere" (pending fulfillment)
- Warehouse availability = "Disponibile" (available)

Rows with status "Spedito" (shipped) or availability "Attesa fornitore" (awaiting supplier) are scanned and skipped.

---

## Stack tecnico / Tech stack

- Next.js 15 App Router
- TypeScript
- React Context API
- Vercel

---

## Note tecniche / Technical notes

ITA:
- Le date di ricerca sono statiche. Nel progetto reale venivano calcolate dinamicamente dal robot a runtime.
- Le credenziali del robot sono in un file di costanti. Nel progetto reale erano in variabili d'ambiente.
- La schermata di login e' un overlay sulla dashboard, non una route separata. Questa scelta e' necessaria per mantenere il context React attivo durante tutta l'animazione.
- Il gestionale non e' responsive per scelta: i gestionali enterprise sono progettati esclusivamente per desktop.

ENG:
- Search dates are static. In the real project they were calculated dynamically by the robot at runtime.
- Robot credentials are stored in a constants file. In the real project they were environment variables.
- The login screen is an overlay on the dashboard, not a separate route. This is necessary to keep the React context alive throughout the animation.
- The portal is intentionally not responsive: enterprise management systems are designed exclusively for desktop use.

---

## Demo

ITA: link disponibile dopo il deploy
ENG: link available after deployment