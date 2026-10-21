# Verification

## Faster headline revision

- Removed the word entrance animation and wrappers from the static hero lines.
- Changing words allow visible overflow, avoiding clipped descenders.
- Only timing values changed in the interaction effect: transitions are 100ms with a 10ms letter stagger, completing in 200ms. The blur, opacity, translation, width measurement, and easing values are retained.
- Actual hover, leave, focus, blur, click, and Escape handlers were executed with a minimal DOM substitute. No runtime errors occurred; the alternate state and accessible pressed state followed each interaction.
- Removed an obsolete callback left from the old animation.
- HTML nesting, timing bounds, effect preservation, and ZIP integrity were checked. These are source/handler checks, not rendered browser verification.

## Word-only hover trigger

Pointer enter/leave handlers are attached only to the two changing words. Static headline text does not receive pointer events. Mouse clicks do not pin the alternate state; keyboard focus and touch toggles remain. The actual event handlers were exercised with a minimal DOM substitute to verify scope, reset, keyboard focus, and touch. Animation timing and effects are unchanged.
