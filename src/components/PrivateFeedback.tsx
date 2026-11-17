import { useState } from 'react'
import { MessageSquareHeart, Star, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const copy = {
  it: { title: 'Feedback privato sul soggiorno', intro: 'Il tuo messaggio sarà inviato privatamente all’host e non verrà pubblicato.', apt: 'Appartamento', rating: 'Com’è stato il soggiorno? (facoltativo)', close: 'Chiudi il modulo feedback', good: 'Cosa ti è piaciuto?', improve: 'Cosa potremmo migliorare?', name: 'Nome (facoltativo)', email: 'Email (facoltativa, solo per ricontattarti)', send: 'Invia feedback', success: 'Grazie! Il tuo feedback è stato inviato privatamente.', dev: 'Modalità sviluppo: feedback simulato, nessuna email inviata.', error: 'Invio non riuscito. Riprova più tardi.', privacy: 'Il feedback viene inviato via email all’host per migliorare il soggiorno. Non viene mostrato sul sito.' },
  en: { title: 'Private stay feedback', intro: 'Your message goes privately to the host and will not be published.', apt: 'Apartment', rating: 'How was your stay? (optional)', close: 'Close feedback form', good: 'What did you enjoy?', improve: 'What could we improve?', name: 'Name (optional)', email: 'Email (optional, only if you’d like a reply)', send: 'Send feedback', success: 'Thank you! Your feedback was sent privately.', dev: 'Development mode: feedback simulated; no email was sent.', error: 'Could not send feedback. Please try again later.', privacy: 'Feedback is emailed to the host to improve the stay. It is not shown on this website.' },
  fr: { title: 'Votre avis privé sur le séjour', intro: 'Votre message est envoyé en privé à l’hôte et ne sera pas publié.', apt: 'Appartement', rating: 'Comment était votre séjour ? (facultatif)', close: 'Fermer le formulaire d’avis', good: 'Qu’avez-vous apprécié ?', improve: 'Que pouvons-nous améliorer ?', name: 'Nom (facultatif)', email: 'E-mail (facultatif, uniquement pour une réponse)', send: 'Envoyer', success: 'Merci ! Votre avis a été envoyé en privé.', dev: 'Mode développement : avis simulé, aucun e-mail envoyé.', error: 'Envoi impossible. Réessayez plus tard.', privacy: 'Votre avis est envoyé par e-mail à l’hôte pour améliorer le séjour. Il ne sera pas affiché sur le site.' },
  de: { title: 'Privates Feedback zum Aufenthalt', intro: 'Deine Nachricht geht privat an die Gastgeberin und wird nicht veröffentlicht.', apt: 'Apartment', rating: 'Wie war dein Aufenthalt? (optional)', close: 'Feedbackformular schließen', good: 'Was hat dir gefallen?', improve: 'Was können wir verbessern?', name: 'Name (optional)', email: 'E-Mail (optional, nur für eine Antwort)', send: 'Feedback senden', success: 'Vielen Dank! Dein Feedback wurde privat gesendet.', dev: 'Entwicklungsmodus: Feedback simuliert; keine E-Mail gesendet.', error: 'Feedback konnte nicht gesendet werden. Bitte später erneut versuchen.', privacy: 'Das Feedback wird per E-Mail an die Gastgeberin gesendet, um den Aufenthalt zu verbessern. Es wird nicht auf der Website angezeigt.' },
  es: { title: 'Opinión privada sobre la estancia', intro: 'Tu mensaje se enviará en privado a la anfitriona y no se publicará.', apt: 'Apartamento', rating: '¿Qué tal fue tu estancia? (opcional)', close: 'Cerrar el formulario de opinión', good: '¿Qué te gustó?', improve: '¿Qué podríamos mejorar?', name: 'Nombre (opcional)', email: 'Correo (opcional, solo si quieres respuesta)', send: 'Enviar opinión', success: '¡Gracias! Tu opinión se ha enviado de forma privada.', dev: 'Modo de desarrollo: opinión simulada; no se envió ningún correo.', error: 'No se pudo enviar. Inténtalo de nuevo más tarde.', privacy: 'La opinión se envía por correo a la anfitriona para mejorar la estancia. No se muestra en esta web.' },
} as const

export function PrivateFeedback() {
  const { language } = useLanguage()
  const t = copy[language]
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [rating, setRating] = useState(0)

  function closeForm() {
    setOpen(false)
    setSent(false)
    setError('')
    setRating(0)
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError('')
    const form = new FormData(event.currentTarget)
    try {
      const response = await fetch('/api/feedback', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(form)) })
      if (!response.ok) throw new Error('feedback_failed')
      const result = await response.json()
      if (result.dev) setError(t.dev)
      else setSent(true)
    } catch {
      setError(t.error)
    } finally {
      setBusy(false)
    }
  }

  return <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800">
    {!open ? <button onClick={() => setOpen(true)} className="flex items-center gap-2 text-amber-300 hover:text-amber-200 font-medium" type="button"><MessageSquareHeart className="w-5 h-5" />{t.title}</button> : <>
      <div className="flex items-start justify-between gap-4">
        <div>{sent ? <p role="status" className="text-emerald-300">{t.success}</p> : <><h3 className="text-xl font-serif font-bold text-white">{t.title}</h3><p className="mt-2 text-sm text-stone-300">{t.intro}</p></>}</div>
        <button type="button" onClick={closeForm} aria-label={t.close} title={t.close} className="shrink-0 rounded-lg p-2 text-stone-300 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"><X className="h-5 w-5" /></button>
      </div>
      {!sent && <>
      <form onSubmit={submit} className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-stone-300">{t.apt}<select name="apartment" className="mt-1 w-full rounded-lg bg-stone-800 p-3 text-white"><option value="La Melina su Via Po">La Melina su Via Po</option><option value="La Melina sotto la Mole">La Melina sotto la Mole</option></select></label>
        <fieldset className="text-sm text-stone-300"><legend>{t.rating}</legend><input type="hidden" name="rating" value={rating || ''} /><div role="radiogroup" aria-label={t.rating} className="mt-1 flex gap-1">{[1,2,3,4,5].map(n=><span key={n} className="relative inline-flex h-9 w-9"><Star aria-hidden="true" className="absolute inset-1 h-7 w-7 text-stone-500" /><span aria-hidden="true" className="pointer-events-none absolute inset-1 overflow-hidden" style={{ width: rating >= n ? '28px' : rating === n - 0.5 ? '14px' : '0' }}><Star className="h-7 w-7 fill-amber-400 text-amber-400" /></span>{[n-0.5,n].map(value=><button key={value} type="button" role="radio" aria-checked={rating===value} aria-label={`${value} / 5`} onClick={()=>setRating(value)} className="relative z-10 h-9 w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"><span className="sr-only">{value}</span></button>)}</span>)}</div></fieldset>
        <label className="text-sm text-stone-300">{t.good}<textarea name="liked" maxLength={2000} rows={3} className="mt-1 w-full rounded-lg bg-stone-800 p-3 text-white" /></label>
        <label className="text-sm text-stone-300">{t.improve}<textarea name="improve" maxLength={2000} rows={3} className="mt-1 w-full rounded-lg bg-stone-800 p-3 text-white" /></label>
        <label className="text-sm text-stone-300">{t.name}<input name="name" maxLength={100} className="mt-1 w-full rounded-lg bg-stone-800 p-3 text-white" /></label>
        <label className="text-sm text-stone-300">{t.email}<input name="email" type="email" maxLength={254} className="mt-1 w-full rounded-lg bg-stone-800 p-3 text-white" /></label>
        <p className="sm:col-span-2 text-xs text-stone-400">{t.privacy}</p>{error && <p role="alert" className="text-rose-300">{error}</p>}
        <button disabled={busy} className="sm:col-span-2 justify-self-start rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">{busy ? '…' : t.send}</button>
      </form>
      </>}
    </>}
    {sent && error && <p role="status" className="mt-2 text-amber-300">{error}</p>}
  </div>
}
