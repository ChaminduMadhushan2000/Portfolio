export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-secondary">
          Built with passion &middot;{" "}
          <span className="font-medium text-text-primary">ChaminduCode</span>
        </p>
        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn"].map((link) => (
            <a
              key={link}
              href={
                link === "GitHub"
                  ? "https://github.com/ChaminduMadhushan2000"
                  : "https://www.linkedin.com/in/chamindu-madhushan/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
