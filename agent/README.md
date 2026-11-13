# Noor: the voice concierge

Noor runs on **ElevenLabs Agents** (agent ID `agent_7001m7aymmpaejgvxjavbj8e48dm`). The website starts a voice session with `@elevenlabs/client` and gives Noor three **client tools**, defined in `src/main.js` → `initVoice()`:

| Tool | What it does on the page |
|---|---|
| `apply_discount({percent, reason})` | Adds a voice discount to the bag. The page only accepts **5 to 10%**, and only once per shopper, whatever the agent asks for. |
| `show_on_site({section})` | Smooth-scrolls to collections, craft, shop the look, new in, makers, outfit finder, journal, or opens the bag. |
| `get_bag()` | Returns the bag contents, subtotal, the discount applied, and how many hidden threads were found. |

Her prompt tells her to negotiate lightly (start at 5%, go up to 10% for a real reason), to mention the hidden-threads hunt (15%), and to give one hint at a time.

To use your own agent, create one in ElevenLabs with the same three client tools and replace `NOOR_AGENT_ID` in `src/main.js`. In ElevenLabs → Agent → Security, you can restrict the agent to your domain (allowed hosts).
