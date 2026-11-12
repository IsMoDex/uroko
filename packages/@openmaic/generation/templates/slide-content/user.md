# Generation Requirements

## Scene Information

- **Title**: {{title}}
- **Description**: {{description}}
- **Key Points**:
  {{keyPoints}}

{{teacherContext}}

{{#if design}}## Design Brief

How this page should look, as a designer specified it. Follow it for the composition, palette and placement of the content above. It is direction, not page text: take every word on the page from the Scene Information. Where it conflicts with the canvas size or the layout rules, those rules win.

{{design}}

{{/if}}## Available Resources

{{#if mediaElementEnabled}}
- **Available Media**: {{assignedImages}}
{{/if}}
- **Canvas Size**: {{canvas_width}} × {{canvas_height}} px

## Output Requirements

Based on the scene information above, generate a complete Canvas/PPT component for one page.

## Language Directive
{{languageDirective}}

**Must Follow**:

1. Output pure JSON directly, without any explanation or description
2. Do not wrap with ```json code blocks
3. Do not add any text before or after the JSON
4. Ensure the JSON format is correct and can be parsed directly
{{#if imageElementEnabled}}
- Use only the provided image IDs (for example, `img_1`) for source image `src` fields
{{/if}}
{{#if generatedVideoEnabled}}
- Use only the provided generated video media refs for video `mediaRef` fields
{{/if}}
5. All TextElement `height` values must be selected from the quick reference table in the system prompt
6. Layout quality is more important than fitting all information on one page: use concise labels and let speaker actions carry the explanation. Reserve a title band, keep large clear gaps, and never allow a title, card, image, chart or table to overlap another unrelated element. If the material needs more room, simplify the slide rather than reducing readability.
7. Use images from the Available Media when they directly support the scene. If no relevant image is available, use a clean diagram, chart or shape composition instead of inventing an external URL.

**Output Structure Example**:
{"background":{"type":"solid","color":"#ffffff"},"elements":[{"id":"title_001","type":"text","left":60,"top":50,"width":880,"height":76,"content":"<p style=\"font-size:32px;\"><strong>Title Content</strong></p>","defaultFontName":"","defaultColor":"#333333"},{"id":"content_001","type":"text","left":60,"top":150,"width":880,"height":130,"content":"<p style=\"font-size:18px;\">• Point One</p><p style=\"font-size:18px;\">• Point Two</p><p style=\"font-size:18px;\">• Point Three</p>","defaultFontName":"","defaultColor":"#333333"}]}
