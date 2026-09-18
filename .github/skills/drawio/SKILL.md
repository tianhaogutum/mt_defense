---
name: drawio
description: 'Create, edit, review, and export draw.io / diagrams.net diagrams. Use for diagram XML, flowcharts, UML, architecture diagrams, markdown-embedded diagrams, and converting diagrams into files for documents or slides.'
argument-hint: 'Optional: diagram type or task, for example "flowchart", "UML", or "edit an existing .drawio file"'
user-invocable: true
---

# Draw.io Skill

## When to Use
- Create new diagrams in draw.io / diagrams.net format.
- Edit existing `.drawio` or `.xml` diagram files.
- Review diagram structure, layout, labels, and connections.
- Convert rough requirements into flowcharts, sequence diagrams, UML, architecture diagrams, or decision trees.
- Prepare diagrams for insertion into slides, docs, or README files.

## Workflow
1. Determine the diagram goal, target audience, and output format.
2. If an existing diagram file is present, inspect the current structure before changing it.
3. Keep node names short and labels explicit.
4. Prefer a clear left-to-right or top-to-bottom layout unless the content demands another direction.
5. Minimize crossing edges and group related nodes with containers or swimlanes when useful.
6. Use consistent shapes and colors for the same semantic role.
7. If the diagram must be reused elsewhere, keep the source editable and export only at the end.

## Practical Rules
- Preserve valid draw.io XML structure when editing by hand.
- Avoid overcomplicated styling unless the user explicitly wants a polished presentation diagram.
- Use one diagram element per concept; do not overload a single box with multiple responsibilities.
- When converting from text, prefer a faithful first draft over aggressive visual embellishment.
- If the diagram will be embedded in HTML or markdown, keep the source file alongside any exported artifact.

## Output Expectations
- For new diagrams, produce a clean, editable draw.io source.
- For edits, change only the requested parts unless the layout is clearly broken.
- For reviews, point out clarity issues, missing labels, ambiguous arrows, and layout problems.
