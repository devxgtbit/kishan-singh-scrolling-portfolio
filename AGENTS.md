<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- LOVABLE:BEGIN:project-rules -->
- Portfolio lives as one scrolling route at `/` (`src/routes/index.tsx`) composed from `src/components/portfolio/*`; all page copy is data-driven from `src/data/portfolio.ts` — edit content there, not in components.
- Scroll animations use `motion/react` (motion package); CSS marquees/floats are Tailwind v4 theme animations defined in `src/styles.css`. Keep the maximalist token palette (paper/ink/lime/magenta/orange) — never hardcode colors in components.
<!-- LOVABLE:END:project-rules -->
