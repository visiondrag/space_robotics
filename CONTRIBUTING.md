# Contributing

## Entry format
- **Paper**: `- Title (why it matters, optional): [Link](url) - [Code](https://github.com/...) · *Venue Year*`. Add `[Code]` only when the paper or authors link a repository, and the venue only when an official source states it (leave it off for preprints). Add `[File](path)` if a copy is in `library/papers/`.
- **Dataset**: add a row to `datasets/README.md` with data, task and size, and a note in `datasets/mars/` or `datasets/moon/`.
- **Tool**: add a row to `docs/tools/README.md` with one line on what it is.

## Rules
- Put each item in exactly one topic section; add it to the topic map in `README.md` if you create a section.
- Prefer stable links (arXiv abs, DOI, official agency pages).
- PDFs go in `library/` named `Author_Year_Title.pdf`. Only add papers you are allowed to redistribute (arXiv and open access are fine; IEEE/Elsevier/Springer papers are link-only), and keep files small (under about 10 MB).
- Run a link check before opening a PR (the CI does it weekly).
