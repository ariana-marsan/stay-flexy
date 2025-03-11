

export default function Layout(props) {

    const { children } = props;

    const header = (
        <header className="header">
            <h1>Stay <strong className="flexy">Flexy!</strong></h1>
            <p><strong>A simple guide to becoming more <span className="accentuate">flexible</span> and <span className="strong">strong</span></strong></p>
        </header>
    )

    const footer = (
        <footer className="footer">
            <div>
            <p>©2025.</p>
            <p>Stay Flexy!</p>
            </div><div>
            <p className="hasAnA">Built by <a target="_blank" href="https://portfolio-ariana-marsan.netlify.app/">Ariana Marsan</a></p>
            <p> All Rights Reserved</p>
            </div>
        </footer>
    )

  return (
    <>
    {header}
    {children}
    {footer}
    </>
  );
}