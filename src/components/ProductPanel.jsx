export default function ProductPanel() {
  return (
    <section className="product-panel" aria-label="Product overview">
      <p className="eyebrow">Secure workspace</p>
      <h1>Keep your team workflow moving with clarity.</h1>
      <p className="panel-copy">
        Track tasks, handoffs, and progress in one place without losing momentum.
      </p>
      <ul className="highlights" aria-label="Workflow highlights">
        <li>Track work in one place</li>
        <li>Faster team handoff</li>
        <li>Real-time visibility</li>
      </ul>
      <div className="status-block" aria-hidden="true">
        <span>Live updates</span>
        <strong>12 tasks moved today</strong>
      </div>
    </section>
  )
}
