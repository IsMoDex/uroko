import { describe, expect, it } from 'vitest';
import { DEFAULT_BRAND } from '@/lib/brand/brand-config';

describe('DEFAULT_BRAND (single-brand build)', () => {
  it('uses the original product identity for full chrome', () => {
    expect(DEFAULT_BRAND.productName).toBe('Uroko');
    expect(DEFAULT_BRAND.shortName).toBe('Uroko');
    expect(DEFAULT_BRAND.markSrc).toBe('/uroko-mark.svg');
    expect(DEFAULT_BRAND.themeColor).toBe('#0f766e');
  });

  it('marks its horizontal logo as already containing the wordmark', () => {
    expect(DEFAULT_BRAND.logoHasWordmark).toBe(true);
    expect(DEFAULT_BRAND.logoSrc).toBe('/uroko-logo.svg');
  });
});
