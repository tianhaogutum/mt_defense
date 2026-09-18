---
name: drawio-replicate
description: 'Replicate uploaded images, screenshots, or reference diagrams as editable draw.io / diagrams.net XML. Use when converting a picture into a structured .drawio diagram rather than producing a flattened image.'
argument-hint: 'Optional: target diagram style or source type, for example "screenshot", "scientific figure", or "reference diagram"'
user-invocable: true
---

# Draw.io Replication Skill

## When to Use
- Recreate a screenshot, photo of a diagram, or reference figure as editable draw.io XML.
- Turn a static visual into a structured diagram with boxes, labels, connectors, and grouping.
- Replicate the layout and visual hierarchy of an existing figure while keeping it editable.
- Prepare a diagram for later export to PNG, SVG, PDF, or reuse in slides and docs.

## Workflow
1. Identify the source image type and the intended fidelity level.
2. Break the picture into its structural components first: containers, labels, icons, arrows, callouts, and grouping.
3. Rebuild the diagram with native draw.io primitives instead of flattening the image.
4. Preserve the figure's reading order and visual hierarchy.
5. Prefer clean alignment, consistent spacing, and explicit labels over decorative complexity.
6. If the source includes multiple regions or panels, recreate them as separate grouped sections.
7. Keep the output editable as .drawio XML so it can be refined later.

## Practical Rules
- Treat the source image as a reference, not as the final artifact.
- Use the minimum number of shapes needed to preserve meaning.
- Do not merge unrelated concepts into a single box.
- If the original has weak clarity, improve the diagram while keeping the intended structure.
- Use orthogonal connectors when possible for technical or scientific figures.
- Keep text concise so the replicated diagram remains readable at draw.io scale.

## Output Expectations
- Return a clean editable .drawio representation.
- Preserve important labels, arrows, and panel boundaries.
- When exact pixel matching is not practical, prioritize semantic fidelity and editability.

## References
- This skill follows replicate-style workflows used by online draw.io skill packages for screenshot and figure reconstruction.
