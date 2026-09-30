# Contributing

## Entry format
- **Paper**: `- Title (why it matters, optional): [Link](url)`, plus `[File](path)` if a copy is in `library/papers/`.
- **Dataset**: add a row to `datasets/README.md` with data, task and size, and a note in `datasets/mars/` or `datasets/moon/`.
- **Tool**: add a row to `docs/tools/README.md` with one line on what it is.

## Rules
- Put each item in exactly one topic section; add it to the topic map in `README.md` if you create a section.
- Prefer stable links (arXiv abs, DOI, official agency pages).
- PDFs go in `library/` named `Author_Year_Title.pdf`. Only add papers you are allowed to redistribute, and keep files small (under about 10 MB).
- Run a link check before opening a PR (the CI does it weekly).
